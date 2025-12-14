import styles from './UserModal.module.css';
import type { User } from '../../services/api';

type UserModalProps = {
    user: User | null;
    onClose: () => void;
};

export function UserModal({ user, onClose }: UserModalProps) {
    if (!user) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div
                className={styles.modal}
                onClick={e => e.stopPropagation()}
            >
                <h2>User Details</h2>

                <div className={styles.content}>
                    <p>
                        <strong>Name:</strong> {user.name}
                    </p>
                    <p>
                        <strong>Email:</strong> {user.email}
                    </p>
                    <p>
                        <strong>Status:</strong>{' '}
                        <span
                            className={
                                user.status === 'Active'
                                    ? styles.active
                                    : styles.inactive
                            }
                        >
              {user.status}
            </span>
                    </p>
                </div>

                <button className={styles.closeButton} onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
}
