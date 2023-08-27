pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout the source code from Git
                  // Checkout the source code from Git
                checkout([$class: 'GitSCM', 
                          branches: [[name: '*/master']],
                          userRemoteConfigs: [[url: 'https://github.com/MohitBDev/Online_Shopping_Mart.git']]])
            }
        }

        stage('Build Frontend') {
            steps {
                dir('FE/ecommerce-frontend') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Build Backend') {
            steps {
                dir('BE/Ecommerce-Backend') {
                    sh './mvnw clean install'
                }
            }
        }
          
           stage('Docker Build') {
            steps {
                script {
                    // Build a Docker image for the application
                    docker.build('my-spring-app:${env.BUILD_NUMBER}')
                }
            }
        }

        stage('Deploy') {
            steps {
                 script {
                    // Push the Docker image to a Docker registry
                    docker.withRegistry('https://hub.docker.com', 'docker-credentials-id') {
                        dockerImage.push("${env.BUILD_NUMBER}")
                    }
                }
            }
        }
    }

    post {
    success {
        echo 'Build succeeded!'
    }
    failure {
        echo 'Build failed!'
        emailext body: 'Build failed.', subject: 'Build Failure', to: 'mohitbijwar@gmail.com'
    }
}

}
