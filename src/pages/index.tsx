import { GetServerSideProps } from 'next';
import { apinoticia } from '../service/apinoticia';
import { Banner } from "../components/Banner";
import { FastAccess } from "../components/FastAccess";
import { News } from "../components/News";
import { OperadoresDoDireito } from "../components/OperadoresDoDireito";
import { ProdutividadeFuncionamento } from "../components/ProdutividadeFuncionamento";
import { SystemsAndTools } from "../components/SystemsAndTools";
import { Temas } from "../components/Temas";
import { NewsPropsInterface } from '../interfaces/newsPropsInterface';

export default function Home({ listaDeNoticia }: NewsPropsInterface) {
  return (
    <>
      <Banner />
      <FastAccess />
      <ProdutividadeFuncionamento />
      <News listaDeNoticia={listaDeNoticia}/>
      <SystemsAndTools />
      <OperadoresDoDireito />
      <Temas />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  let noticiasDaApi;
  await apinoticia.get('lista').then(response => noticiasDaApi = response.data).catch(error => console.log(error));
  let listaDeNoticia = [];
  
  if (noticiasDaApi) {
    listaDeNoticia = (noticiasDaApi.length > 6) ? noticiasDaApi.slice(0, 6) : noticiasDaApi;
  }
  return {
      props: {
          listaDeNoticia
      },
  }
}
