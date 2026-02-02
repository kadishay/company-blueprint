// src/index.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface AgentInput {
    message: string;
}

interface AgentOutput {
    response: string;
}

class ExecutiveAgent {
    private conversationId: string;

    constructor(conversationId: string) {
        this.conversationId = conversationId;
        console.log(`Agent Active. Conversation ID: ${this.conversationId}`);
    }

    public async run(input: AgentInput): Promise<AgentOutput> {
        // 1. Save User Message
        await prisma.message.create({
            data: {
                conversationId: this.conversationId,
                role: "user",
                content: input.message,
            },
        });

        console.log(`[DB] Saved User Message: ${input.message}`);

        // MVP: Echo logic
        const responseText = `Echo: ${input.message} (Stored in SQL)`;

        // 2. Save Agent Response
        await prisma.message.create({
            data: {
                conversationId: this.conversationId,
                role: "assistant",
                content: responseText,
            },
        });

        console.log(`[DB] Saved Assistant Message`);

        return {
            response: responseText
        };
    }
}

// Main execution
if (require.main === module) {
    (async () => {
        try {
            // Create new conversation
            const conv = await prisma.conversation.create({ data: {} });
            const agent = new ExecutiveAgent(conv.id);

            const input = process.argv[2] || "Hello Memory";
            const output = await agent.run({ message: input });
            console.log(`Agent Output: ${output.response}`);
        } catch (e) {
            console.error(e);
            process.exit(1);
        } finally {
            await prisma.$disconnect();
        }
    })();
}

export { ExecutiveAgent };
