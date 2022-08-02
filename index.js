
// eu fiz o exercício de casa que era imprimir no console.log a tabuada de todos os números


const valoresTabuada = [1,2,3,4,5,6,7,8,9,10];
function tabuada(num, multiplicador){
      console.log(num + 'x' + multiplicador + '=' + num*multiplicador)
}

for(let i = 0; i < valoresTabuada.length; i++){
	for(let j = 1; j <= valoresTabuada.length; j++){
tabuada(valoresTabuada[i],j);}}

   
//para imprimir na tela usar o document.write
for(let i = 1; i < 11; i++){
	document.write("<p>Tabuada do "  + i + "</p>");
	for(let j = 1; j < 11; j++){
		document.write(i + " x " + j + " = " + (i * j) + "<br>");
	}
}