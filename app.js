let html = document.querySelector("html");
let container = document.querySelector(".container");
let screen = document.querySelector(".display");
let allclr = document.querySelector("#ac");
let del = document.querySelector("#de");
let themebtn = document.querySelector("#theme");
let theme = document.querySelector("#cssfile");
let dayNignt = document.querySelector("i");
let div = document.querySelector("#divide");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let prod = document.querySelector("#product");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let minus = document.querySelector("#minus");
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let plus = document.querySelector("#plus");
let doubleZero = document.querySelector("#double-zero");
let zero = document.querySelector("#zero");
let dot = document.querySelector("#dot");
let equal = document.querySelector("#equal");


    allclr.addEventListener("click", ()=>{
        screen.value = "";
    })
    del.addEventListener("click", ()=>{
        screen.value = screen.value.toString().slice(0, -1);
    })
    div.addEventListener("click", ()=>{
        screen.value += "/";
    })
    seven.addEventListener("click", ()=>{
        screen.value += "7";
    })
    eight.addEventListener("click", ()=>{
        screen.value += "8";
    })
    nine.addEventListener("click", ()=>{
        screen.value += "9";
    })
    prod.addEventListener("click", ()=>{
        screen.value += "*";
    })
    four.addEventListener("click", ()=>{
        screen.value += "4";
    })
    five.addEventListener("click", ()=>{
        screen.value += "5";
    })
    six.addEventListener("click", ()=>{
        screen.value += "6";
    })
    minus.addEventListener("click", ()=>{
        screen.value += "-";
    })
    one.addEventListener("click", ()=>{
        screen.value += "1";
    })
    two.addEventListener("click", ()=>{
        screen.value += "2";
    })
    three.addEventListener("click", ()=>{
        screen.value += "3";
    })
    plus.addEventListener("click", ()=>{
        screen.value += "+";
    })
    doubleZero.addEventListener("click", ()=>{
        screen.value += "00";
    })
    zero.addEventListener("click", ()=>{
        screen.value += "0";
    })
    dot.addEventListener("click", ()=>{
        screen.value += ".";
    })
    equal.addEventListener("click", ()=>{
        try {
            // let expression = screen.value.replace(/%/g, "/100 * 100");
            screen.value = eval(screen.value);
        } catch (error) {
            screen.value = "Error";
        }
    })

    /********************Theme************************/

    themebtn.addEventListener('click', ()=>{
        if(theme.getAttribute('href')=="style.css"){
            theme.setAttribute("href", "style1.css");
            dayNignt.setAttribute("class", "fa-solid fa-moon");
            html.style.transition = ".5s ease"
            container.style.transition = ".3s ease"

        }
        else{
            theme.setAttribute("href", "style.css");
            dayNignt.setAttribute("class", "fa-solid fa-sun");
            html.style.transition = ".5s ease";
            container.style.transition = ".3s ease";
        }
    })
