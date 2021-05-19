import { DesktopMenu } from './DesktopMenu';
import styles from './styles.module.scss';

export function MainMenu() {
    return (
        <div className={styles.Container}>
            <div className={styles.Content+ ' ' + 'container'}>
                <DesktopMenu />
            </div>
        </div>
    )
}