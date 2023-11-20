import Head from "next/head";
import { useState, useEffect, useRef, ChangeEvent } from "react";
import {
  appContainer,
  title,
  input,
  grid,
  buttons,
  radioButtons,
  radio,
} from "../styles/home-styles";
import Pillar from "../components/pillar";

export default function Home() {
  // number of disks used
  //const size = useRef(7);

  const [size, setSize] = useState<number>(7);

  const cancel = useRef(false);

  const speed = useRef(200);
  // const [checkedRadio, setCheckedRadio] = useState<number>(0);

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

  const reset = () => {
    setStackA(tempA);
    setStackB(tempB);
    setStackC(tempC);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) < 0 || Number(e.target.value) > 7) {
      alert("Incorrect number entered. Enter a number between 0 and 7");
      return;
    }
    setSize(Number(e.target.value));
    cancel.current = true;
    reset();
  };

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    // setCheckedRadio(Number(e.target.value));
    switch (Number(e.target.value)) {
      case 0:
        speed.current = 200;
        break;
      case 1:
        speed.current = 400;
        break;
      case 2:
        speed.current = 600;
        break;
    }
  };

  // load initial disks at start and reset when size is changed
  useEffect(() => {
    reset();
  }, [size]);

  const handleSolve = async () => {
    await recursiveSolve([...stackA, 1], [...stackC, 3], [...stackB, 2], size);
  };

  const delay = async (ms: number) => {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    }).then(() => console.log("waiting"));
  };

  const recursiveSolve = async (
    a: number[] | undefined,
    b: number[] | undefined,
    c: number[] | undefined,
    n: number,
  ) => {
    if (n == 0 || cancel.current) return;

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
              await delay(speed.current);

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
          Towers of <span className="text-purple-600">Hanoi</span>
        </h1>
        <div className={grid}>
          <Pillar disks={stackA} />
          <Pillar disks={stackB} />
          <Pillar disks={stackC} />
        </div>
        <div className={buttons}>
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
              cancel.current = true;
              reset();
            }}
          >
            Reset
          </button>
          <label className="my-2 flex justify-end text-xl text-gray-200">
            Disks:
          </label>
          <input
            className={input}
            type="number"
            min="0"
            max="7"
            onChange={handleChange}
            value={size}
          />
        </div>
        <form className={radioButtons}>
          <div>
            <label>Slow</label>
            <input
              name="speed"
              type="radio"
              className={radio}
              onChange={handleRadioChange}
              value={0}
            ></input>
          </div>
          <div>
            <label>Mid</label>
            <input
              name="speed"
              type="radio"
              className={radio}
              onChange={handleRadioChange}
              value={1}
            ></input>
          </div>
          <div>
            <label>Fast</label>
            <input
              name="speed"
              type="radio"
              className={radio}
              onChange={handleRadioChange}
              value={2}
            ></input>
          </div>
        </form>
      </main>
    </>
  );
}
