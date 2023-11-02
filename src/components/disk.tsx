import {
  redOval,
  orangeOval,
  yellowOval,
  greenOval,
  blueOval,
  purpleOval,
  blankOval,
} from "../styles/disk-style";

type DiskProps = {
  did: number;
  h: number;
};

const Disk = ({ did }: DiskProps) => {
  return (
    <>
      {(() => {
        switch (did) {
          case 0:
            return <div className={blankOval}></div>;
          case 1:
            return <div className={redOval}></div>;
          case 2:
            return <div className={orangeOval}></div>;
          case 3:
            return <div className={yellowOval}></div>;
          case 4:
            return <div className={greenOval}></div>;
          case 5:
            return <div className={blueOval}></div>;
          case 6:
            return <div className={purpleOval}></div>;
          case 7:
            return <div className={purpleOval}></div>;
          case 8:
            return <div className={purpleOval}></div>;
          case 9:
            return <div className={purpleOval}></div>;
          case 10:
            return <div className={purpleOval}></div>;
          default:
            return;
        }
      })()}
    </>
  );
};

export default Disk;
