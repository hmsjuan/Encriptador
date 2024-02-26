
/*const matriz_claves = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat'],    
];*/

const mensaje = document.querySelector('#mensaje');
const resutado_mensaje = document.querySelector("#mensajeResultado");

    /*Definimos los caracteres que permitiremos
        Aunque una de las pautas del reto es no permitir los caracteres especiales
        aceptaremos la letra {ñ} ya que es parte de nuestro alfabeto y aceptareos numeros
    */
    const letrasAceptadas="!¡?¿abcdefghijklmnñopqrstuvwxyz1234567890";


/*usaremos esta funcion para encriptar y desencriptar pasandole como parametro 
el texto y la accion a realizar (e = encriptar y d = desencriptar)*/
function encriptaDesencripta(accion){   
    let texto = mensaje.value;

    let nuevoTexto=""
    if(texto.length == 0) {
        /*Si el texto está vacío salimos de la funcion */
        asignarTextoElemento('alerta',`&#9888; No hay texto para que sea  ${(accion === 'e') ? 'encriptado' : 'desencriptado'}`);
        setTimeout(limpiarAviso,3000);
       return; 
    }

    //si el texto contiene algo que no son letras o numeros nos saltamos este proceso
    if(caracteresEspeciales(texto)){
         asignarTextoElemento('alerta',`&#9888; El texto no puede ser  ${(accion === 'e') ? 'encriptado' : 'desencriptado'} porque contiene carácteres no permitidos`);
        setTimeout(limpiarAviso,3000);
        return;
    }

   
        /*En cada iteración recorremos el texto y lo comparamos con cada clave
            si coinciden las dos agregamos el valor de la columna a la posición correspondiente
            en el texto y eliminamos la letra de la misma posición en la fila
         */
    if (accion==="e"){     // e = Encriptar  
        for (let i=0;i<texto.length;i++) {
                let caracter = texto[i];

                switch (caracter) {
                    case "a":
                        nuevoTexto+="ai"
                        break;
                            
                    case "e":
                        nuevoTexto+="enter"
                        break;

                    case "i":
                        nuevoTexto+="imes"
                        break;

                    case "o":
                        nuevoTexto+="ober"
                        break;

                    case "u":
                        nuevoTexto+="ufat"
                        break;                
                                
                    default:
                        nuevoTexto+=caracter;
                        break;
                }
        }
            
    }else if(accion==="d"){ //d = desencriptar
                nuevoTexto =   texto.replaceAll("ai", "a")
                                    .replaceAll("enter", "e")
                                    .replaceAll("imes", "i")
                                    .replaceAll("ober", "o")
                                    .replaceAll("ufat", "u");
    }
        

    if (nuevoTexto.valueOf !=""){
            //Mostramos un mensaje de encriptacion o desencriptacion lograda por 3 segundos en un parrafo 
        
        asignarTextoElemento('aviso',`&#10004; El texto ha sido  ${(accion === 'e') ? 'encriptado' : 'desencriptado'} correctamente`);
        setTimeout(limpiarAviso,3000);
                    
            //muestro el texto encriptado un texarea y luego lo hago visible
        asignarTextoElemento("mensajeResultado",texto);
        mostrarOcultarElemento('botonCopiar','visible');
        mostrarOcultarElemento('resultadoCorrecto','block');   
        mostrarOcultarElemento('resultadoError','none');  
    }
}

/*Usaremos esta funcion para la cambiar dianmicamente el texto e cualquier elemento HTML
Tomamos esta funcion del curso anterior, 
Diseñada por:Leonardo Jose Castillo Lacruz, Intructor Alura Latam
*/
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

  /*Si el texto contiene algún carácter especial  */
function caracteresEspeciales(texto){
   let contiene=false;
   for (x=0;x<texto.length;x++){    
        if(!letrasAceptadas.includes(texto[x]) && texto[x]!==' '){
            contiene = true;
        }   
 }    
   return  contiene;
}


    
function reiniciarValores(){
    //Asignamos los valores por defecto a los campos de entrada y salida
    document.getElementById('mensaje').value=""; 
    asignarTextoElemento('mensajeResultado',''); 
    mostrarOcultarElemento('botonCopiar','hidden');   
    mostrarOcultarElemento('resultadoCorrecto','none');   
    mostrarOcultarElemento('resultadoError','block');  
}

/*Con esta función haremos que se oculten/muestren algunos elementos dependiendo de ciertas opciones */
function mostrarOcultarElemento(elemento, estado){
   document.getElementById(elemento).style.visibility = estado;
}

function limpiarAviso(){
    asignarTextoElemento('aviso','');
    asignarTextoElemento('alerta','');
}


function copiarTexto(){        
    
    document.getElementById("mensajeResultado").select();

    try {
        var copiando = document.execCommand('copy');
      
        asignarTextoElemento("aviso","&#10004; Texto Copiado al portapaples! ");
        setTimeout(limpiarAviso,3000);
    } catch (err) {
        asignarTextoElemento("alerta","&#9888; El texto no se ha copiado al portapaples");
    }

 //   document.body.removeChild(textArea);
}
