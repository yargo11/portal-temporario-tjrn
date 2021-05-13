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
                        {/* <ul className={styles.dropdownContent}>
                            <li><a href="#">Dirigentes</a></li>
                            <li><a href="#">Composição</a></li>
                        </ul> */}
                    </Link>
                </li>
                <li>
                    <a href="#">Administrativo
                        {/* <ul className={styles.dropdownContent}>
                            <li><a href="#">Licitações em andamento</a></li>
                            <li><a href="#">Licitações concluídas</a></li>
                            <li><a href="#">Edital de chamamento</a></li>
                        </ul> */}
                    </a>
                </li>
                <li>
                    <a href="#">Precatórios
                        {/* <ul className={styles.dropdownContent}>
                            <li><a href="#">Consulte seu processo</a></li>
                            <li><a href="#">Lista cronológica</a></li>
                            <li><a href="#">RPV</a></li>
                        </ul> */}
                    </a>
                </li>
                <li>
                    <a href="#">Judicial
                        {/* <ul className={styles.dropdownContent}>
                            <li><a href="#">Envio de Memorial</a></li>
                            <li><a href="#">Pauta de Julgamento</a></li>
                            <li><a href="#">Calendário das Sessões de Julgamento</a></li>
                            <li><a href="#">Custas - Tribunais Superiores</a></li>
                            <li><a href="#">STF - GRU Cobrança</a></li>
                            <li><a href="#">Tabela de Custas</a></li>
                            <li>
                                <a href="#">FDJ
                                    <ul className={styles.dropdownContent2}>
                                        <li><a href="#">Custas e Taxas - FDJ</a></li>
                                        <li><a href="#">Devolução de Custas - FDJ</a></li>
                                        <li><a href="#">Manual - Emissão de Boletos - FDJ</a></li>
                                    </ul>
                                </a>
                            </li>
                            <li><a href="#">Súmulas</a></li>
                            <li><a href="#">Peticionamento CNJ</a></li>
                            <li><a href="#">Juizados Especiais</a></li>
                            <li><a href="#">Foro da comarca de Natal</a></li>
                        </ul> */}
                    </a>
                </li>
                <li>
                    <a href="#">Planejamento Estratégico
                        {/* <ul className={styles.dropdownContent}>
                            <li><a href="#">GPS-JUS</a></li>
                            <li><a href="#">Justiça em Números</a></li>
                            <li><a href="#">Relatório de Desempenho do PSL</a></li>
                            <li><a href="#">Comissões e Comitês</a></li>
                        </ul> */}
                    </a>
                </li>
                <li><a href="#">Tecnologia da Informação</a></li>
                <li><a href="/menu/fale-conosco">Fale conosco</a></li>
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
                            <li><a href="#">Institucional</a></li>
                            <li><a href="#">Administrativo</a></li>
                            <li><a href="#">Precatórios</a></li>
                            <li><a href="#">Judicial</a></li>
                            <li><a href="#">Planejamento Estratégico</a></li>
                            <li><a href="#">Tecnologia da Informação</a></li>
                            <li><a href="#">Fale conosco</a></li>
                        </ul>
                    </div>
                </Collapse>
            </nav>
        </>
    )
}