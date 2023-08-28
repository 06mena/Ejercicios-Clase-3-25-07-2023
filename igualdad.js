function sonIguales(a,b){
    if(a.length !== b.length){
        return false;
    }

    for (let i = 0; i < a.length; i++){
        if(a[i] !== b[i]){
            return false
        }
    }

    return true
}

console.log(sonIguales([10, 25, 6, 33, 48, 105], [10, 25, 6, 33, 48, 105]))
console.log(sonIguales([1, 2, 3, 4, 5, 6], [11, 25, 6, 33, 48, 105]))
console.log(sonIguales([10, 25, 6, 33, 48, 105], [25, 10, 6, 33, 48, 105]))