// A
// A.1. Referencias a los elementos del HTML
const btnCalcular = document.getElementById('btn-calcular');

/*
// A.2. La lógica del experimento
btnCalcular.addEventListener('click', () => {
    // Convertimos el texto del input a NÚMERO con Number() o parseFloat()
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    
    const resultadoExamen = document.getElementById('resultado-examen');

    let mediaNotas = (nota1 + nota2 + nota3) / 3

    // 2. La lógica del experimento
    if (mediaNotas < 5) {
        resultadoExamen.textContent = `Suspenso. Media: ${mediaNotas.toFixed(2)}.`;
        resultadoExamen.style.backgroundColor = "red";
    } else if (mediaNotas >= 5 && mediaNotas <= 6){
        resultadoExamen.textContent = `Aprobado. Media: ${mediaNotas.toFixed(2)}.`;
        resultadoExamen.style.backgroundColor = "green";
    } else if (mediaNotas >= 7 && mediaNotas <= 8){
        resultadoExamen.textContent = `Notable. Media: ${mediaNotas.toFixed(2)}.`;
        resultadoExamen.style.backgroundColor = "blue";
    } else if (mediaNotas >= 9 && mediaNotas <= 10){
        resultadoExamen.textContent = `Sobresaliente. Media: ${mediaNotas.toFixed(2)}.`;
        resultadoExamen.style.backgroundColor = "purple";
    }

}); */
btnCalcular.addEventListener('click', () => {
    // Convertimos el texto del input a NÚMERO con Number() o parseFloat()
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    
    const resultadoExamen = document.getElementById('resultado-examen');

    let mediaNotas = (nota1 + nota2 + nota3) / 3

    // 2. La lógica del experimento
    if (mediaNotas < 5) {
        resultadoExamen.textContent = `Suspenso. Media: ${mediaNotas.toFixed(2)}.`;
        resultadoExamen.style.backgroundColor = "red";
    } else if ( mediaNotas <= 7){
        // Si llega aquí, es porque NO es menor que 5 (o sea, es 5 o más)
        resultadoExamen.textContent = `Aprobado. Media: ${mediaNotas.toFixed(2)}.`;
        resultadoExamen.style.backgroundColor = "green";
    } else if (mediaNotas < 9){
        // Si llega aquí, es porque es 7 o más
        resultadoExamen.textContent = `Notable. Media: ${mediaNotas.toFixed(2)}.`;
        resultadoExamen.style.backgroundColor = "blue";
    } else {
        // Si no es ninguna de las anteriores, es 9 o más
        resultadoExamen.textContent = `Sobresaliente. Media: ${mediaNotas.toFixed(2)}.`;
        resultadoExamen.style.backgroundColor = "purple";
    };
    
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        resultadoExamen.textContent = "Los valores añadidos no son validos. Por favor, ingrese solo números.";
    };
    
});

/*  A   B   */

// X
// 1. Referencias a los elementos del HTML

// 2. La lógica del experimento