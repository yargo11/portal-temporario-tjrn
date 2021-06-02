import { File } from "..";
import { FileInterface } from '../../../interfaces/generalFileInterface';

export default function FileDoc({title, anchor, description}: FileInterface) {
    return (
        File({title, anchor, description, icon: '/images/icons/word.svg', alt: 'Arquivo Word', spanDescription: 'DOC'})
    );
}