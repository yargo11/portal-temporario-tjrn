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
        if (id) {
            apinoticia.get('elemento/' + id).then(response => setNews(response.data)).catch(error => console.log(error));
            apinoticia.post('imagem', JSON.parse('{"path": "images/debate1.jpeg"}')).then(response => console.log(JSON.stringify(response.data))).catch(error => console.log(error));
        }
	}, [id]);
    return (
        <div className={styles.Noticia}>
            <h1>{news ? news.titulo : ''}</h1>
            <div>{news ? parse(news.corpo.replaceAll('src=\"', 'src=\"http://intranet.tjrn.jus.br/')) : ''}</div>
        </div>
    )
}