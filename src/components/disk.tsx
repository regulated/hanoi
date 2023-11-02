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
            return <div className={redOval}>Disk {did}</div>;
          case 2:
            return <div className={orangeOval}>Disk {did}</div>;
          case 3:
            return <div className={yellowOval}>Disk {did}</div>;
          case 4:
            return <div className={greenOval}>Disk {did}</div>;
          case 5:
            return <div className={blueOval}>Disk {did}</div>;
          case 6:
            return <div className={purpleOval}>Disk {did}</div>;
          case 7:
            return <div className={purpleOval}>Disk {did}</div>;
          case 8:
            return <div className={purpleOval}>Disk {did}</div>;
          case 9:
            return <div className={purpleOval}>Disk {did}</div>;
          case 10:
            return <div className={purpleOval}>Disk {did}</div>;
          default:
            return;
        }
      })()}
    </>
  );
};

export default Disk;
