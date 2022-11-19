"use strict";

const lue = require("./syote/syotekirjasto");
const Tvarasto = require("./jsonkirjasto/tietovarastokerros");
const varasto = new Tvarasto();

function muodostaStatus(viesti) {
    return `\n#### Tulos ####\n${viesti}`;
}

function tuoterivi(tuote) {
    return `Tuotenumero ${tuote.tuotenumero}: 
    \nMerkki:${tuote.merkki}
    \nMallinumero:${tuote.mallinumero}
    \nLukumäärä:${tuote.lukumaara}
    \nhinta:${tuote.hinta}€
    
    `;
}

async function haekaikkiTuotteet() {
    console.log("\n KAIKKI TUOTTEET \n");
    for (const tuote of await varasto.haekaikki2()) {
        console.log(tuoterivi(tuote));
    }
}
async function haeYksiTuote() {
    try {
        const tuotenumero = +await lue("Anna tuotenumero: ");
        const tulos = await varasto.hae(tuotenumero);
        console.log("\n Hae tuote ");
        console.log(tuoterivi(tulos));
    }
    catch (virhe) {
        console.log(muodostaStatus(virhe.viesti))
    }
}

async function lueTuote() {
    const tuotenumero = +await lue("Anna tuotenumero: ");
    const merkki = await lue("Merkki: ");
    const mallinumero = await lue("Mallinumero: ");
    const lukumaara = await lue("Lukumäärä: ");
    const hinta = +await lue("Hinta: ");
    return {
        tuotenumero, merkki, mallinumero, lukumaara, hinta
    };
}

async function paivitaTuote() {
    try {
        const muutos = await lueTuote();
        const tulos = await varasto.paivita(muutos);
        console.log(muodostaStatus(tulos.viesti));
    }
    catch (virhe) {
        console.log(muodostaStatus(virhe.viesti));
    }
}
async function lisaaTuote() {
    try {
        const uusi = await lueTuote();
        const stat = await varasto.lisaaUusi(uusi);
        console.log(muodostaStatus(stat.viesti));
    }
    catch (virhe) {
        console.log(muodostaStatus(virhe.viesti));
    }
}
async function poistaTuote() {
    try {
        const tuotenumero = +await lue("Anna tuotenumero: ");
        const stat = await varasto.poista(tuotenumero);
        console.log(muodostaStatus(stat.viesti));
    }
    catch (virhe) {
        console.log(muodostaStatus(virhe.viesti));
    }
}
module.exports = { haekaikkiTuotteet, haeYksiTuote, lisaaTuote, poistaTuote, paivitaTuote, muodostaStatus };