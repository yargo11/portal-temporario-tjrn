import { File } from "..";
import { FileInterface } from '../../../interfaces/generalFileInterface';

export default function FilePdf({title, anchor, description}: FileInterface) {
    return (
        File({title, anchor, description, icon: '/images/icons/picture_as_pdf_black_24dp.svg', alt: 'Arquivo PDF', spanDescription: 'PDF'})
    );
}