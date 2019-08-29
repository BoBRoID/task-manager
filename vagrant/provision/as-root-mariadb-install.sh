#!/usr/bin/env bash

#== Bash helpers ==

function info {
  echo " "
  echo "--> $1"
  echo " "
}

#== Provision script ==

info "Provision-script user: `whoami`"

cat > /etc/yum.repos.d/MariaDB.repo <<EOL
[mariadb]
name = MariaDB
baseurl = http://yum.mariadb.org/10.3/centos7-amd64
gpgkey=https://yum.mariadb.org/RPM-GPG-KEY-MariaDB
gpgcheck=1
EOL

yum update
yum install MariaDB-server expect -y

info "Configure MySQL"
service mysql restart
SECURE_MYSQL=$(expect -c "
set timeout 10
spawn mysql_secure_installation
expect \"Enter current password for root (enter for none):\"
send \"\r\"
expect \"Change the root password?\"
send \"n\r\"
expect \"Remove anonymous users?\"
send \"y\r\"
expect \"Disallow root login remotely?\"
send \"n\r\"
expect \"Remove test database and access to it?\"
send \"y\r\"
expect \"Reload privilege tables now?\"
send \"y\r\"
expect eof
")

echo "$SECURE_MYSQL"
yum remove expect -y
systemctl enable mariadb

sed -i "s/.*bind-address.*/bind-address = 0.0.0.0/" /etc/my.cnf.d/server.cnf
mysql -uroot <<< "CREATE USER 'root'@'%' IDENTIFIED BY ''"
mysql -uroot <<< "CREATE USER 'task_manager_user'@'%' IDENTIFIED BY 'M@n@g3S0m30fMyT@sks'"
mysql -uroot <<< "GRANT ALL PRIVILEGES ON *.* TO 'root'@'%'"
mysql -uroot <<< "GRANT ALL PRIVILEGES ON *.* TO 'task_manager_user'@'%'"
mysql -uroot <<< "DROP USER 'root'@'localhost'"
mysql -uroot <<< "FLUSH PRIVILEGES"
echo "Done!"

info "Initailize databases for MySQL"
mysql -uroot <<< "CREATE DATABASE taskmanager"
echo "Done!"
