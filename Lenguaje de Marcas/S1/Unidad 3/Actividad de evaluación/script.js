/* ===============================
    SELECCIÓN DE ELEMENTOS DEL DOM
================================ */

const tituloPrincipal = document.getElementById("titulo-principal");
const listaBeneficios = document.getElementById("lista-beneficios");

const formulario = document.getElementById("formulario-inscripcion");
const mensajeConfirmacion = document.getElementById("mensaje-confirmacion");

const imagenGaleria = document.getElementById("imagen-galeria");
const botonAnterior = document.getElementById("anterior");
const botonSiguiente = document.getElementById("siguiente");

const anioActualSpan = document.getElementById("anio-actual");

const selectorComunidad = document.getElementById("comunidad");
const listadoClubes = document.getElementById("listado-clubes");


/* ===============================
    DATOS: CLUBES POR COMUNIDAD
================================ */

const clubesPorComunidad = {
    "Andalucía": [
        "Ángel Ximénez Puente Genil",
        "BM Los Dólmenes Antequera",
        "BM Ciudad de Algeciras",
        "BM Proin Sevilla",
        "BM Montequinto",
        "BM Maravillas Benalmádena",
        "BM Carboneras",
        "BM Roquetas"
    ],
    "Aragón": [
        "Bada Huesca",
        "BM Dominicos Zaragoza",
        "BM Tarazona",
        "BM Caspe"
    ],
    "Asturias": [
        "Balonmano La Calzada",
        "Oviedo Balonmano Femenino",
        "Real Grupo de Cultura Covadonga",
        "BM Gijón Jovellanos",
        "BM Siero",
        "BM Ribadesella"
    ],
    "Islas Baleares": [
        "Trasmapi Gobycar Citubo UD Ibiza",
        "Handbol Club Eivissa",
        "Handbol Mallorca",
        "Handbol Marratxí"
    ],
    "Canarias": [
        "BM Rocasa Gran Canaria",
        "CB Zonzamas",
        "BM Tejina",
        "BM Realejos"
    ],
    "Cantabria": [
        "Bathco BM Torrelavega",
        "BM Sinfín Santander",
        "BM Pereda",
        "BM Camargo"
    ],
    "Castilla-La Mancha": [
        "BM Guadalajara",
        "BM Ciudad de Alarcos",
        "BM Cuenca",
        "BM Bolaños",
        "BM Toledo"
    ],
    "Castilla y León": [
        "ABANCA Ademar León",
        "Recoletas Atlético Valladolid",
        "BM Nava",
        "BM Zamora",
        "BM Soria"
    ],
    "Cataluña": [
        "FC Barcelona Handbol",
        "Fraikin BM Granollers",
        "BM La Roca",
        "Handbol Sant Quirze",
        "UE Sarrià",
        "BM Bordils"
    ],
    "Comunidad Valenciana": [
        "Horneo EÓN Alicante",
        "BM Benidorm",
        "BM Elche",
        "BM Alcàsser",
        "BM Castellón"
    ],
    "Extremadura": [
        "BM Ciudad de Plasencia",
        "BM Extremadura",
        "BM Villafranca"
    ],
    "Galicia": [
        "Frigoríficos del Morrazo (Cangas)",
        "BM Lalín",
        "BM Porriño",
        "Atlético Guardés",
        "BM Teucro"
    ],
    "La Rioja": [
        "BM Logroño La Rioja",
        "BM Casetas",
        "BM Rioja"
    ],
    "Comunidad de Madrid": [
        "BM Alcobendas",
        "BM Torrejón",
        "Ikasa BM Madrid",
        "BM Móstoles",
        "BM Leganés"
    ],
    "Región de Murcia": [
        "BM Ciudad de Murcia",
        "BM UCAM Murcia",
        "BM Águilas"
    ],
    "Navarra": [
        "Helvetia Anaitasuna",
        "BM Ardoi",
        "BM Errotabarri"
    ],
    "País Vasco": [
        "Bidasoa Irun",
        "BM Zuazo",
        "BM Barakaldo",
        "BM Kukullaga",
        "BM Eibar",
        "BM Zarautz",
        "BM Tolosa",
        "BM Sanlo",
        "BM Urola"
    ],
    "Ceuta": [
        "BM Ramón y Cajal",
        "BM Ceuta"
    ],
    "Melilla": [
        "BM Melilla Ciudad del Deporte"
    ]
};


/* ===============================
    RELLENAR SELECT DE COMUNIDADES
================================ */

for (let comunidad in clubesPorComunidad) {
    const option = document.createElement("option");
    option.value = comunidad;
    option.textContent = comunidad;
    selectorComunidad.appendChild(option);
}


/* ===============================
    MOSTRAR CLUBES COMO CARDS
================================ */

selectorComunidad.addEventListener("change", function () {
    listadoClubes.innerHTML = "";

    const selectClub = document.getElementById("club");
    selectClub.innerHTML = '<option value="">Selecciona un club</option>';

    if (this.value === "") {
        return;
    }

    const contenedorCards = document.createElement("div");
    contenedorCards.classList.add("contenedor-cards");

    clubesPorComunidad[this.value].forEach(club => {
        // ---- CARDS ----
        const card = document.createElement("div");
        card.classList.add("club-card");

        const nombreClub = document.createElement("h4");
        nombreClub.textContent = club;

        const botonInfo = document.createElement("button");
        botonInfo.textContent = "Más información";

        botonInfo.addEventListener("click", function () {
            alert("Has seleccionado el club: " + club);
        });

        card.appendChild(nombreClub);
        card.appendChild(botonInfo);
        contenedorCards.appendChild(card);

        // ---- SELECT FORMULARIO ----
        const option = document.createElement("option");
        option.value = club;
        option.textContent = club;
        selectClub.appendChild(option);
    });

    listadoClubes.appendChild(contenedorCards);
});

/* ===============================
    GALERÍA DE IMÁGENES
================================ */

const imagenes = [
    "img/galeria1.jpg",
    "img/galeria2.jpg",
    "img/galeria3.jpg",
    "img/galeria4.jpg",
    "img/galeria5.jpg",
    "img/galeria6.jpg",
    "img/galeria7.jpg",
    "img/galeria8.jpg"
];

let indiceActual = 0;
let intervaloGaleria = null;

// Función para mostrar imagen
function mostrarImagen() {
    imagenGaleria.src = imagenes[indiceActual];
}

// Avanza automáticamente
function iniciarGaleriaAutomatica() {
    intervaloGaleria = setInterval(function () {
        indiceActual++;
        if (indiceActual >= imagenes.length) {
            indiceActual = 0;
        }
        mostrarImagen();
    }, 3000); // cambia cada 3 segundos
}

// Reinicia el intervalo (cuando el usuario interactúa)
function reiniciarGaleria() {
    clearInterval(intervaloGaleria);
    iniciarGaleriaAutomatica();
}

// Botón siguiente
botonSiguiente.addEventListener("click", function () {
    indiceActual++;
    if (indiceActual >= imagenes.length) {
        indiceActual = 0;
    }
    mostrarImagen();
    reiniciarGaleria();
});

// Botón anterior
botonAnterior.addEventListener("click", function () {
    indiceActual--;
    if (indiceActual < 0) {
        indiceActual = imagenes.length - 1;
    }
    mostrarImagen();
    reiniciarGaleria();
});

// Iniciar galería al cargar la página
mostrarImagen();
iniciarGaleriaAutomatica();


/* ===============================
    FORMULARIO
================================ */

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const club = document.getElementById("club").value;

    if (nombre === "" || email === "" || club === "") {
        mensajeConfirmacion.textContent = "Por favor, completa todos los campos.";
        mensajeConfirmacion.style.color = "red";
    } else {
        mensajeConfirmacion.textContent =
            "Gracias " + nombre + ". El club se pondrá en contacto contigo.";
        mensajeConfirmacion.style.color = "green";

        formulario.reset();
    }
});


/* ===============================
    AÑO ACTUAL EN FOOTER
================================ */
const anioActual = new Date().getFullYear();
anioActualSpan.textContent = anioActual;