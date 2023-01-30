import SetTs from "./Set";
import SuperSet from "./SuperSet";

const firstSet = new SetTs()
const secondSet = new SuperSet()

firstSet.add(1, 2, 3, 4, 5)
secondSet.add(-3, -2, -1, 0, 1, 2)

console.log(secondSet.difference(firstSet).values())

//Note que os números retornados são apenas os números contidos em secondSet que retirando os que estão em firstSet

//[ '0', '-3', '-2', '-1' ]
