// Exercício 1
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (array) => {
  // Adiciona seu código aqui
  return array.find((number) => number % 3 === 0 && number % 5 === 0);
}

console.log(findDivisibleBy3And5(numbers));

// Exercício 2
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (array) => {
  // Adicione seu código aqui:
  return array.find((name) => name.length === 5);
}

console.log(findNameWithFiveLetters(names));

// Exercício 3
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(array, id) {
  // Adicione seu código aqui
  return array.find((musica) => musica.id === id);
}

console.log(findMusic( musicas, '31031686'));