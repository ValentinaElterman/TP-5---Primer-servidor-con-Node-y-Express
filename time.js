function HoraActual() {
    const ahora = new Date();
    const horaFormateada = ahora.toTimeString().slice(0, 8);
    return `La hora actual es: ${horaFormateada}`;
}

function FechaCompleta() {
    const ahora = new Date();

    const dias = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]; //empieza el domingo porque domingo es 0
    const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]; //enero es 0 y diciembre es 11

    const dia = dias[ahora.getDay()];
    const numDia = ahora.getDate();
    const nombreMes = meses[ahora.getMonth()];
    const año = ahora.getFullYear();
    const hora = HoraActual();

    return `Hoy es ${dia} ${numDia} de ${nombreMes} de ${año}, y son las ${hora}`;
}

export { HoraActual, FechaCompleta };
