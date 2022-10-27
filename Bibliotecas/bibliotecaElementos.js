"use strict";

var doc = window.document;

function creaTablaXY(x,y) { //Función que crea un tabla con X como el ancho e Y como la altura.
    let tabla = doc.createElement("table");
    for (let index = 1; index <= y; index++) {
        let fila = doc.createElement("tr");
        for (let subIndex = 0; subIndex< x; subIndex++) {
            let td = doc.createElement("td");
            fila.appendChild(td);
        }
        tabla.appendChild(fila);
    }
    return tabla;
}

function insertAfter(nuevoElemento, elementoExistente) { //Función que añade un elemento nuevo después de uno ya existente.
    let parent = elementoExistente.parentNode;
    parent.replaceChild(nuevoElemento, elementoExistente);
    parent.insertBefore(elementoExistente, nuevoElemento);
}

function borrarLienzo() { //Función que borra el lienzo.
    let pixeles = doc.getElementById("lienzo").getElementsByTagName("td");
    for (let index = 0; index < pixeles.length; index++) {
        pixeles[index].setAttribute("class","");
        
    }
}

export {creaTablaXY, insertAfter, borrarLienzo}