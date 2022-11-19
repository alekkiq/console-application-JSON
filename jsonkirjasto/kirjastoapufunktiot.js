"use strict";

const path = require("path");

const { jsonFile } = require("./tuotteetconfig.json");

const varastoFile = path.join(__dirname, jsonFile);

const { lue, kirjoita } = require("./kasittelija");



async function haekaikki() {
    return lue(varastoFile);
}

async function lisaa(uusi) {
    const stor = await lue(varastoFile);
    stor.push(uusi);
    return await kirjoita(varastoFile, stor);
}

async function poista(tuotenumero) {
    const stor = await lue(varastoFile);
    const i = stor.findIndex(x => x.tuotenumero == tuotenumero);
    if (i < 0) return false;
    stor.splice(i, 1);
    return await kirjoita(varastoFile, stor);
}

async function paivita(ob) {
    const stor = await lue(varastoFile);
    const vanha = stor.find(old => old.tuotenumero == ob.tuotenumero);
    if (vanha) {
        Object.assign(vanha, ob);
        return await kirjoita(varastoFile, stor);
    }
    return false;
}

async function haeYksi(tuotenumero) {
    return (await lue(varastoFile)).find(ob => ob.tuotenumero == tuotenumero);
}


module.exports = { lisaa, poista, paivita, haeYksi, haekaikki };