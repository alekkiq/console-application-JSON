"use strict";

const { lisaa, poista, paivita, haeYksi, haekaikki } = require("./kirjastoapufunktiot");
const { STATUSVIESTIT, STATUSKOODIT } = require("./sKoodit");


module.exports = class Tvarasto {
    get STATUSKOODIT() {
        return STATUSKOODIT;
    };
    hae(tuotenumero) {
        return new Promise(async (resolve, reject) => {
            if (!tuotenumero) {
                reject(STATUSVIESTIT.EI_LOYTYNYT("_"));
            }
            else {
                const tulos = await haeYksi(tuotenumero);
                if (tulos) {
                    resolve(tulos);
                }
                else {
                    reject(STATUSVIESTIT.EI_LOYTYNYT(tuotenumero));
                }
            }
        });
    }

    haekaikki2() {
        return haekaikki();
    }

    poista(tuotenumero) {
        return new Promise(async (resolve, reject) => {
            if (!tuotenumero) {
                reject(STATUSVIESTIT.EI_LOYTYNYT("_"))
            }
            else if (await poista(tuotenumero)) {
                resolve(STATUSVIESTIT.POISTO_OK(tuotenumero));
            }
            else {
                reject(STATUSVIESTIT.EI_POISTETTU());
            }
        });
    }

    paivita(muutos) {
        return new Promise(async (resolve, reject) => {
            if (muutos) {
                if (await paivita(muutos)) {
                    resolve(STATUSVIESTIT.PAIVITYS_OK(muutos.tuotenumero));
                }
                else {
                    reject(STATUSVIESTIT.EI_PAIVITETTY());
                }
            }
            else {
                reject(STATUSVIESTIT.EI_PAIVITETTY());
            }
        });
    }

    lisaaUusi(uusi) {
        return new Promise(async (resolve, reject) => {
            if (uusi) {
                if (!uusi.tuotenumero) {
                    reject(STATUSVIESTIT.EI_LISATTY());
                }
                else if (await haeYksi(uusi.tuotenumero)) {
                    reject(STATUSVIESTIT.JO_KAYTOSSA(uusi.tuotenumero));
                }
                else if (await lisaa(uusi)) {
                    resolve(STATUSVIESTIT.LISAYS_OK(uusi.tuotenumero));
                }
                else {
                    reject(STATUSVIESTIT.EI_LISATTY());
                }
            }
            else {
                reject(STATUSVIESTIT.EI_LISATTY());
            }
        });
    }
};