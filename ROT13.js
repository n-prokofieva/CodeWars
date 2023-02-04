function rot13(str) {
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    const decodedStr = [...str].reduce((acc,el) => {
        if (el.match(/[a-z]/)) {
            let index = alphabet.indexOf(el.toUpperCase());
            acc += alphabet[(index >= 13) ? (index - 13) : (index + 13)].toLowerCase();
        } else if (el.match(/[A-Z]/)) {
            let index = alphabet.indexOf(el);
            acc += alphabet[(index >= 13) ? (index - 13) : (index + 13)];
        } else {
            acc += el;
        }
        return acc;
    }, "");

    return decodedStr;
}

rot13("EBG13 - Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.");