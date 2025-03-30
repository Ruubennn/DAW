function cargarEstadisticasXML(idJugador, selectorTabla) {  /* Definición de la función para cargar el archivo XML */

    var xhr = new XMLHttpRequest(); /* Creo el objeto XMLHttpRequest para hacer peticiones HTTP */
    xhr.open("GET", "../XML/datosXML.xml", true); /* Petición tipo GET , ruta al XML , true -> petición asíncrona */

    xhr.onload = function () {   /* definición de la función para ser llamada cuando la petición es recibida */
        if (xhr.status === 200) { /* Se comprueba que el estado sea OK */

            var xml = xhr.responseXML; /* retorna respuesta en formato XML, lo devuelve como un documento XML DOM */

            var jugadores = xml.getElementsByTagName("jugador"); 
  /* selecciono el nodo <jugador> que es el padre de todos los datos */

            var jugador = null;
            for (var i = 0; i < jugadores.length; i++) {
                if (jugadores[i].getAttribute("id") === idJugador) {
                    jugador = jugadores[i];
                    break;
                }
            }

            if (jugador) {
                /* Extracción de todos los datos */
                var partidos = jugador.getElementsByTagName("partidos")[0].textContent;
                var goles = jugador.getElementsByTagName("goles")[0].textContent;
                var asistencias = jugador.getElementsByTagName("asistencias")[0].textContent;
                var rojas = jugador.getElementsByTagName("tarjetas_rojas")[0].textContent;
                var lesiones = jugador.getElementsByTagName("lesiones")[0].textContent;
                var pases = jugador.getElementsByTagName("pases")[0].textContent;
                var amarillas = jugador.getElementsByTagName("amarillas")[0].textContent;
                var centros = jugador.getElementsByTagName("centros")[0].textContent;

                /* Construcción de la tabla con los datos extraídos */
                var tablaHTML = `
                                <tr><th>Partidos</th><th>${partidos}</th><th>Tarjetas Rojas</th><th>${rojas}</th></tr>
                                <tr><th>Goles</th><th>${goles}</th><th>Lesiones</th><th>${lesiones}</th></tr>
                                <tr><th>Asistencias</th><th>${asistencias}</th><th>Pases</th><th>${pases}</th></tr>
                                <tr><th>Tarjetas Amarillas</th><th>${amarillas}</th><th>Centros</th><th>${centros}</th></tr>
                                `;

                document.querySelector(selectorTabla).innerHTML = tablaHTML; /* Añade el contenido a la table definida anteriormente en el HTML */
            }


        }
    };
    xhr.send(); /* envía la solicitud al servidor en modo GET */
}