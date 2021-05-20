import Banner from '../../../components/PageMenu/Banner';
import styles from './styles.module.scss';

export default function atendimentoaimprensa() {
    return (
        <>
            <Banner title="Atendimento a Imprensa" />
            <div className={styles.ContactOptions}>
                <h1>Expediente</h1>
                <p id={styles.pHeader}>Secretária de Comunicação Social:</p>

                <p id={styles.pDescription}>
                    Andreia Ramos da Silva Holanda Leite<br />
                    andreiaramos@tjrn.jus.br<br />
                    (84) 3616-6543
                </p>

                <p id={styles.pHeader}>Diretor do Departamento de Comunicação e Jornalismo:</p>

                <p id={styles.pDescription}>
                    Juliano Freire<br />
                    julianosouza@tjrn.jus.br<br />
                    (84) 3616-6391
                </p>

                <p id={styles.pHeader}>Chefe de Divisão de Mídia Impressa e Eletrônica:</p>

                <p id={styles.pDescription}>
                    Luciana Silveira<br />
                    lucianamaia@tjrn.jus.br<br />
                    (84) 3616-6391
                </p>

                <h1>Redação</h1>

                <p id={styles.pDescription}>
                    Luiz Freitas<br />
                    Adelmário Costa<br />
                    Ubiratan Nascimento<br />
                    Tasso Pinheiro (Reportér Fotográfico)<br />
                    ass.imprensa@tjrn.jus.br<br />
                    (84) 3616-6392
                </p>

                <h1>Portal do Judiciário</h1>

                <p id={styles.pDescription}>
                    Wabner Alves Souza<br />
                    wabnersouza@tjrn.jus.br<br />
                    (84) 3616-6390
                </p>
            </div>
        </>
    )
}