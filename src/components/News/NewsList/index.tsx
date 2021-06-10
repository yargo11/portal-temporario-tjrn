import { useEffect, useState } from "react";
import { NewsInterface } from "../../../interfaces/newsInterface";
import styles from './styles.module.scss';
import { NewsHomeListItem } from '../NewsHomeListItem';
import ReactPaginate from 'react-paginate';
import { NewsPropsInterface } from "../../../interfaces/newsPropsInterface";

export function NewsList({ listaDeNoticia }: NewsPropsInterface) {

    const [news, setNews] = useState<NewsInterface[]>();
    const [maxPage, setMaxPage] = useState(0);

    const pageListSize = 10;

    useEffect(() => {
        setNews(listaDeNoticia.length > pageListSize ? listaDeNoticia.slice((pageListSize * 0 ), (pageListSize * 1)) : listaDeNoticia);
        setMaxPage(listaDeNoticia ? Math.ceil(listaDeNoticia.length/pageListSize) : 1);
	}, []);
    
    const handlePageClick = (selectedPage) => {
        async function getNews() {
            setNews(listaDeNoticia.length > pageListSize ? listaDeNoticia.slice((pageListSize * selectedPage.selected ), (pageListSize * (selectedPage.selected + 1))) : listaDeNoticia);
        }
        getNews();
    }
    
    return (
        <div className={styles.Content + ' container'}>
            <div className={'row'}>
                {news ? 
                    <>
                        {news .map(newsElement => (<NewsHomeListItem key={newsElement.id}  noticia={newsElement}/>))}
                        
                        <ReactPaginate
                        previousLabel={'Anterior'}
                        nextLabel={'Próximo'}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={maxPage}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageClick}
                        containerClassName={styles.pagination}
                        activeClassName={styles.active}
                        disabledClassName={styles.disabled}
                        />
                    </>:<></>
                }
            </div>
        </div>
    );
}