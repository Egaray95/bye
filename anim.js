// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Supe que eras especial", time: 12 },
  { text: "Desde aquella vez en que te vi llegar", time: 16 },
  { text: "Usabas blanco y no puedo olvidar", time: 21 },
  { text: "Esa misma noche me hiciste soñar", time: 26 },
  { text: "Y así mi amor te conocí", time: 31 },
  { text: "Poco a poco comencé a sentir", time: 36 },
  { text: "Que tu mirada comenzó a cambiar", time: 41 },
  { text: "Dos corazones listos para comenzar a amar", time: 46 },
  { text: "Y abriste tus puertas", time: 52 },
  { text: "Dejándome entrar", time: 55 },
  { text: "Tu mundo me curó tristezas", time: 59 },
  { text: "Tu risa me trajo de vuelta el alma", time: 64 },
  { text: "Y amar es poco decir a lo que siento", time: 70 },
  { text: "Cuando yo estoy junto a ti", time: 76 },
  { text: "Ahora puedo despertarme", time: 81 },
  { text: "Y dejar que el sol me diga que soy libre", time: 87 },
  { text: "Gracias a ti", time: 92 },
  { text: "Yo puedo decir que he vuelto a nacer", time: 97 },
  { text: "Gracias a ti", time: 102 },
  { text: "En el destino he vuelto a creer", time: 107 },
  { text: "Quiero quedarme", time: 112 },
  { text: "Contigo siempre hasta que ya seamos viejos", time: 117 },
  { text: "Y saber que ya lo he vivido todo", time: 122 },
  { text: "Pero que todo lo he vivido a tu lado", time: 127 },
  { text: "Y quiero amarte", time: 132 },
  { text: "Hasta saber que ya no existe esa palabra", time: 137 },
  { text: "Que describe todo este sentimiento", time: 142 },
  { text: "Que tiene este corazón que está en tus manos", time: 147 },
  { text: "Y abriste tus puertas", time: 152 },
  { text: "Dejándome entrar", time: 157 },
  { text: "Tu mundo me curó tristeza", time: 162 },
  { text: "Y esa risa me trajo de vuelta el alma", time: 167 },
  { text: "Y amar es poco decir a lo que siento", time: 172 },
  { text: "Cuando yo estoy junto a ti", time: 177 },
  { text: "Ahora puedo despertarme", time: 182 },
  { text: "Y dejar que el sol me diga que soy libre", time: 187 },
  { text: "Yo seré ese ángel", time: 192 },
  { text: "Que te cuide en todo momento", time: 197 },
  { text: "El que siempre estará a tu lado", time: 202 },
  { text: "Eso es algo que te prometo", time: 207 },
  { text: "Te lo prometo", time: 212 },
  { text: "Quiero quedarme", time: 217 },
  { text: "Contigo siempre hasta que ya seamos viejos", time: 222 },
  { text: "Y saber que ya lo he vivido todo", time: 227 },
  { text: "Pero que todo lo he vivido a tu lado", time: 232 },
  { text: "Y quiero amarte", time: 237 },
  { text: "Hasta saber que ya no existe esa palabra", time: 242 },
  { text: "Que describe todo este sentimiento", time: 247 },
  { text: "Que tiene este corazón que está en tus manos", time: 252 },
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