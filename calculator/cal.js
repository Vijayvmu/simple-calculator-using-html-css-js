const  display=document.getElementById("display");

/* created an functions for display the number */
function num1(){
    display.value += "1";
}
function num2(){
    display.value += "2";
}
function num3(){
    display.value += "3";
}
function num4(){
    display.value += "4";
}
function num5(){
    display.value += "5";
}
function num6(){
    display.value += "6";
}
function num7(){
    display.value += "7";
}
function num8(){
    display.value += "8";
}
function num9(){
    display.value += "9";
}
function num0(){
    display.value += "0";
}

/* creating functions for display the operator */
function operatorPlus(){
    display.value += "+";
}
function operatorMinus(){
    display.value += "-";
}
function operatorMul(){
    display.value += "*";
}
function operatorDiv(){
    display.value += "/";
}
function operatorMod(){
    display.value += "%";
}

function Clear(){
    display.value ="";
}


function submit(){
    try{
        display.value=eval(display.value);
    } catch{
        display.value="Error";
    }
}