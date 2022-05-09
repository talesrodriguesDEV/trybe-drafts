const pessoa = {
  nome: 'Fulano',
  idade: 'Bezerra',
}

function teste(objeto, chave, valor) {
  let newkey = chave;
  objeto[newkey] = valor;
  return objeto;
}

console.log(teste(pessoa, 'time', 'Vaxco'));