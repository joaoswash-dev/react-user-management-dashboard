export async function fetchUsers(): Promise<User[]> {
    return new Promise(resolve => {
        setTimeout(() => resolve(users), 800);
    });
}

export type User = {
    id: number;
    name: string;
    email: string;
    status: 'Active' | 'Inactive';
};

export const users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active' },
    { id: 2, name: 'Sarah Smith', email: 'sarah@example.com', status: 'Active' },
    { id: 3, name: 'Michael Brown', email: 'michael@example.com', status: 'Inactive' },
    { id: 4, name: 'Emily Johnson', email: 'emily@example.com', status: 'Active' },
];
