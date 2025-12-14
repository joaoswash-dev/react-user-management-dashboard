import styles from './Card.module.css';

type CardProps = {
    title: string;
    value: string;
    subtitle?: string;
};

export function Card({ title, value, subtitle }: CardProps) {
    return (
        <div className={styles.card}>
            <span className={styles.title}>{title}</span>
            <strong className={styles.value}>{value}</strong>
            {subtitle && <small className={styles.subtitle}>{subtitle}</small>}
        </div>
    );
}
