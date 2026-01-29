# Work Library

This directory manages all tasks and work items for the AI startup company.

## Directory Structure

```
work/
├── vision/         # Company vision, mission, and strategic definitions (CEO)
├── to-do/          # Tasks waiting to be started
├── in-progress/    # Tasks currently being worked on
├── qa/             # Tasks waiting for Quality Assurance
└── done/           # Completed tasks
```

## How It Works

### Task Lifecycle
1. **Vision** - CEO defines mission, metrics, and product definitions in `vision/vision.md`
2. **Architecture** - CTO reads vision and creates technical architecture
3. **To Do** - PM translates vision into actionable tasks
4. **In Progress** - Developer picks task and implements
5. **QA** - Quality Assurance verifies implementation and moves to Done or back to In Progress
6. **Done** - Completed and verified tasks are archived here

See [task_lifecycle.md](../.claud/task_lifecycle.md) for the complete workflow.

### Who Can Do What
All personas (CEO, PM, Developer, Designer, etc.) can:
- Create new tasks in `to-do/`
- Move tasks between directories
- Update task details and status
- Assign tasks to specific roles

### Task File Naming
Format: `[priority]-[role]-[task-name].md`

Examples:
- `high-developer-implement-user-auth.md`
- `medium-designer-create-landing-page.md`
- `low-cto-review-architecture.md`

## Guidelines

- Keep task files descriptive and actionable
- Update task status as work progresses
- Move tasks promptly to reflect current state
- Archive completed tasks in `done/` for historical reference

See [work_management.md](../.claud/work_management.md) for complete rules and task file format.
