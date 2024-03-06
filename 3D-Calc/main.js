var display = document.querySelector('input'),
    btnc = new Audio("Btn-Audio.mp3"),
    btnr = new Audio("btn-reset.mp3"),
    btnre = new Audio("btn-result.mp3");
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
        display.value = eval(display.value);
        if(display.value == '0'){display.value = 'RIP';}
    }
    catch(error){
        display.value = 'Error';
    }
}
