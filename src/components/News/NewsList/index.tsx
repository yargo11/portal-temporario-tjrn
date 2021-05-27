import { useEffect, useState } from "react";
import { NewsInterface } from "../../../interfaces/newsInterface";
import styles from './styles.module.scss';
import { NewsHomeListItem } from '../NewsHomeListItem';
import ReactPaginate from 'react-paginate';

import NOTICIATESTE from '../../../../test/news.json';
export function NewsList() {

    const [news, setNews] = useState<NewsInterface[]>();
    const [maxPage, setMaxPage] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);

    const data = NOTICIATESTE;
    const pageListSize = 10;

    useEffect(() => {
        //apinoticia.get('lista').then(response => data = response.data).catch(error => console.log(error));

        setNews(data.length > pageListSize ? data.slice((pageListSize * (pageNumber - 1)), (pageListSize * pageNumber)) : data);
        setMaxPage(data ? Math.ceil(data.length/pageListSize) : 1);
	}, []);

    function handlePageClick({ selected: selectedPage }) {
        setPageNumber(selectedPage);
        setNews(data.length > pageListSize ? data.slice((pageListSize * (pageNumber - 1)), (pageListSize * pageNumber)) : data);

        console.log(pageNumber);
        //console.log("data.length: " + data.length + ", pageListSize: " + pageListSize + ", pageNumber:" + pageNumber);
    }
    
    return (
        <div className={styles.Content + ' container'}>
            <div className={'row'}>
                {news ? news
                    .map(newsElement => (
                        <div className={styles.NoticiaItem + ' col-12 col-lg-6  mt-5'} key={newsElement.id}>
                            <NewsHomeListItem  noticia={newsElement}/>
                            <div className='Border-bottom-line margin-top-24'/>
                        </div>
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