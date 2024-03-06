var display = document.querySelector('input');
var btnc = new Audio("Btn-Audio.mp3");
var btnr = new Audio("Btn-reset.mp3");
var btnre = new Audio("Btn-result.mp3");
function calc (val="")
{
    if(display.value == 'Error' || display.value == 'NaN' || display.value == 'undefined'){display.value = '';}
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
        display.value = eval(display.value);
    }
    catch(error){
        display.value = 'Error';
    }
}