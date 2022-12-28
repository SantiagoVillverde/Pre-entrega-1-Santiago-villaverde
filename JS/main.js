

function Hi() {
    const username = prompt("Escribe tu nombre: ");
    alert("Hola " + username + " bienvenido a Capybank")
};

Hi();

let age = 0;

do{
    age = parseInt(prompt("Escribe tu edad: "))
}while(age <= 17);


let currency = prompt("Desear relizar un plazo fijo en pesos o dolares?")


if(currency == "dolares"){
    alert("El porcentaje de interes anual en dolares es del 6%")
    let mount = parseInt(prompt("Escribe la cantidad de dinero que vas dejar en el plazo fijo: "))
    let days = parseInt(prompt("Escribe la cantidad de dias para calcular el interes: "))
    let restult = (mount * 0.06 / days).toFixed(2);
    alert("El interes generado por dejar $" + mount + " en el plazo fijo durante " + days + "Es " + restult);

}else if(currency == "pesos"){
    alert("El porcentaje de interes anual en pesos es del 75%")
    let mount2 = parseInt(prompt("Escribe la cantidad de dinero que vas dejar en el plazo fijo: "))
    let days2 = parseInt(prompt("Escribe la cantidad de dias para calcular el interes: "))
    let restult2 = (mount2 * 0.75 / 365 * days2).toFixed(2);
    alert("El interes generado por dejar $" + mount2 + " en el plazo fijo durante " + days2 + " es $" + restult2);
}



