const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// Adicione seu código aqui
// Exercício 1
for (let index = 0; index < people.length; index += 1) {
  for (let index2 = index + 1; index2 < people.length; index2 += 1) {
    if (people[index].age > people[index2].age) {
      let aux = people[index];
      people[index] = people[index2];
      people[index2] = aux;
    }
  }
}
console.log(people);

people.sort((personA, personB) => personA.age - personB.age);
console.log(people);

// Exercício 2
for (let index = 0; index < people.length; index += 1) {
  for (let index2 = index + 1; index2 < people.length; index2 += 1) {
    if (people[index].age < people[index2].age) {
      let aux = people[index];
      people[index] = people[index2];
      people[index2] = aux;
    }
  }
}
console.log(people);

people.sort((personA, personB) => personB.age - personA.age);
console.log(people);