# 

Login page created using Nodejs and MongoDB as database.

# Prerequisites

- The Ansible playbooks have been tested on Ubuntu 16.04.6 LTS Xenial
- The Ansible engine  version used was: 2.9.1
- Ansible engine node should have root access or sudo to the nodes where playbooks will be deployed
- 
# Installing

If you would like to run the application:

- Clone the repo: `git clone https://github.com/iulianroman/ex2-k8s-node-mongo.git`
- Edit the hosts file within the playbooks with the ip addresses of the K8S nodes
- Edit ad_addr (this is the ip address of the Kubernetes master) and pod_cidr variables in setup-k8s-ansible/roles/k8s-master/defaults/main.yaml 

## To setup the Kubernetes cluster
- Run: `cd setup-k8s-ansible
        ansible-playbook -i hosts site.yaml -b`
- After the playbook completes, check the status of the nodes Kubernetes cluster:
  `kubectl get nodes`

## To deploy the nginx ingress controller on the load balancer node
- Run: `cd deploy-lb-ansible
        ansible-playbook -i hosts setup_lb_nginx.yaml`

## To deploy the application with mongodb
- Run: `cd deploy-app
        ansible-playbook -i hosts setup_app.yaml`
## After all steps have been completed, you can check you application 
- With curl :
