import FilePdf from '../../../../../components/File/FilePdf';
import Banner from '../../../../../components/PageMenu/Banner';
export default function emissaodeboleto() {
    return (
        <>
            <Banner title="FDJ" />
            <FilePdf
                            title="Manual - Emissão de Boletos - FDJ"
                            anchor="/files/emissao-de-boletos/manual-fdj.pdf"
                        />
        </>
    );
}