import { modificarFecha, subirLocalStorage, obtenerData } from "./funtions.js";
import userGame from "./game.js";

const DATA = obtenerData()
const FECHA = new modificarFecha
const GAME_FUNTIONS = new userGame(DATA)

const USER_ESTADISTICAS = document.getElementById('infoContainer')
const USER_PODER = document.getElementById('poderActual')
const USER_CLASES = document.getElementsByClassName('aulaItem')
const TERMINAR_JUEGO_BOTON =document.getElementById('terminarJuego')
let footerBotons = document.querySelector('footer')

let userBoton = userBotonesClase(...USER_CLASES)


function maximoDias(diaMaximo){
    if(FECHA.diaActual() < diaMaximo){
        DATA.diasVivo = FECHA.sumarDia() 
    }else{
        DATA.diasVivo = FECHA.diaActual() 
    }
}

function userBotonesClase (transformaciones,
                        herbologia,
                        pociones,
                        encantamientos,
                        artesOscuras,
                        animalesMagicos,
                        historiaMagia){

    let botones = {
        transformaciones,
        herbologia,
        pociones,
        encantamientos,
        artesOscuras,
        animalesMagicos,
        historiaMagia
    }
    return botones
}

function agregarMascota (){
    let mascota = GAME_FUNTIONS.nuevaMascota()
    mascota = mascota.mascotaRamdom()

    USER_ESTADISTICAS.innerHTML += 
    `<div class="estadistica">
        <p>Animal patronus:</p>
        <p id="userMascota">${mascota}</p>
    </div>` 
    return mascota
}

function aumentarPoder (cantidadAumeto = 0){
    let poderActual = document.getElementById('poderActual')
    let valorPoder = poderActual.innerText
    let poderTotal = Number(valorPoder) + cantidadAumeto

    poderActual.innerText = poderTotal 
    return poderTotal
}

maximoDias(100)
FECHA.fechaImprimirDia(DATA.diasVivo)
GAME_FUNTIONS.esconderElemento(TERMINAR_JUEGO_BOTON)
//reiniciamos la data de mascotas
DATA.mascota = false  

/* AULA DE CLASES */
userBoton.animalesMagicos.addEventListener('click', () =>{
    let mascota = agregarMascota()
    DATA.mascota = mascota
    alert("Felicitaciones haz encontrado una nueva mascota")
})

userBoton.artesOscuras.addEventListener('click', () => {
    if(Boolean(DATA.mascota)){
        alert("Haz derrotado a un dementor gracias a tu mascota!")
        DATA.gameEnd = "Derrotaste al dementor"
    }else{
        alert("El dementor te ha absorbido, ya que no tenias las suficientes habilidades para derrotarlo")
        DATA.gameEnd = "Fuiste absorbido por un dementor"
    }
    GAME_FUNTIONS.esconderElemento(...Object.values(userBoton))
    GAME_FUNTIONS.esconderElemento(footerBotons)
    GAME_FUNTIONS.mostrarElemento(TERMINAR_JUEGO_BOTON,"flex")
    subirLocalStorage(DATA)
})

//Escondemos elementos y aumentamos el poder
Object.values(userBoton).forEach(element => {
    element.addEventListener('click', (event) => { 
        GAME_FUNTIONS.esconderElemento(event.target);
        let poder = aumentarPoder(40)

        DATA.poder = poder
        DATA.diasVivo +=1
        FECHA.fechaImprimirDia(DATA.diasVivo)
    })
});
