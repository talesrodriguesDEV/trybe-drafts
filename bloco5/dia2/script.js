// arquivo script.js
// console.log(document.getElementById('start').nextSibling); // nó
// console.log(document.getElementById('start').nextElementSibling); // <p>elemento</p>

// Parte I
// 1
console.log(document.getElementById('elementoOndeVoceEsta'));
// 2
document.getElementById('elementoOndeVoceEsta').parentNode.style.color = 'blue';
// 3
document.getElementById('primeiroFilhoDoFilho').innerText = 'Olá!';
// 4
console.log(document.getElementById('pai').firstElementChild);
// 5
console.log(document.getElementById('elementoOndeVoceEsta').previousElementSibling);
// 6
console.log(document.getElementById('elementoOndeVoceEsta').nextSibling);
// 7
console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling);
// 8
console.log(document.getElementById('pai').firstElementChild.nextElementSibling.nextElementSibling);

// Parte II
// 1
let newBrother = document.createElement('section');
document.querySelector('#elementoOndeVoceEsta').parentNode.appendChild(newBrother);
newBrother.innerText = 'Novo irmão!';
console.log(document.querySelector('#elementoOndeVoceEsta').parentNode.children);
// 2
let newChild = document.createElement('p');
document.querySelector('#elementoOndeVoceEsta').appendChild(newChild);
newChild.innerText = 'Novo filho!';
// 3
let primeiroFilhoDoFilhoDoFilho = document.createElement('h1');
document.querySelector('#primeiroFilhoDoFilho').appendChild(primeiroFilhoDoFilhoDoFilho);
primeiroFilhoDoFilhoDoFilho.innerText = 'Primeiro filho do filho do filho';
// 4
console.log(primeiroFilhoDoFilhoDoFilho.parentNode.parentNode.nextElementSibling);