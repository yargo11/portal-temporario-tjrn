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
    const listaDeNoticia = await (await apinoticia.get('lista')).data;
    return {
        props: {
            listaDeNoticia
        },
    }
  }