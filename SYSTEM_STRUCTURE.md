# AI Startup Management System - Complete Structure

This document provides a comprehensive overview of the entire management system structure.

## 📋 Claude Rules (`.claud/`)

1. **[company_roles.md](file:///Users/yotamka/Code/Company/.claud/company_roles.md)** - Defines all 9 organizational roles and responsibilities
2. **[agent_logging.md](file:///Users/yotamka/Code/Company/.claud/agent_logging.md)** - Logging system for agent thoughts and data
3. **[work_management.md](file:///Users/yotamka/Code/Company/.claud/work_management.md)** - Task workflow and management rules
4. **[task_lifecycle.md](file:///Users/yotamka/Code/Company/.claud/task_lifecycle.md)** - Complete task lifecycle from vision to completion

## 🎯 Skills (`skills/`)

Each role has a dedicated skill with YAML frontmatter and instructions:

### Executive Leadership
- **board-of-directors** - Strategic oversight
- **ceo** - Vision and strategy
- **chief-of-staff** - Organizational coordination

### Product & Technology
- **cto** - Architecture and standards
- **pm** - Product management
- **developer** - Full-stack implementation
- **qa** - Quality assurance and testing
- **product-designer** - UX/UI design

### Operations & Growth
- **cgo** - Growth and market expansion
- **operations-finance** - Resource management

## 📂 Work Library (`work/`)

```
work/
├── vision/                 # CEO's vision document
├── to-do/                  # Tasks waiting to start
├── in-progress/            # Active tasks
├── qa/                     # Tasks in QA review
├── done/                   # Completed tasks
└── design/                 # Design Documentation
    ├── product-definitions/    # PM & Designer specs
    ├── architecture/          # CTO architecture docs
    └── execution-logs/        # Developer implementation logs
```

## 🏗️ Product Development Library (`product/`)

The root directory for all source code, components, and application assets.
- Built by: **Developer**
- Verified by: **QA**

## 📊 Logs (`logs/`)

The master log records a one-sentence summary of every operation:
- **[master_log.md](file:///Users/yotamka/Code/Company/logs/master_log.md)** - Centralized activity stream

Each role also has a dedicated log directory:
- `board-of-directors/`
- `ceo/`
- `chief-of-staff/`
- `cto/`
- `pm/`
- `developer/`
- `qa/`
- `product-designer/`
- `cgo/`
- `operations-finance/`

## 🔄 Task Lifecycle Workflow

```
1. CEO → Updates /work/vision/vision.md
   ↓
2. CTO → Reads vision, creates /work/design/architecture/
   ↓
3. PM → Reads vision + architecture, creates tasks in /work/to-do/
        and specs in /work/design/product-definitions/
   ↓
4. Developer → Picks task, moves to /work/in-progress/
              → **Builds code in /product/**
              → Logs in /work/design/execution-logs/
              → Moves to /work/qa/
   ↓
5. QA → Verifies implementation in /product/
      → Moves to /work/done/ (or back to in-progress)
```

## ✅ System Alignment Verification

All components are aligned:
- ✅ Company roles reference task lifecycle
- ✅ Skills include proper documentation paths
- ✅ Work management integrated with lifecycle
- ✅ Design folder supports all workflow stages
- ✅ Logging system supports all roles

## 🚀 Quick Start

1. **CEO** starts by filling out `/work/vision/vision.md`
2. **CTO** reviews vision and creates architecture
3. **PM** creates tasks in `/work/to-do/`
4. **Developer** implements tasks
5. All agents log their work in respective directories
