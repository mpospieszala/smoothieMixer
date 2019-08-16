var fruits = ["banan", "jabłko", "ananas"];
var vegetables = ["jarmuż", "szpinak", "marchewka"];
var extras = ["orzechy laskowe", "odżywka białkowa waniliowa"];
var liquids = ["mleko", "woda", "mleko kokosowe"];


function getRandomFruit() {
    return fruits[Math.floor(Math.random() * fruits.length)];
}

function getRandomVegetable() {
    return vegetables[Math.floor(Math.random() * vegetables.length)];
}

function getRandomExtra() {
    return extras[Math.floor(Math.random() * extras.length)];
}

function getRandomLiquid() {
    return liquids[Math.floor(Math.random() * liquids.length)];
}

function generateRecipe() {
    var fruitChb = document.getElementById("fruit").checked;
    var vegetableChb = document.getElementById("vegetable").checked;
    var extraChb = document.getElementById("extra").checked;
    var liquidChb = document.getElementById("liquid").checked;

    if (fruitChb) {
        document.getElementById("comment").value = getRandomFruit();
    }
    else {
        document.getElementById("comment").value = "Zaznacz owoc";
    };
}