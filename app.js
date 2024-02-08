/*Usaremos esta funcion para la cambiar dianmicamente el texto e cualquier elemento HTM
Tomamos esta funcion del curso anterior, 
Diseñada por:Leonardo Jose Castillo Lacruz, Intructor Alura Latam
*/
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//En esta funcion trabajamos la encriptacion y desencriptacion el texto/mensaje
function encriptarDesencriptar(opcion){
    /*Definimos los caracteres que permitiremos
    Aunque una de las pautas del reto es no permitir los caracteres especiales
    aceptaremos la letra {ñ} ya que es parte de nuestro alfabeto y aceptareos numeros
    */
    const letras="abcdefghijklmnñopqrstuvwxyz1234567890";
    
     //let ejecutarOpcion=false;

    let texto=document.getElementById('mensaje').value;
    let nuevoTexto="";

    // Verificaremos que el texto/mensaje solo contenga los caracteres permitidos
    if (texto.length>0) {
        for (x=0;x<texto.length;x++){        
                
            if(letras.includes(texto[x]) || texto[x]==' '){
                        
            }else{
                  /*Si el texto contiene algún carácter especial salimos de la funcion */
                asignarTextoElemento('alerta',`&#9888; El texto no puede ser  ${(opcion === 'e') ? 'encriptado' : 'desencriptado'} porque contiene carácteres no permitidos`);
                setTimeout(limpiarAviso,3000);
                return;
            }
        }
    }else{
        /*Si el texto está vacío salimos de la funcion */
        asignarTextoElemento('alerta',`&#9888; No hay texto para que sea  ${(opcion === 'e') ? 'encriptado' : 'desencriptado'}`);
        setTimeout(limpiarAviso,3000);
        return;
    }
              
        /*Aqui verificamos que la opcion es {e=Encriptar}  
            Ursaremos el switch case para convertir cada caracter 
            de acuerdo a lo definido en reto a la hora de encriptar*/
        if (opcion==="e"){
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
        }else{   
            
            /*De lo contrario si opcion es {d=Desencriptar} 
            usaremos replaceAll para ralizar el desencriptado */
            nuevoTexto =   texto.replaceAll("ai", "a")
                                .replaceAll("enter", "e")
                                .replaceAll("imes", "i")
                                .replaceAll("ober", "o")
                                .replaceAll("ufat", "u");
        }
                
    if (nuevoTexto.valueOf !=""){
        /*Mostramos un mensaje de encriptacion lograda por 3 segundos en un parrafo */
        asignarTextoElemento('aviso',`&#10004; El texto ha sido  ${(opcion === 'e') ? 'encriptado' : 'desencriptado'} correctamente`);
        setTimeout(limpiarAviso,3000);
                
        //muestro el texto encriptado un texarea y luego lo hago visible
        asignarTextoElemento("mensajeResultado",nuevoTexto);
        mostrarOcultarElemento('botonCopiar','visible');
        mostrarOcultarElemento('divResultado','visible');                    
        mostrarOcultarElemento('divResultadoError','hidden');
    }
}
    
function reiniciarValores(){
    //Asignamos los valores por defecto a los campos de entrada y salida
    document.getElementById('mensaje').value=""; 
    asignarTextoElemento('mensajeResultado',''); 
    mostrarOcultarElemento('botonCopiar','hidden');  
    mostrarOcultarElemento('divResultado','hidden');                    
    mostrarOcultarElemento('divResultadoError','visible');
    
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
    var aux = document.createElement("input");
    if(document.getElementById("mensajeResultado").value==""){
        asignarTextoElemento("alerta","&#9888; El texto esta vacio");
        setTimeout(limpiarAviso,3000);

    }
    aux.setAttribute("value", document.getElementById("mensajeResultado").innerHTML);
   
    document.execCommand("copy"); 
 
    navigator.clipboard.writeText(document.getElementById("mensajeResultado").innerHTML)
       .then(() => {
        asignarTextoElemento("aviso","&#10004; Texto Copiado al portapaples");
        setTimeout(limpiarAviso,3000);
           console.log("Success!");
       })
       .catch((err) => {
           console.log("Oops, unable to copy");
            asignarTextoElemento("alerta","&#9888; El texto no se ha copiado al portapaples");
             setTimeout(limpiarAviso,3000);
       });
}
