let feet;
let metres;
function inchConversion(inch) {
    feet = inch / 12;
    console.log(feet);
}

function rectangelePlot(length, breadth) {
    metres = (length * breadth) * 0.3048;
    console.log(metres);
}

inchConversion(42);
rectangelePlot(60, 40);