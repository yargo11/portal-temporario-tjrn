import Banner from '../../../components/PageMenu/Banner';
import MenuCards from '../../../components/PageMenu/MenuCards';
import styles from './styles.module.scss';


export default function pje() {
    return (
        <>
            <Banner title="PJe" />
            <div className={styles.CardOptions + ' ' + 'container'}>
                {/* <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3"> */}
                <MenuCards
                    title="PJe 1º Grau - Acesso"
                    anchor="https://pje1g.tjrn.jus.br/pje"
                />
                <MenuCards
                    title="PJe 1º Grau - Consulta Pública"
                    anchor="https://pje1g.tjrn.jus.br/consultapublica/ConsultaPublica/listView.seam"
                />
                <MenuCards
                    title="PJe 1º Grau - Cadastro Juspostulandi"
                    anchor="https://pje.tjrn.jus.br/pje1grau/csjt/PessoaJusPostulandi/avisoCadastro.seam"
                />
                <MenuCards
                    title="PJe 1º Grau - Autenticidade de Documentos"
                    anchor="https://pje.tjrn.jus.br/pje1grau/Processo/ConsultaDocumento/listView.seam"
                />               
                <MenuCards
                    title="PJe 2º Grau - Acesso"
                    anchor="https://pje2g.tjrn.jus.br/pje"
                />
                <MenuCards
                    title="PJe 2º Grau - Consulta Pública"
                    anchor="https://pje2g.tjrn.jus.br/consultapublica/ConsultaPublica/listView.seam"
                />
                <MenuCards
                    title="PJe 2º Grau - Cadastro Juspostulandi"
                    anchor="https://pje.tjrn.jus.br/pje2grau/csjt/PessoaJusPostulandi/avisoCadastro.seam"
                />
                <MenuCards
                    title="PJe 2º Grau - Autenticidade de Documentos"
                    anchor="https://pje.tjrn.jus.br/pje2grau/Processo/ConsultaDocumento/listView.seam"
                />
                {/* </div> */}
            </div>
        </>
    )
}