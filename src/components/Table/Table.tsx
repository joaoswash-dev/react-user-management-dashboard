import styles from './Table.module.css';
import type { User } from '../../services/api';

type TableProps = {
    users: User[];
};

export function Table({ users }: TableProps) {
    return (
        <table className={styles.table}>
            <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {users.map(user => (
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className={styles.action}>View</button>
                    </td>

                    <td>
              <span className={user.status === 'Active' ? styles.active : styles.inactive}>
                {user.status}
              </span>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}
