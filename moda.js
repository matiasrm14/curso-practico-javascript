function calcularModa(lista) {

    const listaObj = {};

    lista.map(
        function(elemento) {
            if (listaObj[elemento]) {
                listaObj[elemento] += 1;
            } else {
                listaObj[elemento] = 1;
            }
        }
    );
    
    // Object.entries Convierte el objeto en un array 
    const listaArray = Object.entries(listaObj).sort(
        function (elementoA, elementoB) {
            return elementoA[1] - elementoB[1];
        }
    );
    
    const moda = listaArray[listaArray.length - 1];

    return moda;

}



