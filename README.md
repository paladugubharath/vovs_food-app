# VOV Foods Application – DevOps Deployment Project

## Project Overview

This project demonstrates the deployment of the VOV Foods web application using modern DevOps practices on AWS.

The application consists of:

* Frontend: React.js
* Backend: Node.js + Express.js
* Database: MongoDB
* Containerization: Docker
* CI/CD: Jenkins
* Container Registry: Docker Hub
* Orchestration: Kubernetes (Minikube on AWS EC2)
* Monitoring: Prometheus + Grafana
* Cloud Platform: AWS EC2

GitHub Repository:

https://github.com/paladugubharath/vovs_food-app

Live Demo Application:

https://vovs-food-app-1.onrender.com/

---

# Architecture

Developer
↓
GitHub Repository
↓
Jenkins CI/CD Pipeline
↓
Docker Build
↓
Docker Hub
↓
Kubernetes (Minikube)
↓
Frontend + Backend Pods
↓
Prometheus Monitoring
↓
Grafana Dashboards

---

# AWS Infrastructure

## EC2 Instance

Operating System:
Amazon Linux 2023

Installed Components:

* Docker
* Jenkins
* Git
* Kubernetes kubectl
* Minikube
* Helm
* Prometheus
* Grafana

---

# Docker Containerization

## Frontend

Created Dockerfile.frontend

Responsibilities:

* Build React application
* Serve application using Nginx

Docker Image:

paladugu0408/vov-frontend:latest

---

## Backend

Created Dockerfile.backend

Responsibilities:

* Build Node.js API
* Expose application on Port 5000

Docker Image:

paladugu0408/vov-backend:latest

---

# CI/CD Pipeline using Jenkins

Jenkins was configured on AWS EC2.

Pipeline Stages:

1. Clone Source Code from GitHub
2. Build Frontend Docker Image
3. Build Backend Docker Image
4. Docker Login
5. Push Frontend Image to Docker Hub
6. Push Backend Image to Docker Hub
7. Deploy Application to Kubernetes

Pipeline Result:

SUCCESS

---

# Kubernetes Deployment

Created Kubernetes manifests:

* backend-deployment.yaml
* backend-service.yaml
* frontend-deployment.yaml
* frontend-service.yaml

Deployment Details:

Frontend:

* 2 Replicas
* NodePort Service

Backend:

* 2 Replicas
* NodePort Service

Verification Commands:

kubectl get deployments

kubectl get pods

kubectl get svc

---

# Application Deployment

Frontend deployed successfully on Kubernetes.

Backend deployed successfully after MongoDB configuration updates.

Application was also deployed on Render for demonstration purposes.

Live URL:

https://vovs-food-app-1.onrender.com/

---

# Monitoring Setup

Monitoring stack installed using Helm.

Helm Chart:

kube-prometheus-stack

Components Installed:

* Prometheus
* Grafana
* Alertmanager
* Node Exporter
* kube-state-metrics

Namespace:

monitoring

Verification:

kubectl get pods -n monitoring

---

# Prometheus Dashboard

Prometheus collects metrics from:

* Kubernetes Cluster
* Nodes
* Pods
* Services

Access URL:

http://13.60.19.196:9090

Example Metrics:

* CPU Usage
* Memory Usage
* Pod Status
* Node Health

---

# Grafana Dashboard

Grafana connected successfully with Prometheus datasource.

Access URL:

http://13.60.19.196:3000

Default Login:

Username:
admin

Password:
Configured through Kubernetes Secret

Dashboards Used:

* Kubernetes Cluster Monitoring
* Node Exporter Dashboard
* Pod Monitoring Dashboard
* Resource Utilization Dashboard

---

# Troubleshooting Performed

## Jenkins Kubernetes Access Issue

Issue:

Jenkins was unable to communicate with Kubernetes.

Resolution:

Configured Jenkins kubeconfig and Minikube certificates.

Verification:

kubectl get nodes

---

## Backend CrashLoopBackOff

Issue:

Backend pods continuously restarted.

Error:

MongoDB connection refused.

Reason:

Application attempted to connect to:

mongodb://127.0.0.1:27017/vovfoods

No MongoDB server was running inside Kubernetes.

Resolution:

Updated deployment configuration to use environment variables and external MongoDB connection settings.

---

## Grafana Login Issue

Issue:

Unable to login to Grafana.

Resolution:

Retrieved credentials from Kubernetes Secret.

Verification:

Grafana dashboard accessible successfully.

---

## Prometheus Access Issue

Issue:

Prometheus accessible only inside cluster.

Resolution:

Changed service type to NodePort.

Verification:

Prometheus accessible through browser.

---

# Screenshots Included

1. AWS EC2 Instance
2. Jenkins Dashboard
3. Jenkins Successful Pipeline
4. Docker Images
5. Kubernetes Pods
6. Kubernetes Services
7. Prometheus Dashboard
8. Grafana Dashboard
9. Application Running in Browser
10. Render Deployment

---

# Key Learnings

* Docker Containerization
* Jenkins CI/CD Automation
* Docker Hub Integration
* Kubernetes Deployments
* Service Exposure using NodePort
* Helm Package Management
* Prometheus Monitoring
* Grafana Visualization
* AWS Infrastructure Management
* DevOps Troubleshooting Techniques

---

# Conclusion

Successfully implemented a complete DevOps deployment pipeline for the VOV Foods application using AWS, Docker, Jenkins, Kubernetes, Prometheus, and Grafana.

The project demonstrates containerization, CI/CD automation, Kubernetes deployment, monitoring, troubleshooting, and cloud infrastructure management following DevOps best practices.
