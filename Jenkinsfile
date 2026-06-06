pipeline {

    agent any

    environment {

        FRONTEND_IMAGE = "paladugu0408/vov-frontend:latest"
        BACKEND_IMAGE  = "paladugu0408/vov-backend:latest"
    }

    stages {

        stage('Clone Source') {

            steps {

                git branch: 'main',
                url: 'https://github.com/paladugubharath/vovs_food-app.git'
            }
        }

        stage('Build Frontend') {

            steps {

                sh '''
                docker build \
                -f Dockerfile.frontend \
                -t $FRONTEND_IMAGE .
                '''
            }
        }

        stage('Build Backend') {

            steps {

                sh '''
                docker build \
                -f Dockerfile.backend \
                -t $BACKEND_IMAGE .
                '''
            }
        }

        stage('Docker Login') {

            steps {

                withCredentials([
                    usernamePassword(
                        credentialsId: 'dockerhub',
                        usernameVariable: 'USER',
                        passwordVariable: 'PASS'
                    )
                ]) {

                    sh '''
                    echo $PASS | docker login \
                    -u $USER \
                    --password-stdin
                    '''
                }
            }
        }

        stage('Push Frontend') {

            steps {

                sh '''
                docker push $FRONTEND_IMAGE
                '''
            }
        }

        stage('Push Backend') {

            steps {

                sh '''
                docker push $BACKEND_IMAGE
                '''
            }
        }

        stage('Deploy Kubernetes') {

            steps {

                sh '''
                kubectl apply -f k8s/
                '''
            }
        }
    }

    post {

        success {

            echo 'Deployment Successful'
        }

        failure {

            echo 'Deployment Failed'
        }
    }
}