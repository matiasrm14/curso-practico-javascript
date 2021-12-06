function calcularPromedio(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}


function esPar(numerito) {
    if(numerito % 2 === 0){
        return true;
    } else {
        return false;
    }
}

function calcularMediana(lista) {

    let listaOrdenada = lista.sort(
        function(a,b){
            return a - b;
        });

    const medianaLista = parseInt(listaOrdenada.length / 2);
    
    let mediana;

    if (esPar(listaOrdenada.length)) {
        const elemento1 = listaOrdenada[medianaLista - 1];
        const elemento2 = listaOrdenada[medianaLista];
        
        mediana = calcularPromedio([elemento1, elemento2]);

        return mediana;
    
    } else {
        mediana = listaOrdenada[medianaLista];

        return mediana;
    }
}





 