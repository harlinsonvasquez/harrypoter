import userGame from "./game.js"
let gameFuntions = new userGame

let poderesClass = document.getElementsByClassName('gridBotonItem')
let barrasVida = document.getElementsByClassName('progressStatus')
let porcentajeVida = document.getElementsByClassName('progressText')
let footerBotons = document.querySelector('footer')

gameFuntions.esconderElemento(footerBotons)

function poderesUsuario (hechizoNormal, spantus, riddikulus){
    let powers = {
        hechizoNormal, 
        spantus, 
        riddikulus
    }

    return powers
}

class lifeBars{
    constructor(ubicacionBarra, ubicacionNumero){
        this.vida = {
            actual: 100,
            minimo: 0,
            maximo: 100,

        } ;
        this.vidaBarra = ubicacionBarra;
        this.ubicacionNumero = ubicacionNumero 
    }

    disminuirVida (vidaQuitar){
        let vidaFinal = this.vida.actual - vidaQuitar
        this.vida.actual = vidaFinal
        this.vida.actual = this.comprobarVida() ? vidaFinal : 0
        
        console.log(this.vida.actual)

        this.vidaBarra.style.width = `${this.vida.actual}%`
        this.ubicacionNumero.innerHTML = `${this.vida.actual}%`
    }

    aumentarVida (vidaAumentar){
        let vidaFinal = this.vida.actual + vidaAumentar
        this.vida.actual = vidaFinal
        this.vida.actual = this.comprobarVida() ? vidaFinal : 100
        

        this.vidaBarra.style.width = `${this.vida.actual}%`
        this.ubicacionNumero.innerHTML = `${this.vida.actual}%`
    }

    comprobarVida (){
        if((this.vida.actual >= 0) && (this.vida.actual <= 100)){
            return true
        }else{
            console.log("hola")
            return false
        }
        
    }
}
let userPower = poderesUsuario(...poderesClass)

let bogart = new lifeBars(barrasVida[0], porcentajeVida[0])
let harryPotter = new lifeBars(barrasVida[1], porcentajeVida[1])


/*---------- ZONA DE HECHIZOS ----------*/
userPower.hechizoNormal.addEventListener('click', (evento) => {
    bogart.disminuirVida(gameFuntions.numeroRamdom(15))
})

userPower.spantus.addEventListener(`click`, (evento) => {
    bogart.aumentarVida(gameFuntions.numeroRamdom(5))
    alert("Los hechizos oscuros no funcionan con animales terrorificos")
})

userPower.riddikulus.addEventListener('click', (evento) => {
    bogart.disminuirVida(100)
})

porcentajeVida[0].addEventListener('click', () => {
    console.log("hola")
})

let powerList = Object.values(userPower)
powerList.forEach(element => {
    element.addEventListener('click', (event) => {
        if (bogart.vida.actual <= 0){
            powerList.forEach(power => {
                console.log(power)
                gameFuntions.esconderElemento(power);
                gameFuntions.mostrarElemento(footerBotons,"grid")
            });
        }
    })
});
