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
  const noticiasDaApi = await (await apinoticia.get('lista')).data;
  const listaDeNoticia = noticiasDaApi.length > 6 ? noticiasDaApi.slice(0, 6) : noticiasDaApi;

  return {
      props: {
          listaDeNoticia
      },
  }
}