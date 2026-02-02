# Agent Log Libraries

This directory contains dedicated log libraries for each organizational role in the company.

## Directory Structure

```
logs/
├── board-of-directors/    # Board meeting notes and advisory guidance
├── ceo/                   # CEO vision, strategy, and key decisions
├── chief-of-staff/        # Organizational analysis and recommendations
├── cto/                   # Technical architecture and standards
├── pm/                    # Product tasks, backlog, and requirements
├── developer/             # Code implementations and technical work
├── product-designer/      # UX/UI designs and research
├── cgo/                   # Growth strategies and market analysis
└── operations-finance/    # Resource management and financial decisions
```

## Purpose

Each directory stores logs from agents spawned in that role. Agents record their:
- Thoughts and reasoning
- Actions and decisions
- Data and outputs
- Current status

## Log File Format

Files follow the naming convention: `YYYY-MM-DD_HH-MM-SS_[agent-id]_[task-summary].md`

See [agent_logging.md](../.claude/agent_logging.md) for complete logging rules and guidelines.
