import { Banner } from "../components/Banner";
import { FastAccess } from "../components/FastAccess";
import { News } from "../components/News";
import { OperadoresDoDireito } from "../components/OperadoresDoDireito";
import { ProdutividadeFuncionamento } from "../components/ProdutividadeFuncionamento";
import { SystemsAndTools } from "../components/SystemsAndTools";
import { Temas } from "../components/Temas";
import VLibras from '../vlibras'

export default function Home() {
  return (
    <>
      <VLibras />
      <Banner />
      <FastAccess />
      <ProdutividadeFuncionamento />
      <News />
      <SystemsAndTools />
      <OperadoresDoDireito />
      <Temas />
    </>
  )
}
