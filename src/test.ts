import ArrayLogger from "./ArrayLogger";
import { StateVariableType } from "./types";


//const log = new Logger();
const arrlog = new ArrayLogger([1,2,3]);

function minimum(arr: number[]): number {
  if (arr.length == 0) throw new Error('list is empty');

  let minIndex = arrlog.recordState(0, StateVariableType.POINTER, 'minIndex');
  for (let i = arrlog.recordState(1, StateVariableType.POINTER, 'i'); i.value < arr.length; i.value++) {

    arrlog.mark(() => {
      if (arr[i.value] < arr[minIndex.value]) {
        minIndex.value = i.value;
      }
    }, i, minIndex);

  }

  return minIndex.value;
}

const a = {
  object: new ArrayLogger([]),
  matrix: [[{},2,3], [1,2,3], [1,2,3]],
  array: [1,2,3],
  string: 'string',
  number: 123,
  bool: false,
  nul: null,
  date: new Date(),  // stringified
  undef: undefined,  // lost
  inf: Infinity,  // forced to 'null'
  re: /.*/,  // lost
}

//console.log(a);
//const b = JSON.parse(JSON.stringify(a));
//console.log(b);
//const log2: ArrayLogger = b.object;
//console.log(log2);


console.log(minimum([3,2,1]));
arrlog.print();
arrlog.write('log2.json');


