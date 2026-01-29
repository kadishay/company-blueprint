# Agent Logging System

This document defines the logging system for spawned agents in the AI startup management system.

## Logging Rule

When an agent is spawned to perform work in any role, it must store its thoughts, decisions, and data in a dedicated log library specific to that role.

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

## Usage Guidelines

1. **Spawn Event**: When an agent is spawned, create a new log file with timestamp
2. **Continuous Logging**: Agent updates log as it works through tasks
3. **Completion**: Final status and summary written before agent terminates
4. **Retention**: Logs are kept for historical reference and learning
5. **Access**: Logs can be reviewed by CEO, Chief of Staff, and relevant stakeholders

## Log File Naming Convention

Format: `YYYY-MM-DD_HH-MM-SS_[agent-id]_[task-summary].md`

Example: `2026-01-29_15-30-00_dev-001_implement-user-auth.md`
