import Banner from '../../../components/PageMenu/Banner';
import MenuCards from '../../../components/PageMenu/MenuCards';
import styles from '../styles.module.scss';


export default function planejamentoestrategico() {
    return (
        <>
            <Banner title="Planejamento Estratégico"/>
            <div className={styles.CardOptions + ' ' + 'container'}>
                {/* <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3"> */}
                    <MenuCards
                        title="GPS-JUS"
                        anchor="http://gpsjus.tjrn.jus.br/"
                    />

                    <MenuCards
                        title="Justiça em Números"
                        anchor="http://www.cnj.jus.br/programas-e-acoes/pj-justica-em-numeros"
                    />

                    <MenuCards
                        title="Relatório de Desempenho do PSL"
                        anchor="/menu/planejamentoestrategico/relatorio-de-desempenho"
                    />

                    <MenuCards
                        title="Comissões e Comitês"
                        anchor="/menu/planejamentoestrategico/comissoes-e-comites"
                    />
                {/* </div> */}
            </div>
        </>
    )
}