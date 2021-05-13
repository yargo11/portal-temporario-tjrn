import { Cards } from './Cards';
import styles from './styles.module.scss';

export function SystemsAndTools() {
    return (
        <div className={styles.Container}>
            <div className={styles.Content}>
                <h1>Ferramentas e sistemas</h1>
                <hr />

                <div className={styles.Card}>
                    <Cards
                        title="Serviços (SAJ)"
                        image="saj"
                        description="Consultas Processuais, Jurisprudência, Push, Pauta de Julgamento, Peticionamento 
                    Eletrônico de 1º Grau, Conferência de Documento Digital do 1º Grau, Intimações e Citações On-line, 
                    Certidões"
                        a="http://esaj.tjrn.jus.br/esaj/portal.do?servico=740000"
                    />

                    <Cards
                        title="PJe"
                        image="pje"
                        description="Tincidunt tincidunt tristique ac ipsum justo, aliquam adipiscing dui eget"
                        a="#"
                    />

                    <Cards
                        title="Plenário virtual"
                        image="plenario"
                        description="Tincidunt tincidunt tristique ac ipsum justo, aliquam adipiscing dui eget"
                        a="http://plenariovirtual.tjrn.jus.br/"
                    />

                    <Cards
                        title="SIGAJUS"
                        image="sigajus"
                        description="Tincidunt tincidunt tristique ac ipsum justo, aliquam adipiscing dui eget"
                        a="#"
                    />

                    <Cards
                        title="OUVIDORIA"
                        image=""
                        description="Tincidunt tincidunt tristique ac ipsum justo, aliquam adipiscing dui eget"
                        a="http://ouvidoria.tjrn.jus.br/"
                    />

                    <Cards
                        title="PROJUD"
                        image=""
                        description="Tincidunt tincidunt tristique ac ipsum justo, aliquam adipiscing dui eget"
                        a="https://projudi.tjrn.jus.br/projudi/"
                    />

                    <Cards
                        title="SISCONJD"
                        image=""
                        description="Tincidunt tincidunt tristique ac ipsum justo, aliquam adipiscing dui eget"
                        a="https://apps.tjrn.jus.br/portalsiscondj/login.jsp;jsessionid=940E51C72E23F8B7F78A7290E7E88195"
                    />

                    <Cards
                        title="GPS-JUS"
                        image=""
                        description="Tincidunt tincidunt tristique ac ipsum justo, aliquam adipiscing dui eget"
                        a="http://gpsjus.tjrn.jus.br/"
                    />
                </div>
            </div>
        </div>
    )
}