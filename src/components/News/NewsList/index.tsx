import { useEffect, useState } from "react";
import { NewsInterface } from "../../../interfaces/newsInterface";
import styles from './styles.module.scss';
import { NewsHomeListItem } from '../NewsHomeListItem';
import ReactPaginate from 'react-paginate';

import { apinoticia } from "../../../service/apinoticia";
export function NewsList() {

    const [news, setNews] = useState<NewsInterface[]>();
    const [maxPage, setMaxPage] = useState(0);

    const [data, setData] = useState<NewsInterface[]>();
    const pageListSize = 10;

    useEffect(() => {
        async function getNews() {
            await apinoticia.get('lista').then(response => {
                setData(response.data);
                setNews(data.length > pageListSize ? data.slice((pageListSize * 0 ), (pageListSize * 1)) : data);
                setMaxPage(data ? Math.ceil(data.length/pageListSize) : 1);
            }).catch(error => console.log(error));
        }
        getNews();
	}, [data]);

    const handlePageClick = (selectedPage) => {
        setNews(data.length > pageListSize ? data.slice((pageListSize * selectedPage.selected ), (pageListSize * (selectedPage.selected + 1))) : data);
    }
    
    return (
        <div className={styles.Content + ' container'}>
            <div className={'row'}>
                {news ? news
                    .map(newsElement => (
                            <NewsHomeListItem key={newsElement.id}  noticia={newsElement}/>
                    )): <></>
                }
            </div>
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
        </div>
    );
}