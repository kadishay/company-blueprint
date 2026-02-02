# Company Skills Library

This directory contains Claude Skills for each organizational role in the AI startup management system.

## Available Skills

### Executive Leadership
- **[board-of-directors](./board-of-directors/SKILL.md)** - Strategic advice and governance guidance
- **[ceo](./ceo/SKILL.md)** - Vision setting and strategic leadership
- **[chief-of-staff](./chief-of-staff/SKILL.md)** - Organizational analysis and coordination

### Product & Technology
- **[cto](./cto/SKILL.md)** - Technical architecture and standards
- **[pm](./pm/SKILL.md)** - Product management and task translation
- **[developer](./developer/SKILL.md)** - Full-stack development and implementation
- **[product-designer](./product-designer/SKILL.md)** - UX/UI design and user research

### Operations & Growth
- **[cgo](./cgo/SKILL.md)** - Growth strategy and market expansion
- **[operations-finance](./operations-finance/SKILL.md)** - Resource management and financial planning

## How to Use Skills

Each skill is a directory containing a `SKILL.md` file that defines:
- **Name**: Unique identifier for the skill
- **Description**: What the skill does
- **Capabilities**: What the agent can do in this role
- **Instructions**: How to operate as this role
- **Output Format**: Expected deliverables

## Integration with Work System

Skills integrate with the company's work management system:
- Agents log their work in role-specific directories under `/logs/`
- Tasks are managed in `/work/` (to-do, in-progress, done)
- All skills follow the organizational structure defined in `.claude/company_roles.md`

## Skill Structure

Each skill follows the Claude Skills format:
```
skills/
└── [role-name]/
    └── SKILL.md (with YAML frontmatter)
```

See the [Claude Skills documentation](https://platform.claude.com/docs/en/build-with-claude/skills-guide) for more details on the Skills format.
