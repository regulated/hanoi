import Head from "next/head";
import { useState, useEffect, useCallback } from "react";
import {
  appContainer,
  title,
  /* purple, body,*/ grid,
} from "../styles/home-styles";
import Pillar from "../components/pillar";

export default function Home() {
  // number of disks used
  const size: number = 6;

  const ac = new AbortController();
  const signal = ac.signal;

  const [stackA, setStackA] = useState<number[]>([]);
  const [stackB, setStackB] = useState<number[]>([]);
  const [stackC, setStackC] = useState<number[]>([]);

  let tempA: number[] = [];
  let tempB: number[] = [];
  let tempC: number[] = [];

  // dynamically add disks based on size
  for (let i = 0; i < size; i++) {
    tempA = [...tempA, i + 1];
    tempB = [...tempB, 0];
    tempC = [...tempC, 0];
  }

  // load initial disks at start
  useEffect(() => {
    reset();
  });

  const reset = () => {
    setStackA(tempA);
    setStackB(tempB);
    setStackC(tempC);
  };

  const handleSolve = async () => {
    await recursiveSolve(
      [...stackA, 1],
      [...stackC, 3],
      [...stackB, 2],
      size,
      signal,
    );
  };

  const delay = (ms: number) => {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  };

  // const recursiveSolveWrap = async (
  //   a: number[],
  //   b: number[],
  //   c: number[],
  //   n: number,
  // ) => {
  //   try {
  //     await recursiveSolve(a, b, c, n);
  //   } catch (e) {
  //     if (e.name !== "AbortError") throw e;
  //   }
  // };

  const recursiveSolve = async (
    a: number[],
    b: number[],
    c: number[],
    n: number,
    s,
  ) => {
    if (n == 0) return;

    await recursiveSolve(a, c, b, n - 1, s);

    for (let i = a.length - 2; i >= 0; i--) {
      if (a[i] != 0) {
        for (let j = 0; j < b.length - 1; j++) {
          if (b[j] == 0) {
            b[j] = a[i];
            a[i] = 0;

            await delay(200);

            switch (a[size]) {
              case 1:
                setStackA(a.slice(0, size));
                break;
              case 2:
                setStackB(a.slice(0, size));
                break;
              case 3:
                setStackC(a.slice(0, size));
                break;
            }
            switch (b[size]) {
              case 1:
                setStackA(b.slice(0, size));
                break;
              case 2:
                setStackB(b.slice(0, size));
                break;
              case 3:
                setStackC(b.slice(0, size));
                break;
            }
            switch (c[size]) {
              case 1:
                setStackA(c.slice(0, size));
                break;
              case 2:
                setStackB(c.slice(0, size));
                break;
              case 3:
                setStackC(c.slice(0, size));
                break;
            }

            break;
          }
        }
        break;
      }
    }

    await recursiveSolve(c, b, a, n - 1, s);
  };

  return (
    <>
      <Head>
        <title>Towers of Hanoi</title>
        <meta name="description" content="Towers of Hanoi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={appContainer}>
        <h1 className={title}>
          Towers of <span className="text-[hsl(280,100%,70%)]">Hanoi</span>
        </h1>
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
            ac.abort();
            reset();
          }}
        >
          Reset
        </button>
      </main>
    </>
  );
}
