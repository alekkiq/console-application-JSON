"use strict";

const lue = require("./syote/syotekirjasto");

const { haekaikkiTuotteet, haeYksiTuote, lisaaTuote, poistaTuote, paivitaTuote }
    = require("./funktiot");

const valikko = `
Valitse:

1. hae kaikki tuotteet
2. hae tuote
3. lisää tuote
4. muuta tuotteen tietoja
5. poista tuote
6. lopeta

Anna valintasi (1,2,3,4,5 tai 6): `;

const endMes = `
#############################
            Kiitos!
#############################`;

const errMes = `
#############################
 Anna numero 1,2,3,4,5 tai 6
#############################`;

valitse();

async function valitse() {
    let loppu = false;
    do {
        const valinnat = await lue(valikko);
        switch (valinnat) {
            case "1":
                await haekaikkiTuotteet();
                break;
            case "2":
                await haeYksiTuote();
                break;
            case "3":
                await lisaaTuote();
                break;
            case "4":
                await paivitaTuote();
                break;
            case "5":
                await poistaTuote();
                break;
            case "6":
                console.log(endMes);
                loppu = true;
                break;
            default:
                console.log(errMes);
        }
    } while (!loppu);
}
