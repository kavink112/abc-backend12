pipeline {
    agent any

    stages {

        stage('Clone Backend Code') {
            steps {
                git branch: 'main', url: 'https://github.com/Siva290395/abc-backend.git'
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
                sh  'docker ps'
            }
        }
    }
}
