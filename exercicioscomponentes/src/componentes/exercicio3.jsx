export default function Exercicio3({tipo, base, altura}){

if(tipo == "r"){
    let total = Number(base * altura);

    return(
        <div>A area do retangulo é {total}</div>
    );
}else if(tipo == "t"){
    let total = Number(base*altura / 2);
    return(
        <div>A area do triangulo é {total}</div>
    )
}else{
    return(
        <div>Tipo invalide de valor! = 0</div>
    )
}

}
