import { useEffect, useState } from "react";
import { NewsInterface } from "../../../interfaces/newsInterface";
import parse from 'html-react-parser';

import styles from './styles.module.scss';

import { apinoticia } from "../../../service/apinoticia";
import { useRouter } from 'next/router';

function fixNewsBody(body: string) {
    let lastPosition = 0;
    let srcPosition = body.indexOf('src=\"', lastPosition);
   
    while (srcPosition != -1) {
        let doubleQuotePosition =  body.indexOf('\"', srcPosition + 5);

        apinoticia.post('imagem', JSON.parse('{"path": "' + body.substring(srcPosition + 5, doubleQuotePosition -1) + '"}')).then(response => {
            body = body.substring(0, srcPosition - 1) + 'src=' + JSON.stringify(response.data) + body.substring(doubleQuotePosition + 1);
        }).catch(error => console.log(error));

        srcPosition = body.indexOf('src=\"', doubleQuotePosition);
    }

    return body;
}

export default function lerNoticia() {
    const { id } = useRouter().query;
    const [news, setNews] = useState<NewsInterface>();
    useEffect(() => {
        if (id) {
            apinoticia.get('elemento/' + id).then(response => {
                setNews(response.data);
            }).catch(error => console.log(error));
        }

        if (news) {
            setNews({id: news.id, titulo: news.titulo, dataPublicacao: news.dataPublicacao, corpo: fixNewsBody(news.corpo)});
        }
    }, [id]);



    return (
        <div className={styles.Noticia}>
            <h1>{news ? news.titulo : ''}</h1>
            <div>{news ? parse(news.corpo) : ''}</div>
        </div>
    )
}