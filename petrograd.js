//$(document).on("load", start);
window.addEventListener("load", sidenVises);



function sidenVises() {
    console.log("Siden vises");
    visProdukt();

    $.getJSON("http://petlatkea.dk/2017/dui/api/productlist?callback=?", visPersonListe);

}

function visProdukt() {
    // klon produkt_template
    var klon = document.querySelector("#produkt_template").content.cloneNode(true);

    //sætte data ind i klonen

    //append klon til .produkt_liste
    document.querySelector(".produktliste").appendChild(klon);

}
