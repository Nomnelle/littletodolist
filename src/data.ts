import type {Task} from "./types.ts";

export const tasksCollection: Task[] = [
    {
        id:1,
        content:"Installer VS Code, Bun et Git",
        status:"done",
        createdAt:new Date(),
        completedAt:new Date()
    },
    {
        id:2,
        content:"Apprendre TypeScript",
        status:"doing",
        createdAt:new Date(),
    },
    {
        id:3,
        content:"Apprendre React",
        status:"doing",
        createdAt:new Date(),
    },
    {
        id:4,
        content:"Faire mon TD Todolist",
        status:"doing",
        createdAt:new Date(),
    },
    {
        id:5,
        content:"Penser à saisir prénom et mon nom dans le fichier README.md",
        status:"todo",
        createdAt:new Date(),
    }
]