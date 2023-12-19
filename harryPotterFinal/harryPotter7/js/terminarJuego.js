import { modificarFecha, subirLocalStorage, obtenerData } from "./funtions.js";
import userGame from "./game.js";


const USER_DATA = obtenerData()
const FECHA = new modificarFecha
const GAME_FUNTIONS = new userGame(USER_DATA)
const USER_ESTADISTICAS = document.getElementById('infoContainer')
const USER_TIPO_FINAL = document.getElementById('tipoFinalTexto')
/* 
const USER_PODER = document.getElementById('poderActual')
const USER_CLASES = document.getElementsByClassName('aulaItem')
const TERMINAR_JUEGO_BOTON =document.getElementById('terminarJuego')
let footerBotons = document.querySelector('footer') */

function agregarEstadistica (userID, userName, userValue){
    USER_ESTADISTICAS.innerHTML += 
    `<div class="estadistica">
        <h5>${userName}:</h5>
        <p id="${userID}">${userValue}</p>
    </div>` 
}

function primeraMayucula (userString){
    if(typeof(userString) == "string"){
        let name = userString.toLowerCase()
        name = name.split("")
        name[0] = name[0].toUpperCase()
        name = name.join("")
        return name
    }
    else{
        return userString
    }
}

function separarNombre (userString){
    if(typeof(userString) == "string"){
        let name = userString
        name = name.split(/(?=[A-Z])/)
        name = name.join(" ")
        return name
    }
    else{
        return userString
    }
}
/*---------- GLOBALES ----------*/
FECHA.fechaImprimirDia(USER_DATA.diasVivo)


/*---------- ESTADISTICAS ----------*/
let estadisticas = ['name', 'familia', 'linaje', 'cualidades', 'diasVivo', 'casa', 'poder', 'mascota']

let diccionarioNombres = {
    'name': "Nombre",
    'familia': "Familia",
    'linaje': "Linaje", 
    'cualidades': "Cualidades",
    'diasVivo': "Dias vivo",
    'casa': "Aceptado Hogwarts", 
    'poder': "Poder", 
    'gameEnd': "Descripcion final",
    'mascota': "Mascota",
}

for (const key of estadisticas) {
    if(USER_DATA[key]){
        let formatearValue = separarNombre(USER_DATA[key])
        formatearValue = primeraMayucula(formatearValue)
        agregarEstadistica(key,diccionarioNombres[key], formatearValue)
    }
}

/*---------- TIPO FINAL ----------*/
USER_TIPO_FINAL.innerHTML = USER_DATA.gameEnd
console.log(USER_DATA)



