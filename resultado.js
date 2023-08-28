function obtenerResultado (jugadoraA, jugadoraB, puntajesA, puntajesB){
    let puntajesA1= 0
    let puntajesB1=0
  for (let i=0; i<puntajesB.length; i++){
     if (puntajesA[i]>puntajesB[i]){
         puntajesA1++
    } else if(puntajesA[i]<puntajesB[i]){
         puntajesB1++
    }else if (puntajesB[i]==puntajesA[i]){
         empt++
    }}

    if (puntajesA1>puntajesB1){
        return 'Gana ' + jugadoraA
    }else if(puntajesA1>puntajesB1){
        return 'Gana ' + jugadoraB
    } else{
        return 'Empate'
    }
    

}
console.log(obtenerResultado("Ada", "Grace", [3, 6 ,1], [2, 2, 2]))