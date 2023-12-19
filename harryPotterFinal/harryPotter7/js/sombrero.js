import { obtenerData, subirLocalStorage, modificarFecha} from "./funtions.js"
import userGame from "./game.js"
const TEXTO_ACEPTADO = document.getElementById('textoAceptado')
const USER_DATA = obtenerData()
const GAME_FUNTIONS = new userGame(USER_DATA)
const TERMINAR_JUEGO_BOTON =document.getElementById('terminarJuego')
let BOTON_AVANZAR = document.getElementById('avanzar')
let fecha = new modificarFecha

let casaData = {
    cualidades: {
        gryffindor: "valor, fuerza, audacia",
        hufflepuff: "justicia, lealtad, pertenencia",
        ravenclaw: "creatividad, erudición, inteligencia",
        slytherin: "ambición, determinación, astucia"
    },

    linajes:{
        gryffindor: ["mestizo","muggle","sangrePura"],
        hufflepuff: ["mestizo","muggle"],
        ravenclaw: ["mestizo","muggle","sangrePura"],
        slytherin:  ["sangrePura"]
    }
}

function cualidadesNecesarias(userCualidad){
    let listaCualidades = casaData.cualidades
    for (const key in listaCualidades) {
        if (listaCualidades[key] == userCualidad){
            return key
        }
    } 
    return false
}

function linajeNecesario (userLinaje, userCasa){
    let listaLinajes = casaData.linajes[userCasa]
    return listaLinajes.includes(userLinaje)
}

function validarMagoApto(userCulidades, userLinaje){
    let casa = cualidadesNecesarias(userCulidades)
    if (casa){
        let apto = linajeNecesario(userLinaje, casa)
        if (apto){
            return casa
        }
        else{
            return false
        }
    }
    else{
        return false
    }
}

let userCasa = validarMagoApto(USER_DATA.cualidades, USER_DATA.linaje)
USER_DATA.casa = userCasa

if (userCasa){
    TEXTO_ACEPTADO.innerHTML = `Felicitaciones ${GAME_FUNTIONS.nombreCompleto()} haz sido aceptado en la escuela de magia, perteneces a la familia ${USER_DATA.casa}`
    GAME_FUNTIONS.mostrarElemento(BOTON_AVANZAR, "flex")
    GAME_FUNTIONS.esconderElemento(TERMINAR_JUEGO_BOTON)
}else{
    TEXTO_ACEPTADO.innerHTML = `Lo sentimos ${GAME_FUNTIONS.nombreCompleto()} no eres apto para ingresar a nuestra escuela de magia`
    USER_DATA.gameEnd = "Fuiste rechazado por el sombrero seleccionardor! No apto"
}
console.log(BOTON_AVANZAR)

function maximoDias(diaMaximo){
    if(fecha.diaActual() < diaMaximo){
        USER_DATA.diasVivo = fecha.sumarDia() 
    }else{
        USER_DATA.diasVivo = fecha.diaActual() 
    }
}

maximoDias(1)

fecha.fechaImprimirDia(USER_DATA.diasVivo)
//Hay que hacer el boton
subirLocalStorage(USER_DATA)

