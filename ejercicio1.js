"use strict";

import { borrarLienzo, creaTablaXY, insertAfter } from "./Bibliotecas/bibliotecaElementos.js";

window.onload = () =>{

    var color;

    let lienzo = document.getElementById("lienzo");
    let selecRojo = document.getElementById("selectorRojo");
    let selecAmarillo = document.getElementById("selectorAmarillo");
    let selecVerde = document.getElementById("selectorVerde");
    let selecAzul = document.getElementById("selectorAzul");
    let selecBlanco = document.getElementById("selectorBlanco");
    let muestraColor = document.getElementById("enseñaColor");

    let borrar = document.createElement("button");
    borrar.textContent = "Borrar lienzo";

    lienzo.appendChild(creaTablaXY(60,50));

    insertAfter(borrar,lienzo);

    selecRojo.addEventListener("click",() => {
        color = "rojo";
        muestraColor.textContent = "SELECCIONADO: "+color;
    });
    selecAmarillo.addEventListener("click",() => {
        color = "amarillo";
        muestraColor.textContent = "SELECCIONADO: "+color;
    });
    selecVerde.addEventListener("click",() => {
        color = "verde";
        muestraColor.textContent = "SELECCIONADO: "+color;
    });
    selecAzul.addEventListener("click",() => {
        color = "azul";
        muestraColor.textContent = "SELECCIONADO: "+color;
    });
    selecBlanco.addEventListener("click",() => {
        color = "blanco";
        muestraColor.textContent = "SELECCIONADO: "+color;
    });
    lienzo.addEventListener("click",() => {
        lienzo.classList.toggle("pintable");
    })
    lienzo.addEventListener("mouseover",(evento) => {
        if(lienzo.classList.contains("pintable")&&evento.target.nodeName==="TD"){
            evento.target.setAttribute("class",color);
        }
    })

    borrar.addEventListener("click",borrarLienzo);




}; //Fin de window.onload.