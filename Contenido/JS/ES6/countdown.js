export const countdown = () => { // Función Arrow

    // Uso de const (ES6)
    const fecha = new Date("2025-04-20T18:00:00").getTime();
    const ahora = new Date().getTime();
    const diff = fecha - ahora;

    if (diff > 0) {

        // Funciones Arrow (ES6)
        // Uso de let (ES6)
        // Uso de Math.trunc -> método del Objeto Math introducido en ES6
        let funcionDias = (diferencia) => Math.trunc(diferencia / (1000 * 60 * 60 * 24));
        let funcionHoras = (diferencia) => Math.trunc((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let funcionMinutos = (diferencia) => Math.trunc((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        let funcionSegundos = (diferencia) => Math.trunc((diferencia % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = `${funcionDias(diff)}d ${funcionHoras(diff)}h ${funcionMinutos(diff)}m ${funcionSegundos(diff)}s`;

    } else {
        document.getElementById("countdown").innerHTML = "¡El partido ha comenzado!";
    }
};