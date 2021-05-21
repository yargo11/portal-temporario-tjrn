import Banner from '../../../components/PageMenu/Banner';
import MenuCards from '../../../components/PageMenu/MenuCards';
import styles from './styles.module.scss';

export default function certidoes() {
    return (
        <>
            <Banner title="Certidões" />
            <div className={styles.CardOptions}>
                {/* <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3"> */}
                    <MenuCards
                        title="Certidões emitidas via SAJ "
                        anchor="http://esaj.tjrn.jus.br/esaj/portal.do?servico=810000"
                    />

                    <MenuCards
                        title="Certidões emitidas via PJe"
                        anchor="https://pje.tjrn.jus.br/certidaoPjeWeb/"
                    />

                    <MenuCards
                        title="Antecedentes Criminais"
                        anchor="http://www.tjrn.jus.br/certidao/"
                    />

                    <MenuCards
                        title="SEEU - Sistema Eletrônico de Execução Unificado"
                        anchor="https://seeu.pje.jus.br/seeu/"
                    />
                {/* </div> */}
            </div>
        </>
    )
}