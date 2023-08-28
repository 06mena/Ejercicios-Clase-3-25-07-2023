function recortar(cantidadLetras, palabras){
    const word = palabras.map((numPalabra) =>{
        return numPalabra.slice(0, cantidadLetras)
    })
    console.log(word)
}

console.log(recortar(4, ['elefante', 'dinosaurio', 'chocolate', 'avion', 'america']))
console.log(recortar(1, ['algoritmo', 'bug', 'compilador']))