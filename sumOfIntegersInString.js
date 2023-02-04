function sumOfIntegersInString(s) {
    return s.split(/\D+/g).reduce((acc, el) => {
        acc += el.length > 0 ? parseInt(el) : 0;
        return acc;

    }, 0);
}

sumOfIntegersInString('The30quick20brown10f0x1203jumps914ov3r1349the102l4zy');

