import Deque from "./Deque";

const fileChanges = new Deque();

//Historico de alterações em um documento
fileChanges.addFront('add element in body')
fileChanges.addBack('add element in header')
fileChanges.addBack('add link in header')
fileChanges.addBack('add script in header')

//undo last change
const lastUndo = fileChanges.removeBack()

console.log(fileChanges.toString())

//ctrl + z
fileChanges.addBack(lastUndo)

console.log(fileChanges.toString())

//removendo primeira alteração pelo histórico de arquivos
fileChanges.removeFront()

console.log(fileChanges.toString())

const browserHistory = new Deque();

//Historico de navegador
browserHistory.addFront('https://google.com')
browserHistory.addBack('https://google.com/maps')
browserHistory.addBack('https://google.com/maps/y=123123&x=12312312')
browserHistory.addBack('https://google.com/images')

//see last page
const lastPage = browserHistory.peekBack()
const firstPage = browserHistory.peekFront()

console.log('lastPage', lastPage)
console.log('firstPage', firstPage)

//see all history
console.log('Histórico', browserHistory.toString())

//clean history
browserHistory.clear()

console.log('Histórico:', browserHistory.toString())


