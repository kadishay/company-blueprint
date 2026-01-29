# Work Management System

This document defines the work management system for tracking tasks across the AI startup.

## Work Library Structure

All work is managed in the `/work/` directory with three subdirectories representing task stages:

```
work/
├── to-do/          # Tasks that need to be started
├── in-progress/    # Tasks currently being worked on
└── done/           # Completed tasks
```

## Task Management Rules

### 1. Task Creation
- Any persona can create a new task in the `to-do/` directory
- Tasks should be created as markdown files with clear descriptions
- File naming: `[priority]-[role]-[task-name].md` (e.g., `high-pm-user-authentication.md`)

### 2. Task Movement
- **To Do → In Progress**: When an agent starts working on a task
- **In Progress → Done**: When a task is completed and verified
- **In Progress → To Do**: If a task is blocked or needs to be re-prioritized

### 3. Persona Permissions
All personas can:
- ✅ Add new tasks to `to-do/`
- ✅ Move tasks between directories
- ✅ Update task status and details
- ✅ Assign tasks to specific roles

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
- YYYY-MM-DD: Created by [Role]
- YYYY-MM-DD: Moved to In Progress by [Role]
- YYYY-MM-DD: Completed by [Role]
```

## Workflow

1. **PM** translates vision into tasks → adds to `to-do/`
2. **Developer** picks task from `to-do/` → moves to `in-progress/`
3. **Developer** completes work → moves to `done/`
4. Any role can review `done/` for verification
5. **Board Meetings**: Held every few iterations. The Board provides strategic evaluation and determines if the company should continue or shut down.

## Integration with Logging

When an agent works on a task:
1. Task file is moved to `in-progress/`
2. Agent logs work in their role-specific log library
3. Task file is updated with progress notes
4. Upon completion, task moves to `done/` with final summary
