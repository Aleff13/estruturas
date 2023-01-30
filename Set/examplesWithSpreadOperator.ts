const setA = new Set([1,2,3])
const setB = new Set([2,3,4,5])

console.log(new Set([...setA].filter(x => setB.has(x)))) //união de conjuntos
