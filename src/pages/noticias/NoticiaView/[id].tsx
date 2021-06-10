import { NewsInterface } from "../../../interfaces/newsInterface";
import parse from 'html-react-parser';
import { GetServerSideProps } from 'next';

import styles from './styles.module.scss';

import { apinoticia } from "../../../service/apinoticia";

interface newsProps {
    noticia: NewsInterface;
}

export default function lerNoticia({ noticia } : newsProps) {
    return (
        <div className={styles.Noticia}>
            <h1>{noticia ? noticia.titulo : ''}</h1>
            <div>{noticia ? parse(noticia.corpo) : ''}</div>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.query;
    const noticia = await (await apinoticia.get('elemento/' + id)).data;

    return {
        props: {
            noticia
        },
    }
}