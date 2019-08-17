var fruits = ["banan", "jabłko", "ananas"];
var vegetables = ["jarmuż", "szpinak", "marchewka"];
var extras = ["orzechy laskowe", "odżywka białkowa waniliowa"];
var liquids = ["mleko", "woda", "mleko kokosowe"];

var i;

function getItemNum(elementId) {
    var numItemVal = document.getElementById(elementId).value;
    return numItemVal;
};

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
    
    var fruitArray = [];

    if(getItemNum("itemsNum")=="" && (fruitChb != true || vegetableChb != true)) {
        document.getElementById("comment").value = "Błąd!"
        event.preventDefault();
    }
    else if(getItemNum("itemsNum")>="1") {
        if(fruitChb) {
            for(i=0; i < getItemNum("itemsNum"); i ++) {
                fruitArray.push(getRandomFruit() + "\n");
            };
            document.getElementById("comment").value = fruitArray+ getRandomLiquid()
            event.preventDefault();
        }
        else if(vegetableChb) {
            document.getElementById("comment").value = getRandomVegetable() + "\n" + getRandomLiquid();
            event.preventDefault();
        }
        else if(extraChb){
            document.getElementById("comment").value = getRandomExtra() + "\n" + getRandomLiquid();
            event.preventDefault();
        }
        else {
            document.getElementById("comment").value = "Wybierz składniki!";
            event.preventDefault();
        };
    };
}