pipeline {
    agent any

    tools {
        nodejs 'NodeJS' // Nome da configuração do Node.js no Jenkins
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/gabmdoss/front-end-cypress.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                sh 'npx cypress run'
            }
        }
    }

    post {
        always {
            publishHTML(target: [
                allowMissing: false,
                alwaysLinkToLastBuild: false,
                keepAll: true,
                reportDir: 'cypress/reports/html',
                reportFiles: 'index.html',
                reportName: 'Cypress Test Report'
            ])
        }
    }
}