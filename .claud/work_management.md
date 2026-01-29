# Work Management System

This document defines the work management system for tracking tasks across the AI startup.

## Work Library Structure

All work is managed in the `/work/` directory with three subdirectories representing task stages:

```
work/
├── vision/                 # CEO's vision document
├── to-do/                  # Tasks that need to be started
├── in-progress/            # Tasks currently being worked on
├── qa/                     # Tasks waiting for Quality Assurance
├── done/                   # Completed tasks
└── design/                 # Consolidated design documentation
    ├── product-definitions/
    ├── architecture/
    └── execution-logs/

## Product Development Library (`/product/`)
The `/product/` directory is the root of all buildable source code. Developers implement features here, and QA verifies them here. This is distinct from the `/work/` directory which manages the *process* of development.
```

## Task Management Rules

### 0. Proactive Role Switching
To maintain momentum, the agent should proactively switch to the next required role (e.g., CEO → CTO → PM → Developer) within a single session as long as the path forward is clear and doesn't explicitly block on user input. 

**Chairman's Directive (Autonomy & Iterations):**
- **Autonomy**: Always verify the level of autonomy (Low/Medium/High) granted by the Chairman at the start of a session.
- **Iteration Limit**: Confirm how many "autonomous" role-switches/iterations are permitted before a mandatory Board Review is required.
- **Review Points**: Major strategic decisions or milestones ALWAYS require Chairman approval regardless of autonomy level.

### 1. Task Creation
- Any persona can create a new task in the `to-do/` directory
- Tasks should be created as markdown files with clear descriptions
- File naming: `[priority]-[role]-[task-name].md` (e.g., `high-pm-user-authentication.md`)

### 2. Task Movement
- **To Do → In Progress**: When an agent starts working on a task
- **In Progress → QA**: When a Developer completes implementation
- **QA → Done**: When QA verifies and approves the task
- **QA → In Progress**: If QA identifies issues and sends the task back for fixes
- **In Progress → To Do**: If a task is blocked or needs to be re-prioritized

**Task Completion Numbering Rule**:
When moving a task to `/work/done/`, the mover **MUST** append a sequential number to the beginning of the filename (e.g., `001-task-name.md`). The number should be one higher than the highest number currently in the `done/` directory. This ensures the order of completion is visible at a glance.

**Movement Logging Rule**:
Every time a task is moved between directories, the agent responsible **MUST** append a log entry to the `## History` section of the task file.
Format: `DD.MM.YY, HH:MM: [Role] Moved from [Source] to [Destination]. [Optional Comment]`

### 3. Persona Permissions
All personas can:
- ✅ Add new tasks to `to-do/`
- ✅ Move tasks between directories
- ✅ Update task status and details
- ✅ Assign tasks to specific roles

### 4. Human Intervention (External Actions)
Agents are prohibited from performing certain real-world actions directly. In these cases, the agent **MUST** proactively identify the need, verify it is necessary, and **suggest** the action to the **Chairman of the Board**. Examples include:
- Buying a domain name (suggest the specific TLD and provider)
- Connecting to a private API (suggest the specific integration path)
- Procuring API keys (provide the documentation link for the user)
- Using or setting up a personal cloud account
- Financial transactions

**Protocol**: When a blocker is identified, create a task in `to-do/` assigned to "Chairman" with a clear recommendation on how to proceed.

### 4. Task File Format

Each task file should include:

```markdown
# [Task Title]

**Priority**: High | Medium | Low
**Assigned To**: [Role Name]
**Created By**: [Role Name]
**Created Date**: YYYY-MM-DD
**Status**: To Do | In Progress | Done

## Description
[Detailed description of the task]

## Acceptance Criteria
- [ ] Criterion 1
- [ ] Criterion 2

## Notes
[Any additional context, blockers, or updates]

## History
- DD.MM.YY, HH:MM: [Role] Created task. [Initial context]
- DD.MM.YY, HH:MM: [Role] Moved from [Source] to [Destination]. [Optional Comment]
- [Example]: 29.01.26, 18:06: Developer Moved from to-do to in-progress. Starting work on feature X.
```

## Workflow

1. **PM** translates vision into tasks → adds to `to-do/`
2. **Developer** picks task from `to-do/` → moves to `in-progress/`
3. **Developer** completes work → moves to `qa/`
4. **QA** verifies implementation → moves to `done/` (or back to `in-progress/`)
5. **Board Meetings**: Held every few iterations. The Board provides strategic evaluation and determines if the company should continue or shut down.

## Integration with Logging

When an agent works on a task:
1. Task file is moved to `in-progress/`
2. Agent logs work in their role-specific log library
3. Task file is updated with progress notes
4. Upon completion, task moves to `done/` with final summary
