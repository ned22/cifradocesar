
    do{
        var texto = prompt("Indique el número de lo que desea hacer: 1)Encriptar - 2)Descriptar"); // en este codigo declaro eligo si quiero encriptar o desencriptar
        if(texto != ""){ // si el texto es distinto a lo ingresado
            if(texto == "1") { // si ingreso la opcion 1 mi texto encripta
                var ejemplo = prompt("Introduzca su palabra para Encriptar")// caja donde ingreso mi texto
                cipher(ejemplo);// aqui declaro que lo que introdusca se ira a cifrar
            } else if (texto == "2") {// si no elige la opcion 1 toma la opcion2
                var ejemplo = prompt("Introduzca su palabra para Desencriptar")//aqui declaro que lo que introdusca se ira a desencriptar
                decipher(ejemplo);//// aqui declaro que lo que introdusca se ira a desencriptar
            } else {// sino se muestra emnsaje de alerta para que ingresar opcion valida
                alert("Ingrese una opción válida");
            }
        }
    } while (texto == "" || (texto != "1" && texto != "2"));// revisa hasta cumplir la funcion donde el texto sea == a lo introducido o mi texto sea distinto a 1 y distinto de 2

function cipher(ejemplo){// esta funcion se hizo para encriptar mi texto usando  codigo cesar
    var producto = "";
    var  entrada = 0;

    ejemplo = ejemplo.toUpperCase();


    for (var i = 0; i<ejemplo.length; i++){
        entrada = ejemplo.charCodeAt(i);//método devuelve un número indicando el valor Unicode del carácter en el índice proporcionado.
        entrada = ((entrada-65+33)%26)+65;// formula cesar + codigo ascii
        producto = producto + String.fromCharCode(entrada);// mi producto va ser igual al producto obtenido mas la trasnformacion de este a un string
    }
    ejemplo = ejemplo.toLowerCase();
        alert(producto);
}


function decipher(ejemplo){// esta funcion se hizo para desencriptar mi texto usando  codigo cesar
    var producto = "";
    var  entrada = 0;

    ejemplo = ejemplo.toUpperCase();

    for (var i = 0; i<ejemplo.length; i++){
        entrada = ejemplo.charCodeAt(i);
        entrada = ((entrada-65-7+26)%26+65);
        producto = producto + String.fromCharCode(entrada);
    }
    ejemplo = ejemplo.toLowerCase();
        alert(producto);
}
