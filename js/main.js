var i;
var opacity = 1;



function getItemNum(elementId)
{
    var numItemVal = document.getElementById(elementId).value;
    return numItemVal;
};

function getRandomLiquid()
{
    return liquids[Math.floor(Math.random() * liquids.length)];
};



function generateRecipe()
{
    var fruitChb = document.getElementById("fruit").checked;
    var vegeChb = document.getElementById("vegetable").checked;
    var extraChb = document.getElementById("extra").checked;
    var itemNum = getItemNum("itemsNum");

    var fruitNum = 0;
    var vegeNum = 0;
    var extraNum = 0;
    var randomElementsArray = [];

    if(getItemNum("itemsNum")==="")
    {
        errorMsgs("Błąd! ");
        event.preventDefault();
    }
    else if(getItemNum("itemsNum")>="1")
    {
        if(fruitChb && vegeChb && extraChb != true)
        {
            fruitNum = Math.round((2.0/3.0)*itemNum);
            itemNum = itemNum - fruitNum;
            vegeNum = itemNum;
            event.preventDefault();    
        }
        else if(fruitChb != true && vegeChb && extraChb)
        {
            vegeNum = Math.round((2.0/3.0)*itemNum);
            itemNum = itemNum - vegeNum;
            extraNum = itemNum;
            event.preventDefault();
        }
        else if(fruitChb && vegeChb != true && extraChb)
        {
            fruitNum = Math.round((2.0/3.0)*itemNum);
            itemNum = itemNum - fruitNum;
            extraNum = itemNum;
            event.preventDefault();
        }
        else if(fruitChb && vegeChb && extraChb)
        {
            fruitNum = Math.max(1, Math.round((1.0/3.0)*itemNum));
            itemNum = itemNum - fruitNum;
            if(itemNum===1)
            {
                vegeNum = 1;
            }
            else
            {
                vegeNum = Math.round((1.0/2.0)*itemNum);
                itemNum = itemNum - vegeNum;
                extraNum = itemNum;
            }
            event.preventDefault();
        }
        else if(fruitChb && vegeChb != true && extraChb != true)
        {
            fruitNum = itemNum;
            event.preventDefault();
        }
        else if(fruitChb != true && vegeChb && extraChb != true)
        {
            vegeNum = itemNum;
            event.preventDefault();
        }
        else
        {
            errorMsgs("Wybierz składniki (nie tylko same dodatki ;) ) Nie chcesz mieć smoothie z samych orzeszków!") ;
            event.preventDefault();
        }
    }
    //TODO: wywalić ; z }

    getRandomItems(fruitNum, fruits, randomElementsArray);
    getRandomItems(vegeNum,vegetables,randomElementsArray);
    getRandomItems(extraNum,extras,randomElementsArray);
    
    var makeLi = function(part, index, array)
    {
        array[index] = "<li>" + array[index] + "</li>";
    }
    randomElementsArray.forEach(makeLi);

    document.getElementsByClassName("recipe")[0].innerHTML = "<ul>" + randomElementsArray.join(" ") + "<li>" + getRandomLiquid() + "</li>" + "</ul>";
    randomElementsArray = [];
}

function getRandomItems(itemsNum, inputArray, outputArray) {
    var arrayCopy = [...inputArray];

    for (i = 0; i < itemsNum; i++) {
        const item = arrayCopy[Math.floor(Math.random() * arrayCopy.length)];
        outputArray.push(item);
        arrayCopy.splice(arrayCopy.indexOf(item), 1);
    }
}

function errorMsgs(msg)
{
    var element = document.getElementsByClassName("errorMsg");
    var test = "<span class=\"closeBtn\" onclick=\"closeBtn()\">&#10006;</span>";

    for(i=0; i<element.length; i++)
    {
        element[i].style.display = "block";
    }
    document.getElementsByClassName("errorMsg")[0].innerHTML = msg + test;
}

function closeBtn()
{
    var x = document.getElementsByClassName("errorMsg")[0];

    event.preventDefault();
    if(x.style.display === "block")
    {
        x.style.display = "none";
    }
}

function showRecipe()
{
    var x = document.getElementsByClassName("recipe")[0];
    event.preventDefault();
    if(x.style.display === "none")
    {
        x.style.display = "block";
    }
}

