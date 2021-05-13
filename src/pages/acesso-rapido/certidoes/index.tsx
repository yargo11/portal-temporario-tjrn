
import Banner from '../../../components/PageMenu/Banner';
import MenuCards from '../../../components/PageMenu/MenuCards';
import styles from './styles.module.scss';



export default function certidoes() {
    return (
        <>
            <Banner title="Certidões" />
            <div className={styles.CardOptions}>
                <MenuCards
                    title="Certidões emitidas via SAJ "
                    link="http://esaj.tjrn.jus.br/esaj/portal.do?servico=810000"
                />

                <MenuCards
                    title="Certidões emitidas via PJe"
                    link="https://pje.tjrn.jus.br/certidaoPjeWeb/"
                />

                <MenuCards
                    title="Antecedentes Criminais"
                    link="http://www.tjrn.jus.br/certidao/"
                />

                <MenuCards
                    title="SEEU - Sistema Eletrônico de Execução Unificado"
                    link="https://seeu.pje.jus.br/seeu/"
                />
            </div>
        </>
    )
}