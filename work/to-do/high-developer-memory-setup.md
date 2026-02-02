# Task: Implement Persistent Memory

**Priority**: High
**Role**: Developer
**Status**: To Do

## Description
Connect the Executive Agent to a persistent database (Postgres) to store conversation history. This is the first step towards "Long-term Memory".

## Technical Requirements (per CTO)
- **Infrastructure**: Docker Compose with Postgres 15+
- **ORM**: Prisma
- **Schema**:
  - `Conversation` (id, timestamps)
  - `Message` (role, content, relation)

## Acceptance Criteria
- [ ] `docker compose up` starts DB
- [ ] Prisma migrations run successfully
- [ ] Agent startup connects to DB
- [ ] When Agent runs, it creates a new `Conversation` (or appends to existing)
- [ ] User input and Agent response are saved to `Message` table
- [ ] Restarting the agent preserves history (verified via DB query)
