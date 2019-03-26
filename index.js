String.prototype.toSpongeBobCase = function() {
    let sBc = ''
    while (sBc.length < this.length)
        sBc += this[sBc.length][Math.random() > 0.5 ? 'toLowerCase' : 'toUpperCase']()
    return sBc
}
