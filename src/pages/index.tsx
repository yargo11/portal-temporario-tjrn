import { Banner } from "../components/Banner";
import { FastAccess } from "../components/FastAccess";
import { News } from "../components/News";
import { SystemsAndTools } from "../components/SystemsAndTools";

export default function Home() {
  return (
    <>
      <Banner />
      <News />
      <FastAccess />
      <SystemsAndTools />
    </>
  )
}
