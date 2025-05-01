pipeline {
  agent any

  environment {
    DOCKER_BUILDKIT = '1'
  }

  stages {
    stage('📥 Clone Repo') {
      steps {
        checkout scm
      }
    }

    stage('Build Docker Images') {
      steps {
        sh 'docker compose build'
      }
    }

    stage('Run Containers') {
      steps {
        sh 'docker compose up -d'
      }
    }

    stage('🔧 Build & Deploy with Docker') {
      steps {
        script {
          sh 'docker-compose down'
          sh 'docker-compose build'
          sh 'docker-compose up -d'
        }
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
