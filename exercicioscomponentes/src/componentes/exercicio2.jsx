export default function Exercicio2({altura, peso}){

let IMC = Number(peso)/Number(altura)**2

return(

    <div>O imc do paciente é {IMC.toFixed(2)}</div>

);

}
