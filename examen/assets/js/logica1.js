
//Ejercicios M/M/1
function primerEjercicio() {


  // Promedio de clientes en el sistema

  // Obtener el elemento <input> por su id
  var input = document.getElementById('llegadas');
  var inputAtendidos = document.getElementById('atendidos');
  var inputK = document.getElementById('K');

  // Acceder al valor del campo de entrada
  var valor = input.value;
  var valor1 = inputAtendidos.value;
  var k = inputK.value;


  //Promedio de clientes en el sistema
  var L = "L=" + (valor / (valor1 - valor));
  document.getElementById("L").textContent = L;


  //Tiempo en el que el cliente pasa en el sistema
  var W = "W=" + (1 / (valor1 - valor));
  document.getElementById("W").textContent = W;


  //Numero promedio de clientes en la cola
  var LQ = "LQ=" + ((valor * valor) / (valor1 * (valor1 - valor)));
  document.getElementById("LQ").textContent = LQ;


  //Tiempo promedio que pasa un cliente esperando en la cola
  var WQ = "WQ=" + (valor / (valor1 * (valor1 - valor)));
  document.getElementById("WQ").textContent = WQ;


  //Probabilidad de que se esté utilizando el servicio
  var RO = (valor / valor1);
  var RO1 = RO.toFixed(2);
  var PorcentajeRO = "RO=" + RO1 * 100 + "%";
  document.getElementById("PorcentajeRO").textContent = PorcentajeRO;

  //Tiempo en el que nadie esta usando el sistema
  var PO = (1 - (valor / valor1));
  var PO1 = PO.toFixed(2);
  var Porcentaje = "PO=" + PO1 * 100 + "%";
  document.getElementById("Porcentaje").textContent = Porcentaje;

  //Si el numero de clientes es mayor a K
  var resultado = Math.pow((valor / valor1), (parseInt(k) + 1));
  //var PN =  (valor/valor1);
  //var PN0 = k+1;
  //var resultado = Math.pow(PN, PN0);
  var PN1 = resultado.toFixed(2);
  var resultadoPorcentaje = "PN=" + PN1 * 100 + "%";
  document.getElementById("resultadoPorcentaje").textContent = resultadoPorcentaje;
}



//Ejercicios M/M/m
function SegundoEjercicio() {
  // console.log("Prueba");
  var inputm = document.getElementById('m');
  var inputLlegadas = document.getElementById('llegadas1');
  var inputA = document.getElementById('atendido1');
  var inputn = document.getElementById('n');

  // Acceder al valor del campo de entrada
  var valor2 = inputLlegadas.value;
  var valor3 = inputA.value;
  var m = inputm.value;
  var n = inputn.value;

  resultP0 = (1 / (((1 / factorial(n)) + (Math.pow(valor2 / valor3, n))) + ((1 / factorial(m)) * (Math.pow(valor2 / valor3, m)) * ((m * valor3) / ((m * valor3) - valor2)))));
  document.getElementById("p0").textContent = "P0=" + resultP0.toFixed(4);



  //Numero promedio de clientes en el sistema

  var L = (((((valor2 * valor3) * (Math.pow(valor2 / valor3, m))) / ((factorial(m - 1)) * (Math.pow(((m * valor3) - valor2), 2)))) * resultP0) + (valor2 / valor3));
  L1 = "L=" + L
  document.getElementById("L1").textContent = L1;

  //Tiempo promedio que una cliente pasa en la linea de espera o recibiendo servicio

  var W = (L / valor2);
  W1 = "W=" + W
  document.getElementById("W1").textContent = W1;

  //Promedio de clientes que se encuentran en linea esperando a ser antendidos
  var LQ = (L - (valor2 / valor3));
  document.getElementById("LQ1").textContent = "LQ=" + LQ;


  //Tiempo promedio que un cliente pasa en cola esperando a ser atendido

  var WQ = (L - (valor2 / valor3) / valor2);
  document.getElementById("WQ1").textContent = "WQ=" + WQ;


  //Tasa de utilizacion
  var p = (valor2 / (m * valor3));
  document.getElementById("p").textContent = "p=" + p;

}




//Ejercicios M/D/1
function TercerEjercicio() {



  var Llegadas = document.getElementById('llegadas2');
  var Atendidos = document.getElementById('atendidos2');


  // Acceder al valor del campo de entrada
  var valor4 = Llegadas.value;
  var valor5 = Atendidos.value;


  //longitud promedio de la cola

  var LQ3 = (Math.pow(valor4, 2)) / (2 * valor5 * (valor5 - valor4));
  document.getElementById("LQ3").textContent = "LQ=" + LQ3.toFixed(4);


  //Tiempo promedio de espera en la cola

  var WQ3 = valor4 / (2 * valor5 * (valor5 - valor4));
  var tiempo = WQ3 * 60;
  document.getElementById("WQ3").textContent = "WQ=" + WQ3.toFixed(4);
  //document.getElementById("Tiempo").textContent = "El tiempo de espera en la cola es de:" + tiempo;

  //Numero promedio de clientes en el sistema

  var L3 = LQ3 + (valor4 / valor5);
  document.getElementById("L3").textContent = "L=" + L3.toFixed(4);


  //Tiempo promedio en el sistema

  var W3 = WQ3 + (1 / valor5);
  document.getElementById("W3").textContent = "W=" + W3.toFixed(4);

}



//Ejercicios M/M/1 FINITA
function cuartoEjercicio() {


  var inputllegadas4 = document.getElementById('llegadas4');
  var inputAtendidos4 = document.getElementById('atendidos4');
  var inputN = document.getElementById('N');

  // Acceder al valor del campo de entrada
  var valor6 = inputllegadas4.value;
  var valor7 = inputAtendidos4.value;
  var N = inputN.value;

  //Probabilidad de que el sistema esté vacio

  p0 = (1/SumatoriaMM1I(N,valor6/valor7));
 // let p0 = 0;

  //for (let n = 0; n <= N; n++) {
 //   const factorialN = factorial(N);
 //   const factorialNMinusN = factorial(N - n);
 //   const expresion = ((factorialN / factorialNMinusN) * (Math.pow(valor6 / valor7, n)));
//    p0 += expresion;
//  }

 // var p01 = (1 / p0);

  document.getElementById("P04").textContent = "p0=" + p0.toFixed(4);

  //Longitud promedio de la cola
 
  //var LQ4 = (parseInt(N) - ((valor6+valor7)/ valor6) * (1 - p01));
  //resultado1 =((valor6 + valor7) / valor6);
  //resultado2 =(1 - prueba);
 // resultado3 = N - (resultado1 * (1 - p01));
 var LQ4 = (N-((parseFloat(valor6)+parseFloat(valor7))/valor6)*(1-p0));
  document.getElementById("LQ4").textContent = "LQ=" + LQ4.toFixed(4);

  //Numero promedio de clientes dentro del sistema
  var L4 =  (LQ4 + ((1-p0)));
  
  document.getElementById("L4").textContent = "L=" + L4.toFixed(4);

  //Tiempo de espera promedio en la cola
  var WQ4 =  (LQ4 / ((N  - L4)* valor6));
  document.getElementById("WQ4").textContent = "WQ=" + WQ4.toFixed(4);


  //Tiempo promedio en el sistema
  //ar W4 =  (WQ4 + (1/valor7));
  //document.getElementById("W4").textContent = "W=" + W4.toFixed(2);

}

// Función auxiliar para calcular el factorial
function factorial(numero) {
  if (numero === 0) {
    return 1;
  } else {
    return numero * factorial(numero - 1);
  }
}

function SumatoriaMM1I(g, division){
  var  result = 0;
  for (j=0; j<=g; j++) {
      result += ((factorial(g)/((factorial(g-j))))*(Math.pow(division,j)));
  }
  return result;
}

