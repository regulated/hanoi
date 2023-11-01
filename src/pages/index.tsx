import Head from "next/head";
import { useState } from "react";
import {
  appContainer,
  /*title, purple, body,*/ grid,
} from "../styles/home-styles";
import Pillar from "../components/pillar";
//import Disk from "../components/disk";
//import Solve from "../algo/solve";

export default function Home() {
  const [stackA, setStackA] = useState<number[]>([1, 2, 3]);
  const [stackB, setStackB] = useState<number[]>([0, 0, 0]);
  const [stackC, setStackC] = useState<number[]>([0, 0, 0]);

  const handleSolve = async () => {
    await recursiveSolve([...stackA, 1], [...stackC, 3], [...stackB, 2], 3);
  };

  const delay = (ms: number) => {
    return new Promise((resolve) => {
      console.log("waiting...");
      setTimeout(resolve, ms);
    });
  };

  const recursiveSolve = async (
    a: number[],
    b: number[],
    c: number[],
    n: number,
  ) => {
    if (n == 0) return;

    await recursiveSolve(a, c, b, n - 1);

    for (let i = a.length - 2; i >= 0; i--) {
      if (a[i] != 0) {
        for (let j = 0; j < b.length - 1; j++) {
          if (b[j] == 0) {
            b[j] = a[i];
            a[i] = 0;
            await delay(900);
            console.log(a, b, c);

            switch (a[3]) {
              case 1:
                setStackA(a.slice(0, 3));
                break;
              case 2:
                setStackB(a.slice(0, 3));
                break;
              case 3:
                setStackC(a.slice(0, 3));
                break;
            }
            switch (b[3]) {
              case 1:
                setStackA(b.slice(0, 3));
                break;
              case 2:
                setStackB(b.slice(0, 3));
                break;
              case 3:
                setStackC(b.slice(0, 3));
                break;
            }
            switch (c[3]) {
              case 1:
                setStackA(c.slice(0, 3));
                break;
              case 2:
                setStackB(c.slice(0, 3));
                break;
              case 3:
                setStackC(c.slice(0, 3));
                break;
            }

            // setStackA(a.slice(0, 3));
            // setStackB(c.slice(0, 3));
            // setStackC(b.slice(0, 3));
            break;
          }
        }
        break;
      }
    }

    await recursiveSolve(c, b, a, n - 1);
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
