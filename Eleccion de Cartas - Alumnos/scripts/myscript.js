const $d = document,
    $palo = $d.querySelector("#palo"),
    $num = $d.querySelector("#numero"),
    $addCarta = $d.querySelector("#addCarta"),
    $delCarta = $d.querySelector("#delCarta"),
    $opts = $d.getElementsByName("operacion"),
    $nCartas = $d.querySelector("#ncartas"),
    $buton = $d.querySelector("#btnOperar"),
    $figuras = $d.querySelector("#figuras")

    const cartas=[]

    function renderCartas(){
        $figuras.innerHTML=""
        $nCartas.innerHTML=""
        const $fragmentoImg=$d.createDocumentFragment()
        const $fragmentoSelect=$d.createDocumentFragment()
        cartas.forEach((carta,indice)=>{
            $img = $d.createElement("img")
            $img.src = `imagenes/${carta}.png`
            $option = $d.createElement("option")
            $option.value=indice
            $option.textContent=indice+1
            $fragmentoSelect.appendChild($option)
            $fragmentoImg.appendChild($img)
        })
        $figuras.appendChild($fragmentoImg)
        $nCartas.appendChild($fragmentoSelect)
    }

    function addCarta(palo,numero) {
        cartas.push(`${palo}${numero}`)
        renderCartas()
    }

    function delCarta(palo,numero) {
        if (cartas.includes(`${palo}${numero}`)) {
            // SPLICE busca o primer indice con indexOf e elimna 1 carta
           cartas.splice(cartas.indexOf(`${palo}${numero}`),1)
           renderCartas()
        } else {
            alert("No puedes borrar una carta que no existe en la mesa")
        }
    }

   function insertCarta(palo,numero,cartaId) {
       if (cartas.includes(`${palo}${numero}`)) {
           alert("No puedes insertar una carta que existe en la mesa")
        } else {
          cartas.splice(cartaId,0,`${palo}${numero}`)
          renderCartas()
        }
    }

    function subsCarta(palo,numero,cartaId) {
        if (cartas.includes(`${palo}${numero}`)) {
            alert("No puedes sustituir una carta por una que ya existe en la mesa")
         } else {
             cartas[cartaId]=`${palo}${numero}`
             renderCartas()
         }
    } 

    $addCarta.addEventListener("click",e=>{
        e.preventDefault()
        addCarta($palo.value,$num.value)
    })

    $delCarta.addEventListener("click",e=>{
        e.preventDefault()
        delCarta($palo.value,$num.value)
    })

    $buton.addEventListener("click",e=>{
        e.preventDefault()
        if ($opts[0].checked)  {
            insertCarta($palo.value,$num.value,$nCartas.value)
        } else {
            subsCarta($palo.value,$num.value,$nCartas.value)
        }
    })

    /* 
    La sintaxis completa del método splice() es la siguiente: AÑADE OU ELIMINA ELEMENTOS CAMBIANDO O ARREGLO

        Array.splice(inicio, eliminaConteo, nuevoElemento, nuevoElemento, nuevoElemento, ..
            Ejemplo:
            let meses = ["enero", "febrero", "lunes", "martes"];
            VAI EMPEZAR NA SEGUNDA POSICION E ELIMINARÁ 2 POSCIÒNS E INSERTARÁ MARZO E ABRIL
            let dias = meses.splice(2, 2, "marzo", "abril");

            console.log(dias); // ["lunes", "martes"]
            console.log(meses); // ["enero", "febrero", "marzo", "abril"]

            let meses = ["enero", "febrero", "lunes", "martes"];
            meses.splice(2, 0, "MARZO");   

            console.log(meses); 
            // ["enero", "febrero", "MARZO", "abril", "lunes", "martes"]
    */


            /*Slice ( )
            El método slice() copia una parte de un arreglo y devuelve esa copia como un nuevo arreglo. No cambia el arreglo original.

            rreglo.slice(desde, hasta); */