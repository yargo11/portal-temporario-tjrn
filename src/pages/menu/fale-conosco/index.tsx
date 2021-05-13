import Banner from '../../../components/PageMenu/Banner';
import MenuCards from '../../../components/PageMenu/MenuCards';
import styles from './styles.module.scss';



export default function institucional() {
    return (
        <>
            <Banner title="Fale Conosco" />
            <div className={styles.ContactOptions}>
                <h1>Ouvidoria</h1>
                <p id={styles.pHeader}>Canais de acesso:</p>

                <p id={styles.pDescription}>
                    Pessoalmente ou Carta:<br />
                    Ouvidoria Geral - Tribunal de Justiça do Rio Grande do Norte - Praça Sete de
                    Setembro, s/n, Cidade Alta, Natal - RN - CEP. 59.025.000
                 </p>

                <p id={styles.pDescription}>
                    Telefone Ligação gratuita e Fax: 0800-2800208
                </p>

                <p id={styles.pDescription}>
                    Telefone Pabx: (84)3616.6200  |  Ramal 6465
                </p>

                <p id={styles.pDescription}>
                    Email: ouvidoria@tjrn.jus.br
                </p>

                <p id={styles.pDescription}>
                    Formulário eletrônico via Internet: <a href="http://ouvidoria.tjrn.jus.br/index.php/contato/e-ouvidoria">clique aqui</a>
                </p>

                <p id={styles.pDescription}>
                    Site da ouvidoria: <a href="http://ouvidoria.tjrn.jus.br/">ouvidoria.tjrn.jus.br</a>
                </p>

                <h1>Atendimento à Imprensa</h1>

                <p id={styles.pHeader}>Expediente</p>

                <p id={styles.pDescription}>
                    Secretária de Comunicação Social<br />
                    Andreia Ramos da Silva Holanda Leite<br />
                    andreiaramos@tjrn.jus.br<br />
                    (84) 3616-6543
                </p>
                <p id={styles.pDescription}>
                    Diretor do Departamento de Comunicação e Jornalismo<br />
                    Juliano Freire<br />
                    julianosouza@tjrn.jus.br<br />
                    (84) 3616-6391
                </p>
                <p id={styles.pDescription}>
                    Diretor do Departamento de Comunicação e Jornalismo<br />
                    Juliano Freire<br />
                    julianosouza@tjrn.jus.br<br />
                    (84) 3616-6391
                </p>
                <p id={styles.pDescription}>
                    Chefe de Divisão de Mídia Impressa e Eletrônica<br />
                    Luciana Silveira<br />
                    lucianamaia@tjrn.jus.br<br />
                    (84) 3616-6391
                </p>
                <p id={styles.pHeader}>Redação</p>
                <p id={styles.pDescription}>
                    Luiz Freitas<br />
                    Adelmário Costa<br />
                    Ubiratan Nascimento<br />
                    Tasso Pinheiro (Reportér Fotográfico)<br />
                    ass.imprensa@tjrn.jus.br<br />
                    (84) 3616-6392
                </p>
                <p id={styles.pHeader}>Portal do Judiciário</p>
                <p id={styles.pDescription}>
                    Wabner Alves Souza<br />
                    wabnersouza@tjrn.jus.br<br />
                    (84) 3616-6390
                </p>
            </div>
        </>
    )
}