import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { MainMenu } from "../components/MainMenu";
import { News } from "../components/News";

export default function Home() {
  return (
    <>
      <Header />
      <MainMenu />
      <Banner />
      <News />
    </>
  )
}
