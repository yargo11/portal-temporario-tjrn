import Banner from '../../../../components/PageMenu/Banner';
import MenuCards from '../../../../components/PageMenu/MenuCards';
import styles from './styles.module.scss';

export default function fdj() {
    return (
        <>
            <Banner title="FDJ" />
            <div className={styles.CardOptions}>
                <MenuCards
                    title="Custas e Taxas - FDJ"
                    description="Habitasse ridiculus aenean sit in a volutpat, faucibus amet ridiculus."
                    anchor="/menu/judicial/fdj/custasetaxas"
                />

                <MenuCards
                    title="Devolução de Custas - FDJ"
                    description="Habitasse ridiculus aenean sit in a volutpat, faucibus amet ridiculus."
                    anchor="/menu/judicial/fdj/devolucaodecustas"
                />

                <MenuCards
                    title="Manual - Emissão de Boletos - FDJ"
                    description="Habitasse ridiculus aenean sit in a volutpat, faucibus amet ridiculus."
                    anchor="/menu/judicial/fdj/emissaodeboleto"
                />
            </div>
        </>
    )
}