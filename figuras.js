// Código del cuadrado

function perimetroCuadrado(lado) {
    return lado * 4;
}  

function areaCuadrado(lado){
    return lado * lado;
} 

// Código del triángulo

function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
} 

function areaTriangulo(base,altura){
    return (base * altura) / 2;
} 

// Código del Circulo

function diametroCirculo(radio){
    return radio * 2;
} 

const PI = Math.PI;

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
} 

function areaCirculo(radio){
    return (radio * radio) * PI;
}



