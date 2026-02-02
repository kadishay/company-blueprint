# Agent Logging System

This document defines the logging system for spawned agents in the AI startup management system.

## Logging Rule

When an agent is spawned to perform work in any role, it must follow a two-step memory process:
1. **Retrieval**: Read recent logs in its specific library to "remember" history and context.
2. **Execution**: Perform the task.
3. **Storage**: Store detailed thoughts and data in the role-specific log library.
4. **HL Logging**: Log a one-sentence summary in the High-Level Master Log.

## Log Structure

Each log entry should include:
- **Timestamp**: When the agent was spawned and when actions were taken
- **Agent ID**: Unique identifier for the spawned agent instance
- **Thoughts**: Internal reasoning and decision-making process
- **Actions Taken**: Specific tasks or decisions executed
- **Data**: Relevant information, context, or outputs generated
- **Status**: Current state (active, completed, blocked, etc.)

## Log Libraries

Each role has a dedicated log directory located at `/logs/[role-name]/`:

### Executive Leadership Logs
- `/logs/board-of-directors/` - Board meeting notes, advice, and guidance
- `/logs/ceo/` - Vision statements, strategic decisions, and key initiatives
- `/logs/chief-of-staff/` - Organizational analysis and role recommendations

### Product & Technology Logs
- `/logs/cto/` - Architecture decisions, technical standards, and system designs
- `/logs/pm/` - Task breakdowns, backlog management, and requirement specifications
- `/logs/developer/` - Code implementations, bug fixes, and technical solutions
- `/logs/product-designer/` - Design decisions, UX research, and UI prototypes

### Operations & Growth Logs
- `/logs/cgo/` - Growth experiments, market analysis, and acquisition strategies
- `/logs/operations-finance/` - Resource allocation, budget decisions, and efficiency metrics

## High-Level (HL) Master Log

All operations across all roles must be summarized in a single line in the centralized master log:

**Location**: `/logs/master_log.md`

**Format**: `DD.MM.YY, HH:MM: [Role] [Action Summary].`

**Example**: `29.01.26, 18:06: Developer built feature X.`

## Usage Guidelines

1. **Spawn Event**: When an agent is spawned, create a new log file with timestamp
2. **Continuous Logging**: Agent updates log as it works through tasks
3. **Completion**: Final status and summary written before agent terminates
4. **Context Retrieval**: **CRITICAL**: Before beginning any new task or session, an agent **MUST** read the most recent entries in its role-specific log library to maintain continuity and remember history.
5. **Retention**: Logs are kept for historical reference and learning
6. **Access**: Logs can be reviewed by CEO, Chief of Staff, and relevant stakeholders

## Log File Naming Convention

Format: `YYYY-MM-DD_HH-MM-SS_[agent-id]_[task-summary].md`

Example: `2026-01-29_15-30-00_dev-001_implement-user-auth.md`
