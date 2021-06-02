import FileDoc from '../../../components/File/FileDoc';
import Banner from '../../../components/PageMenu/Banner';
import styles from './styles.module.scss';

export default function calendariodassessoesdejulgamento() {
    return (
        <>
            <Banner title="Calendário das Sessões de Julgamento" />
            <div className={styles.Content}>

                <FileDoc
                    title="Calendário das Sessões da Segunda Câmara Cível - 2021 Calendário das Sessões da Segunda Câmara Cível - 2021 "
                    anchor="/files/sessoes-de-julgamento/calendário das sessões da segunda câmara cível - 2021.pdf"
                />

                <FileDoc
                    title="Calendário Tribunal Pleno Calendário Tribunal Pleno "
                    anchor="/files/sessoes-de-julgamento/calendário tribunal pleno.pdf"
                />

                <FileDoc
                    title="Calendário Terceira Câmara Cível Calendário Terceira Câmara Cível "
                    anchor="/files/sessoes-de-julgamento/calendário terceira câmara cível.pdf"
                />

                <FileDoc
                    title="Calendário Sessões 2021 da Primeira Câmara "
                    anchor="/files/sessoes-de-julgamento/calendário sessões 2021 da primeira câmara.pdf"
                />

                <FileDoc
                    title="Calendário Sessões 2021 da Câmara Criminal "
                    anchor="/files/sessoes-de-julgamento/calendÁrio das sessÕes da cÂmara criminal 2021.pdf"
                />
            </div>
        </>
    )
}