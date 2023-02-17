let $d=document,
    $resultado=$d.querySelector("h1"),
    $dado1=$d.querySelector(".img1"),
    $dado2=$d.querySelector(".img2"),
    $boton=$d.querySelector("#jugar")

    function lanzarDados(){
        let jug1 = Math.floor(Math.random() * (7-1) + 1)
        let jug2 = Math.floor(Math.random() * (7-1) + 1)
    
        $dado1.src=`imagenes/dado${jug1}.png`
        $dado2.src= `imagenes/dado${jug2}.png`

        if(jug1 > jug2) {
           $resultado.innerHTML="&#x1F6A9; Jugador 1 gana"
        } else if (jug1 < jug2) { 
          $resultado.innerHTML="Jugador 2 gana &#x1F6A9;"
        } else
          $resultado.innerHTML=" &#x1F6A9; Empatamos &#x1F6A9;"
    }    

    $boton.addEventListener("click", lanzarDados)
    $d.addEventListener("DOMContentLoaded",lanzarDados)
    


