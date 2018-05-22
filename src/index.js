window.onload=function() {
	alert('Estamos provando ');
	DOMCipherEncode();
	// body...
}
function DOMCipherEncode(){
	var num=document.getElementById("offsetNumber");
	var textMessage=document.getElementById("cipherText");

	document.getElementById("buttonCipherText").addEventListener("click",function(){
		alert(num.value +" hola mundo");
		encode(num.value,textMessage.value)
	});

}

function encode(offset, cadena){debugger
	var sinCifrar=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];
	var otrasinCifrar="abcdefghijklmnñopqrstuvwxyz";
	
		for (var i = 0; i <= cadena.length; i++) {
		var letra=[];
		letra[i]=cadena[i];
		// var h=letra[i];
		// console.log(letra[i])
		return letra[i];
		//......................AQUI EMPESARE A COMPARAR LA POSICION DE MI MENSAJE..............
		for(var q=0; q<=sinCifrar.length;i++)// Digamos sin cifrar es 27
			//............LOGICA...................
			// SI sinCifrar[k]==letra[k]
			// posicionText=k+3(mode sincifrar.length);
			// textCifrado=sinCifrar[posicionText];
			// NOELY
			// ABCDE

			{ 	//N = A-------> Buaaaa!!! mal
				//N = A-B-C
				if(letra[i]==sincifrar[q]){
					var posicionText=q+3(mod sincifrar.length);
					textCifrado=sincifrar[posicionText];
				}
				document.write(textCifrado);
			}
}