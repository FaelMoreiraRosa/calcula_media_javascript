let qtdNumeros_s =  prompt ("Olá, vamos calcular a média? para isso digite primeiro a quantidade de números que você deseja fazer a média : ");
let qtdNumeros_i = parseInt(qtdNumeros_s);

let soma = 0;

for (let count = 0; count < qtdNumeros_i ; count++){
    let numeros_s = prompt("Digite aqui o valor :");
    let x1 = parseInt(numeros_s);
    soma += x1;
}

let media = soma / qtdNumeros_i;

console.log("A média é : "+media);
