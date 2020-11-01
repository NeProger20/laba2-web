
'use strict';

function ReturnNumber(number) {
    return number;
}


function ReturnOfArgument(Item1, Item2) {
    if (isNaN(Item1)) {
        return ("vvedite number 1");
    }
    else {
        if (isNaN(Item2)) {
            return ("vvedite number 2");
        }
        else return Item1 + Item2;
    }
}



function AnArray() {
    let myArray = [3,0.5,"mojno 40 ballow?", 14,256];
    console.log('Input data: ');
    console.log(myArray);
    let myNewArray = myArray.map((value) =>
        isNaN(value) ? value = 0 : value *= value
    )
    console.log('Answer:');
    console.log(myNewArray);
}
window.onload = function() {
    var button = document.getElementById('input_button_bg_change');
    var body = document.getElementsByTagName('body')[0];
    var colors = ['blue', 'grey', 'yellow', 'white', 'red', 'green','#F08080', '#FFA07A'];
    button.onclick = function() {
        body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    };
};
