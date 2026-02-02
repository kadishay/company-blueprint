# System Architecture: The Executive Agent

**Date**: 2026-02-02
**Author**: CTO
**Version**: 1.0

## High-Level Diagram

```mermaid
graph TD
    Client[Web/CLI Client] --> API[API Gateway]
    API --> Core[Agent Runtime]
    Core --> Tools[Tool Registry]
    Core --> Memory[Memory System]
    Core --> LLM[LLM Provider]
    Tools --> Ext[External Services (AWS, Jira, etc.)]
```

## Technology Stack

The board has emphasized "High-Ticket" and "Enterprise Reliability". Our stack must reflect robustness, observability, and type safety.

- **Language**: TypeScript (Node.js 20+) - For type safety and ecosystem.
- **Agent Framework**: LangChain / LangGraph - For stateful, graph-based execution loops.
- **Database**: PostgreSQL (Prisma ORM) - Relational data (Tasks, Users, Logs).
- **Vector Store**: pgvector (inside Postgres) - Semantic search for context.
- **Queue**: Redis / BullMQ - For reliable async task execution (Crucial for "autonomous" agents).
- **Observability**: OpenTelemetry - Enterprise requirement for detailed tracing.

## Core Components

### 1. Agent Runtime
The heart of the system. Instead of a simple "ReAct" loop, we will implement a state-machine based architecture (using LangGraph) to allow for complex multi-step workflows with checkpoints.

### 2. Tool Registry
A strictly typed interface for all external capabilities.
```typescript
interface AgentTool {
  name: string;
  description: string;
  schema: z.ZodSchema;
  execute: (args: any) => Promise<any>;
}
```

### 3. Memory System
- **Short-term**: Current execution context window.
- **Long-term**: Vector-based semantic recall of past successes/failures.

## Development Standards
- **Strict Typing**: No `any`.
- **Testing**: Jest/Vitest for unit tests. E2E tests for full agent loops.
- **Linting**: ESLint + Prettier.
- **Logging**: Structured JSON logging.

## MVP Scope (Iter 1)
- Setup Monorepo structure.
- Implement basic "Echo" agent with one tool (System Time).
- Verify end-to-end execution loop.
