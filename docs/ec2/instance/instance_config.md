# copy file to /opt/profile.d/ to Set Environment Variables
aws_dexforce.sh

# Key to be used with SSH clients
# ie File Zilla
dexforce_prod.pem

# deploy app
copy deploy.zip to /opt/apps/dfc_website
go to that folder
unzip deploy.zip

# copy files to .output directory 
# used to launch PM2 and nitro.json
ecosystem.config.js

# open port 3000 
go to instance
Click Security Tab
Change inboud rules for security group 
allow port 30000

# start pm2
change to /.output folder
pm2 start ecosystem.config.js


# copy default.conf to /etc/nginx/conf.d so to configure reverse proxy
default.conf

# !!! make sure to start the app first, then nginx

# install vertbot

sudo amazon-linux-extras install epel
sudo yum install certbot python-certbot-nginx
sudo certbot --nginx

# copy aws_dexforce.sh to /etc/profile.d



