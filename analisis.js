/*
    Analizando los salarios de Argentina
*/

//Obteniendo los salarios unicamente.
const obtenerSalarios = arreglo =>{
    return arreglo.map( persona =>{
        return persona.salary;
    })
};

//Ordenando los salarios
const ordenarSalarios = obtenerSalarios(argentina).sort((salaryA, salaryB) =>{
    return salaryA - salaryB;
});

/* 
    Calculando la Mediana 
*/
const esPar = arreglo =>{
    if(arreglo.length % 2 === 0){
        return true
    }else{
        return false
    }
}

const obtenerMedio = arreglo => {
    return parseInt((arreglo.length) / 2);
}

let $mediana = 0;

const mediana = arreglo => {
    if(esPar(arreglo)){
        let valorActual = arreglo[obtenerMedio(arreglo)];
        let valorAnterior = arreglo[obtenerMedio(arreglo) - 1];
        // console.log(`Valor actual: ${valorActual}, valorAnterior: ${valorAnterior}`);
        $mediana = ( valorActual + valorAnterior ) / 2;
    }else{
        $mediana = arreglo[obtenerMedio(arreglo)];
    }
    return $mediana;
}

const medianaGeneralArg = mediana(ordenarSalarios);

// Mediana del top 10
const spliceStart = (ordenarSalarios.length * 90) / 100;
const spliceCount = ordenarSalarios.length - spliceStart;

const salariosArgTop10 = ordenarSalarios.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10Arg = mediana(salariosArgTop10);

console.log({
    medianaGeneralArg,
    medianaTop10Arg,
});