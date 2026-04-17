pipeline {
    agent any

    stages {

        stage('Clone Backend Code') {
            steps {
                git branch: 'main', url: 'https://github.com/Siva290395/abc-backend.git'
            }
        }

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    sh "${tool 'SonarScanner'}/bin/sonar-scanner \
                          -Dsonar.projectKey=abc-backend \
                          -Dsonar.projectName='ABC Backend' \
                          -Dsonar.sources=. \
                          -Dsonar.exclusions=node_modules/**,**/*.test.js"
                }
            }
        }

        stage('Quality Gate') {
            steps {
                timeout(time: 2, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t backend-app .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh 'docker rm -f backend || true'
            }
        }

        stage('Run New Container') {
            steps {
                sh 'docker run -d -p 5000:5000 --name backend backend-app'
                sh 'docker ps'
            }
        }
    }
}
