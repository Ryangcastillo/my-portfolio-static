# Plan

# 📂 Repo Template Structure: `project-template/`

```
project-template/
  ├── .aiconfig.md
  ├── .github/
  │    └── workflows/
  │         └── refactor-checks.yml
  ├── docs/
  │    ├── architecture.md
  │    ├── environment.md
  │    ├── error-handling.md
  │    ├── developer-guidelines.md
  │    ├── security.md
  │    ├── tasks.md
  │    ├── changelog.md
  │    └── api.md
  ├── specs/
  │    └── README.md
  ├── postman/
  │    └── collection.json
  ├── src/                  # 👈 for your main code (generic)
  │    └── placeholder.txt
  ├── tests/                # 👈 for unit/integration tests
  │    └── placeholder.txt
  ├── requirements.txt      # optional (for Python) → replace with package.json, go.mod, Cargo.toml, etc.
  ├── Dockerfile            # generic containerization (optional)
  └── README.md

```

---

# 📜 `.aiconfig.md`

```markdown
# AI Agent Contract (Generic Project Edition)

Any AI coding/refactoring agent working on this repository **must follow these rules**:

1. **Spec-Driven Workflow**
   - Use **Spec Kit** (`/constitution`, `/specify`, `/plan`, `/tasks`, `/implement`) for all new features.
   - Place feature specs in `/specs/`.

2. **Project Architecture**
   - All source code must live in `/src/`.
   - All tests must live in `/tests/`.
   - Docs must live in `/docs/`.

3. **Documentation Rules**
   - Update `/docs/changelog.md` for every major change.
   - Update `/docs/api.md` for every new API or service endpoint.

4. **TDD Rules**
   - Always apply Red → Green → Refactor.
   - Add missing tests before making changes.
   - Use the project’s native test framework (Jest, Mocha, Pytest, JUnit, Go test, etc.).

5. **GitHub Rules**
   - Atomic commits with descriptive messages.
   - Commit messages must start with:
     `Refactor|Fix|Add|Update|Remove|Docs|Spec`
   - PRs must be small, stackable, and reference specs/docs.

6. **Dependencies & Environment**
   - Use the language’s native dependency manager (npm, pip, poetry, go mod, cargo, maven, gradle, etc.).
   - Lockfiles (`package-lock.json`, `poetry.lock`, `requirements.lock`, `go.sum`, etc.) must be committed.
   - Always reference **Context7 MCP** (`use context7`) for dependency APIs.

7. **Error Handling & Security**
   - Centralize error handling when possible.
   - Harden code against injection, misconfigurations, and insecure defaults.
   - Follow `/docs/security.md`.

8. **API Monitoring**
   - Every new endpoint must be added to `/postman/collection.json`.
   - CI/CD runs Postman tests (`newman`) after unit tests.

⚠️ **This contract is binding**: Any code or refactor not following these rules must be rejected.

```

---

# 📜 `README.md`

```markdown
# Generic Project Template 🚀

This is a **GitHub template repository** for any project (backend, frontend, fullstack, or CLI tool).
It enforces **Spec-Driven Development (SDD)**, **TDD**, **docs-first workflows**, and **API monitoring**.

---

## 🔥 Features
- ✅ Works with any language (Node.js, Python, Go, Rust, Java, etc.)
- ✅ Organized structure (`/src`, `/tests`, `/docs`, `/specs`)
- ✅ Spec Kit integration (`/specs/`)
- ✅ Enforced TDD (native test framework)
- ✅ CI/CD with GitHub Actions:
  - Docs checks
  - Dependency lock check
  - Tests across environments
  - Postman API monitoring
- ✅ AI Contract (`.aiconfig.md`) binding AI agents to rules

---

## 🧩 Workflow
1. Define feature → add spec in `/specs/`.
2. Add/update docs in `/docs/`.
3. Write failing test (Red).
4. Implement feature (Green).
5. Refactor into clean modules (Refactor).
6. Add/update Postman tests in `/postman/collection.json`.
7. Push → GitHub Actions enforces rules.

---

## 📂 Key Folders
- `/src/` → Source code (any language)
- `/tests/` → Unit + integration tests
- `/docs/` → Developer & architecture guides
- `/specs/` → Feature specifications
- `/postman/` → API monitoring

---

## 🚀 Quick Start
```bash
# Clone repo
git clone <your-repo> && cd project-template

# Initialize deps (example for Node.js)
npm install

# Run tests
npm test

# Run API monitoring (Postman)
npx newman run postman/collection.json

```

---

```
---

# 📜 `/docs/api.md`

```markdown
# API Documentation (Generic Project)

## 🔍 Healthcheck
- **Endpoint:** `GET /healthz`
- **Description:** Verifies service is alive.
- **Expected Response:** `200 OK`

## 🔑 Authentication
- **Endpoint:** `POST /auth/login`
- **Description:** Authenticates a user.
- **Expected Response:** `200 OK` or `401 Unauthorized`

## 📄 Service Endpoints
- `GET /api/items/`
- `POST /api/items/`

```

---

# 📜 `/specs/README.md`

```markdown
# Specs Folder

This folder is managed by **Spec Kit**.

Every new feature must follow the Spec Kit flow:
1. `/constitution` → set project principles
2. `/specify` → define the what/why
3. `/plan` → define the how
4. `/tasks` → break into atomic steps
5. `/implement` → code based on the plan

```

---

# ⚙️ `.github/workflows/refactor-checks.yml`

Generic CI/CD with **matrix testing** (works for Node.js, Python, Go, etc.):

```yaml
name: Project Contract Enforcement

on:
  pull_request:
    branches: [ "main", "develop" ]

permissions:
  contents: read
  pull-requests: write

jobs:
  checks:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Check docs & specs
        run: |
          test -d docs || (echo "❌ Missing /docs" && exit 1)
          test -d specs || (echo "❌ Missing /specs" && exit 1)
          test -f .aiconfig.md || (echo "❌ Missing .aiconfig.md" && exit 1)

  tests:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        language: [ "node", "python" ]
    steps:
      - uses: actions/checkout@v4

      - name: Node.js tests
        if: matrix.language == 'node'
        uses: actions/setup-node@v4
        with:
          node-version: "18"
      - if: matrix.language == 'node'
        run: npm ci && npm test

      - name: Python tests
        if: matrix.language == 'python'
        uses: actions/setup-python@v5
        with:
          python-version: "3.11"
      - if: matrix.language == 'python'
        run: pip install -r requirements.txt && pytest -q

  postman-tests:
    runs-on: ubuntu-latest
    needs: tests
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "18"
      - run: npm install -g newman
      - run: newman run postman/collection.json \
            --env-var baseUrl=http://localhost:3000 \
            --reporters cli,junit \
            --reporter-junit-export postman-results.xml

```
