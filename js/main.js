var fruits = ["banan", "jabłko", "ananas"];
var vegetables = ["jarmuż", "szpinak", "marchewka"];
var extras = ["orzechy laskowe", "odżywka białkowa waniliowa"];
var liquids = ["mleko", "woda", "mleko kokosowe"];
var i;
var opacity = 1;

function getItemNum(elementId)
{
    var numItemVal = document.getElementById(elementId).value;
    return numItemVal;
};

function getRandomFruit()
{
    var item = fruits[Math.floor(Math.random() * fruits.length)];
    return item;
};

function getRandomVegetable()
{
    return vegetables[Math.floor(Math.random() * vegetables.length)];
};

function getRandomExtra()
{
    return extras[Math.floor(Math.random() * extras.length)];
};

function getRandomLiquid()
{
    return liquids[Math.floor(Math.random() * liquids.length)];
};


function generateRecipe()
{
    var fruitChb = document.getElementById("fruit").checked;
    var vegetableChb = document.getElementById("vegetable").checked;
    var extraChb = document.getElementById("extra").checked;
    var liquidChb = document.getElementById("liquid").checked;
    
    var randomElementsArray = [];

    if(getItemNum("itemsNum")==="")
    {
        errorMsgs("Błąd! ");
        event.preventDefault();
    }
    else if(getItemNum("itemsNum")>="1")
    {
        if(fruitChb && vegetableChb != true && extraChb != true)
        {
            for(i=0; i<getItemNum("itemsNum"); i++)
            {
                randomElementsArray.push(getRandomFruit());
            };
            document.getElementsByClassName("recipe")[0].innerHTML = randomElementsArray.join("\r\n") + "\n" + getRandomLiquid()
            event.preventDefault();
        }
        else if(fruitChb != true && vegetableChb && extraChb != true)
        {
            for(i=0; i<getItemNum("itemsNum"); i++ )
            {
                randomElementsArray.push(getRandomVegetable());
            }
            document.getElementById("recipe").value = randomElementsArray.join("\r\n") + "\n" + getRandomLiquid();
            event.preventDefault();
        }
        else if(fruitChb && vegetableChb && extraChb != true)
        {
            for(i=1; i<getItemNum("itemsNum"); i++)
            {
                randomElementsArray.push(getRandomFruit());
            };
            document.getElementById("recipe").value = randomElementsArray.join("\r\n") + "\n" + getRandomVegetable() + "\n" + getRandomLiquid();
            event.preventDefault();
        }
        else if(fruitChb && vegetableChb != true && extraChb)
        {
            for(i=0; i<getItemNum("itemsNum"); i++)
            {
                randomElementsArray.push(getRandomFruit());
            };
            document.getElementById("recipe").value = randomElementsArray.join("\r\n") + "\n" + getRandomExtra() + "\n" + getRandomLiquid();
            event.preventDefault();
        }
        else if(fruitChb != true && vegetableChb && extraChb)
        {
            for(i=0; i<getItemNum("itemsNum"); i++)
            {
                randomElementsArray.push(getRandomVegetable());
            }
            document.getElementById("recipe").value = randomElementsArray.join("\r\n") + "\n" + getRandomExtra() + "\n" + getRandomLiquid();
            event.preventDefault();
        }
        else if(fruitChb && vegetableChb && extraChb)
        {
            for(i=1; i<getItemNum("itemsNum"); i++)
            {
                randomElementsArray.push(getRandomFruit());
            };
            document.getElementById("recipe").value = randomElementsArray.join("\r\n") + "\n" + getRandomVegetable() + "\n" + getRandomExtra() + "\n" + getRandomLiquid();
            event.preventDefault();
        }
        else
        {
            errorMsgs("Wybierz składniki (nie tylko same dodatki ;) ) Nie chcesz mieć smoothie z samych orzeszków!") ;
            event.preventDefault();
        };
    };
};

function errorMsgs(msg)
{
    var element = document.getElementsByClassName("errorMsg");
    var test = "<span class=\"closeBtn\" onclick=\"closeBtn()\">&#10006;</span>";

    for(i=0; i<element.length; i++)
    {
        element[i].style.display = "block";
    };
    document.getElementsByClassName("errorMsg")[0].innerHTML = msg + test;
};

function closeBtn()
{
    var x = document.getElementsByClassName("errorMsg")[0];

    event.preventDefault();
    if(x.style.display === "block")
    {
        x.style.display = "none";
    };
};