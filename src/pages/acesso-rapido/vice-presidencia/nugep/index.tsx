import Banner from '../../../../components/PageMenu/Banner'
import styles from './styles.module.scss';



export default function nugepEquipe() {
    return (
        <>
            <Banner title="Nugep Equipe" />
            <div className={styles.ContactOptions}>
                <h1>Nugep - Equipe</h1>
                <p id={styles.pHeader}>
                    Comissão Gestora do NUGEP
                </p>
                <p id={styles.pDescription}>
                    Portaria nº 130/2021 - 14/01/2021
                </p>

                <p id={styles.pHeader}>
                    Desembargadora MARIA ZENEIDE BEZERRA
                </p>
                <p id={styles.pDescription}>
                    Presidente
                </p>

                <p id={styles.pHeader}>Desembargador Ibanez Monteiro</p>
                <p id={styles.pDescription}>
                    Integrante Câmara Cível
                </p>

                <p id={styles.pHeader}>Desembargador Glauber Rêgo</p>
                <p id={styles.pDescription}>
                    Integrante Câmara Criminal
                </p>

                <p id={styles.pHeader}>COMPOSIÇÃO NUGEP</p>
                <p id={styles.pDescription}>
                    Portaria 01/2021-VP/TJRN, 11/01/2021
                </p>

                <p id={styles.pHeader}>
                    Dr. Geraldo Antônio da Mota
                </p>
                <p id={styles.pDescription}>
                    Coordenador titular
                </p>

                <p id={styles.pHeader}>
                    Dr. Fábio Wellington Ataíde Alves
                </p>
                <p id={styles.pDescription}>
                    Coordenador suplente
                </p>

                <p id={styles.pHeader}>
                    Clécio Antônio Ferreira dos Santos Júnior<br />
                    Francineide Sérgio Damasceno Barbosa<br />
                    Geórgia Helena Ribeiro Dantas Melo<br />
                    Gustavo Henrique Ribeiro Dantas de Carvalho<br />
                    Hamilton Amadeu do Nascimento Júnior<br />
                    José André Diogo Neto<br />
                    Kadja Kalina Galvão de Aguiar<br />
                </p>
                <p id={styles.pDescription}>
                    Servidores lotados no Gabinete da Vice-Presidência
                </p>

                <p id={styles.pHeader}>
                    Sanara Cristina Ferreira Nunes Oliveira
                </p>
                <p id={styles.pDescription}>
                    Servidora lotada na Coordenadoria Estadual dos Juizados Especiais
                </p>
                <p id={styles.pHeader}>
                    Contatos:
                </p>
                <p id={styles.pDescription}>
                    (084) 3616-6505<br />
                    (084) 3616-6507<br />

                    E-mail:  nugep@tjrn.jus.br
                </p>
            </div>
        </>
    )
}