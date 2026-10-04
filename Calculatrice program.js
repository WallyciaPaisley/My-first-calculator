//Adds a value
function addValue(value){
    const input = document.getElementById("InputBox")
    input.value += value;
}

//Removes last digit
function deleteValue(){
    const input = document.getElementById("InputBox");
    input.value = input.value.slice(0, -1);
}

//Calculating function
function calculate(){
    const calcul = document.getElementById("InputBox");
    const expression = calcul.value.trim();

    if (expression.includes("cos(")) {
        const value = expression.replace("cos(", "").replace(")", "");
        calcul.value = Math.cos(parseFloat(value)).toString();
    } 
    else if(expression.includes("sin(")){
        const value = expression.replace("sin(","").replace(")","");
        calcul.value = Math.sin(parseFloat(value)).toString();
    }
    else if(expression.includes("tan(")){
        const value = expression.replace("tan(","").replace(")","");
        calcul.value = Math.tan(parseFloat(value)).toString();
    }
    else {
        calcul.value = eval(expression) ?? "N/A";
    }
}

//Clears the input box
const clearInput = () => {document.getElementById("InputBox").value = ""};

//Keyboard using function
document.addEventListener("keydown", function(event){
    if (event.key === "Enter"){
        calculate();
    }
    else if (event.key === "c"){
        clearInput();
    }
    else if (event.key === "0"){
        addValue("0");
    }
    else if (event.key === "1"){
        addValue("1");
    }
    else if (event.key === "2"){
        addValue("2");
    }
    else if (event.key === "3"){
        addValue("3");
    }
    else if (event.key === "4"){
        addValue("4");
    }
    else if (event.key === "5"){
        addValue("5");
    }
    else if (event.key === "6"){
        addValue("6");
    }
    else if (event.key === "7"){
        addValue("7");
    }
    else if (event.key === "8"){
        addValue("8");
    }
    else if (event.key === "9"){
        addValue("9");
    }
    else if (event.key === "+"){
        addValue("+");
    }
    else if (event.key === "/"){
        addValue("/");
    }
    else if (event.key === "*"){
        addValue("*");
    }
    else if (event.key === "-"){
        addValue("-");
    }
    else if (event.key === "("){
        addValue("(");
    }
    else if (event.key === ")"){
        addValue(")");
    }
    else if (event.key === "Backspace"){
        deleteValue();
    }
})

//Light/Dark mode function
function LDMode(){
    if (document.getElementsByTagName("link")[0].getAttribute("href") === "LayoutStyleLight.css"){
        document.getElementsByTagName("link")[0].setAttribute("href", "LayoutStyleDark.css");
        document.getElementById("LDMode").textContent = "D";
    } else {
        document.getElementsByTagName("link")[0].setAttribute("href", "LayoutStyleLight.css");
        document.getElementById("LDMode").textContent = "L"
    }
};

//Function to display live clock
function date(){
const D = new Date();
const newD = new Intl.DateTimeFormat("fr-FR", {
    timeZone: "Europe/Paris",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
}).format(D);
    document.getElementById("Time").textContent = newD;
}
date();
setInterval(date, 1000)

//Sliding menu function
function slidingMenu(){
    const menu = document.getElementById("menu"); 
    menu.classList.toggle("openMenu");
};

//Resizable layout function
function resize(){

};