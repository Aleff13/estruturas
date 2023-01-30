import SetTs from "./Set";
import SuperSet from "./SuperSet";

const firstSet = new SetTs()
const secondSet = new SuperSet()

firstSet.add(1, 2, 3, 4, 5)
secondSet.add(-3, -2, -1, 0, 1, 2)

console.log(secondSet.union(firstSet))

//Note que os números repetidos não foram incluidos

// SetTs {
//     items: {
//       '0': [ '0' ],
//       '1': [ '1' ],
//       '2': [ '2' ],
//       '3': [ '3' ],
//       '4': [ '4' ],
//       '5': [ '5' ],
//       '-3': [ '-3' ],
//       '-2': [ '-2' ],
//       '-1': [ '-1' ]
//     }
//   }
