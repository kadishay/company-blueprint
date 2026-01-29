# Company Organizational Roles

This document defines the roles and responsibilities of all employees in the AI startup company management system.

## Executive Leadership

### Board of Directors
**Responsibilities:**
- Provides strategic advice and guidance on company vision
- Oversees major operational decisions
- Acts in an advisory capacity to executive leadership

### CEO (Chief Executive Officer)
**Responsibilities:**
- Creates and owns the initial idea, concepts, and vision
- Maintains the vision document in `/work/vision/vision.md`
- Defines success metrics and key performance indicators
- Sets overall company direction and strategy
- Final decision-maker on major initiatives

### Chief of Staff
**Responsibilities:**
- Acts as the CEO's right-hand and strategic partner
- Analyzes organizational needs and identifies gaps
- Determines which roles should be added next and provides rationale
- Coordinates cross-functional initiatives

## Product & Technology

### CTO / Architect
**Responsibilities:**
- Reads vision document and defines technical architecture
- Documents architecture in `/design/architecture/`
- Establishes technical standards and best practices
- Makes technology stack decisions
- Ensures scalability and technical excellence

### PM (Product Manager)
**Responsibilities:**
- Reads vision and architecture to understand requirements
- Translates vision into actionable tasks in `/work/to-do/`
- Documents product definitions in `/design/product-definitions/`
- Manages and prioritizes the product backlog
- Defines product requirements and specifications
- Coordinates between stakeholders and development team

### Developer
**Responsibilities:**
- Takes tasks from `/work/to-do/` and moves to `/work/in-progress/`
- Full stack development (frontend and backend)
- Data engineering and AI/ML implementation
- DevOps and infrastructure management
- Quality assurance, performance optimization, and testing
- Documents implementation in `/design/execution-logs/`
- Moves completed tasks to `/work/done/`

### Product Designer
**Responsibilities:**
- User Experience (UX) design and research
- User Interface (UI) design and prototyping
- Documents designs in `/design/product-definitions/`
- Ensures product usability and accessibility
- Creates design systems and guidelines

## Operations & Growth

### CGO (Chief Growth Officer)
**Responsibilities:**
- Drives market reach and customer acquisition
- Identifies and validates product-market fit
- Develops growth strategies and experiments
- Analyzes market trends and competitive landscape

### Operations / Finance
**Responsibilities:**
- Manages company resources and budget allocation
- Optimizes operational efficiency
- Financial planning and reporting
- Resource allocation and cost management

## Reporting Structure

```
Board of Directors (Advisory)
    ↓
CEO ←→ Chief of Staff
    ↓
    ├── Operations / Finance
    ├── CTO / Architect
    │   ├── PM (Product Manager)
    │   │   └── Product Designer
    │   └── Developer
    └── CGO (Chief Growth Officer)
```

## Role Interaction Guidelines

See [task_lifecycle.md](./task_lifecycle.md) for the complete workflow.

1. **CEO** creates vision in `/work/vision/vision.md` with mission, metrics, and definitions
2. **CTO** reads vision → defines architecture in `/design/architecture/`
3. **PM** reads vision + architecture → creates tasks in `/work/to-do/` and product specs in `/design/product-definitions/`
4. **Developer** picks task → moves to in-progress → implements → logs in `/design/execution-logs/` → moves to done
5. **Product Designer** creates UX/UI → documents in `/design/product-definitions/`
6. **Chief of Staff** identifies organizational needs → **CEO** approves new roles
7. **CGO** identifies market opportunities → **PM** prioritizes features
8. **Operations/Finance** ensures resources → All roles execute efficiently

