# Server

## Description

This project is a server which serves as a bff (backend for frontend) for the compliance-dashboard frontend project.

I would follow this "backend for frontend" approach that acts as some sort of a gateway between our backend and the frontend.

In case we had several services running that the FE would use to do its thing, we can use this bff service to have a unified way of authentication, forwarding from FE to BE.

This service contains 2 endpoints like follows:

- `/projects`: Retrieves all projects stored in DB
- `/eval-results`: Retrieves all evaluation results stored in DB

# Tech Stack

This project uses mainly NodeJs and Typescript as the core tech stack.
We also have a postgresql DB cluster hosted in AWS that is the store of this service.
For managing dependencies we use npm (package manager).

Also, something remarkable to add, I have used a linter to unify the code style of the project.

## How to run it
You can run it locally by executing these commands at the root path of the project:
- `npm install`
- `npm run start`

### Deployment
Apart from running it locally, you can also create a docker image, out of the dockerfile provided, and create a container with these commands:
- docker build -t galtea-nodejs-server . 
- docker run -p 3000:3000 galtea-nodejs-server
  - We are binding our computer port 3000 to the container port 3000 so that our computer can forward a request to the container.

We would need to provide the DB connection details via env variables so that we don't expose any secret in our codebase.

However, In order to simplify this and to let you run the service locally, I have created an .env file that I am not going to include in the git repository but I will send it to you in the solution folder.

# How to test it
- `npm run test`