const primera = ["Proyecto Creado Por Michitler"];
const frases = [
    "QUE FATALIDAD", "ERES MI HEROE Y MI VILLANA",
    "Podría enloquecer","descifrando tu conspiración", "Muero por saber el desenlace de esta trama",
    "comienza a anochecer", "y el corazón va al descubierto.", "Debo interpretar tus gritos, tus llamadas",
    "tus caricias Entre cortadas ", "y tus arranques de pasión", "Debo buscar dentro de tanto desperfecto",
    "La moraleja de este cuento", "debo domar tu corazón.", "En la oscuridad", "son los instintos los que mandan",
    "Que más quieres romper", "de corazones tienes colección", "Ya va a amanecer", "y sigo en esta encrucijada",
    "Misterio de mujer", "solo será cuestión de tiempo", "Debo interpretar tus gritos, tus llamadas",
    "tus caricias Entre cortadas","Y tus arranques de pasión", "Debo buscar dentro de tanto desperfecto", "La moraleja de este cuento", "debo domar tu corazón."
];

const frases2 = [
    "Y debo de enterrar el filo de tu espada", "en los secretos De tu almohada", " hasta que entiendas la lección",
    "Debo llegar al fondo de este desparpajo", " que yo de esta No me rajo", "hasta domar tu corazón."
];

const frases3 = ["Gracias por escuchar mi proyecto :D"];

const mayusculas4 = frases3.map(frase => frase.toUpperCase());
const mayusculas = frases.map(frase => frase.toUpperCase());
const mayusculas2 = primera.map(frase => frase.toUpperCase());
const mayusculas3 = frases2.map(frase => frase.toUpperCase());

function reiniciar() {
    location.reload();
    audio.pause();
}

function iniciar() {
    const gif = document.getElementById("gif");
    const gif2 = document.getElementById("gif2");
    const audio = document.getElementById("audio");
    let letra = 0;
    
    audio.addEventListener("ended", () => {
        document.getElementById("reiniciar").style.display = "block";
    });

    document.querySelector("button").style.display = "none";
    audio.play();

    // Muestra el primer texto
    document.getElementById("primer").textContent = mayusculas2[0];
    setTimeout(() => {
        document.getElementById("primer").textContent = "";
    }, 5000);

    // ── PARTE 1 ──────────────────────────────
    // Gif 1 aparece a los 6s y dura 7s (hasta el segundo 13)
    setTimeout(() => {
        gif.style.display = "block";
        setTimeout(() => {
            gif.style.display = "none";
        }, 7100);
    }, 6100);

    // Frases 1 arrancan a los 6s, cambian cada 3s
    // (ajusta el intervalo al ritmo de la canción)
    setTimeout(() => {
        document.getElementById("texto").textContent = mayusculas[letra];
        letra++;

        const intervalo1 = setInterval(() => {
            if (letra >= mayusculas.length) {
                clearInterval(intervalo1); // para cuando terminen las frases
                return;
            }
            document.getElementById("texto").textContent = mayusculas[letra];
            letra++;
        }, 4100); // cada 3s cambia frase, ajusta a la canción

    }, 14000);

    // ── PARTE 2 ──────────────────────────────
    // Calcula cuánto duran las frases 1:
    // 6000 (inicio) + 25 frases * 3000ms = 6000 + 75000 = 81000ms
    const inicioParte2 = 6000 + (mayusculas.length * 3000);

    // Gif2 aparece en el minuto 2:06
    setTimeout(() => {
        gif2.style.display = "block";
        document.getElementById("texto").textContent = ""; // limpia las frases

        // Desaparece en el minuto 2:32 (dura 26 segundos)
        setTimeout(() => {
            gif2.style.display = "none";
        }, 28000);

    }, 126100);

    // Frases parte 2 arrancan en el minuto 2:35
    setTimeout(() => {
        let letra2 = 0;

        // Mostramos la primera frase de la parte 2 de inmediato
        document.getElementById("texto").textContent = mayusculas3[letra2];
        letra2++;

        let intervalo = setInterval(() => {
            
            // CONDICIÓN DE CIERRE: Cuando se acaban las frases de la parte 2
            if (letra2 >= mayusculas3.length) {
                clearInterval(intervalo);

                document.getElementById("texto").textContent = "";

                setTimeout(() => {
                    document.getElementById("ultima").textContent = mayusculas4[0];

                    // La frase se queda X segundos y luego desaparece
                    setTimeout(() => {
                        document.getElementById("ultima").textContent = "";
                    }, 8000); // ← ajusta cuánto tiempo quieres que se vea la frase

                }, 500);

                return;
            }

            // Mientras queden frases en "frases2", se imprimen de forma normal:
            document.getElementById("texto").textContent = mayusculas3[letra2];
            letra2++;

        }, 4000);   

    }, 155000);
}
