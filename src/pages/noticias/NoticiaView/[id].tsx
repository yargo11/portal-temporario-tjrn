import { useEffect, useState } from "react";
import { NewsInterface } from "../../../interfaces/newsInterface";
import parse from 'html-react-parser';

import styles from './styles.module.scss';

import { apinoticia } from "../../../service/apinoticia";
import { useRouter } from 'next/router';

export default function lerNoticia() {
    const { id } = useRouter().query;
    const [news, setNews] = useState<NewsInterface>();

    useEffect(() => {
        apinoticia.get('elemento/' + id).then(response => setNews(response.data)).catch(error => console.log(error));
	}, [id]);
    return (
        <div className={styles.Noticia}>
            <h1>{news ? news.titulo : ''}</h1>
            <div>{news ? parse(news.corpo.replaceAll('src=\"', 'src=\"http://intranet.tjrn.jus.br/')) : ''}</div>
        </div>
    )
}