// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Supe que eras especial", time: 12 },
  { text: "Desde aquella vez en que te vi llegar", time: 16 },
  { text: "Usabas blanco y no puedo olvidar", time: 21 },
  { text: "Esa misma noche me hiciste soñar", time: 25 },
  { text: "Y así mi amor te conocí", time: 27 },
  { text: "Poco a poco comencé a sentir", time: 31 },
  { text: "Que tu mirada comenzó a cambiar", time: 36 },
  { text: "Dos corazones listos para comenzar a amar", time: 40 },
  { text: "Y abriste tus puertas", time: 47 },
  { text: "Dejándome entrar", time: 51 },
  { text: "Tu mundo me curó tristezas", time: 55 },
  { text: "Tu risa me trajo de vuelta el alma", time: 59 },
  { text: "Y amar es poco decir a lo que siento", time: 63 },
  { text: "Cuando yo estoy junto a ti", time: 67 },
  { text: "Ahora puedo despertarme", time: 72 },
  { text: "Y dejar que el sol me diga que soy libre", time: 78 },
  { text: "Gracias a ti", time: 83 },
  { text: "Yo puedo decir que he vuelto a nacer", time: 89 },
  { text: "Gracias a ti", time: 93 },
  { text: "En el destino he vuelto a creer", time: 97 },
  { text: "Quiero quedarme", time: 100 },
  { text: "Contigo siempre hasta que ya seamos viejos", time: 104 },
  { text: "Y saber que ya lo he vivido todo", time: 107 },
  { text: "Pero que todo lo he vivido a tu lado", time: 111 },
  { text: "Y quiero amarte", time: 113 },
  { text: "Hasta saber que ya no existe esa palabra", time: 117 },
  { text: "Que describe todo este sentimiento", time: 121 },
  { text: "Que tiene este corazón que está en tus manos", time: 125 },
  { text: "Y abriste tus puertas", time: 129 },
  { text: "Dejándome entrar", time: 133 },
  { text: "Tu mundo me curó tristeza", time: 138 },
  { text: "Y esa risa me trajo de vuelta el alma", time: 143 },
  { text: "Y amar es poco decir a lo que siento", time: 147 },
  { text: "Cuando yo estoy junto a ti", time: 150 },
  { text: "Ahora puedo despertarme", time: 153 },
  { text: "Y dejar que el sol me diga que soy libre", time: 157 },
  { text: "Yo seré ese ángel", time: 161 },
  { text: "Que te cuide en todo momento", time: 164 },
  { text: "El que siempre estará a tu lado", time: 169 },
  { text: "Eso es algo que te prometo", time: 173 },
  { text: "Te lo prometo", time: 177 },
  { text: "Quiero quedarme", time: 180 },
  { text: "Contigo siempre hasta que ya seamos viejos", time: 184 },
  { text: "Y saber que ya lo he vivido todo", time: 188 },
  { text: "Pero que todo lo he vivido a tu lado", time: 192 },
  { text: "Y quiero amarte", time: 195 },
  { text: "Hasta saber que ya no existe esa palabra", time: 199 },
  { text: "Que describe todo este sentimiento", time: 203 },
  { text: "Que tiene este corazón que está en tus manos", time: 205 },
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