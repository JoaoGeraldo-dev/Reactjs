export default function Exercicio4({quantidade}){

let bruto = Number(quantidade) * 150;
let ali = bruto*0.08;
let liquid = bruto - ali;


    return(

        <div>Quantidade de consultas{Number(quantidade)}
            <div>Salario bruto é {bruto}</div>
            <div>Aliquota é {ali}</div>
            <div>Salario liquido é {liquid}</div>
        
        </div>
        
        
        )


   
    }