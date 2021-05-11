import { Banner } from "../components/Banner";
import { FastAccess } from "../components/FastAccess";
import { Header } from "../components/Header";
import { MainMenu } from "../components/MainMenu";
import { News } from "../components/News";
import { SystemsAndTools } from "../components/SystemsAndTools";

export default function Home() {
  return (
    <>
      <Header />
      <MainMenu />
      <Banner />
      <News />
      <FastAccess />
      <SystemsAndTools />
    </>
  )
}
