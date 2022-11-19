// kopioitu suoraan edellisestä tehtäväst

"use strict";

const STATUSKOODIT = {
    OHJELMAVIRHE: 0,
    EI_LOYTYNYT: 1,
    LISAYS_OK: 2,
    EI_LISATTY: 3,
    JO_KAYTOSSA: 4,
    POISTO_OK: 5,
    EI_POISTETTU: 6,
    PAIVITYS_OK: 7,
    EI_PAIVITETTY: 8
};

const STATUSVIESTIT = {
    OHJELMAVIRHE: () => ({
        viesti: "Virhe ohjelmassa",
        statuskoodi: STATUSKOODIT.OHJELMAVIRHE,
        tyyppi: "virhe"
    }),
    EI_LOYTYNYT: tuotenumero => ({
        viesti: `Annetulla tuotenumerolla ${tuotenumero} ei löytynyt tuotteita`,
        statuskoodi: STATUSKOODIT.EI_LOYTYNYT,
        tyyppi: "virhe"
    }),
    LISAYS_OK: tuotenumero => ({
        viesti: `Tuote tuotenumerolla ${tuotenumero} lisättiin`,
        statuskoodi: STATUSKOODIT.LISAYS_OK,
        tyyppi: "info"
    }),
    EI_LISATTY: () => ({
        viesti: "Tietoja ei lisätty",
        statuskoodi: STATUSKOODIT.EI_LISATTY,
        tyyppi: "virhe"
    }),
    JO_KAYTOSSA: tuotenumero => ({
        viesti: `Tuotenumero ${tuotenumero} jo käytössä`,
        statuskoodi: STATUSKOODIT.JO_KAYTOSSA,
        tyyppi: "virhe"
    }),
    POISTO_OK: tuotenumero => ({
        viesti: `Tuote tuotenumerolla ${tuotenumero} poistettiin`,
        statuskoodi: STATUSKOODIT.POISTO_OK,
        tyyppi: "info"
    }),
    EI_POISTETTU: () => ({
        viesti: "Annetulla tuotenumerolla ei löytynyt tietoja. Mitään ei poistettu",
        statuskoodi: STATUSKOODIT.EI_POISTETTU,
        tyyppi: "virhe"
    }),
    PAIVITYS_OK: tuotenumero => ({
        viesti: `Tuotteet numerolla ${tuotenumero} päivitettiin`,
        statuskoodi: STATUSKOODIT.PAIVITYS_OK,
        tyyppi: "info"
    }),
    EI_PAIVITETTY: () => ({
        viesti: "Tuotteita ei päivitetty",
        statuskoodi: STATUSKOODIT.EI_PAIVITETTY,
        tyyppi: "virhe"
    })
};

module.exports = { STATUSKOODIT, STATUSVIESTIT };

