
import Banner from '../../../components/PageMenu/Banner';
import MenuCards from '../../../components/PageMenu/MenuCards';
import styles from './styles.module.scss';



export default function calculadora() {
    return (
        <>
            <Banner title="Calculadora" />
            <div className={styles.CardOptions}>
                <MenuCards
                    title="Calculadora automática"
                    link="http://www.tjrn.jus.br/index.php/calculadora-automatica"
                />

                <MenuCards
                    title="Calculadora de Prescrição da Pretensão Executória"
                    link="https://www.cnj.jus.br/sistema-carcerario/calculadora-de-prescricao-da-pretensao-executoria/"
                />

                <MenuCards
                    title="Calculadora de Prescrição da Pretensão Punitiva"
                    link="https://www.cnj.jus.br/sistema-carcerario/calculadora-de-prescricao-da-pretensao-punitiva/"
                />
            </div>
        </>
    )
}