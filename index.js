// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}
destructivelyAppendCat("Ralph");

function destructivelyPrependCat(name) {
    cats.unshift(name);
}
destructivelyPrependCat("Bob");

function destructivelyRemoveLastCat() {
    cats.pop();
}
destructivelyRemoveLastCat();

function destructivelyRemoveFirstCat() {
    cats.shift();
}
destructivelyRemoveFirstCat();

function appendCat(name) {
    const coolCats = [...cats, name];
    return coolCats;
}
appendCat("Broom");

function prependCat(name) {
    const townCats = [name, ...cats];
    return townCats;
}
prependCat("Arnold");

function removeLastCat() {
    const topCats = cats.slice(0, 2);
    return topCats;
}
removeLastCat();

function removeFirstCat() {
    const fanCats = cats.slice(1);
    return fanCats;
}
removeFirstCat();
