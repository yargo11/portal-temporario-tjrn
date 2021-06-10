import Link from 'next/link';

import { useCallback, useState } from 'react';

import { Collapse } from 'react-collapse';
import { FaBars } from 'react-icons/fa';
import styles from './styles.module.scss';

export function DesktopMenu() {

    const accessibilityIds = {
        checkbox: 'accessible-marker-example1',
        button: 'accessible-marker-example2'
    };

    const [isButtonCollapseOpen, setIsButtonCollapseOpen] = useState(false);

    const onClick = useCallback(
        () => setIsButtonCollapseOpen(!isButtonCollapseOpen),
        [isButtonCollapseOpen]
    );

    return (
        <>
            <ul className={styles.Desktop}>
                <li>
                    <Link href="/menu/institucional">Institucional
                        
                    </Link>
                </li>
                <li>
                    <Link href="/menu/administrativo">Administrativo
                       
                    </Link>
                </li>
                <li>
                    <Link href="/menu/precatorios">Precatórios
                       
                    </Link>
                </li>
                <li>
                    <Link href="/menu/judicial">Judicial
                        
                    </Link>
                </li>
                <li>
                    <Link href="/menu/planejamentoestrategico">Planejamento Estratégico
                       
                    </Link>
                </li>
                <li><Link href="/menu/fale-conosco">Fale conosco</Link></li>
            </ul>

            <nav className={styles.Mobile}>
                <button
                    aria-controls={accessibilityIds.button}
                    aria-expanded={isButtonCollapseOpen}
                    onClick={onClick}
                    type="button">
                    <FaBars />
                </button>
                <Collapse
                    isOpened={isButtonCollapseOpen}>
                    <div id={accessibilityIds.button} className="blob">
                        <ul className={styles.HiddenMenu}>
                            <li>
                                <Link href="/menu/institucional">Institucional</Link>
                            </li>
                            <li>
                                <Link href="/menu/administrativo">Administrativo</Link>
                            </li>
                            <li>
                                <Link href="/menu/precatorios">Precatórios</Link>
                            </li>
                            <li>
                                <Link href="/menu/judicial">Judicial</Link>
                            </li>
                            <li>
                                <Link href="/menu/planejamentoestrategico">Planejamento Estratégico</Link>
                            </li>
                            <li><Link href="/menu/fale-conosco">Fale conosco</Link></li>
                        </ul>
                    </div>
                </Collapse>
            </nav>
        </>
    )
}