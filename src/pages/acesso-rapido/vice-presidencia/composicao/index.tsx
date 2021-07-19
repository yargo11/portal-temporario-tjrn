import Banner from '../../../../components/PageMenu/Banner'
import styles from './styles.module.scss';



export default function vicepresidenciaComposicao() {
    return (
        <>
            <Banner title="Vice Presidência - Composição" />
            <div className={styles.ContactOptions}>
                <h1>Vice-Presidente</h1>
                <p id={styles.pHeader}>Desembargadora MARIA ZENEIDE BEZERRA</p>

                <h1>Juízes Auxiliares</h1>
                <p id={styles.pHeader}>
                    Fábio Wellington Ataíde Alves<br />
                    Geraldo Antônio da Mota
                </p>

                <h1>Ajudante de Ordem</h1>
                <p id={styles.pHeader}>
                    Paulo Sergio Silva de Souza Lacerda
                </p>

                <h1>Equipe</h1>
                <p id={styles.pHeader}>
                    Clécio Antônio Ferreira dos Santos Júnior<br />
                    Francineide S. Damasceno Barbosa<br />
                    Geórgia Helena Ribeiro Dantas Melo<br />
                    Hamilton Amadeu do Nascimento Júnior<br />
                    José André Diogo Neto<br />
                    Kadja Kalina Galvão de Aguiar<br />
                    Erica Priscila de Oliveira Câmara Dias (estagiária de pós-graduação)<br />
                    Wanderson Andretty de Paiva Lucena (estagiário de pós-graduação)<br />
                    Victor Alan Oliveira Alves (estagiário de pós-graduação)<br />
                    Leilza Valentim da Silva (Assistente Administrativo)<br />
                    Valquiria Pereira da Silva Cruz (Assistente Administrativo)
                </p>

                <p id={styles.pDescription}>
                    Contatos:<br />

                    (084) 3616-6505<br />
                    (084) 3616-6507<br />

                    E-mail:<br />
                    nugep@tjrn.jus.br
                </p>
            </div>
        </>
    )
}