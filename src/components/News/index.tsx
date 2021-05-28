import { useEffect, useState } from 'react';
import { NewsInterface } from '../../interfaces/newsInterface';
import { apinoticia } from '../../service/apinoticia';
import styles from './styles.module.scss';
import { NewsHomeListItem } from './NewsHomeListItem';

import NOTICIATESTE from '../../../test/news.json';

export function News() {

    const [news, setNews] = useState<NewsInterface[]>();

    useEffect(() => {
        let data = NOTICIATESTE;

        //apinoticia.get('lista').then(response => data = response.data).catch(error => console.log(error));

        setNews(data.length > 6 ? data.slice(0,6) : data);
	}, []);

    return (
        <div className={styles.Content + ' container'}>
            <div className={'row'}>

                <div className={'col-12 ' + styles.Titulo}>
                    <h1>Notícias do Judiciário</h1>
                    <span>
                        <a href="/noticias">Ver todas as notícias</a>
                    </span>
                </div>

                <div className={'col-12'}>
                    <div className='Border-bottom-line'/>
                </div>

                {news ? news
                    .map(newsElement => (
                            <NewsHomeListItem key={newsElement.id} noticia={newsElement}/>
                    )): <></>
                }
            </div>
        </div>
    )
}