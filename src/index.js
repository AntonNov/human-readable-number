module.exports = function toReadable(number) {
    const digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    const dozens = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    const tens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    let numberstring = number.toString();
    if (numberstring.length == 1) {
        return digits[+numberstring[0]]
    }
    if (numberstring.length == 2) {
        if (+numberstring[0] == 1) {
            return tens[numberstring[1]]
        }
        if (+numberstring[1] == 0) {
            return dozens[numberstring[0]]
        }
        return dozens[+numberstring[0]] + ' ' + digits[numberstring[1]]
    }
    if (numberstring.length == 3) {
        if (+numberstring[1] == 0 && +numberstring[2] == 0) {
            return digits[+numberstring[0]] + ' hundred '
        }
        if (+numberstring[2] == 0) {
            return digits[+numberstring[0]] + ' hundred '
                + dozens[+numberstring[1]]
        }
        if (+numberstring[1] == 0) {
            return digits[+numberstring[0]] + ' hundred '
                + digits[+numberstring[2]]
        }
        if (+numberstring[1] == 1) {
            return digits[+numberstring[0]] + ' hundred '
                + tens[numberstring[1]]
        }
        return digits[+numberstring[0]] + ' hundred '
            + dozens[+numberstring[1]] + ' ' + digits[+numberstring[2]]
    }

}
