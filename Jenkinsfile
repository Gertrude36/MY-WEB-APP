pipeline { 
    agent any
    stages { 
        stage('Build') { 
            steps { 
                echo "Building the project..."
                bat 'dir'   // Windows command
            } 
        } 
        stage('Test') { 
            steps { 
                echo "Running tests..."
            } 
        } 
        stage('Deploy') { 
            steps { 
                echo "Deploying..."
            } 
        } 
    } 
}

