import { NewsInterface } from "../../../interfaces/newsInterface";
import styles from './styles.module.scss';
import he from 'he';

interface NewsProps {
    noticia: NewsInterface;
}

export function NewsHomeListItem(props: NewsProps) {
	return (
        <a href="#">
            <p>{props.noticia.titulo}</p>
            <span>
            {new Intl.DateTimeFormat('pt-BR', {
                }).format(new Date(props.noticia.dataPublicacao))}
            </span>
            <p>
                {props.noticia.corpo? he.decode(props.noticia.corpo.replace(/<[^>]+>/g, '')).slice(0,140) : ''} ...
            </p>
        </a>
	);
}