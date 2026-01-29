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
- **product-designer** - UX/UI design

### Operations & Growth
- **cgo** - Growth and market expansion
- **operations-finance** - Resource management

## 📂 Work Library (`work/`)

```
work/
├── vision/         # CEO's vision document
├── to-do/          # Tasks waiting to start
├── in-progress/    # Active tasks
└── done/           # Completed tasks
```

## 📝 Design Documentation (`design/`)

```
design/
├── product-definitions/    # PM & Designer specs
├── architecture/          # CTO architecture docs
└── execution-logs/        # Developer implementation logs
```

## 📊 Logs (`logs/`)

Each role has a dedicated log directory:
- `board-of-directors/`
- `ceo/`
- `chief-of-staff/`
- `cto/`
- `pm/`
- `developer/`
- `product-designer/`
- `cgo/`
- `operations-finance/`

## 🔄 Task Lifecycle Workflow

```
1. CEO → Updates /work/vision/vision.md
   ↓
2. CTO → Reads vision, creates /design/architecture/
   ↓
3. PM → Reads vision + architecture, creates tasks in /work/to-do/
        and specs in /design/product-definitions/
   ↓
4. Developer → Picks task, moves to /work/in-progress/
              → Implements code
              → Logs in /design/execution-logs/
              → Moves to /work/done/
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
