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
        <Disk did={disks[9]} />
        <Disk did={disks[8]} />
        <Disk did={disks[7]} />
        <Disk did={disks[6]} />
        <Disk did={disks[5]} />
        <Disk did={disks[4]} />
        <Disk did={disks[3]} />
        <Disk did={disks[2]} />
        <Disk did={disks[1]} />
        <Disk did={disks[0]} />
      </div>
    </>
  );
};

export default Pillar;
