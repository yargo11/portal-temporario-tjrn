import FilePdf from '../../../../../components/File/FilePdf';
import Banner from '../../../../../components/PageMenu/Banner';
import styles from './styles.module.scss';

export default function emissaodeboleto() {
    return (
        <>
            <Banner title="Emissão de Boletos" />
            <div className={styles.Container}>
                <FilePdf
                    title="Manual - Emissão de Boletos - FDJ"
                    anchor="/files/emissao-de-boletos/manual-fdj.pdf"
                />
            </div>
        </>
    );
}