// Código del cuadrado

function perimetroCuadrado(lado) {
    return lado * 4;
}  

function areaCuadrado(lado){
    return lado * lado;
} 

// Código del triángulo

function perimetroTriangulo(lado1,lado2,base){
    return (Number(lado1) + Number(lado2) + Number(base));
} 

function areaTriangulo(base,altura){
    return (base * altura) / 2;
} 

// Código triángulo Isosceles

// El triangulo isosceles tiene dos y solo dos lados iguales, es decir, no pueden ser iguales a la base.

function alturaTrianguloIsosceles(lado1,lado2,base) {
    if (lado1 == lado2 && lado1 != base)
    {
        console.log("Es un triangulo isosceles");
        const cateto = (base / 2) ** 2;
        const hipotenusa = (lado1) ** 2;
        const altura = Math.sqrt(hipotenusa - cateto);
        return altura;
    } 
    else 
    {
        console.log("No es un triangulo isosceles");
    }
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

// Aquí interactuamos con el HTML

// Calculamos perimetro y area de un cuadrado

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado"); // Obtenemos todo el input
    const value = input.value; // Obtenemos el valor del input

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado"); // Obtenemos todo el input
    const value = input.value; // Obtenemos el valor del input

    const area = areaCuadrado(value);
    alert(area);
}

// Calculamos perimetro y area de un triangulo

function calcularPerimetroTriangulo() {
    const lado1 = document.getElementById("InputTrianguloLado1"); // Obtenemos todo el input
    const valorLado1 = lado1.value; // Obtenemos el valor del input

    const lado2 = document.getElementById("InputTrianguloLado2"); // Obtenemos todo el input
    const valorLado2 = lado2.value; // Obtenemos el valor del input

    const base = document.getElementById("InputTrianguloBase"); // Obtenemos todo el input
    const valorBase = base.value; // Obtenemos el valor del input

    const perimetro = perimetroTriangulo(valorLado1,valorLado2,valorBase);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const base = document.getElementById("InputTrianguloBase"); // Obtenemos todo el input
    const valorBase = base.value; // Obtenemos el valor del input

    const altura = document.getElementById("InputTrianguloAltura"); // Obtenemos todo el input
    const valorAltura = altura.value; // Obtenemos el valor del input

    const area = areaTriangulo(valorBase, valorAltura);
    alert(area);
}

// Calculamos altura triangulo isosceles

function calcularAlturaTrianguloIsosceles(){
    const lado1 = document.getElementById("InputTrianguloLado1"); // Obtenemos todo el input
    const valorLado1 = lado1.value; // Obtenemos el valor del input

    const lado2 = document.getElementById("InputTrianguloLado2"); // Obtenemos todo el input
    const valorLado2 = lado2.value; // Obtenemos el valor del input

    const base = document.getElementById("InputTrianguloBase"); // Obtenemos todo el input
    const valorBase = base.value; // Obtenemos el valor del input

    const altura = alturaTrianguloIsosceles(valorLado1,valorLado2,valorBase);
    alert(altura);
}

// Calculamos perimetro y area de un circulo

function calcularPerimetroCirculo(){
    const radio = document.getElementById("InputRadioCirculo"); // Obtenemos todo el input
    const valorRadio = radio.value; // Obtenemos el valor del input

    const perimetro = perimetroCirculo(valorRadio);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const radio = document.getElementById("InputRadioCirculo"); // Obtenemos todo el input
    const valorRadio = radio.value; // Obtenemos el valor del input

    const area = areaCirculo(valorRadio);
    alert(area);
}


