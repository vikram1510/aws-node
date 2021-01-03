# aws-node
1. build docker container
2. Create ECR repository
3. Push docker image to repository
4. Create Fargate Cluster
5. Create Task Definition, Make sure you provide correct container port (3000)
6. Create a load balancer:
Target Group: Give the port of the target (3000)
Security Group: Load balancer should be able accept inbound traffic at port 3000
7. 