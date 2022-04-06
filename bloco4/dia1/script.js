// let myName = "Tales";
// let birthCity = "Goiânia";
// let birthYear = 2001;

// console.log("Meu nome é " + myName + ", eu nasci em " + birthCity + " no ano de " + birthYear);

// birthYear = 2030;
// console.log(birthYear);

// birthCity = "Itajaí";
// console.log(birthCity);

// let patientId = 50;
// let isEnrolled = true;
// const patientInfo = {
//   firstName: 'Ana',
//   lastName: 'Santos',
// };
// const patientEmail = 'ana@email.com';

// console.log(typeof patientId);
// console.log(typeof isEnrolled );
// console.log(typeof patientInfo);
// console.log(typeof patientEmail);
// //console.log(patientAge);

// patientId = '50';
// console.log(typeof patientId);

// let base = 5;
// let height = 8;

// let area = base * height;
// console.log(area);

// let perimeter = (2 * base + 2 * height);
// console.log(perimeter);

// let nota = 59;

// if (nota >= 80) {
//     console.log("Parabéns, você foi aprovada(o)!");
// } else if (nota >= 60 && nota < 80) {
//     console.log("Você está na nossa lista de espera.");
// } else {
//     console.log("Você foi reprovada(o).");
// }

// const currentHour = 4;
// let message = "";

// if (currentHour >= 20){
//     message = "Não deveríamos comer nada, é hora de dormir.";
// } else if (currentHour >= 18 && currentHour < 22) {
//     message = "Rango da noite, vamos jantar :D";
// } else if (currentHour >= 14 && currentHour < 18) {
//     message = "Vamos fazer um bolo pro café da tarde?";
// } else if (currentHour > 11 && currentHour < 14) {
//     message = "Hora do almoço!!!";
// } else if (currentHour > 4 && currentHour < 11) {
//     message = "Hmmm, cheiro de café recém passado";
// }

// console.log(message);

// let weekDay = "sábado"

// if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
//     console.log("Oba, mais um dia de aprendizado na Trybe >:D");
// } else {
//     console.log("FINALMENTE, descando merecido UwU");
// }

let resultado = "lista";
switch (resultado) {
    case "aprovada":
        console.log("Parabéns, você foi aprovada(o)!");
        break;
    case "lista":
        console.log("Você está na nossa lista de espera.");
        break;
    case "reprovada":
        console.log("Você foi reprovada(o).");
        break;
    default:
        console.log("Não se aplica");
}