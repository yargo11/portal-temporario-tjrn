
import Banner from '../../../components/PageMenu/Banner';
import MenuCards from '../../../components/PageMenu/MenuCards';
import styles from './styles.module.scss';



export default function acessoRapido() {
    return (
        <>
            <Banner title="Consulta Processual" />
            <div className={styles.CardOptions}>
                <MenuCards
                    title="PJe (1º e 2º Grau)"
                    anchor="/operadores-do-direito/pje/"
                />

                <MenuCards
                    title="SAJ (1º e 2º Grau - processos ainda não digitalizados)"
                    anchor="http://esaj.tjrn.jus.br/esaj/portal.do?servico=190100"
                />

                <MenuCards
                    title="Projud (Processos dos Juizados Especiais)"
                    anchor="https://projudi.tjrn.jus.br/projudi/"
                />
            </div>
        </>
    )
}