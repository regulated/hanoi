import { redOval, blueOval, yellowOval, greenOval, blankOval } from "../styles/disk-style";

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
            return <div className={blankOval}>Disk {did}</div>;
          case 1:
            return <div className={redOval}>Disk {did}</div>;
          case 2:
            return <div className={blueOval}>Disk {did}</div>;
          case 3:
            return <div className={yellowOval}>Disk {did}</div>;
          case 4:
            return <div className={greenOval}>Disk {did}</div>;
          default:
            return;
        }
      })()}
    </>
  );
};

export default Disk;
