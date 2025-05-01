pipeline {
  agent any

  environment {
    DOCKER_BUILDKIT = '1'
  }

  stages {
    stage('Clone Repo') {
      steps {
        checkout scm
      }
    }

    stage('Build and Deploy') {
      steps {
        sh 'docker-compose down'
        sh 'docker-compose build'
        sh 'docker-compose up -d'
      }
    }
  }

  post {
    success {
      echo '✅ Deployment successful!'
    }
    failure {
      echo '❌ Deployment failed!'
    }
  }
}
