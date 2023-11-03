import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import {
  appContainer,
  title,
  /* purple, body,*/ grid,
} from "../styles/home-styles";
import Pillar from "../components/pillar";

export default function Home() {
  // number of disks used
  const size: number = 7;

  let cancel = useRef(false);

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
  }, []);

  const reset = () => {
    setStackA(tempA);
    setStackB(tempB);
    setStackC(tempC);
  };

  const handleSolve = async () => {
    await recursiveSolve([...stackA, 1], [...stackC, 3], [...stackB, 2], size);
  };

  const delay = (ms: number) => {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  };

  const recursiveSolve = async (
    a: number[] | undefined,
    b: number[] | undefined,
    c: number[] | undefined,
    n: number,
  ) => {
    if (n == 0) return;

    await recursiveSolve(a, c, b, n - 1);

    if (
      !cancel.current &&
      a !== undefined &&
      b !== undefined &&
      c !== undefined
    ) {
      for (let i = a.length - 2; i >= 0; i--) {
        if (a[i] != 0) {
          for (let j = 0; j < b.length - 1; j++) {
            if (b[j] == 0) {
              b[j] = a[i] ?? 0;
              a[i] = 0;

              await delay(200);

              if (!cancel.current) {
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
              }

              break;
            }
          }
          break;
        }
      }
    }

    await recursiveSolve(c, b, a, n - 1);
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
          <Pillar disks={stackA} />
          <Pillar disks={stackB} />
          <Pillar disks={stackC} />
        </div>
        <button
          className="my-2 rounded-lg bg-gray-300 px-2"
          onClick={() => {
            cancel.current = false;
            handleSolve();
          }}
        >
          Solve
        </button>
        <button
          className="my-2 rounded-lg bg-red-600 px-2"
          onClick={() => {
            //ac.abort();
            cancel.current = true;
            reset();
          }}
        >
          Reset
        </button>
      </main>
    </>
  );
}
