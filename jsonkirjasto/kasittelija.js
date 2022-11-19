"use strict";
const fs = require("fs").promises;

async function lue(varastoTiedosto) {
    try {
        const data = await fs.readFile(varastoTiedosto, "utf-8");
        return JSON.parse(data);
    }
    catch (virhe) {
        return [];
    }
}
async function kirjoita(varastoTiedosto, data) {
    try {
        await fs.writeFile(varastoTiedosto, JSON.stringify(data, null, 4), {
            encoding: "utf-8",
            flag: "w"
        });
        return true;
    }
    catch (virhe) {
        return false;
    }
}
module.exports = { lue, kirjoita };