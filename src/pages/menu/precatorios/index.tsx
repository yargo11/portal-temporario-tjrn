import Banner from '../../../components/PageMenu/Banner';
import MenuCards from '../../../components/PageMenu/MenuCards';
import styles from '../styles.module.scss';


export default function precatorios() {
    return (
        <>
            <Banner title="Precatórios"/>
            <div className={styles.CardOptions + ' ' + 'container'}>
                {/* <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 "> */}
                    <MenuCards
                        title="Consulte seu processo"
                        anchor="/menu/precatorios/consulte-seu-processo"
                    />

                    <MenuCards
                        title="Lista cronológica"
                        anchor="/menu/precatorios/lista-cronologica"
                    />

                    <MenuCards
                        title="RPV"
                        anchor="/menu/precatorios/rpv"
                    />
                {/* </div> */}
            </div>
        </>
    )
}