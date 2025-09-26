# Environment Configuration

## Development Environment

### Prerequisites

- **Node.js**: Version 18 or higher (for JavaScript/TypeScript projects)
- **Python**: Version 3.11 or higher (for Python projects)
- **Go**: Version 1.19 or higher (for Go projects)
- **Java**: Version 11 or higher (for Java projects)
- **Docker**: Version 20.10 or higher (for containerization)

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd project-template
   ```

2. **Install dependencies** (choose based on your tech stack)
   ```bash
   # For Node.js projects
   npm install

   # For Python projects
   pip install -r requirements.txt

   # For Go projects
   go mod download
   ```

3. **Environment Variables**
   Create a `.env` file in the root directory:
   ```env
   NODE_ENV=development
   PORT=3000
   DATABASE_URL=postgresql://localhost:5432/project_db
   JWT_SECRET=your-secret-key
   ```

4. **Run the application**
   ```bash
   # For Node.js projects
   npm run dev

   # For Python projects
   python main.py

   # For Go projects
   go run main.go
   ```

## Production Environment

### Docker Deployment

1. **Build the Docker image**
   ```bash
   docker build -t project-template .
   ```

2. **Run the container**
   ```bash
   docker run -p 3000:3000 --env-file .env.production project-template
   ```

### Environment Variables for Production

```env
NODE_ENV=production
PORT=3000
DATABASE_URL=postgresql://prod-host:5432/project_db
JWT_SECRET=prod-secret-key
SSL_CERT_PATH=/etc/ssl/certs/app.crt
SSL_KEY_PATH=/etc/ssl/private/app.key
```

## Testing Environment

### Running Tests

```bash
# Unit tests
npm test

# Integration tests
npm run test:integration

# E2E tests
npm run test:e2e
```

### Test Database

```env
TEST_DATABASE_URL=postgresql://localhost:5432/project_test_db
TEST_JWT_SECRET=test-secret-key
```

## Monitoring and Logging

### Health Checks

- **Endpoint**: `GET /healthz`
- **Response**: `200 OK` with service status

### Logging Configuration

```json
{
  "level": "info",
  "format": "json",
  "output": {
    "file": "/var/log/app.log",
    "console": true
  }
}