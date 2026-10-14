# ecoArchitect-Foundation: GitHub Repository Structure
**Repository Name**: `ecoArchitect-foundation`  
**Organization**: UUON-Foundation  
**URL**: https://github.com/UUON-Foundation/ecoArchitect-foundation  

# 🌍 EcoArchitect: The PlanET Foundation

[![CI Status](https://github.com)](#)
[![License: USAL-1.0](https://shields.io)](LICENSE)
[![Framework: React Native](https://shields.io)](#)
[![Engine: Google Lens CV](https://shields.io)](#)

> **"The scent of the earth itself is pleasant... we come from the same dirt, Extra Terrestrial."**
> EcoArchitect is an open-source platform that transforms advanced machine learning into an ecological nervous system. By turning silicon back toward the soil, this architecture gives the planet a "New Eye" to track, calculate, and systematically eliminate physical waste.

*   **The PLAN (Earthbound Stewardship):** The mobile front-end, spatial geohashing algorithms, and relational data flows designed to coordinate human cleanups, reward civic action, and track micro-level environmental changes.
*   **The ET (Cosmic / Silicon Compute):** The computer vision pipelines that use Google Lens, offline TensorFlow Lite fallback models, and density reference indexes to identify physical objects, estimate mass, and calculate environmental debt instantly.

---

## 🏗️ Repository Architecture & Entry Points

This repository is strictly organized to keep specialized services isolated. Below is a guide to where the core components of the **PlanET** platform live:

### 📱 1. Frontend & AR Interface (`src/frontend/react-native/`)
A cross-platform mobile suite that provides the user with an augmented interface to engage with their physical environment.
*   `screens/ScanScreen.tsx`: The primary camera interface handling local frames before dispatching to the intelligence services.
*   `screens/ARScreen.tsx`: Renders real-time spatial overlays using bounding boxes and AR anchors to highlight target materials on the ground.
*   `utils/co2-calculator.ts` & `weight-calculator.ts`: Lightweight, client-side utility formulas that turn pixel classifications into immediate, actionable metrics.

### 🧠 2. Computer Vision Intelligence (`src/cv/`)
The "New Eye" of the architecture, converting raw imagery into material data.
*   `google_lens_integration.py`: Connects edge imagery directly to cloud intelligence for ultra-precise item classification and material profile matching.
*   `weight_estimation/estimator.py`: Cross-references detected bounding box volumes against `models/density-reference.json` to safely calculate an item’s weight without physical scales.
*   `offline/tflite_model.py`: Edge-native fallback classifier ensuring features work seamlessly in remote areas with zero network connectivity.

### 🗄️ 3. Backend & Spatial Analytics (`src/backend/`)
The orchestration layer tracking cumulative ecological impact across the planet.
*   `api/routes/impact.ts`: Tracks telemetry, geohashes data points, and updates global and local cleanup metrics.
*   `websocket/server.ts`: Powers real-time live events, feeding updates to local leaderboards (`handlers/leaderboard-update.ts`) to drive community engagement.
*   `services/EnvironmentalImpactService.ts`: Aggregates scanned items and calculates carbon mitigation and lifecycle metrics.

---

## 💻 Tech Stack Map

| Domain | Technologies Used | Core Responsibilities |
| :--- | :--- | :--- |
| **Mobile Client** | React Native, TypeScript, Expo | User interface, AR rendering, GPS spatial collection |
| **Compute Eye** | Python, OpenCV, TensorFlow Lite | Image preprocessing, local feature classification, mass inference |
| **Cloud Brain** | Node.js, TypeScript, PostgreSQL | High-performance API routing, spatial geohashing optimizations |
| **Telemetry** | WebSockets (ws) | Low-latency state sync and leaderboard event distribution |
| **Infrastructure** | Docker, PostgreSQL Migrations | Sandboxed local testing, schema versioning, repeatable seed inputs |

## 🚀 Quick Start & Environment Initialization

Get your local machine up and running inside the sandboxed environment. 

### Prerequisites
Ensure your local environment has **Docker**, **Node.js LTS**, and **Python 3.10+** installed.

### 1. Initialize the Base Workspace
Run the developer provisioning script to check dependencies, generate environment configurations, and install workspace dependencies:
```bash
chmod +x scripts/setup-dev-environment.sh
./scripts/setup-dev-environment.sh
```

### 2. Launch the Infrastructure
Spin up the local PostgreSQL instance, complete with applied migrations and pre-loaded material density seed tables:
```bash
docker-compose up -d --build
```

### 3. Verify System Operations
Execute the unified test suite to validate that your API routing, local vision components, and weight calculations match up:
```bash
./scripts/run-tests.sh
```

---

## 📜 Contribution & Guardrails

We operate under the **USAL-1.0 License**. We view code as a natural byproduct of turning sand into silicon to watch over the soil. 

*   **To explore system workflows:** Please review the deep-dive manuals found in `architecture/UUON-EcoArchitect-DataFlow.md`.
*   **To report performance bottlenecks:** Please leverage the standardized structure inside `.github/ISSUE_TEMPLATE/bug-report.md`.
*   **To write features:** Ensure every new analytics module includes matching validation metrics in the `tests/unit/utils/` folder.

---

> *"The dirt of the desert builds a gritty resilience. Silicon is just sand with a purpose. Let's clean the house."*



---
## 📁 Recommended Repository Structure
```
ecoArchitect-foundation/
│
├── README.md                          ⭐ Main documentation (GitHub homepage)
├── CONTRIBUTING.md                    👥 Contribution guidelines
├── LICENSE                            📜 USAL-1.0 License
├── CHANGELOG.md                       📝 Version history
├── CODE_OF_CONDUCT.md                 🤝 Community guidelines
│
├── docs/                              📚 Documentation & Guides
│   ├── 00-START-HERE.txt
│   ├── QUICK-START.md
│   ├── INDEX.md
│   ├── SUMMARY.txt
│   ├── FINAL-DELIVERY-COMPLETE.txt
│   └── GITHUB-REPO-STRUCTURE.md (this file)
│
├── architecture/                      🏗️ Architecture & System Design
│   ├── UUON-EcoArchitect-Console-Setup.md
│   ├── UUON-EcoArchitect-DataFlow.md
│   ├── UUON-EcoArchitect-Operations.md
│   ├── UUON-EcoArchitect-QuickReference.md
│   ├── AR-ECOSYSTEM-ANALYSIS.md
│   └── diagrams/
│       ├── system-architecture.ascii
│       ├── data-flow.ascii
│       ├── state-machine.ascii
│       └── database-schema.sql
│
├── features/                          ✨ Feature Documentation
│   ├── GOOGLE-LENS-COMPUTER-VISION.md
│   ├── GOOGLE-LENS-IMPLEMENTATION.md
│   ├── AR-QUICK-START-CODES.md
│   ├── TRACE-FIRST-PHASE-ALPHA-RECON.md
│   └── algorithms/
│       ├── weight-estimation.md
│       ├── geohashing-optimization.md
│       └── environmental-impact.md
│
├── implementation/                    🛠️ Setup & Deployment
│   ├── SETUP-CHECKLIST.md
│   ├── DELIVERY-MANIFEST.md
│   ├── _FILE-MANIFEST.txt
│   ├── docker-compose.yml
│   ├── .env.example
│   └── database/
│       ├── schema.sql
│       ├── migrations/
│       │   ├── 001-initial-schema.sql
│       │   ├── 002-add-google-lens.sql
│       │   └── 003-add-environmental-impact.sql
│       └── seeds/
│           ├── material-reference.sql
│           └── test-data.sql
│
├── src/                               💻 Source Code
│   │
│   ├── frontend/
│   │   └── react-native/
│   │       ├── app.tsx
│   │       ├── package.json
│   │       ├── tsconfig.json
│   │       ├── screens/
│   │       │   ├── WalkingScreen.tsx
│   │       │   ├── ARScreen.tsx
│   │       │   ├── ScanScreen.tsx
│   │       │   └── DashboardScreen.tsx
│   │       ├── components/
│   │       │   ├── ScanTrashItem.tsx
│   │       │   ├── ItemResultsCard.tsx
│   │       │   ├── EnvironmentalDashboard.tsx
│   │       │   └── LeaderboardView.tsx
│   │       ├── services/
│   │       │   ├── GoogleVisionService.ts
│   │       │   ├── DatabaseService.ts
│   │       │   ├── GPSService.ts
│   │       │   └── ARService.ts
│   │       ├── styles/
│   │       │   ├── colors.ts
│   │       │   ├── typography.ts
│   │       │   └── spacing.ts
│   │       └── utils/
│   │           ├── weight-calculator.ts
│   │           ├── co2-calculator.ts
│   │           └── formatters.ts
│   │
│   ├── backend/
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   ├── index.ts
│   │   ├── api/
│   │   │   ├── routes/
│   │   │   │   ├── items.ts
│   │   │   │   ├── users.ts
│   │   │   │   ├── impact.ts
│   │   │   │   └── auth.ts
│   │   │   └── middleware/
│   │   │       ├── auth.ts
│   │   │       ├── validation.ts
│   │   │       └── errorHandler.ts
│   │   ├── services/
│   │   │   ├── DatabaseService.ts
│   │   │   ├── GoogleVisionService.ts
│   │   │   ├── WeightEstimationService.ts
│   │   │   └── EnvironmentalImpactService.ts
│   │   ├── database/
│   │   │   ├── connection.ts
│   │   │   └── queries/
│   │   │       ├── trash-items.ts
│   │   │       ├── users.ts
│   │   │       └── impact.ts
│   │   └── websocket/
│   │       ├── server.ts
│   │       └── handlers/
│   │           ├── item-scanned.ts
│   │           ├── user-update.ts
│   │           └── leaderboard-update.ts
│   │
│   └── cv/
│       ├── requirements.txt
│       ├── google_lens_integration.py
│       ├── weight_estimation/
│       │   ├── estimator.py
│       │   ├── models/
│       │   │   └── density-reference.json
│       │   └── tests/
│       │       └── test_estimator.py
│       └── offline/
│           ├── tflite_model.py
│           └── fallback-classifier.py
│
├── tests/                             🧪 Testing
│   ├── unit/
│   │   ├── services/
│   │   │   ├── GoogleVisionService.test.ts
│   │   │   ├── DatabaseService.test.ts
│   │   │   └── WeightEstimation.test.ts
│   │   └── utils/
│   │       ├── weight-calculator.test.ts
│   │       └── co2-calculator.test.ts
│   ├── integration/
│   │   ├── api-endpoints.test.ts
│   │   ├── database-operations.test.ts
│   │   └── websocket-communication.test.ts
│   ├── load/
│   │   ├── concurrent-users.load.ts
│   │   └── database-stress.load.ts
│   └── fixtures/
│       ├── sample-images/
│       └── test-data.json
│
├── .github/                           🔧 GitHub Configuration
│   ├── workflows/
│   │   ├── ci.yml                     (Test on every push)
│   │   ├── deploy.yml                 (Deploy to production)
│   │   ├── security-scan.yml          (Security checks)
│   │   └── performance.yml            (Benchmark tracking)
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug-report.md
│   │   ├── feature-request.md
│   │   └── question.md
│   └── PULL_REQUEST_TEMPLATE.md
│
├── scripts/                           📜 Utility Scripts
│   ├── setup-dev-environment.sh       (Dev setup)
│   ├── run-tests.sh                   (Run all tests)
│   ├── build.sh                       (Build project)
│   ├── deploy.sh                      (Deploy to production)
│   └── database/
│       ├── migrate-up.sh
│       └── seed-data.sh
│
├── config/                            ⚙️ Configuration
│   ├── development.env
│   ├── staging.env
│   ├── production.env
│   └── database.config.ts
│
├── .gitignore                         🚫 Git ignore rules
├── .env.example                       📋 Environment template
├── docker-compose.yml                 🐳 Docker orchestration
├── Dockerfile                         🐳 Docker image
├── package.json                       📦 NPM dependencies
├── tsconfig.json                      ⚙️ TypeScript config
└── .editorconfig                      📐 Editor configuration
```
---
## 📝 Key Files Explained
### Root Level
| File | Purpose |
|------|---------|
| `README.md` | Main project documentation (homepage) |
| `CONTRIBUTING.md` | Contribution guidelines |
| `LICENSE` | USAL-1.0 license |
| `CHANGELOG.md` | Version history & release notes |
| `CODE_OF_CONDUCT.md` | Community guidelines |
### Directories
| Directory | Purpose |
|-----------|---------|
| `docs/` | Documentation & guides |
| `architecture/` | System design & architecture |
| `features/` | Feature documentation & algorithms |
| `implementation/` | Setup, deployment, database |
| `src/` | Source code (frontend, backend, CV) |
| `tests/` | Unit, integration, load tests |
| `.github/` | GitHub workflows & templates |
| `scripts/` | Utility scripts |
| `config/` | Environment configurations |
---
## 🔄 GitHub Workflows
### File: `.github/workflows/ci.yml`
Runs on every push:
- Unit tests
- Integration tests
- Linting
- Type checking
- Coverage reporting
### File: `.github/workflows/deploy.yml`
Runs on release tag:
- Build Docker image
- Run smoke tests
- Deploy to staging
- Deploy to production
- Send notifications
### File: `.github/workflows/security-scan.yml`
Runs daily:
- Dependency vulnerability scan
- Code security audit
- Secret detection
- SAST analysis
### File: `.github/workflows/performance.yml`
Runs on PR:
- Performance benchmark
- Comparison with baseline
- Memory leak detection
- Load testing
---
## 📋 Issue Templates
### Location: `.github/ISSUE_TEMPLATE/`
**bug-report.md**
- What's happening (description)
- How to reproduce
- Expected behavior
- Environment info
- Logs/screenshots
**feature-request.md**
- Problem description
- Proposed solution
- Alternatives considered
- Use cases
**question.md**
- Question title
- Detailed question
- Relevant context
- What you've already tried
---
## 🏷️ GitHub Labels
Recommended labels for issues:
```
- bug             (Something isn't working)
- enhancement     (New feature or request)
- documentation   (Improvements or additions to documentation)
- good first issue (Good for newcomers)
- help wanted     (Need community assistance)
- performance     (Performance improvement)
- security        (Security vulnerability)
- testing         (Test coverage)
- wontfix         (Not planned to be fixed)
- question        (Further information requested)
```
… 173 more lines. Show full content
