// Write your solution here!
// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);

}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const catsAppendcopy = [...cats, name];
    return catsAppendcopy;
}

function prependCat(name) {
    const catsPrependcopy = [name, ...cats];
    return catsPrependcopy;
}

function removeLastCat() {
    const catsRemoveLastCatcopy = cats.slice(0, cats.length - 1);
    return catsRemoveLastCatcopy;
}

function removeFirstCat() {
    const catsRemoveFirstCatcopy = cats.slice(1);
    return catsRemoveFirstCatcopy;
}