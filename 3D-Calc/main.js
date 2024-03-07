var display = document.querySelector('input');
var btnc = new Audio("Btn-Audio.mp3");
var btnr = new Audio("btn-reset.mp3");
var btnre = new Audio("btn-result.mp3");
function calc (val="")
{
    if(display.value == 'Error' || display.value == 'NaN' || display.value == 'Infinity' || display.value == 'undefined' || display.value == 'RIP' || display.value == 'chfnja'){display.value = '';}
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
        if(display.value == '1-1'){display.value = 'RIP';}
        else if(eval(calc()) == 0 ){display.value = 'chfnja';}
        else{display.value = eval(calc());}
    }
    catch(error){
        display.value = 'Error';
    }
}
