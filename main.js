function hex(v) {
    console.log(v);
    v = parseInt(v);
    var hex = v.toString(16);
    if(v < 16) {
        hex = "0" + hex;
    }
    return hex;
}

function setRGB() {
    var r = document.getElementById("r").value;
    var g = document.getElementById("g").value;
    var b = document.getElementById("b").value;
    var c = "rgb(" + r + ", " + g + ", " + b + ")";
    document.getElementById("rgb").textContent = c;
}

function setHEX() {
    var r = document.getElementById("r").value;
    var g = document.getElementById("g").value;
    var b = document.getElementById("b").value;
    var c = "#" + hex(r) + hex(g) + hex(b);
    document.body.style.backgroundColor = c;
    document.getElementById("hex").textContent = c;
}

function renderColors() {
    setHEX();
    setRGB();
}