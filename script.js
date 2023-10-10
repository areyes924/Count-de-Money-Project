var pennyValue = 0;
var nickelValue = 0;
var dimeValue = 0;
var quarterValue = 0;

const pennyUp = document.getElementById("pennyUp");
const pennyDown = document.getElementById("pennyDown");

const nickelUp = document.getElementById("nickelUp");
const nickelDown = document.getElementById("nickelDown");

const dimeUp = document.getElementById("dimeUp");
const dimeDown = document.getElementById("dimeDown");

const quarterUp = document.getElementById("quarterUp");
const quarterDown = document.getElementById("quarterDown");

pennyUp.addEventListener("click", function() { changePenny(1); });
pennyDown.addEventListener("click", function() { changePenny(-1); });

nickelUp.addEventListener("click", function() { changeNickel(1)});
nickelDown.addEventListener("click", function() { changeNickel(-1)});

dimeUp.addEventListener("click", function() { changeDime(1)});
dimeDown.addEventListener("click", function() { changeDime(-1)});

quarterUp.addEventListener("click", function() { changeQuarter(1)});
quarterDown.addEventListener("click", function() { changeQuarter(-1)});

function changePenny(i) {
    pennyValue += i;
    console.log(pennyValue);    
    pennyValue = Math.abs(pennyValue);

    const changingText = document.getElementById("changingText");
    changingText.textContent = "| Penny Count: " + pennyValue +  "\n| Nickel Count: " + nickelValue + "\n| Dime Count: " + dimeValue + "\n| Quarter Count: " + quarterValue + " |";
    
    const individuals = document.getElementById("individuals");
    individuals.textContent = "| Penny Value: " + ((0.01) * pennyValue).toFixed(2) +  "\n| Nickel Count: " + ((0.05) * nickelValue).toFixed(2) + "\n| Dime Count: " + ((0.1) * dimeValue).toFixed(2) + "\n| Quarter Count: " + ((0.25) * quarterValue).toFixed(2) + " |";

    const total = document.getElementById("total")
    total.textContent = "Total Value: " + ((0.01) * pennyValue + (0.05) * nickelValue + (0.1) * dimeValue + (0.25) * quarterValue).toFixed(2)

}

function changeNickel(i) {
    nickelValue += i;
    console.log(nickelValue);
    nickelValue = Math.abs(nickelValue);

    const changingText = document.getElementById("changingText");
    changingText.textContent = "| Penny Count: " + pennyValue +  "\n| Nickel Count: " + nickelValue + "\n| Dime Count: " + dimeValue + "\n| Quarter Count: " + quarterValue + " |";

    const individuals = document.getElementById("individuals");
    individuals.textContent = "| Penny Value: " + ((0.01) * pennyValue).toFixed(2) +  "\n| Nickel Count: " + ((0.05) * nickelValue).toFixed(2) + "\n| Dime Count: " + ((0.1) * dimeValue).toFixed(2) + "\n| Quarter Count: " + ((0.25) * quarterValue).toFixed(2) + " |";

    const total = document.getElementById("total")
    total.textContent = "Total Value: " + ((0.01) * pennyValue + (0.05) * nickelValue + (0.1) * dimeValue + (0.25) * quarterValue).toFixed(2)
}

function changeDime(i) {
    dimeValue += i;
    console.log(dimeValue);
    dimeValue = Math.abs(dimeValue);


    const changingText = document.getElementById("changingText");
    changingText.textContent = "| Penny Count: " + pennyValue +  "\n| Nickel Count: " + nickelValue + "\n| Dime Count: " + dimeValue + "\n| Quarter Count: " + quarterValue + " |";

    const individuals = document.getElementById("individuals");
    individuals.textContent = "| Penny Value: " + ((0.01) * pennyValue).toFixed(2) +  "\n| Nickel Count: " + ((0.05) * nickelValue).toFixed(2) + "\n| Dime Count: " + ((0.1) * dimeValue).toFixed(2) + "\n| Quarter Count: " + ((0.25) * quarterValue).toFixed(2) + " |";

    const total = document.getElementById("total")
    total.textContent = "Total Value: " + ((0.01) * pennyValue + (0.05) * nickelValue + (0.1) * dimeValue + (0.25) * quarterValue).toFixed(2)

}

function changeQuarter(i) {
    quarterValue += i;
    console.log(quarterValue);
    quarterValue = Math.abs(quarterValue);


    const changingText = document.getElementById("changingText");
    changingText.textContent = "| Penny Count: " + pennyValue +  "\n| Nickel Count: " + nickelValue + "\n| Dime Count: " + dimeValue + "\n| Quarter Count: " + quarterValue + " |";

    const individuals = document.getElementById("individuals");
    individuals.textContent = "| Penny Value: " + ((0.01) * pennyValue).toFixed(2) +  "\n| Nickel Count: " + ((0.05) * nickelValue).toFixed(2) + "\n| Dime Count: " + ((0.1) * dimeValue).toFixed(2) + "\n| Quarter Count: " + ((0.25) * quarterValue).toFixed(2) + " |";

    const total = document.getElementById("total")
    total.textContent = "Total Value: " + ((0.01) * pennyValue + (0.05) * nickelValue + (0.1) * dimeValue + (0.25) * quarterValue).toFixed(2)
}





/*
let pennyValue = 0;
let nickelValue = 0;
let dimeValue = 0;
let quarterValue = 0;

const pennyUp = document.getElementById("pennyUp");
const pennyDown = document.getElementById("pennyDown");

const nickelUp = document.getElementById("nickelUp");
const nickelDown = document.getElementById("nickelDown");

const dimeUp = document.getElementById("dimeUp");
const dimeDown = document.getElementById("dimeDown");

const quarterUp = document.getElementById("quarterUp");
const quarterDown = document.getElementById("quarterDown");

pennyUp.addEventListener("click", changePennyUp);
pennyDown.addEventListener("click", changePennyDown);

nickelUp.addEventListener("click", changeNickelUp);
nickelDown.addEventListener("click", changeNickelDown);

dimeUp.addEventListener("click", changeDimeUp);
dimeDown.addEventListener("click", changeDimeDown);

quarterUp.addEventListener("click", changeQuarterUp);
quarterDown.addEventListener("click", changeQuarterDown);

function changePennyUp() {
    console.log(pennyValue);
    pennyValue ++;
}
function changePennyDown() {
    console.log(pennyValue);
    pennyValue --;
}

function changeNickelUp() {
    console.log(nickelValue);
    nickelValue ++;
}
function changeNickelDown() {
    console.log(nickelValue);
    nickelValue --;
}

function changeDimeUp() {
    console.log(dimeValue);
    dimeValue ++;
}
function changeDimeDown() {
    console.log(dimeValue);
    dimeValue ;
}

function changeQuarterUp() {
    console.log(quarterValue);
    quarterValue ++;
}
function changeQuarterDown() {
    console.log(quarterValue);
    quarterValue --;
}


*/

