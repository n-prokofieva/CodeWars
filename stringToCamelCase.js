function toCamelCase(str) {
    const result = str.split('');

    return result.map(function(el, i) {
        if(el === '_' || el === '-') {
            el = result[i + 1].toUpperCase();
            result.splice(i + 1, 1);
        }
        return el;
    }).join('');
}

toCamelCase("the-stealth-warrior");