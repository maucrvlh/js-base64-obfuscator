"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function obfuscate(base64EncodedString) {
    var e = base64EncodedString;
    try {
        return e.split('').map(function (z, i) { return i == Math.round(e.length / 2) ? String.fromCharCode(97 + Math.floor(Math.random() * 25)) : z; }).join('').slice(0, !!~e.indexOf(String.fromCharCode(61)) ? e.indexOf(String.fromCharCode(61)) : e.length).concat(e[Math.round(e.length / 2)]).concat(String.fromCharCode(75 + (!!~e.indexOf(String.fromCharCode(61)) ? e.match(/=/g).length : 0)));
    }
    catch (err) {
        throw new Error('Não foi possível ofuscar. É uma string em base 64? Verifique se está sendo fornecido um Buffer.from(string, \'ascii\').toString(\'base64\').');
    }
}
exports.obfuscate = obfuscate;
