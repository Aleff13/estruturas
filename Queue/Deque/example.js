"use strict";
exports.__esModule = true;
var Deque_1 = require("./Deque");
var fileChanges = new Deque_1["default"]();
//Historico de alterações em um documento
fileChanges.addFront('add element in body');
fileChanges.addBack('add element in header');
fileChanges.addBack('add link in header');
fileChanges.addBack('add script in header');
//undo last change
var lastUndo = fileChanges.removeBack();
console.log(fileChanges.toString());
//ctrl + z
fileChanges.addBack(lastUndo);
console.log(fileChanges.toString());
//removendo primeira alteração pelo histórico de arquivos
fileChanges.removeFront();
console.log(fileChanges.toString());
var browserHistory = new Deque_1["default"]();
//Historico de do navegador
browserHistory.addFront('https://google.com');
browserHistory.addBack('https://google.com/maps');
browserHistory.addBack('https://google.com/maps/y=123123&x=12312312');
browserHistory.addBack('https://google.com/images');
//see last page
var lastPage = browserHistory.peekBack();
var firstPage = browserHistory.peekFront();
console.log('lastPage', lastPage);
console.log('firstPage', firstPage);
//see all history
console.log(browserHistory.toString());
//clean history
browserHistory.clear();
