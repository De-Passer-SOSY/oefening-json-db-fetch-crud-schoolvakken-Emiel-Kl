"use strict";

document.addEventListener("DOMContentLoaded", init);

// 1. Init-functie wordt opgeroepen zodra de pagina geladen is
function init() {
    console.log("De pagina is volledig geladen");
    // Koppelt de knop aan de functie addVak
    document.querySelector("#addButton").addEventListener("click", addVak);

