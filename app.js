
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function encriptarDesencriptar(opcion){
    const letras="abcdefghijklmnñopqrstuvwxyz1234567890";
    
     let ejecutarOpcion=false;

    let texto=document.getElementById('mensaje').value;
    let nuevoTexto="";

    for (x=0;x<texto.length;x++){        
         if(letras.includes(texto[x]) || texto[x]==' '){
            ejecutarOpcion = true;            
        }else{
            ejecutarOpcion = false;
            asignarTextoElemento('alerta',`&#10004; El texto no puede ser  ${(opcion === 'e') ? 'encriptado' : 'desencriptado'} porque contiene carácteres no permitidos`);
            setTimeout(limpiarAviso,3000);
            return;
        }

    }
     
    
        if(texto.length<=0){
            ejecutarOpcion = false;
            asignarTextoElemento('alerta',`&#10004; No hay texto para que sea  ${(opcion === 'e') ? 'encriptado' : 'desencriptado'}`);
            setTimeout(limpiarAviso,3000);
            return;
        }else{
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
                                nuevoTexto = texto.replaceAll("ai", "a")
                                                .replaceAll("enter", "e")
                                                .replace("imes", "i")
                                                .replaceAll("ober", "o")
                                                .replaceAll("ufat", "u");
                    
                
                }
                
            if (nuevoTexto.valueOf !=""){
                    //muestro un mensaje de encriptacion lograda por 3 segundos en un parrafo 
                    asignarTextoElemento('aviso',`&#10004; El texto ha sido  ${(opcion === 'e') ? 'encriptado' : 'desencriptado'} correctamente`);
                    setTimeout(limpiarAviso,3000);
                
                     //muestro el texto encriptado un texarea y luego lo hago visible
                    asignarTextoElemento("mensajeResultado",nuevoTexto);
                    
                    mostrarOcultarElemento('botonCopiar','visible');
                    mostrarOcultarElemento('divResultado','visible');                    
                    mostrarOcultarElemento('divResultadoError','hidden');

                  

                    

                }
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
   // alert("Copiado al portapapeles");
    navigator.clipboard.writeText(document.getElementById("mensajeResultado").innerHTML)
       .then(() => {
        asignarTextoElemento("aviso","&#10004; Texto Copiado al portapaples");
        setTimeout(limpiarAviso,3000);
           console.log("Success!");
       })
       .catch((err) => {
           console.log("Oops, unable to copy");
       });
}




