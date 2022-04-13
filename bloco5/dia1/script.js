const tarefasEmergenciais = document.querySelectorAll('.emergency-tasks div h3');
tarefasEmergenciais[0].style.backgroundColor = 'purple';
tarefasEmergenciais[1].style.backgroundColor = 'purple';

const tarefasNãoEmergenciais = document.querySelectorAll('.no-emergency-tasks div h3');
tarefasNãoEmergenciais[0].style.backgroundColor = 'black';
tarefasNãoEmergenciais[1].style.backgroundColor = 'black';

const fundo = document.querySelector('.emergency-tasks');
fundo.style.backgroundColor = 'pink';

const fundo2 = document.querySelector('.no-emergency-tasks');
fundo2.style.backgroundColor = 'yellow';