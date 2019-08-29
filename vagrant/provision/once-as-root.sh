#!/usr/bin/env bash

#== Import script args ==

timezone=$(echo "$1")

#== Bash helpers ==

function info {
  echo " "
  echo "--> $1"
  echo " "
}

#== Provision script ==

info "Provision-script user: `whoami`"

export DEBIAN_FRONTEND=noninteractive

info "Adding EPEL repos"
yum update -y
yum install epel-release yum-utils -y
yum install http://rpms.remirepo.net/enterprise/remi-release-7.rpm -y
yum update -y

info "Update OS software"
yum upgrade -y

info "Install additional software (php and nginx)"
yum-config-manager --enable remi-php73
yum install php php-common php-opcache php-mcrypt php-cli php-gd php-curl php-mysqlnd php-xml php-mbstring php-intl php-fpm php-zip unzip nginx -y

info "Configure NGINX"
sed -i 's/.*user nginx/user vagrant/g' /etc/nginx/nginx.conf
echo "Done!"

info "Configure PHP-FPM"
sed -i 's/user = apache/user = vagrant/g' /etc/php-fpm.d/www.conf
sed -i 's/group = apache/group = vagrant/g' /etc/php-fpm.d/www.conf
sed -i 's/owner = apache/owner = vagrant/g' /etc/php-fpm.d/www.conf
sed -i 's/listen = 127.0.0.1:9000/listen = \/var\/run\/php-fpm\/php-fpm.sock/g' /etc/php-fpm.d/www.conf
sed -i 's/;listen.owner = nobody/listen.owner = vagrant/g' /etc/php-fpm.d/www.conf
sed -i 's/;listen.group = nobody/listen.group = vagrant/g' /etc/php-fpm.d/www.conf
sed -i 's/listen.owner = nobody/listen.owner = vagrant/g' /etc/php-fpm.d/www.conf
sed -i 's/listen.group = nobody/listen.group = vagrant/g' /etc/php-fpm.d/www.conf
systemctl enable php-fpm
echo "Done!"

info "Install composer"
curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

chown vagrant:vagrant /var/lib/php -R

info "Enabling site configuration"
ln -s /app/vagrant/nginx/app.conf /etc/nginx/conf.d/app.conf
echo "Done!"

info "Disabling SElinux"
setenforce 0
sed -i 's/SELINUX=enforcing/SELINUX=disabled/g' /etc/sysconfig/selinux

info "Change owners"
chown vagrant:vagrant /var/lib/nginx -R
