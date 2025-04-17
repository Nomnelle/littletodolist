export type Task = {
    id: number;
    content: string;
    createdAt: Date;
    completedAt?: Date;
    status: "done"| "doing" | "todo"
};