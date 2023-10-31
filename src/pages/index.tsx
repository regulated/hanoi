import Head from "next/head";
import { useState } from "react";
import { appContainer, title, purple, body, grid } from "../styles/home-styles";
import Pillar from "../components/pillar";
//import Disk from "../components/disk";
//import Solve from "../algo/solve";

export default function Home() {
  const [stackA, setStackA] = useState<number[]>([1, 2, 3]);
  const [stackB, setStackB] = useState<number[]>([0, 0, 0]);
  const [stackC, setStackC] = useState<number[]>([0, 0, 0]);

  const handleSolve = async () => {
    // await recursiveSolve();
    await delay(300);
    console.log("move ->");
    setStackA([0, 0, 0]);
    setStackB([0, 0, 0]);
    setStackC([1, 2, 3]);
    return true;
  };

  const delay = (ms: number) => {
    return new Promise((resolve) => {
      console.log("waiting...");
      setTimeout(resolve, ms);
    });
  };

  const recursiveSolve = async () => {
    await delay(200);
  };

  const moveAC = (A: number[], C: number[]) => {};

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
            <Pillar id={1} disks={stackA} />
            <Pillar id={2} disks={stackB} />
            <Pillar id={3} disks={stackC} />
          </div>
          <button
            className="my-2 rounded-lg bg-gray-300 px-2"
            onClick={() => {
              //   Solve();
              handleSolve();
            }}
          >
            Solve
          </button>
          <button
            className="my-2 rounded-lg bg-red-600 px-2"
            onClick={() => {
              setStackA([1, 2, 3]);
              setStackB([0, 0, 0]);
              setStackC([0, 0, 0]);
            }}
          >
            Reset
          </button>
        </main>
      </html>
    </>
  );
}
