//Refatorando exercícios 1 a 5 do dia 4.1
//1
function soma(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function mult(a, b) {
    return a * b;
}
function div(a, b) {
    return a / b;
}
function resto(a, b) {
    return a % b;
}
console.log("Soma: " +  soma(10, 2));
console.log("Subtração: " +  sub(10, 2));
console.log("Multiplicação: " +  mult(10, 2));
console.log("Divisão: " +  div(10, 2));
console.log("Resto: " +  resto(10, 2));
//2
function maior(a, b) {
    if (a >= b) {
        console.log(a);
    } else {
        console.log(b);
    }
}
maior(2,20);
//3
function maior(a, b, c) {
    let res1 = (a > b);
    if (res1) {
        aux1 = a;
    } else {
        aux1 = b;
    }

    let res2 = (aux1 > c);
    if (res2){
        aux2 = aux1;
    } else {
        aux2 = c;
    }
    console.log(aux2);
}
maior(1, 3, 10);
//4
function sign(a) {
    if (a > 0) {
        console.log("positive");
    } else if (a < 0) {
        console.log("negative");
    } else {
        console.log("zero");
    }
}
sign(0);
//5
function triangulo(a, b, c) {
    let triangle;
    let sai = a + b + c;

    if (a < 0 || b < 0 || c < 0) {
        console.log("Erro.");
    } else if (sai == 180) {
        triangle = true;
        console.log(triangle);
    } else {
        triangle = false;
        console.log(triangle);
    }
}
triangulo(90, 45, 45);