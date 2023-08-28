function comer(plantas){
    const conejo = plantas.indexOf('🐰');
    const prohibido = plantas.indexOf('🚫');

    if(conejo === -1){
        return plantas;
    }else if(prohibido === -1){
        return '';
    }

    const sobrevive = plantas.slice(0, conejo) + plantas.slice(prohibido + 1);

    return sobrevive
}

console.log(comer('🐰🥕🥬🚫'))
console.log(comer('🥕🥬🐰🥕🥕🥕🚫'))
console.log(comer('🐰🥕🥬🥕🚫🥕'))
console.log(comer('🌿🥕🌿🐰🌿🥬🌿🌿🚫🌷'))