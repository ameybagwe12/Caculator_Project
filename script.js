let inpCal = document.querySelector(".inputCal");
let inpStr = "";

function inputBtn(inp) {
    inpCal.value += inp;
    inpStr = inpCal.value;
}

equalsBtn = document.querySelector(".equals");
equalsBtn.onclick = () => {
    let result = eval(inpStr);
    inpCal.value = result;
}

clearBtn = document.querySelector(".clearAll");
clearBtn.onclick = () => {
    inpCal.value = "";
}

squareBtn = document.querySelector(".squareNo");
squareBtn.onclick = () => {
    inpCal.value = String(Math.pow(parseInt(inpCal.value) , 2));
}

mode = document.querySelector(".lida");
mode.onclick = () => {

    const body = document.querySelector("body");
    const li = document.querySelectorAll("li");
    const h2 = document.querySelector("h2");
    const h3 = document.querySelector("h3");

    if(mode.innerHTML == "LM"){
        mode.innerHTML = "DM";
        body.style.backgroundColor = "aliceblue";
        h2.style.color = "rgb(30, 3, 56)";
        h3.style.color = "rgb(30, 3, 56)";
        for(let list of li){
            list.style.color = "rgb(30, 3, 56)";
        }
    }
    else if (mode.innerHTML == "DM") {
        mode.innerHTML = "LM";
        body.style.backgroundColor = "rgb(30, 3, 56)";
        h2.style.color = "aliceblue";
        h3.style.color = "aliceblue";
        for(let list of li){
            list.style.color = "aliceblue";
        }
    }
}