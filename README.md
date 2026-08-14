# ecoArchitect-Foundation: GitHub Repository Structure
**Repository Name**: `ecoArchitect-foundation`  
**Organization**: UUON-Foundation  
**URL**: https://github.com/UUON-Foundation/ecoArchitect-foundation  

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
