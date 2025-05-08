export default function Exercicio1({temp})
{
    let celcius = (Number(temp) - 32)*5/9;

    return(

        <div>A temperatura é {celcius.toFixed(2)}</div>

    );

}