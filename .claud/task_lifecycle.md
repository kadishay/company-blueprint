# Task Lifecycle

This document defines the complete lifecycle of tasks from vision to completion in the AI startup management system.

## Lifecycle Overview

```
CEO (Vision) → Board Meeting (Review) → CTO (Architecture) → PM (Tasks) → Developer (Implementation) → Done
                                                       ↓
                                               Design Documentation
```

## Detailed Workflow

### 1. CEO - Vision Definition
**Location**: `/work/vision/vision-[v#].md`

**Responsibilities**:
- Define company mission and strategic goals
- Set success metrics and KPIs
- Create high-level product concepts and definitions
- **Versioning**: Instead of revising existing files, always present a new vision document (e.g., `vision-v2.md`). The most recent file is the source of truth.

**Output**: New version of the vision document.

**Logs**: `/logs/ceo/`

---

### 2. Board Meeting - Strategic Review
**Triggered by**: Every few development iterations or major strategic shifts.

**Participants**: Board, CEO, and Prompting User.

**Process**:
1. **CEO Presentation**: CEO presents the current company status and vision.
2. **Feedback Loop (3 Iterations)**: 
   - Board provides feedback, criticism, or strategic evaluation.
   - CEO responds to feedback and potentially creates an updated vision version.
3. **Existential Check**: Board may determine if the company is no longer worthwhile.

**Output**: Finalized vision version for the cycle and meeting records in `/logs/board-of-directors/`.

---

### 3. CTO - Architecture & Requirements
**Triggered by**: Successful Board Meeting and newest vision version

**Responsibilities**:
- Read vision document
- Define technical architecture
- Establish high-level technical requirements
- Set technical standards and constraints
- Document architecture decisions in `/work/design/architecture/`

**Output**: Architecture documents and technical requirements

**Logs**: `/logs/cto/`

---

### 4. PM - Task Creation
**Triggered by**: Newest vision document and architecture definitions

**Responsibilities**:
- Read the most recent vision document and architecture requirements
- Break down vision into actionable tasks
- Create task files in `/work/to-do/`
- Define acceptance criteria for each task
- Prioritize tasks based on business value
- Document product definitions in `/work/design/product-definitions/`

**Output**: Task files in `/work/to-do/` with clear requirements

**Logs**: `/logs/pm/`

---

### 5. Developer - Implementation
**Triggered by**: Tasks available in `/work/to-do/`

**Responsibilities**:
1. **Select Task**: Pick highest priority task from `/work/to-do/`
2. **Move to In Progress**: Move task file to `/work/in-progress/`
3. **Implement**: Write code following CTO architecture and standards
4. **Test**: Verify functionality and quality
5. **Document**: Log implementation details in `/work/design/execution-logs/`
6. **Complete**: Move task to `/work/done/`

**Output**: Working code, tests, and execution documentation

**Logs**: `/logs/developer/`

---

## Design Documentation

### Product Definitions (`/work/design/product-definitions/`)
Created by: **PM** and **Product Designer**

Contains:
- Feature specifications
- User stories and requirements
- Product decisions and rationale
- UX/UI design documentation

### Architecture (`/work/design/architecture/`)
Created by: **CTO**

Contains:
- System architecture diagrams
- Technical design documents
- API specifications
- Database schemas

### Execution Logs (`/work/design/execution-logs/`)
Created by: **Developer**

Contains:
- Implementation summaries
- Technical decisions made during development
- Challenges and solutions
- Code structure explanations

## Integration Points

1. **Vision → Architecture**: CTO reviews vision to create technical foundation
2. **Vision + Architecture → Tasks**: PM combines both to create actionable work
3. **Tasks → Implementation**: Developer executes based on requirements
4. **Implementation → Design Docs**: Developer documents execution details

## Status Tracking

- **Vision**: New versions created by CEO as strategy evolves (never revised)
- **Architecture**: Updated by CTO when technical changes needed
- **Tasks**: Flow through to-do → in-progress → done
- **Design Docs**: Continuously updated as work progresses
