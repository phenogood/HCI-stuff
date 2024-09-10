`
let x = 8;
let y = 'eight';
let z = [6, 'six'];
z[2] = 'thee';

function letters(v, m) {
    if (v > 9) {
        return v + ' ' + m;
    }   else if (v < 9) {
        return v + ' is not more than 9';
    }   
}

console.log(letters(8, "shirt"));

function square(length) {
    this.length = length;
    this.draw = function() {
        console.log("drewer");
    }
}

const sqr = new square(10);

for (let l in sqr) {
    if (typeof sqr[l] != 'function') {
        console.log(l, sqr[l]);
    } else {
        console.log(l, sqr[l]);
    }
}
`
console.log("No more hello world, bye world :)")

// WHY IS JAVASCRIPT SO CONFUSING
// I give up doing this shit, for today...