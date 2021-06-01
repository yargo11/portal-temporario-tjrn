import { NewsInterface } from "../../../interfaces/newsInterface";
import styles from './styles.module.scss';
import he from 'he';

interface NewsProps {
    noticia: NewsInterface;
}

export function NewsHomeListItem(props: NewsProps) {
	return (
        <div className={styles.NoticiaItem + ' col-12 col-lg-6  mt-5'}>
            <a href="/noticias/NoticiaView">
                <p className={styles.NoticiaTitulo}>{props.noticia.titulo}</p>
                <span className={styles.Data}>
                {new Intl.DateTimeFormat('pt-BR', {
                    }).format(new Date(props.noticia.dataPublicacao))}
                </span>
                <p className={styles.NoticiaCorpo}>
                    {props.noticia.corpo? he.decode(props.noticia.corpo.replace(/<[^>]+>/g, '')).slice(0,140) : ''} ...
                </p>
            </a>
            <div className='Border-bottom-line margin-top-24'/>
        </div>
	);
}