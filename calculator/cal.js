let button1 = document.getElementById("btn1");
let button2 = document.getElementById("btn2");
let button3 = document.getElementById("btn3");
let htmlbutton1 = "";
let htmlbutton2 = "";
let htmlbutton3 = "";
// div1
for(let i=1;i<=3;i++){
    htmlbutton1 += `<button onclick="num(${i})">${i}</button>`
}
button1.innerHTML = htmlbutton1;
//div2
for(let i=4;i<=6;i++){
    htmlbutton2 += `<button onclick="num(${i})">${i}</button>`
}
button2.innerHTML = htmlbutton2;

//div3
for(let i=7;i<=9;i++){
    htmlbutton3 += `<button onclick="num(${i})">${i}</button>`
}
button3.innerHTML = htmlbutton3;

const  display=document.getElementById("display");

/* create an functions for display numbers when key presses in the device */
document.addEventListener("keydown", function (event) {
    const key = event.key;

    // allow backspace, delete, arrows, tab
    const allowed = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"];
    if (allowed.includes(key)) return;

    // allow only numbers
    if (key >=0 && key<=9) {
        return;
    }
    event.preventDefault();
});


/* create an functions for display the number */
function num(value){
    display.value += value;
}

/* creating functions for display the operator */
function operator(value){
    display.value += value;
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