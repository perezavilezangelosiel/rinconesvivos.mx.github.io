// Lista de preguntas con 4 opciones. Solo una es correcta (valor: true)
const preguntas = [
  {
    texto: "¿Qué significa que una especie sea endémica de un lugar? ",
    opciones: [
      { texto: "Que es originaria de ese lugar pero también se encuentra en otros sitios", correcta: false },
      { texto: "Que solo se encuentra de forma natural en ese lugar específico y en ninguna otra parte del mundo", correcta: true },
      { texto: "Que es una especie introducida en ese lugar.", correcta: false },
      { texto: "Que es una especie en peligro de extinción a nivel global.", correcta: false }
    ]
  },
  {
    texto: "México es considerado un país... ",
    opciones: [
      { texto: "Con poca diversidad biológica.", correcta: false },
      { texto: "Megadiverso, con una gran cantidad de especies endémicas.", correcta: true },
      { texto: "Principalmente con especies introducidas. ", correcta: false },
      { texto: "Con la misma flora y fauna que Estados Unidos y Canadá.", correcta: false }
    ]
  },
  {
    texto: "¿Cuál de las siguientes regiones de México es conocida por su alto nivel de endemismo? ",
    opciones: [
      { texto: "La Península de Yucatán. ", correcta: false },
      { texto: "La Llanura Costera del Golfo. ", correcta: false },
      { texto: "La Península de Baja California.", correcta: true },
      { texto: "El Altiplano Mexicano.", correcta: false }
    ]
  },
  {
    texto: "¿Cuál de los siguientes grupos de plantas presenta un alto grado de endemismo en México? ",
    opciones: [
      { texto: "Los helechos. ", correcta: false },
      { texto: "Los musgos. ", correcta: false },
      { texto: "Los cactus. ", correcta: true },
      { texto: "Las coníferas (pinos y oyameles).", correcta: false }
    ]
  },
  {
    texto: "¿Cuál de los siguientes animales es un ejemplo de fauna endémica de México? ",
    opciones: [
      { texto: "El venado de cola blanca.", correcta: false },
      { texto: "El jaguar. ", correcta: false },
      { texto: "El ajolote. ", correcta: true },
      { texto: "El puma.", correcta: false }
    ]
  },

  {
    texto: "¿Qué factor principal ha contribuido al alto nivel de endemismo en México?",
    opciones: [
      { texto: "La uniformidad de su clima.", correcta: false },
      { texto: "Su aislamiento geográfico en algunas regiones y su compleja topografía. ", correcta: true },
      { texto: "La reciente introducción de especies exóticas. ", correcta: false },
      { texto: "La baja tasa de extinción de especies en el país.", correcta: false }
    ]
  },
  {
    texto: "¿Cuál de las siguientes flores es un símbolo navideño originario de México y considerada endémica en su forma silvestre? ",
    opciones: [
      { texto: "La rosa. ", correcta: false },
      { texto: "El tulipán. ", correcta: false },
      { texto: "La nochebuena. ", correcta: true },
      { texto: "El girasol.", correcta: false }
    ]
  },
  {
    texto: "¿Qué tipo de ecosistema en México suele albergar una gran cantidad de especies endémicas debido a su aislamiento y condiciones únicas de humedad y altitud? ",
    opciones: [
      { texto: "Los desiertos. ", correcta: false },
      { texto: "Las selvas bajas caducifolias. ", correcta: false },
      { texto: "Los bosques nublados. ", correcta: true},
      { texto: "Los pastizales.", correcta: false }
    ]
  },
  {
    texto: "¿Cuál de los siguientes géneros de cactus es conocido por tener una gran cantidad de especies endémicas de México y por su forma estrellada?",
    opciones: [
      { texto: "Mammillaria. ", correcta: false },
      { texto: "Ferocactus.", correcta: false },
      { texto: "Astrophytum.", correcta: true },
      { texto: "Opuntia.", correcta: false }
    ]
  },
  {
    texto: "La conservación de las especies endémicas de México es importante porque... ",
    opciones: [
      { texto: "Son recursos económicos valiosos para otros países. ", correcta: false },
      { texto: "Contribuyen a la biodiversidad única del país y al equilibrio de sus ecosistemas.", correcta: true },
      { texto: "Pueden ser fácilmente reemplazadas por especies introducidas. ", correcta: false },
      { texto: "No tienen un impacto significativo en el medio ambiente local.", correcta: false }
    ]
  },
  
];

// Generar el formulario dinámicamente
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formTrivia");

  preguntas.forEach((pregunta, index) => {
    const div = document.createElement("div");
    div.classList.add("pregunta");

    const titulo = document.createElement("p");
    titulo.textContent = `${index + 1}. ${pregunta.texto}`;
    div.appendChild(titulo);

    pregunta.opciones.forEach((opcion, i) => {
      const label = document.createElement("label");
      const input = document.createElement("input");

      input.type = "radio";
      input.name = `pregunta${index}`;
      input.value = opcion.correcta;

      label.appendChild(input);
      label.append(` ${opcion.texto}`);
      div.appendChild(label);
    });

    form.appendChild(div);
  });

  // Botón de enviar
  document.getElementById("btnEnviar").addEventListener("click", (e) => {
    e.preventDefault();

    let correctas = 0;

    preguntas.forEach((_, index) => {
      const seleccionada = document.querySelector(`input[name=\"pregunta${index}\"]:checked`);
      if (seleccionada && seleccionada.value === "true") {
        correctas++;
      }
    });

    document.getElementById("resultado").textContent = `Tu puntuación es: ${correctas} / ${preguntas.length}`;
  });
});
