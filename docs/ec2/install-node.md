https://dev.to/mkabumattar/how-to-install-and-configure-nodejs-on-ec2-instance-amazon-linux-2-12jn


# Update the system packages
sudo yum update -y

# Install dependencies packages
sudo yum install gcc-c++ make -y

# install nvm so we can install node
# source - https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-up-node-on-ec2-instance.html

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

# activate nvm
. ~/.nvm/nvm.sh

# install node , linux 2 does not support LTS so use 16 instead
nvm install 16

# Install nodejs
sudo yum install nodejs -y


# Install PM2
npm install pm2 -g

---------------------
# Create the node app folder
#  /opt/apps
sudo chown -R ec2-user /opt/apps

sudo chmod -R 755 /opt/apps


---------------------------------
# intsall nginx via amazon-linux-extras 
#  sudo amazon-linux-extras list 
sudo amazon-linux-extras install nginx1 -y



