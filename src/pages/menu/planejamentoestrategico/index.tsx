import Banner from '../../../components/PageMenu/Banner';
import MenuCards from '../../../components/PageMenu/MenuCards';
import styles from '../styles.module.scss';



export default function planejamentoestrategico() {
    return (
        <>
            <Banner title="Planejamento Estratégico" />
            <div className={styles.CardOptions}>
                <MenuCards
                    title="GPS-JUS"
                    description="Habitasse ridiculus aenean sit in a volutpat, faucibus amet ridiculus."
                />

                <MenuCards
                    title="Justiça em Números"
                    description="Habitasse ridiculus aenean sit in a volutpat, faucibus amet ridiculus."
                />

                <MenuCards
                    title="Relatório de Desempenho do PSL"
                    description="Habitasse ridiculus aenean sit in a volutpat, faucibus amet ridiculus."
                />

                <MenuCards
                    title="Comissões e Comitês"
                    description="Habitasse ridiculus aenean sit in a volutpat, faucibus amet ridiculus."
                />
            </div>
        </>
    )
}