import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import { NewsInterface } from "../../../interfaces/newsInterface";
import parse from 'html-react-parser';

import styles from './styles.module.scss';

import NOTICIATESTE from '../../../../test/news.json';

export default function lerNoticia() {
    const data = NOTICIATESTE;
    const { id } = useRouter().query;
    const [news, setNews] = useState<NewsInterface>();
    
    useEffect(() => {
        data.forEach(dataElement => {

            if (dataElement.id === parseInt(id as string)) {
                setNews(dataElement);
            }
        })
        //apinoticia.get('elemento/' + id).then(response => data = response.data).catch(error => console.log(error));
	}, [id]);
    return (
        <div className={styles.Noticia}>
            <h1>{news ? news.titulo : ''}</h1>
            <div>{news ? parse(news.corpo) : ''}</div>
        </div>
    )
}