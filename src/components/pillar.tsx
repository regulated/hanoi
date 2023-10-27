import { rectangle } from "../styles/pillar-style";
import Disk from "./disk";

type PillarProps = {
  pid: number;
  disks?: number[];
};

const Pillar = ({ pid, disks }: PillarProps) => {
  /*let color: string = "";
	let size: number = 0;
	if (id == 0) {
		color = "white";
		size = 0;
	}
	if (id == 1) {
		color = "red";
		size = 1;
	}
	if (id == 2) {
		color = "blue";
		size = 2;
	}
	if (id == 3) {
		color = "yellow";
		size = 3;
	}*/

  return (
    <section>
      <div className={rectangle}>
        P {pid}
        <Disk did={disks[2]} />
        <Disk did={disks[1]} />
        <Disk did={disks[0]} />
      </div>
    </section>
  );
};

export default Pillar;
