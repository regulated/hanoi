/*
 * Can either move the disks on and off of stacks, or keep
 * a 2d array that has 0 for no disk and the number of the
 * disk for the correct disk
 * I think the 2d array idea is easier to implement and
 * visualize.
 *
 * starting to think that three stacks make more sense, or 3 arrays and keep empty divs where holes are
 *
 * make a blank disk 0 to keep as placeholders
 *
 * General functionality to consider
 * Move disk
 *  Remove top disk
 *  	Make sure there is a disk to remove
 *  Place disk on top
 *  	Make sure there is room
 *  	Make sure there is no smaller disk underneath
 * Check if complete
 * */

const Solve = async () => {
  await Delay(1000);
  console.log("move ->");
  return true;
};

const Delay = (ms: number) => {
  return new Promise((resolve) => {
    console.log("waiting...");
    setTimeout(resolve, ms);
  });
};

export default Solve;
