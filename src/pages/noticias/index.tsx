import { GetServerSideProps } from 'next';
import { NewsList } from '../../components/News/NewsList';
import { NewsPropsInterface } from '../../interfaces/newsPropsInterface';
import { apinoticia } from '../../service/apinoticia';

export default function noticias({ listaDeNoticia }: NewsPropsInterface) {
    return (
        <>
            <NewsList listaDeNoticia={listaDeNoticia}/>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    let listaDeNoticia = [];
    await apinoticia.get('lista').then(response => listaDeNoticia = response.data).catch(error => console.log(error));

    return {
        props: {
            listaDeNoticia
        },
    }
  }