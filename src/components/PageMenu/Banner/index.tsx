import styles from './styles.module.scss';

interface BannerMenu {
    title: string;
}

export default function Banner({ title }: BannerMenu) {
    return (
        <div className={styles.Container}>
            <div className={styles.Content}>
                <h1>{title}</h1>
            </div>
        </div>
    )
}