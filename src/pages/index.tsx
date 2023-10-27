import Head from "next/head";
import { appContainer, title, purple, body, grid } from "../styles/home-styles";
import Pillar from "../components/pillar";
import Disk from "../components/disk";

export default function Home() {
  return (
    <>
      <html className="bg-indigo-950">
        <Head>
          <title>Towers of Hanoi</title>
          <meta name="description" content="Towers of Hanoi" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={appContainer}>
          {/*
        <h1 className={title}>
          Towers of <span className="text-[hsl(280,100%,70%)]">Hanoi</span>
        </h1>
				*/}
          <div className={grid}>
            <Pillar id={1} disks={[1, 2, 3]} />
            <Pillar id={2} disks={[0, 0, 0]} />
            <Pillar id={3} disks={[0, 0, 0]} />
          </div>
        </main>
      </html>
    </>
  );
}
