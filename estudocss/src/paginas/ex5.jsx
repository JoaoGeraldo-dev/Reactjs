export default function ex5({n1, n2}){




    const a = {
        color:"white",
        backgroundColor: "blue",
    }

    const r = {
        color:"white",
        backgroundColor: "red",
        
    }
    
    let soma = Number(n1) + Number(n2);
    let media = soma/2;
    
    if(media>=6){
        return(
            <>
            <h2 style={{border:"2px solid ", textAlign:"center"}}>Exercicio 5- Estilos CSS no React</h2>
            <p>O componente exercicio2 recebe dois parametros referentes a nota1 e nota2, calcule a media aritmetica e verifique
                se o aluno esta aprovado ou reprovado. Para estar aprovado é necessario media 6 ou superior.
                <p style={{textAlign:"justify"}}> Nota que este paragrafo esta justificadol.</p>
            </p>
            <p >ALuno <span style={a}>aprovado</span></p>
            <p>nota1 = {n1}</p>
            <p>nota2 = {n2}</p>
            <p>media = {media}</p>
            </>
        )
    }else{
        return(
            <>
            <h2 style={{border:"2px solid ", textAlign:"center"}}>Exercicio 5- Estilos CSS no React</h2>
            <p>O componente exercicio2 recebe dois parametros referentes a nota1 e nota2, calcule a media aritmetica e verifique
                se o aluno esta aprovado ou reprovado. Para estar aprovado é necessario media 6 ou superior.
                <p style={{textAlign:"justify"}}> Nota que este paragrafo esta justificadol.</p>
            </p>
            <p>Aluno <span style={r}>Reprovado</span></p>
            <p>nota1 = {n1}</p>
            <p>nota2 = {n2}</p>
            <p>media = {media}</p>
            </>
        )

    }
    

}