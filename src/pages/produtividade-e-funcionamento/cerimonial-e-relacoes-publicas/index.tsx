import Banner from '../../../components/PageMenu/Banner';
import styles from './styles.module.scss';

export default function cerimonialerelacoespublicas() {
    return (
        <>
            <Banner title="Cerimonial e Relações Públicas" />
            <div className={styles.ContactOptions}>
                <h1>Expediente</h1>
                <p id={styles.pHeader}>Secretária de Comunicação Social:</p>

                <p id={styles.pDescription}>
                    Andreia Ramos da Silva Holanda Leite<br />
                    (84) 3616-6543
                </p>

                <h1>Cerimonial</h1>

                <p id={styles.pHeader}>Diretora do Departamento de Relações Públicas:</p>

                <p id={styles.pDescription}>
                    Isabelle Cardoso Dantas de Paiva Gadelha<br />
                    Telefone: 3616-6393/8896.1360
                </p>

                <p id={styles.pHeader}>Chefe de Divisão de Cerimonial:</p>

                <p id={styles.pDescription}>
                    Emanuelle Diva Batista Lima<br />
                    E-mail: cerimonial@tjrn.jus.br / emanuellelima@tjrn.jus.br<br />
                    Telefone: 3616-6393
                </p>

                <h1>Confirmação de Eventos</h1>

                <p id={styles.pDescription}>
                    cerimonial@tjrn.jus.br<br />
                    (84) 3616-6393  / 3616-6394
                </p>
            </div>
        </>
    )
}