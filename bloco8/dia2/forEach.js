const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} está cadastrado em nosso banco de dados!`);
};

// Adicione seu código aqui
emailListInData.forEach(showEmailList);