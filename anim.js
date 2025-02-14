// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Supe que eras especial", time: 0 },
  { text: "Desde aquella vez en que te vi llegar", time: 4 },
  { text: "Usabas blanco y no puedo olvidar", time: 9 },
  { text: "Esa misma noche me hiciste soñar", time: 14 },
  { text: "Y así mi amor te conocí", time: 19 },
  { text: "Poco a poco comencé a sentir", time: 24 },
  { text: "Que tu mirada comenzó a cambiar", time: 29 },
  { text: "Dos corazones listos para comenzar a amar", time: 34 },
  { text: "Y abriste tus puertas", time: 40 },
  { text: "Dejándome entrar", time: 43 },
  { text: "Tu mundo me curó tristezas", time: 47 },
  { text: "Tu risa me trajo de vuelta el alma", time: 52 },
  { text: "Y amar es poco decir a lo que siento", time: 58 },
  { text: "Cuando yo estoy junto a ti", time: 64 },
  { text: "Ahora puedo despertarme", time: 69 },
  { text: "Y dejar que el sol me diga que soy libre", time: 75 },
  { text: "Gracias a ti", time: 80 },
  { text: "Yo puedo decir que he vuelto a nacer", time: 85 },
  { text: "Gracias a ti", time: 90 },
  { text: "En el destino he vuelto a creer", time: 95 },
  { text: "Quiero quedarme", time: 100 },
  { text: "Contigo siempre hasta que ya seamos viejos", time: 105 },
  { text: "Y saber que ya lo he vivido todo", time: 110 },
  { text: "Pero que todo lo he vivido a tu lado", time: 115 },
  { text: "Y quiero amarte", time: 120 },
  { text: "Hasta saber que ya no existe esa palabra", time: 125 },
  { text: "Que describe todo este sentimiento", time: 130 },
  { text: "Que tiene este corazón que está en tus manos", time: 135 },
  { text: "Y abriste tus puertas", time: 140 },
  { text: "Dejándome entrar", time: 145 },
  { text: "Tu mundo me curó tristeza", time: 150 },
  { text: "Y esa risa me trajo de vuelta el alma", time: 155 },
  { text: "Y amar es poco decir a lo que siento", time: 160 },
  { text: "Cuando yo estoy junto a ti", time: 165 },
  { text: "Ahora puedo despertarme", time: 170 },
  { text: "Y dejar que el sol me diga que soy libre", time: 175 },
  { text: "Yo seré ese ángel", time: 180 },
  { text: "Que te cuide en todo momento", time: 185 },
  { text: "El que siempre estará a tu lado", time: 190 },
  { text: "Eso es algo que te prometo", time: 195 },
  { text: "Te lo prometo", time: 200 },
  { text: "Quiero quedarme", time: 205 },
  { text: "Contigo siempre hasta que ya seamos viejos", time: 210 },
  { text: "Y saber que ya lo he vivido todo", time: 215 },
  { text: "Pero que todo lo he vivido a tu lado", time: 220 },
  { text: "Y quiero amarte", time: 225 },
  { text: "Hasta saber que ya no existe esa palabra", time: 230 },
  { text: "Que describe todo este sentimiento", time: 235 },
  { text: "Que tiene este corazón que está en tus manos", time: 240 },
];


// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);