let inputElement = document.getElementById("inputId");
let buttons = document.querySelectorAll("button");
let clearElement = document.getElementById("clearId");
let empty = '';

//function clear(){
    //empty = String(empty.substring(0, empty.length-1))
    //inputElement.value = empty;
//}

buttons.forEach(element => {
    element.addEventListener('click', (v) =>{
        if(v.target.innerText == "="){
            empty = String(eval(empty))
            inputElement.value = empty;
        }
        else if (v.target.innerText == "AC"){
            empty = "";
            inputElement.value = empty;
        }
        else if (v.target.innerText == "DEl"){
            empty = String(empty.substring(0, empty.length-1))
            inputElement.value = empty;
        }
        else{
            empty += v.target.innerText;
            inputElement.value = empty;
        }
    });
});