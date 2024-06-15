/*
1.Debe funcionar solo con letras minúsculas

2.No deben ser utilizados letras con acentos ni caracteres especiales

3.Debe ser posible convertir una palabra para la versión encriptada también devolver una 
palabra encriptada para su versión original. 

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */

//declarcion de variables 
var texarea= document.querySelector(".text-area");
var mensaje= document.querySelector(".mensaje");
var bcopiar=document.getElementById("btn-copiar");

mensaje.disabled=true;
bcopiar.disabled=true;

function botonEncriptar(){
    var verificar = verificartexto(texarea.value);
    if(verificar === false) {
        return;
    }

    if(texarea.value.trim() === ""){
        alert("Debe ingresar alguna palabra");
    } else {
        var cadenaEncriptada = encriptar(texarea.value);
        mensaje.value = cadenaEncriptada;
        mensaje.style.backgroundImage="none";   
        bcopiar.disabled=false;
    }   
}

function botondesencriptar(){
    var verificar = verificartexto(texarea.value);
    if(verificar === false) {
        return;
    }

    if(texarea.value.trim() === ""){
        alert("Debe ingresar alguna palabra");
    } else {
        var cadenadesenriptada = desencriptar(mensaje.value);
        mensaje.value = cadenadesenriptada;
        mensaje.style.backgroundImage="none";
        bcopiar.disabled=false;
    }
}

function botoncopiar(){
    if(mensaje.value.trim() === ""){
        alert("No hay texto para copiar");
        return;
    }
    navigator.clipboard.writeText(mensaje.value);
    alert("Texto copiado al portapapeles");
}

function borrarmensaje(){
    mensaje.value = " ";
}

function verificartexto(texto){
    if (texto !== texto.toLowerCase()) {
        alert('El texto debe estar en minúsculas.');
        return false;
    }

    if(/[áéíóúüÁÉÍÓÚÜ]/.test(texto)){
        alert("El texto no debe contener letras con acentos.");
        return false;
    }

    if(/[ñÑ$°~`|+*_#@!?<>":&^%]/.test(texto)){
        alert("El texto no debe contener caracteres especiales.");
        return false;
    }
    return true;
}

function encriptar(cadena){
    let array = [["e","enter"],["i","imes"], ["a","ai"], ["o","ober"],["u","ufat"]];
    cadena = cadena.toLowerCase()
    for(let i=0;i<array.length;i++){
        
        if(cadena.includes(array[i][0])){
            cadena=cadena.replaceAll(array[i][0],array[i][1]);
        }
    }
    return cadena;
}

function desencriptar(cadena){
    let array = [["e","enter"],["i","imes"], ["a","ai"], ["o","ober"],["u","ufat"]];
    cadena = cadena.toLowerCase()
    for(let i=0;i<array.length;i++){
        if(cadena.includes(array[i][0])){
            cadena=cadena.replaceAll(array[i][1],array[i][0]);
        }
    }
    return cadena;
}

