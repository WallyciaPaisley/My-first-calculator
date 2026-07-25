function addValue(value){
    const input = document.getElementById("InputBox")
    input.value += value;
}
function deleteValue(){
    const input = document.getElementById("InputBox");
    input.value = input.value.slice(0, -1);
}
function calculate(){
        const calcul = document.getElementById("InputBox")
        document.getElementById("InputBox").value = eval(calcul.value);
}
const clearInput = () => {document.getElementById("InputBox").value = ""};
document.addEventListener("keydown", function(event){
    if (event.key === "Enter"){
        calculate();
    }
    else if (event.key === "c"){
        clearInput();
    }
    else if (document.activeElement === document.getElementById("InputBox")) {
        removeEventListener("keydown");
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
function LDMode(){
    if (document.getElementsByTagName("link")[0].getAttribute("href") === "LayoutStyleLight.css"){
        document.getElementsByTagName("link")[0].setAttribute("href", "LayoutStyleDark.css");
        document.getElementById("LDMode").textContent = "D";
    } else {
        document.getElementsByTagName("link")[0].setAttribute("href", "LayoutStyleLight.css");
        document.getElementById("LDMode").textContent = "L"
    }
};
async function fetchTimeZone(){
    try{
        const response = await fetch("https://timeapi.io/api/v1/time/current/zone?timezone=Europe%2FParis");
        if(response.ok){
            const data = await response.json()
            console.log(data.time);
            document.getElementById("Time").textContent = data.time.slice(0,8)
        }
        else{
            throw new Error("What?")
        }
    }
    catch(error){
        console.error(error);
    }
}
fetchTimeZone();