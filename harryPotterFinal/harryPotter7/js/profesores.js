import { modificarFecha, subirLocalStorage, obtenerData } from "./funtions.js";

const DATA = obtenerData()
const FECHA = new modificarFecha

function maximoDias(diaMaximo){
    if(FECHA.diaActual() < diaMaximo){
        DATA.diasVivo = FECHA.sumarDia() 
    }else{
        DATA.diasVivo = FECHA.diaActual() 
    }
}

maximoDias(2)
FECHA.fechaImprimirDia(DATA.diasVivo)

subirLocalStorage(DATA)
