import { rectangle } from "../styles/pillar-style";
import Disk from "./disk";

type PillarProps = {
  pid: number;
  disks: number[];
};

const Pillar = ({ pid, disks }: PillarProps) => {
  return (
    <>
      <div className={rectangle}>
        P {pid}
        <div className="h-16"></div>
        <Disk did={disks[3]} />
        <Disk did={disks[2]} />
        <Disk did={disks[1]} />
        <Disk did={disks[0]} />
      </div>
    </>
  );
};

export default Pillar;
