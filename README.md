# AutoDeploy Express

An automated CI/CD pipeline project that demonstrates real-world DevOps practices with Node.js, Docker, GitHub Actions, and continuous integration workflows.

## 🎯 Project Mission

Build a production-ready automated pipeline where **every code push triggers automatic testing, building, and deployment preparation** - no manual steps required.

## 📋 What This Project Does

This project showcases a complete automated DevOps workflow:

- **Automatic Testing** - Every push runs the full test suite automatically
- **Continuous Integration** - GitHub Actions validates code quality on every commit
- **Docker Build Automation** - Containers are built and validated automatically
- **Docker Hub Publishing** - Successful builds are pushed to Docker Hub registry
- **Version Tagging** - Every build gets tagged with commit SHA for traceability
- **Branch Protection** - Only tested, passing code makes it to main branch

## 🌟 Key Features

- ✅ **Zero Manual Steps** - Push code, everything else happens automatically
- 🧪 **Automated Testing** - Jest test suite runs on every push and PR
- 🐳 **Docker Integration** - Full containerization with multi-stage builds
- 🔄 **GitHub Actions CI/CD** - Production-grade CI/CD pipeline
- 📦 **Docker Hub Registry** - Automated image publishing
- 🏷️ **Smart Tagging** - Latest tag + commit SHA for version control
- 🚀 **Deployment Ready** - Built images ready for any container platform

## 🛠️ Tech Stack

- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **Testing**: Jest + Supertest
- **Containerization**: Docker + Docker Buildx
- **CI/CD**: GitHub Actions
- **Registry**: Docker Hub
- **Version Control**: Git/GitHub

## 📦 Quick Start

### Prerequisites
- Node.js 18 or higher
- Docker installed and running
- Git configured
- Docker Hub account

### Local Development

```bash
# Clone the repository
git clone https://github.com/tinobrace/autodeploy-express.git
cd autodeploy-express

# Install dependencies
npm install

# Run tests
npm test

# Start development server
npm start

# Access at http://localhost:3000
```

### Docker Development

```bash
# Build the image
docker build -t autodeploy-express:local .

# Run the container
docker run -p 3000:3000 autodeploy-express:local

# Test the endpoints
curl http://localhost:3000/
curl http://localhost:3000/health
```

## 🔄 CI/CD Pipeline

### How It Works

1. **Code Push** → Developer pushes code to GitHub
2. **Trigger** → GitHub Actions workflow activates automatically
3. **Test Job** → Runs all tests in clean environment
4. **Build Job** → Builds Docker image (only if tests pass)
5. **Push Job** → Publishes to Docker Hub (only on main branch)
6. **Tagging** → Images tagged with `latest` and commit SHA

### Workflow Stages

```
Push Code → Run Tests → Build Docker → Push to Registry → Ready to Deploy
```

### What Gets Tested

- API endpoint responses
- Health check functionality
- Application startup
- Docker image builds successfully

## 📁 Project Structure

```
autodeploy-express/
├── .github/
│   └── workflows/
│       └── ci.yml           # GitHub Actions CI/CD pipeline
├── src/
│   └── index.js             # Express application
├── test/
│   └── app.test.js          # Jest test suite
├── Dockerfile               # Multi-stage Docker build
├── .dockerignore            # Docker build exclusions
├── .gitignore               # Git exclusions
├── package.json             # Dependencies and scripts
├── package-lock.json        # Locked dependency versions
└── README.md                # Project documentation
```

## 🔍 API Endpoints

### GET `/`
Returns application greeting.

**Response:**
```text
Hello from ValenCloud!
```

### GET `/health`
Health check endpoint for monitoring and container orchestration.

**Response:**
```json
{
  "status": "ok"
}
```

## 🐳 Docker

### Building Images

```bash
# Build for local development
docker build -t autodeploy-express:local .

# Build with specific tag
docker build -t kuberval/autodeploy-express:v1.0.0 .
```

### Running Containers

```bash
# Run in foreground
docker run -p 3000:3000 kuberval/autodeploy-express:latest

# Run in background (detached)
docker run -d -p 3000:3000 --name express-app kuberval/autodeploy-express:latest

# View logs
docker logs express-app

# Stop container
docker stop express-app
```

### Pull from Docker Hub

```bash
# Pull latest version
docker pull kuberval/autodeploy-express:latest

# Pull specific version
docker pull kuberval/autodeploy-express:<commit-sha>
```

## ⚙️ GitHub Actions Setup

### Required Secrets

Configure these in your GitHub repository:

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Add the following secrets:

| Secret Name | Description |
|-------------|-------------|
| `DOCKERHUB_USERNAME` | Your Docker Hub username |
| `DOCKERHUB_PASSWORD` | Docker Hub access token (not password!) |

### Workflow Features

- ✅ Runs on every push and pull request
- ✅ Tests must pass before building
- ✅ Docker images only pushed from main branch
- ✅ Automatic tagging with commit SHA
- ✅ Caches npm dependencies for faster builds

### Monitoring Workflows

1. Go to your GitHub repository
2. Click the **Actions** tab
3. View running and completed workflows
4. Click any workflow to see detailed logs

## 🚀 Deployment Options

The Docker images can be deployed to:

- **Kubernetes** - Production-grade orchestration
- **Docker Swarm** - Simple container orchestration
- **AWS ECS/EKS** - Amazon container services
- **Google Cloud Run** - Serverless containers
- **Azure Container Instances** - Microsoft container platform
- **DigitalOcean App Platform** - Simple PaaS deployment
- **Heroku** - Container registry deployment
- **Any Docker-compatible platform**

### Example Kubernetes Deployment

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: autodeploy-express
spec:
  replicas: 3
  selector:
    matchLabels:
      app: autodeploy-express
  template:
    metadata:
      labels:
        app: autodeploy-express
    spec:
      containers:
      - name: express
        image: kuberval/autodeploy-express:latest
        ports:
        - containerPort: 3000
```

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests with coverage
npm test -- --coverage

# Run tests in watch mode
npm test -- --watch

# Run specific test file
npm test app.test.js
```

## 📊 What You Learn

This project teaches essential DevOps skills:

1. **Continuous Integration** - Automated testing on every commit
2. **Continuous Deployment** - Automated building and publishing
3. **Infrastructure as Code** - Workflow definitions in YAML
4. **Container Orchestration** - Docker best practices
5. **Version Control** - Git workflows and branching strategies
6. **Secret Management** - Secure credential handling
7. **Pipeline Design** - Multi-stage CI/CD workflows
8. **Automated Testing** - Test automation in CI environments
9. **Registry Management** - Container image publishing
10. **Production Readiness** - Building deployment-ready artifacts

## 🎓 From Project 1 to Project 2

**Project 1** taught you:
- Basic Node.js applications
- Docker containerization
- Manual testing and building

**Project 2** adds:
- ✨ Full automation - no manual steps
- ✨ GitHub Actions CI/CD pipeline
- ✨ Automatic testing on every push
- ✨ Automated Docker Hub publishing
- ✨ Production-ready workflows
- ✨ Real-world DevOps practices

## 🔧 Troubleshooting

### Tests Hang in CI
Make sure your `package.json` includes `--forceExit`:
```json
"test": "jest --runInBand --silent --forceExit"
```

### Docker Push Fails
- Verify Docker Hub credentials are correct
- Use access token, not password
- Check token has Read & Write permissions

### Workflow Doesn't Trigger
- Ensure workflow file is in `.github/workflows/`
- Check YAML syntax is valid
- Verify you're pushing to the correct branch

## 👤 Author

**ValenCloud** - DevOps Learning Journey

## 📄 License

ISC

## 🙏 Acknowledgments

Built as part of a hands-on DevOps learning path, progressing from manual processes to fully automated CI/CD pipelines.

---

**Next Steps:** Deploy to Kubernetes, add staging environments, implement blue-green deployments, add monitoring and logging! 🚀
