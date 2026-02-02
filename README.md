# AI Startup Company Blueprint

This project is a structured framework for managing an AI-driven startup using an autonomous/agentic workflow. It coordinates multiple AI roles (CEO, CTO, PM, Developer, etc.) through a predefined task lifecycle, ensuring that every piece of work is aligned with the company's core vision.

## 🚀 How it Works

The system operates on a hierarchical multi-agent model where each role has specific responsibilities and documentation paths. The workflow follows this cycle:

1.  **Vision**: The CEO defines the mission and goals in [`work/vision/vision.md`](file:///Users/yotamka/Code/Company/work/vision/vision.md).
2.  **Architecture**: The CTO creates technical specs in `work/design/architecture/`.
3.  **Planning**: The PM breaks goals into tasks in `work/to-do/`.
4.  **Execution**: The Developer implements code and moves tasks to `work/qa/`.
5.  **Quality Assurance**: The QA persona verifies the implementation before moving it to `work/done/`.

## 🛠 Project Structure

-   `.claud/`: System rules and workflow definitions.
-   `skills/`: Instructions and frontmatter for each AI role.
-   `product/`: The **Product Development Library** (source code and assets).
-   `work/`: The task board (Vision, To-Do, In-Progress, QA, Done, and Design).
-   `work/design/`: Technical blueprints and execution logs.
-   `logs/`: Historical data for each department.

## 🏁 Getting Started for the User

As the human collaborator, you are the **Chairman of the Board**. You are the ultimate decision-maker and the person to whom all AI agents (including the CEO and the AI Board of Directors) report. To kick off the system:

1.  **Seed the Vision**: Provide a high-level idea or problem you want the company to solve.
2.  **Chairman's Review**: Monitor changes in the `work/design/` and `work/` folders. The agents will present major milestones for your approval.
3.  **Board Meetings**: Participate in strategic review sessions. The AI Board will provide analysis and "second opinions" to help you evaluate the CEO's progress before you give final direction.

---
*For detailed rules, see the `.claud/` directory.*
