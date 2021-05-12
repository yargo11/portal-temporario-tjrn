import { DesktopMenu } from './DesktopMenu';
import styles from './styles.module.scss';

export function MainMenu() {
    return (
        <div className={styles.Container}>
            <div className={styles.Content}>
                <DesktopMenu />
            </div>
        </div>
    )
}