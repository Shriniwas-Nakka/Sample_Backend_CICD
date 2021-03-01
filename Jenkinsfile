pipeline { 
    agent any 
    options {
        skipStagesAfterUnstable()
    }
    stages {
        stage('package creation') { 
            steps { 
                sh ''' #!/bin/bash
                sudo rsync -avzP -e 'ssh -i /demo-key.pem' /var/lib/jenkins/workspace/backend-pipeline ubuntu@3.138.244.133:/home/ubuntu/
                echo ===> package creation on backend server
                '''
            }
        }
        stage('Build') { 
            steps { 
                sh ''' #!/bin/bash
                # ssh -i /demo-key.pem ubuntu@3.138.244.133 'sudo rm -rf /home/ubuntu/backend-pipeline'
                # ssh -i /demo-key.pem ubuntu@3.138.244.133 'mv /home/ubuntu/backend-pipeline /home/ubuntu/keep-backend'
                # ssh -i /demo-key.pem ubuntu@3.138.244.133 'bash /home/ubuntu/buildJenkis.sh'
                echo ===> Build stage
                '''
            }
        }
        stage('Test') { 
            steps {
                sh 'echo test case runs' 
            }
        }
        stage('deploy') { 
            steps {
                sh ''' #!/bin/bash
                ssh -i /demo-key.pem ubuntu@3.138.244.133 'bash /home/ubuntu/deployJenkins.sh'
                echo ===> deploy stage
                '''
            }
        }
    }
}
