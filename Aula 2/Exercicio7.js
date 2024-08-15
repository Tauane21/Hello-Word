numero1 = prompt("Digite um numero");
numero2 = prompt("Digite um segundo numero");
numero3 = prompt("Digite um terceiro numero");
nro1 = parseInt(numero1);
nro2 = parseInt(numero2);
nro3 = parseInt(numero3);
if ( nro1 <= nro3 &&  nro2 <= nro3 ){
    console.log("Maior:", nro3);
}
else { 
    if( nro1 <= nro2 && nro3 <= nro2 ){
        console.log("Maior:", nro2);
    }
    else {
        console.log("Maior:", nro1)
    }
}
console.log("Fim do programa")