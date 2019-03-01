String.prototype.toSpongeBobCase = function() {
    let sBc = ''
    while (sBc.length < this.length)
        sBc += this.substr(sBc.length, 1)[Math.random() > 0.5 ? 'toLowerCase' : 'toUpperCase']()
    return sBc
}
