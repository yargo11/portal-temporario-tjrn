import { NewsInterface } from '../../interfaces/newsInterface';
import styles from './styles.module.scss';
import { NewsHomeListItem } from './NewsHomeListItem';
import { NewsPropsInterface } from '../../interfaces/newsPropsInterface';

export function News({ listaDeNoticia }: NewsPropsInterface) {
    return (
        <div className={styles.Content + ' container'}>
            <div className={'row'}>

                <div className={'col-12 ' + styles.Titulo}>
                    <h1>Notícias</h1>
                </div>

                <div className={'col-12'}>
                    <div className='Border-bottom-line' />
                </div>

                {listaDeNoticia ? listaDeNoticia
                    .map(noticia => (
                        <NewsHomeListItem key={noticia.id} noticia={noticia} />
                    )) : <></>
                }
                <div className={'col-12'}>
                    <div className='Border-bottom-line' />
                </div>

                <span id={styles.newsButton}>
                    <a href="/noticias">Ver todas as notícias</a>
                </span>
            </div>
        </div>
    )
}