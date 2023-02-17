const $d=document,
    $peso=$d.querySelector("#peso"),
    $altura=$d.querySelector("#altura"),
    $submit=$d.querySelector("#submit");
    $resultados = $d.querySelector("#resultados");

$submit.addEventListener("click",(event)=>{
    event.preventDefault();
    let altura = parseFloat($altura.value);
    let peso = parseFloat($peso.value);

    if (isNaN(altura) || isNaN(peso))
        alert("Introduce datos numéricos!");
    else {
        let imc = peso / Math.pow(altura, 2);
        console.log(altura,peso,imc)
        $resultados.innerHTML = `O teu IMC é de: ${imc.toFixed(2)}`;

        if (imc < 18.6) {
            $resultados.innerHTML += " tes baixo peso";
        } 
        else if (imc >= 18.6 && imc <= 24.9) {
            $resultados.innerHTML += "Peso normal";

        }
        else if (imc > 24.9) {
            $resultados.innerHTML += "Sobrepeso";
        }
    }
    
});