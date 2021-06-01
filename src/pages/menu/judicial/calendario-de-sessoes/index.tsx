import { File } from '../../../../components/File';
import Banner from '../../../../components/PageMenu/Banner';
import styles from './styles.module.scss';

export default function calendariodesessoes() {
    return (
        <>
            <Banner title="Calendário das Sessões de Julgamento" />
            <div className={styles.Content}>
                <File
                    title="Calendário das Sessões da Segunda Câmara Cível - 2021 "
                    anchor="/files/calendario-de-sessoes/calendário das sessões da segunda câmara cível - 2021.pdf"
                />
                <File
                    title="Calendário Tribunal Pleno "
                    anchor="/files/calendario-de-sessoes/calendário tribunal pleno.pdf"
                />
                <File
                    title="Calendário Terceira Câmara Cível Calendário Terceira Câmara Cível "
                    anchor="/files/calendario-de-sessoes/calendário terceira câmara cível.pdf"
                />
                <File
                    title="Calendário Sessões 2021 da Primeira Câmara "
                    anchor="/files/calendario-de-sessoes/calendário sessões 2021 da primeira câmara.pdf"
                />
                <File
                    title="Calendário Sessões 2021 da Câmara Criminal Calendário Sessões 2021 da Câmara Criminal "
                    anchor="/files/calendario-de-sessoes/calendÁrio das sessÕes da cÂmara criminal 2021.pdf"
                />
            </div>
        </>
    )
}