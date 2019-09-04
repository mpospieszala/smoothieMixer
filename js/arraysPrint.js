function printAll(arrayName)
{   
    var emptyArray = [];
    for(var i=0; i < arrayName.length; i++)
    {
        emptyArray.push(arrayName[i] + "<li>");
        document.getElementById("arrayPrint").innerHTML = "<ul>" + emptyArray + "</ul>";
    };
};