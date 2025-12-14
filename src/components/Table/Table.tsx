import styles from './Table.module.css';
import type { User } from '../../services/api';

type TableProps = {
    users: User[];
};

export function Table({ users }: TableProps) {
    return (
        <div className={styles.wrapper}>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
                </thead>

                <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>

                        <td>
                <span
                    className={`${styles.status} ${
                        user.status === 'Active'
                            ? styles.active
                            : styles.inactive
                    }`}
                >
                  {user.status}
                </span>
                        </td>

                        <td>
                            <button
                                className={styles.action}
                                onClick={() => console.log(user)}
                            >
                                View
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}