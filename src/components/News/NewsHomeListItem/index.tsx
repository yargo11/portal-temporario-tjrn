import { NewsInterface } from "../../../interfaces/newsInterface";
import styles from './styles.module.scss';

interface NewsProps {
    noticia: NewsInterface;
}

export function NewsHomeListItem(props: NewsProps) {
	return (
        <div className={styles.NoticiaItem + ' col-12 col-lg-6  mt-5'}>
            <a href={"/noticias/NoticiaView/" + props.noticia.id}>
                <p className={styles.NoticiaTitulo}>{props.noticia.titulo}</p>
                <span className={styles.Data}>
                {new Intl.DateTimeFormat('pt-BR', {
                    }).format(new Date(props.noticia.dataPublicacao))}
                </span>
            </a>
            <div className='Border-bottom-line margin-top-24'/>
        </div>
	);
}