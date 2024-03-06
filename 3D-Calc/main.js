var display = document.querySelector('input');
var btnc = new Audio("Btn-Audio.mp3");
var btnr = new Audio("btn-reset.mp3");
var btnre = new Audio("btn-result.mp3");
function calc (val="")
{
    if(display.value == 'Error' || display.value == 'NaN' || display.value == 'undefined' || display.value == 'RIP'){display.value = '';}
    display.value += val;
    btnc.play();
    return display.value;
}
function clr()
{
    display.value = '';
    btnr.play();
}
function result()
{
    btnre.play();
    try{
        display.value = eval(calc());
    }
    catch(error){
        display.value = 'Error';
    }
}
