const FORMULARIO = document.getElementById('formularioLogin')

function subirLocalStorage(dicionario){
    let gameData = Object(dicionario)
    gameData = JSON.stringify(gameData) //convertimos la data en un Json
    localStorage.setItem("dataGame",gameData) //La dejamos almacenada en localStorage
}

function DataCualidades(key){
    let userCualidades = {
        gryffindor: "valor, fuerza, audacia",
        hufflepuff: "justicia, lealtad, pertenencia",
        ravenclaw: "creatividad, erudición, inteligencia",
        slytherin: "ambición, determinación, astucia"
    }
    return userCualidades[key]
}

function valoresFormulario(){
    let userData = {
        name: FORMULARIO.userName.value,
        familia:  FORMULARIO.userFamilia.value,
        linaje: FORMULARIO.linaje.value,
        cualidades:  DataCualidades(FORMULARIO.cualidades.value),
        diasVivo: 1 //no me convencen mucho este lugar donde lo guardo
    }
    return userData
}

FORMULARIO.onsubmit = function(e){
    //e.preventDefault() 
    let jugador = valoresFormulario()
    subirLocalStorage(jugador)
}



