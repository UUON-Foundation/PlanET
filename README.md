# UUON-EcoArchitect: Complete Configuration Summary
**Document Version:** 1.0  
**Status:** PRODUCTION-READY  
**Last Updated:** 2026-08-14  
**Prepared For:** UUON Foundation Gamified Trash-Cleanup Initiative
---
## 📋 WHAT YOU HAVE
You now have a complete, production-ready Master Agent orchestration system for your gamified trash-cleanup application. This system is designed to manage the complex interactions between:
- **React Native Frontend** (TypeScript)
- **Google Maps Platform** (geospatial backend)
- **Unity AR Foundation** (3D augmented reality)
- **PostgreSQL + PostGIS** (spatial database)
- **AWS S3** (photo storage)
- **Computer Vision Pipeline** (photo verification)
The system is orchestrated by **UUON-EcoArchitect**, a Master Agent that delegates work to three specialized sub-agents, each with precisely defined responsibilities.
---
## 📚 DOCUMENTS PROVIDED
### 1. **UUON-EcoArchitect-Console-Setup.md** (Complete Configuration)
This is your **definitive reference** for setting up the Claude Console environment.
**Contents:**
- ✅ Networking configuration (7 whitelisted hosts)
- ✅ Package dependencies (8 packages, versions locked)
- ✅ Metadata tags (10 key-value pairs)
- ✅ Master Agent system prompt (complete, copy-paste ready)
- ✅ Sub-Agent system prompts (3 agents, each with injection points)
- ✅ Validation checklist (before launch)
- ✅ Quick start guide
**Action:** Copy-paste each section directly into Claude Console. No modification needed.
---
### 2. **UUON-EcoArchitect-QuickReference.md** (Console Interface Cheat Sheet)
Quick lookup for Claude Console setup.
**Contents:**
- ✅ Copy-paste blocks for each configuration section
- ✅ Agent setup instructions (names, models, effort levels)
- ✅ Testing procedures (4 test scenarios, expected responses)
- ✅ Architectural anchors (Five UUs reference)
- ✅ Operational rules with context injection
- ✅ Performance targets (11 key metrics)
- ✅ Troubleshooting quick links
**Action:** Bookmark this. Use it when setting up agents in the console.
---
### 3. **UUON-EcoArchitect-DataFlow.md** (Complete System Architecture)
Visual end-to-end walkthrough of how data flows from user phone to rewards.
**Contents:**
- ✅ System architecture diagram (ASCII)
- ✅ 10-step user journey (Walking → Reward)
- ✅ State machine diagram (all 7 states, transitions)
- ✅ PostgreSQL schema (4 main tables, relationships)
- ✅ WebSocket real-time synchronization diagram
- ✅ Data validation points (at each layer)
**Action:** Print or bookmark. Share with team to ensure shared understanding.
---
### 4. **UUON-EcoArchitect-Operations.md** (Deployment, Troubleshooting, Monitoring)
Operations manual for running the system in production.
**Contents:**
- ✅ Pre-launch checklist (3 sections: Master Agent, Sub-Agents, Environment)
- ✅ Test scenarios (4 detailed tests, expected responses, success criteria)
- ✅ Common issues & solutions (5 real-world problems, root causes, fixes)
- ✅ Performance monitoring (12 metrics, targets, alerts, actions)
- ✅ Logging strategy (detailed log examples from each agent)
- ✅ Security checklist (4 categories: API keys, network, validation, access)
- ✅ Escalation procedure (4 levels: self-diagnosis → master → environment → external)
- ✅ Support template (structured request format)
**Action:** Keep accessible during deployment and operations.
---
## 🎯 THE FIVE UUs (Grounding Principle)
Every decision your Master Agent makes is grounded in these five architectural pillars:
```
UUHO (Who):
  Ground users, municipal teams, Claude sub-agents
  System Impact: High-concurrency WebSocket tracking for 1000+ users
UUHAT (What):
  GPS streams, photo uploads, trash event tokens
  System Impact: Fast CV verification + reward issuance
UUHERE (Where):
  Global coordinate grids (lat/long) mapped locally
  System Impact: PostgreSQL/PostGIS spatial indexing (R-Trees, Geohashes)
UWHEN (When):
  Real-time tracking + time-series historical data
  System Impact: Predictive engine identifies hot-spots for target spawning
UUHY (Why):
  Environmental intelligence, gamified behavior reinforcement
  System Impact: Claude Master Agent drives strategy and rewards
```
When delegating work, reference these pillars. They guide correct decisions.
---
## 🤖 THE THREE SUB-AGENTS
### Sub-Agent 1: GeoMap-Integrator
**Role:** Geospatial mapping and optimization  
**Key Rules:**
- GPS debounce: 2000ms minimum between updates
- Geohash precision: 7 for bulk queries, 8 within 500m
- API optimization: Batch queries by geohash cell
- Response time: <200ms from database
**When to Spawn:**
- "Design the GPS update strategy"
- "Optimize Google Maps API costs"
- "Implement coordinate batching"
---
### Sub-Agent 2: Unity-AR-Bridge
**Role:** React Native ↔ C# cross-platform communication  
**Key Rules:**
- JSON schema: Always include callback_token
- Handshake: C# must ACK before AR anchor spawns
- Timeout: 5000ms max; exponential backoff retry
- Fallback: Return to 2D map if no response
**When to Spawn:**
- "Design the JSON bridge protocol"
- "Fix AR anchor placement errors"
- "Debug callback timeout issues"
---
### Sub-Agent 3: UI-Flow-Guard
**Role:** User experience, state management, performance  
**Key Rules:**
- Frame rate: Maintain ≥60 FPS during transitions
- State transitions: Only valid transitions allowed (no orphaned states)
- Component cleanup: Unmount MapView during AR mode
- State freezing: Freeze global updates while in AR session
**When to Spawn:**
- "Design the user journey state machine"
- "Debug frame rate drops"
- "Optimize component unmounting"
---
## ⚙️ HOW TO USE THIS SYSTEM
### Step 1: Set Up the Claude Console Environment
1. Open Claude Console
2. Create new environment: `UUON-EcoArchitect`
3. Use **UUON-EcoArchitect-Console-Setup.md** to configure:
   - Networking (7 hosts)
   - Packages (8 dependencies)
   - Metadata (10 tags)
4. Create Master Agent with provided prompt
5. Create 3 sub-agents with their respective prompts
**Time: ~30 minutes**
### Step 2: Run Validation Tests
1. Use **UUON-EcoArchitect-QuickReference.md** (Testing section)
2. Run 4 test scenarios against Master Agent
3. Verify each test response matches expected criteria
4. Document any failures
**Time: ~15 minutes**
### Step 3: Begin Architecture & Implementation
1. Ask Master Agent to design each system component
2. Master Agent spawns appropriate sub-agents
3. Sub-agents provide detailed designs, code, and validation strategies
4. You review, provide feedback, ask for refinements
5. Iterate until satisfied with architecture
**Time: Variable (1-2 weeks for full system)**
### Step 4: Deploy to Production
1. Use **UUON-EcoArchitect-Operations.md** (Deployment Checklist)
2. Verify all infrastructure is ready
3. Deploy React Native app, backend services, AR module
4. Run smoke tests
5. Monitor performance metrics (12 key metrics)
**Time: 1-3 days**
### Step 5: Operate & Maintain
1. Keep **UUON-EcoArchitect-Operations.md** open
2. Monitor performance dashboards daily
3. When issues arise, follow troubleshooting guide
4. Escalate to appropriate sub-agent if needed
5. Log all changes for provenance
**Time: Ongoing**
---
## 🎓 BEST PRACTICES
### When Asking Master Agent for Help
**❌ BAD:** "Build the app"  
**✅ GOOD:** "Design the GPS debounce strategy. Use Geohash precision 7 to batch coordinates and minimize Google Maps API calls. Target: <100ms latency to Map Server."
**❌ BAD:** "Fix the AR"  
**✅ GOOD:** "Spawn Unity-AR-Bridge. Debug why AR anchors appear 500m away. Verify: 1) Coordinate transform, 2) WGS84 validation, 3) Device GPS accuracy, 4) ACK handshake."
**❌ BAD:** "Make it faster"  
**✅ GOOD:** "Spawn UI-Flow-Guard. The map→AR transition takes 3 seconds at 15 FPS. Target: <500ms at 60 FPS. Profile: component unmounting, state freezing, AR init."
### Give Sub-Agents Context
Always provide:
- **What** you're trying to achieve
- **Why** it matters (reference Five UUs if relevant)
- **Where** in the system it occurs
- **Constraints** (performance budgets, user expectations)
### Request Code & Validation
Always ask for:
- **Design** (architecture, algorithm, data flow)
- **Code** (TypeScript, C#, SQL as appropriate)
- **Tests** (unit tests, integration tests, field tests)
- **Monitoring** (logging, metrics, alerts)
### Expect Detailed Responses
Sub-agents will provide:
- Complete code (copy-paste ready)
- Multiple test scenarios
- Performance benchmarks
- Fallback/error handling
- Integration points with other components
---
## 📊 KEY METRICS TO MONITOR
After deployment, track these 12 metrics daily:
| Metric | Target | Alert Level | Sub-Agent Owner |
|--------|--------|-------------|-----------------|
| GPS Update Latency | <100ms | >150ms | GeoMap-Integrator |
| Map Server Query Time | <200ms | >300ms | GeoMap-Integrator |
| AR Init Time | <3000ms | >5000ms | Unity-AR-Bridge |
| Photo Upload Time | <5000ms | >8000ms | GeoMap-Integrator |
| CV Verification Time | <5000ms | >8000ms | Backend |
| Frame Rate (Map) | 60 FPS | <58 FPS | UI-Flow-Guard |
| WebSocket Latency | <100ms | >200ms | Backend |
| Concurrent WebSocket Users | 1000+ | <500 | Backend |
| AR Anchor Placement Accuracy | ±1m | >±10m | Unity-AR-Bridge |
| GPS Debounce Enforcement | 100% (no <2s updates) | <95% | GeoMap-Integrator |
| State Machine Valid Transitions | 100% | <98% | UI-Flow-Guard |
| Memory Usage (per user session) | <50MB | >100MB | UI-Flow-Guard |
---
## 🆘 QUICK TROUBLESHOOTING
**Problem:** High Google Maps API costs  
**Solution:** Spawn GeoMap-Integrator → "Enforce 2000ms debounce strictly"
**Problem:** AR anchors in wrong location  
**Solution:** Spawn Unity-AR-Bridge → "Validate coordinate transformation and WGS84 bounds"
**Problem:** Frame rate drops below 60 FPS  
**Solution:** Spawn UI-Flow-Guard → "Profile map→AR transition"
**Problem:** JSON bridge timeout (>5 seconds)  
**Solution:** Spawn Unity-AR-Bridge → "Debug AR session init and callback protocol"
**Problem:** Photo verification takes >10 seconds  
**Solution:** Spawn GeoMap-Integrator → "Optimize photo upload and CV inference"
See **UUON-EcoArchitect-Operations.md** for detailed troubleshooting guides.
---
… 88 more lines. Show full content
