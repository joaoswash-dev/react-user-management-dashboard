import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <h2 className={styles.logo}>SaaS</h2>
            <nav>
                <ul>
                    <li>Dashboard</li>
                    <li>Users</li>
                    <li>Billing</li>
                    <li>Settings</li>
                </ul>
            </nav>
        </aside>
    );
}
