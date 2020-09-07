//Function to make a random color
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//Select the class 'botao'
var btnElement = document.querySelector('.botao');

//Select the id color
var color = document.querySelector('#color');

let click = true;

btnElement.onclick = function () {
    //Create div
    var linkElement = document.createElement('DIV');
    //Add the class'caixa'
    linkElement.setAttribute('CLASS', 'caixa');

    //Select the class 'caixa'
    linkElement.querySelector('.caixa');

    //Make the style of the class
    linkElement.style.width = "100px";
    linkElement.style.height = "100px";
    linkElement.style.margin = "0 auto";
    var firstColor = linkElement.style.backgroundColor = getRandomColor();

    if (click) {
        //Put the class on the body
        document.body.appendChild(linkElement);
        color.innerHTML = firstColor;
        click = !click;
    }

    //Make the change of colors
    linkElement.onmouseover = function () {
        var newColor = linkElement.style.backgroundColor = getRandomColor();
        color.innerHTML = newColor;
    }


};