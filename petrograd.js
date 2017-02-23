//$(document).on("load", start);
window.addEventListener("load", start);



function start() {
    console.log("Start programmet");

    $.getJSON("http://petlatkea.dk/2017/dui/api/productlist?callback=?", visPersonListe);

}

function visPersonListe(listen) {
    console.log(listen);

    listen.forEach(visPersonInfo);

}

function visPersonInfo(person)  {
    // klon person-info templaten

    var klon = document.querySelector("#menuinfo_template").content.cloneNode(true);

    // sæt data ind i klonen
    klon.querySelector(".data_forret").innerHTML = person.forret;
    klon.querySelector(".data_forret2").innerHTML = person.forret;


    klon.querySelector(".modal").id = "modal" + person.id;
    klon.querySelector(".modalknap").dataset.target = "#modal" + person.id;

    console.log("Vis info");
    console.log("fornavn: " + person.fornavn);
    console.log("efternavn: " + person.efternavn);



    // sæt klonen ind i person-info div
    document.querySelector("#menu_info").appendChild(klon);
}
