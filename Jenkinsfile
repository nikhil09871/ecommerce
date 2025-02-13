pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/nikhil09871/ecommerce.git'
            }
        }

        stage('Deploy') {
            steps {
                sh 'cp -r * /var/www/html/'  // Copy files to Apache/Nginx
            }
        }

        stage('Restart Web Server') {
            steps {
                sh 'sudo systemctl restart apache2'  // Restart Apache
                sh 'sudo systemctl restart nginx'  // Restart Nginx (if using)
            }
        }
    }
}

