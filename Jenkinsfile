pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout the source code from Git
                checkout scm
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Build Backend') {
            steps {
                dir('backend') {
                    sh './mvnw clean install'
                }
            }
        }

        stage('Deploy') {
            steps {
                // Here you can deploy the application as per your setup
                // This could involve copying artifacts to a server, containerization, etc.
            }
        }
    }

    post {
        always {
            // Cleanup or notification steps can go here
        }
    }
}
