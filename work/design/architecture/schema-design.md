# Data Schema Design: Agent Memory

**Date**: 2026-02-02
**Author**: CTO
**Version**: 1.0

## Strategy
We will use **PostgreSQL** (via Docker) with **Prisma ORM** for type-safe database access.
This will provide the "Persistent State" required for autonomous execution.

## Schema Definition (Draft)

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model Conversation {
  id        String    @id @default(uuid())
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt
  messages  Message[]
}

model Message {
  id             String       @id @default(uuid())
  conversationId String
  role           String       // 'user' | 'assistant' | 'system'
  content        String
  createdAt      DateTime     @default(now())
  
  conversation   Conversation @relation(fields: [conversationId], references: [id])
}
```

## Infrastructure
- **Docker Compose**: to spin up Postgres locally.
- **Env Vars**: `DATABASE_URL` management.
