pipeline {
    agent any
    environment {
        DOCKER_HUB_CRED = 'docker-hub-cred'   // Jenkins credentials ID
        IMAGE_NAME = 'gertrude36/my-web-app'  // Replace with your Docker Hub repo
        IMAGE_TAG = 'latest'
    }
    stages {
        stage('Build') {
            steps {
                echo "Building the project..."
                bat 'dir'   // For Windows; use sh 'ls -la' for Linux/macOS
            }
        }
        stage('Test') {
            steps {
                echo "Running tests..."
            }
        }
        stage('Deploy') {
            steps {
                echo "Building and pushing Docker image..."
                script {
                    // Build and push Docker image to Docker Hub
                    docker.withRegistry('https://index.docker.io/v1/', "${DOCKER_HUB_CRED}") {
                        def app = docker.build("${IMAGE_NAME}:${IMAGE_TAG}")
                        app.push()
                    }
                }
            }
        }
    }
}
