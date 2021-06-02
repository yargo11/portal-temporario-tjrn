
import FilePdf from '../../../components/File/FilePdf';
import Banner from '../../../components/PageMenu/Banner';
import MenuCards from '../../../components/PageMenu/MenuCards';
import styles from './styles.module.scss';



export default function calculadora() {
    return (
        <>
            <Banner title="Calculadora" />
            <div className={styles.Container}>
                <div className={styles.CardOptions}>
                    <MenuCards
                        title="Calculadora automática"
                        anchor="https://apps.tjrn.jus.br/calculadoraAutomatica/f/public/paginapublicinicial.xhtml"
                    />

                    <MenuCards
                        title="Calculadora de Prescrição da Pretensão Executória"
                        anchor="https://www.cnj.jus.br/sistema-carcerario/calculadora-de-prescricao-da-pretensao-executoria/"
                    />

                    <MenuCards
                        title="Calculadora de Prescrição da Pretensão Punitiva"
                        anchor="https://www.cnj.jus.br/sistema-carcerario/calculadora-de-prescricao-da-pretensao-punitiva/"
                    />
                </div>
                <div className={styles.CalcFiles}>
                    <FilePdf
                        title="Tutoial (visão pública)"
                        anchor="/files/calculadoras/tutorial-calculadora-automatica-visao-publica.pdf"
                    />

                    <FilePdf
                        title="TUTORIAL – Cumprimento de Sentença com descontos de IRRF e Previdência "
                        anchor="/files/calculadoras/TUTORIAL_CALCULADORA.pdf"
                    />
                </div>
            </div>
        </>
    )
}