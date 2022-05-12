# CreativeAT

Exercise is to assess technical proficiency with Software Engineering,
DevOps, and Infrastructure tasks.

---
## Requirements

For development, you will need Node.js - a node global package, Git - to clone repository, container-structure-test - for testing our docker image, Docker, Helm-chart and Minikube, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v16.15.0

    $ npm --version
    8.5.5

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g


- ### Docker Installation
  Follow the instructions on the [official docker website](https://docs.docker.com/engine/install/) to install Docker on any operating system.

- #### Container-structure-test Installation

  Follow the instructions on the [official github repository](https://github.com/GoogleContainerTools/container-structure-test) to install on any operating system.

- #### Kubernetes and Minikube Installation

  Follow the instructions on the [kubernetes documentation](https://kubernetes.io/docs/tasks/tools/) to install on any operating system.


- #### Helm-Chart Installation

  Follow the instructions on the [helm documentation](https://helm.sh/docs/intro/install/) to install on any operating system.


---

## Install Application

    $ git clone https://github.com/emmygozi/CreativeAT
    $ cd CreativeAT
    $ npm install

## Running unit test and coverage

    $ npm run test

## Running container structure tests
NB: Docker image has already been built and deployed to docker.io/emmygozi/creativeat:latest.
Read more on how to build and push docker images [here](https://docs.docker.com/engine/reference/commandline/build/)

    $ container-structure-test test --image docker.io/emmygozi/creativeat:latest \
      --config container-structure-test/config.yaml

## Running the project in development

    $ npm run start:dev

## Simple build for production

    $ npm run start

## Make calls to endpoints

Open your browser or Postman and make a call to the following endpoints:

- http://localhost:3000/api/v1/timezones
- http://localhost:3000/api/v1/randomurl - a wrong api gives you a 404 response

## View Metrics - API calls, CPU usage and heaps

After making API calls to application endpoint, open a new tab in your browser to view metrics:

- http://localhost:9100/metrics

## Deploy Helm-chart to Kubernetes on Minikube

    $ helm install creativeat creativeat-helm/ --values creativeat-helm/values.yaml

## View Helm-chart deployment on localhost
There are two ways to do this:

    $ minikube service list 
    $ minikube service name-of-service --url  
replace "name-of-service" with the service name listed on your device

The second and arguable simpler way is to use port forwarding:

    $ kubectl port-forward creativeat-creativeat-helm-c9bf8bdf5-265cj 3000:3000 
"creativeat-creativeat-helm-c9bf8bdf5-265cj" is the name of a pod that can be gotten by typing:

    $ kubectl get po

Yippie! Your deployed kubernetes service should be available on 

- http://localhost:3000/api/v1/timezones 
