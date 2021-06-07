import FilePdf from '../../../components/File/FilePdf';
import Banner from '../../../components/PageMenu/Banner';
import styles from './styles.module.scss';

export default function calendariodassessoesdejulgamento() {
    return (
        <>
            <Banner title="Calendário das Sessões de Julgamento" />
            <div className={styles.Content}>

                <FilePdf
                    title="Calendário das Sessões da Segunda Câmara Cível - 2021"
                    anchor="/files/sessoes-de-julgamento/calendário das sessões da segunda câmara cível - 2021.pdf"
                />

                <FilePdf
                    title="Calendário Tribunal Pleno Calendário Tribunal Pleno "
                    anchor="/files/sessoes-de-julgamento/calendário tribunal pleno.pdf"
                />

                <FilePdf
                    title="Calendário Terceira Câmara Cível Calendário Terceira Câmara Cível "
                    anchor="/files/sessoes-de-julgamento/calendário terceira câmara cível.pdf"
                />

                <FilePdf
                    title="Calendário Sessões 2021 da Primeira Câmara "
                    anchor="/files/sessoes-de-julgamento/calendário sessões 2021 da primeira câmara.pdf"
                />

                <FilePdf
                    title="Calendário Sessões 2021 da Câmara Criminal "
                    anchor="/files/sessoes-de-julgamento/calendÁrio das sessÕes da cÂmara criminal 2021.pdf"
                />
            </div>
        </>
    )
}