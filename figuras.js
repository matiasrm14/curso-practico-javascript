// Código del cuadrado
console.group("Cuadrados");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado + "cm2");

console.groupEnd();

// Código del triángulo
console.group("Triángulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log(
 "Los lados del triángulo miden: "
 + ladoTriangulo1 
 + "cm, " 
 + ladoTriangulo2 
 + "cm, " 
 + baseTriangulo 
 + "cm"
);

const alturaTriangulo = 5.5;
console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triángulo es de: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del triángulo es de: " + areaTriangulo + "cm2");

console.groupEnd();

// Código del Circulo
console.group("Círculos");

const radioCirculo = 4;
console.log("El radio del Círculo es de: " + radioCirculo + "cm");

const diametroCirculo = radioCirculo * 2;
console.log("El diametro del Círculo es de: " + diametroCirculo + "cm");

const PI = Math.PI;
console.log("PI es igual a: " + PI);

const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del Círculo es de: " + perimetroCirculo + "cm");

const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del Círculo es de: " + areaCirculo + "cm2");

console.groupEnd();


