import { useEffect, useState } from 'react';
import { NewsInterface } from '../../interfaces/newsInterface';
import { apinoticia } from '../../service/apinoticia';
import styles from './styles.module.scss';
import { NewsHomeListItem } from './NewsHomeListItem';

export function News() {

    const [news, setNews] = useState<NewsInterface[]>();

    useEffect(() => {
        async function getNews() {
            await apinoticia.get('lista').then(response => setNews(response.data.length > 6 ? response.data.slice(0, 6) : response.data)).catch(error => console.log(error));
        }
        getNews();
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
                    <div className='Border-bottom-line' />
                </div>

                {news ? news
                    .map(newsElement => (
                        <NewsHomeListItem key={newsElement.id} noticia={newsElement} />
                    )) : <></>
                }

                <div className={'col-12'}>
                    <div className='Border-bottom-line' />
                </div>
            </div>
        </div>
    )
}