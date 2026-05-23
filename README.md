# React CI/CD Pipeline

This repository demonstrates a complete CI/CD pipeline for a simple React Counter application using:

- GitHub Actions (CI/CD)
- GitHub Pages (Static Hosting)
- AWS EC2 (Production Deployment)
- Automated Testing & Linting

## Project Overview
This project is built to understand how modern CI/CD pipelines work in real-world scenarios.

### Pipeline Workflow
When code is pushed or a pull request is created:
#### Pull Request Workflow 
Triggered on PR to main:
  - Runs lint checks
  - Runs tests
  - Builds React app

#### Push Workflow (Main Branch)
Triggered on push to main:
- CI Stage
  - Install dependencies
  - Lint code
  - Run tests

- Build Stage

  - Build for GitHub Pages (subdirectory)
  - Build for EC2 (root level)

- Deployment Stage
    - GitHub Pages
        - Deploys app under:
            ```
            https://msajidaligik.github.io/react-cicd-pipeline/
            ```
    - AWS EC2:
        - Deploys app to:
            ```
            /var/www/html/
            ```
        - Uses rsync for efficient file transfer

#### Required GitHub Secrets & Variables
- Secrets
    ```
    EC2_PRIVATE_KEY → SSH private key for EC2 access
    ```

- Variables
    ```
    EC2_HOST → Public IP / DNS of EC2
    EC2_USER → SSH username (e.g., ubuntu)
    ```
#### Deployment URLs
- GitHub Pages → (auto-generated after deployment)
- EC2 Instance → http://<EC2_PUBLIC_IP>

## Tech Stack

- React (Frontend)
- GitHub Actions (CI/CD)
- GitHub Pages (Static Deployment)
- AWS EC2 + Apache2/Ngine (Production Hosting)
- Node.js

## Local Setup Instructions
### Clone the Repository
```
git clone https://github.com/msajidaligik/react-cicd-pipeline.git
cd react-cicd-pipeline
```
### Install Dependencies
```
npm install
```
### Run the App Locally

```
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Available Scripts

In the project directory, you can run:

```
npm start        # Run locally
npm run build    # Create production build
npm test         # Run tests
npm run lint     # Lint the project
```
