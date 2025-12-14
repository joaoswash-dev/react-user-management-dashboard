import { useEffect, useState } from 'react';

import { Card } from '../../components/Card/Card';
import { Table } from '../../components/Table/Table';
import { UserModal } from '../../components/UserModal/UserModal';

import { fetchUsers } from '../../services/api';
import type { User } from '../../services/api';

import styles from './Dashboard.module.css';

export function Dashboard() {
    type FilterOption = 'All' | 'Active' | 'Inactive';
    const [data, setData] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState<'All' | 'Active' | 'Inactive'>('All');
    const filterOptions: FilterOption[] = ['All', 'Active', 'Inactive'];
    const filteredUsers = filter === 'All' ? data : data.filter(user => user.status === filter);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);


    useEffect(() => {
        fetchUsers().then(res => {
            setData(res);
            setLoading(false);
        });
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.kpiGrid}>
                <Card title="Total Users" value="1,842" subtitle="+34 this week" />
                <Card title="Active Users" value="1,421" subtitle="+2.1%" />
                <Card title="Inactive Users" value="421" subtitle="-1.3%" />
                <Card title="New Users" value="78" subtitle="Last 7 days" />
            </div>
            <div className={styles.filters}>
                {filterOptions.map(option => (
                    <button
                        key={option}
                        onClick={() => setFilter(option)}
                        className={`${styles.filterButton} ${
                            filter === option ? styles.activeFilter : ''
                        }`}
                    >
                        {option}
                    </button>
                ))}
            </div>

            {loading ? <p>Loading users...</p> : <Table
                users={filteredUsers}
                onViewUser={user => setSelectedUser(user)}
            />
            }
            {selectedUser && (
                <UserModal
                    user={selectedUser}
                    onClose={() => setSelectedUser(null)}
                />
            )}

        </div>
    );
}
