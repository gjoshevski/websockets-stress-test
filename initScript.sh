# sh  upstart/cloudlick
# install node
# install npm
# instal pm2
# set key 
# clone form git
# instal dependencies

#!/bin/bash

MASTER_IP="23.253.119.91"

IP_ADDR=$(getent hosts `hostname` | awk '{print $1}')



sudo apt-get update

sudo apt-get install git

sudo apt-get install nodejs

sudo apt-get install npm

sudo ln -s /usr/bin/nodejs /usr/bin/node

sudo npm install pm2 -g

# get and set key from and to remote

scp root@23.253.119.91:.ssh/authorized_keys ~/.ssh

ssh-keygen -t rsa

ssh root@23.253.119.91 ssh-copy-id root@$IP_ADDR

 cat ~/.ssh/id_rsa.pub | ssh root@23.253.119.91 'umask 0077; mkdir -p .ssh; cat >> .ssh/authorized_keys && echo "Key copied"'

ssh root@23.253.119.91 "echo \"`cat .ssh/id_rsa.pub`\" >> .ssh/authorized_keys"



#!/bin/bash
#
# Creates an SSH key on a client machine, applies the appropriate file permissions,
# copies to the local ~/.ssh directory, & copies to specified server
#
# parameters:
# ..1 newKeyFileName
# ..2 user@server
#
# usage : 
# ./sshKeyGen.sh newKey user@server.com
#
ssh-keygen -t rsa -f $1
chmod 600 $1
chmod 600 $1.pub
mv $1 ~/.ssh/$1.pem
cp $1.pub ~/.ssh/$1
mv $1.pub  ~/.ssh/$1.pub
ssh-copy-id -i ~/.ssh/$1.pub $2



# root@104.239.130.127 root@172.99.115.12 root@104.239.130.129 root@104.239.130.220 root@104.239.130.221
# cssh root@104.239.130.127 root@172.99.115.12 root@104.239.130.129 root@104.239.130.220 root@104.239.130.221
# change pass # passwd

