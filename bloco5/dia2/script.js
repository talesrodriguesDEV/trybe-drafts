// arquivo script.js
// console.log(document.getElementById('start').nextSibling); // nó
// console.log(document.getElementById('start').nextElementSibling); // <p>elemento</p>

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