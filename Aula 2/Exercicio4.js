numero1 = prompt("escolha um numero");
numero2 = prompt("escolha outro numero");
numero1 = parseInt(numero1);
numero2 = parseInt(numero2);
res = numero1%numero2
if (res == 0) {
    console.log(numero1, "é multiplo de", numero2)
} else {
    console.log(numero1, "não é multiplo de", numero2)
}
console.log("fim do programa");