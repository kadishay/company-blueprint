
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const conversations = await prisma.conversation.findMany({
        include: { messages: true }
    });

    console.log("=== DB Verification ===");
    console.log(`Total Conversations: ${conversations.length}`);
    conversations.forEach((c: any) => {
        console.log(`\nConv ID: ${c.id}`);
        c.messages.forEach((m: any) => {
            console.log(`  [${m.role}]: ${m.content}`);
        });
    });
}

main()
    .catch(e => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });
