function mostrar() 
{
    var nombres = "";

    nombres = txtIdNombres.value;
    nombres = nombres.split("\n");
    var numeroRandom = new Array();
    var n;
    var cantidad;
    var mensaje;

    //cantidad = prompt("Cuantos jugadores son?");
    //cantidad = parseInt(cantidad);
    cantidad = 4;

    /*for (var i = 0; i < cantidad; i++) {
    nombres[i] = prompt("Ingrese nombre de jugador n°" + (i + 1));
    }*/
    if(nombres.length == 4)
    {
        for (var i = 0; i < cantidad; i++) 
        {
            n = Math.floor(Math.random() * cantidad);
            !numeroRandom.includes(n) ? (numeroRandom[i] = n) : i--;
        }
        mensaje =
        "Equipo 1: \n" +
        nombres[numeroRandom[0]] +
        " - " +
        nombres[numeroRandom[1]] +
        "\n VS \nEquipo 2: \n" +
        nombres[numeroRandom[2]] +
        " - " +
        nombres[numeroRandom[3]]
        ;
        txtIdEquiposArmados.value = mensaje;
    }
    else
    {
        alert("Debe ingresar 4 jugadores")
    }
}
