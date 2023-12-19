export function subirLocalStorage(dicionario){
    let gameData = Object(dicionario)
    gameData = JSON.stringify(gameData) //convertimos la data en un Json
    localStorage.setItem("dataGame",gameData) //La dejamos almacenada en localStorage
}

export function obtenerData (){
    let gameData = localStorage.getItem("dataGame")
    gameData = JSON.parse(gameData)
    return gameData
}

export class modificarFecha{
    constructor(){
        let data = obtenerData()
        this.diaActual = ()=> {
            return data.diasVivo
        }
    }

    sumarDia (){
        let sumarDias = this.diaActual() +1
        return sumarDias
    }

    fechaImprimirDia (userDay){
        const DIA_USER = document.getElementById('fechaActual')
        DIA_USER.innerHTML = `Dia: ${userDay}`
    }

    
}