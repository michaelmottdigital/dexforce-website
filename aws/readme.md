// Instructions to deploy to an AWS Fargate Cluster
https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ECS_AWSCLI_Fargate.html

// create a cluster
aws ecs create-cluster --cluster-name dexforce-website-cluster
// will output arn for cluster: 

// create a task definition
aws ecs register-task-definition --cli-input-json file://c:/dev/websites/dexforce/aws/taskdef.json

// create a service
// remebmer to change the task-definiution value 
// -- find it by aws ecs list-task-definitions
aws ecs create-service --cluster dexforce-website-cluster --service-name dexforce-website-service --task-definition dexforce-website:3 --desired-count 1 --launch-type "FARGATE" --network-configuration "awsvpcConfiguration={subnets=[subnet-01d213ca7c447e869],securityGroups=[sg-07f0129ab9da7481c]}"


// describe service, includes deployments, failures etc,,,
aws ecs describe-services --cluster dexforce-website-cluster --services dexforce-website-service

// lists tasks  details
aws ecs list-tasks --cluster dexforce-website-cluster --service dexforce-website-service

// describe service so we can get the --network-interface-id
aws ecs describe-tasks --cluster fargate-cluster --tasks arn:aws:ecs:us-east-2:792866256951:task/dexforce-website-cluster/6640afe482e14ae680135f3d900aebfb

// get ip address of our service
aws ec2 describe-network-interfaces --network-interface-id  eni-0fa40520aeEXAMPLE