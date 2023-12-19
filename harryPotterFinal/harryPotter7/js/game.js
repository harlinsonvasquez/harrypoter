export default class userGame {
    constructor(data){
        this.userData = data

    }

    nombreCompleto (){
        return `${this.userData.name} ${this.userData.familia}`
    }

    esconderElemento(...element){
        element.forEach(item => {
            item.style.display = "none";
        });
    }

    mostrarElemento (element, display){
        element.style.display = display
    }

    nuevaMascota (){
        let petData = {
            petList: ["Colacuerno","Inferi","Hipogrifo","Cancerbero","Malume","Fénix","Elfo oscuro","Centauro","Basilisco","Acromántula","Thestral"],

            mascotaRamdom (){
                let number = Number.parseInt(Math.random() * this.petList.length)
                let mascota = this.petList[number]
                return mascota 
            }
        }
        return petData
    }

    numeroRamdom = (max) => {
        let number = Number.parseInt(Math.random() * max)
        return number
    }

}
