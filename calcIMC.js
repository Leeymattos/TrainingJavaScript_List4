function calcImc(weight, height) {
    return Math.round(weight / Math.pow(height, 2))
}

module.exports = calcImc