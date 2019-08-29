require 'yaml'
require 'fileutils'

required_plugins = %w( vagrant-hostmanager vagrant-vbguest vagrant-bindfs )
required_plugins.each do |plugin|
    exec "vagrant plugin install #{plugin}" unless Vagrant.has_plugin? plugin
end

domains = {
  app: 'task-manager.local'
}

vagrantfile_dir_path = File.dirname(__FILE__)

config = {
  local: vagrantfile_dir_path + '/vagrant/config/vagrant-local.yml',
  example: vagrantfile_dir_path + '/vagrant/config/vagrant-local.example.yml'
}

# copy config from example if local config not exists
FileUtils.cp config[:example], config[:local] unless File.exist?(config[:local])
# read config
options = YAML.load_file config[:local]

# check github token
if options['github_token'].nil? || options['github_token'].to_s.length != 40
  puts "You must place REAL GitHub token into configuration:\n/yii2-app-basic/vagrant/config/vagrant-local.yml"
  exit
end

# vagrant configurate
Vagrant.configure(2) do |config|
  # select the box
  config.vm.box = 'centos/7'

  # should we ask about box updates?
  config.vm.box_check_update = options['box_check_update']

  config.vm.provider 'virtualbox' do |vb|
    # machine cpus count
    vb.cpus = options['cpus']
    # machine memory size
    vb.memory = options['memory']
    # machine name (for VirtualBox UI)
    vb.name = options['machine_name']
  end

  config.vm.provider 'libvirt' do |libvirt|
    config.bindfs.install_bindfs_from_source = true
    config.bindfs.default_options = {
      force_user:   'vagrant',
      force_group:  'vagrant',
      perms:        'u=rwX:g=rwXD:o=rwXD'
    }

    # sync: folder 'poster' (host machine) -> folder '/app' (guest machine)
    config.vm.synced_folder './', '/vagrant-nfs', type: 'nfs',  nfs_udp: false, nfs_version: 4, linux__nfs_options: ['rw','no_subtree_check','all_squash','async']
  end

  # machine name (for vagrant console)
  config.vm.define options['machine_name']

  # machine name (for guest machine console)
  config.vm.hostname = options['machine_name']

  # network settings
  config.vm.network 'private_network', ip: options['ip']

  # disable folder '/vagrant' (guest machine)
  config.vm.synced_folder '.', '/vagrant', disabled: true
  config.bindfs.bind_folder "/vagrant-nfs", "/app"

  # hosts settings (host machine)
  config.vm.provision :hostmanager
  config.hostmanager.enabled            = true
  config.hostmanager.manage_host        = true
  config.hostmanager.ignore_private_ip  = false
  config.hostmanager.include_offline    = true
  config.hostmanager.aliases            = domains.values

  # quick fix for failed guest additions installations
  # config.vbguest.auto_update = false

  # provisioners

  config.vm.provision 'shell', path: './vagrant/provision/once-as-root.sh', args: [options['timezone']]
  config.vm.provision 'shell', path: './vagrant/provision/as-root-mariadb-install.sh'
  config.vm.provision 'shell', path: './vagrant/provision/once-as-vagrant.sh', args: [options['github_token']], privileged: false
  config.vm.provision 'shell', path: './vagrant/provision/always-as-root.sh', run: 'always'

  # post-install message (vagrant console)
  config.vm.post_up_message = "App URL: http://#{domains[:app]}"
end
