var i;
var opacity = 1;
var randomElementsArray = [];

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
                getRandomElement(getRandomFruit());
            };
            document.getElementsByClassName("recipe")[0].innerHTML = "<ul>" + randomElementsArray + "</li>" + "<li>" + getRandomLiquid() + "</li>" + "</ul>";
            event.preventDefault();
        }
        else if(fruitChb != true && vegetableChb && extraChb != true)
        {
            for(i=0; i<getItemNum("itemsNum"); i++ )
            {
                getRandomElement(getRandomVegetable());
            }
            document.getElementsByClassName("recipe")[0].innerHTML = "<ul>" + randomElementsArray + "</li>" + "<li>" + getRandomLiquid() + "</li>" + "</ul>";
            event.preventDefault();
        }
        else if(fruitChb && vegetableChb && extraChb != true)
        {
            for(i=1; i<getItemNum("itemsNum"); i++)
            {
                getRandomElement(getRandomFruit());
            };
            document.getElementsByClassName("recipe")[0].innerHTML = "<ul>" + randomElementsArray + "</li>" + "<li>" + getRandomVegetable() + "</li>" + "<li>" + getRandomLiquid() + "</li>" + "</ul>";

            event.preventDefault();
        }
        else if(fruitChb && vegetableChb != true && extraChb)
        {
            for(i=0; i<getItemNum("itemsNum"); i++)
            {
                getRandomElement(getRandomFruit());
            };
            document.getElementsByClassName("recipe")[0].innerHTML = "<ul>" + randomElementsArray + "</li>" + "<li>" + getRandomExtra() + "</li>" + "<li>" + getRandomLiquid() + "</li>" + "</ul>";
            event.preventDefault();
        }
        else if(fruitChb != true && vegetableChb && extraChb)
        {
            for(i=0; i<getItemNum("itemsNum"); i++)
            {
                getRandomElement(getRandomVegetable());
            }
            document.getElementsByClassName("recipe")[0].innerHTML = "<ul>" + randomElementsArray + "</li>" + "<li>" + getRandomExtra() + "</li>" + "<li>" + getRandomLiquid() + "</li>" + "</ul>";
            event.preventDefault();
        }
        else if(fruitChb && vegetableChb && extraChb)
        {
            for(i=1; i<getItemNum("itemsNum"); i++)
            {
                getRandomElement(getRandomFruit());
            };
            document.getElementsByClassName("recipe")[0].innerHTML = "<ul>" + randomElementsArray + "</li>" + "<li>" + getRandomVegetable() + "</li>" + "<li>" + getRandomExtra() + "</li>" + "<li>" + getRandomLiquid() + "</li>" + "</ul>";
            event.preventDefault();
        }
        else
        {
            errorMsgs("Wybierz składniki (nie tylko same dodatki ;) ) Nie chcesz mieć smoothie z samych orzeszków!") ;
            event.preventDefault();
        };
    };
    randomElementsArray = []; 
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

function showRecipe()
{
    var x = document.getElementsByClassName("recipe")[0];
    event.preventDefault();
    if(x.style.display === "none")
    {
        x.style.display = "block";
    }
};

function getRandomElement(element)
{
    if(randomElementsArray.indexOf(element) === -1)
    {
        randomElementsArray.push(element.replace("","<li>"));
    }
    else
    {
        getRandomElement(element);
    };
};