import { Banner } from "../components/Banner";
import { FastAccess } from "../components/FastAccess";
import { News } from "../components/News";
import { ProdutividadeFuncionamento } from "../components/ProdutividadeFuncionamento";
import { SystemsAndTools } from "../components/SystemsAndTools";

export default function Home() {
  return (
    <>
      <Banner />
      <FastAccess />
      <ProdutividadeFuncionamento />
      <News />
      <SystemsAndTools />
    </>
  )
}
