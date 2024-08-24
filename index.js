const display = document.getElementById("display");
let memory = 0;
let isSecondFunction = false;
let isRadian = true;

function appendToDisplay(input){
    if (display.value === "Error" || display.value === "NaN" || display.value === "[object HTMLButtonElement]"){
        display.value = "";
        display.value += input;
    }else{
        display.value += input;
    }
    
}

function clearDisplay(){
    display.value = "";
}

function del(){
    if (display.value != "Error"){
        s = display.value;
        s = s.substring(0, s.length-1);
        display.value = s;
    }else{
        display.value = "";
    }
}

function calculate(){
    try{
        var array1 = (display.value).split("^");
        var array2 = (display.value).split('√');

        if (array1.length > 1){
            display.value = array1[0] ** array1[1];
        }
        
        else if (array2.length > 1){
            display.value = array2[0] **  (1/array2[1]);
        }

        else{
            display.value = eval(display.value);
        }
    }

    catch(error){
        display.value = "Error";
    }
}

function square(){
    display.value = display.value ** 2;
}

function cube(){
    display.value = display.value ** 3;
}

function power(){
    display.value += '^';
}

function exponent(){
    display.value = Math.exp(display.value);
}

function sqrt(){
    display.value = eval(display.value);
    display.value = display.value ** (1/2);
}

function cbrt(){
    display.value = eval(display.value);
    display.value = display.value ** (1/3);
}

function yrt(){
    display.value = eval(display.value);
    display.value += '√';
}

function getBaseLog(x, y) {
    return Math.log(y) / Math.log(x);
}

function natlog(){
    display.value = getBaseLog(Math.exp(1), display.value)
}


function logaritm(){
    display.value = Math.log10(display.value);
}

function factorial(n) { 
    let ans = 1; 
    if(n === 0)
        return 1;
    for (let i = 2; i <= n; i++) 
        ans = ans * i; 
    return ans; 
}

function ten_pow(){
    display.value = 10 ** (display.value);
}

function brackleft(){
    appendToDisplay("(");
}

function brackright(){
    appendToDisplay(")");
}

function memoryClear() {
    memory = 0;
}

function memoryRecall() {
    document.getElementById("display").value += memory;
}

function memoryAdd() {
    let currentValue = parseFloat(document.getElementById("display").value);
    if (!isNaN(currentValue)) {
        memory += currentValue;
        clearDisplay();
    }
}

function memorySubtract() {
    let currentValue = parseFloat(document.getElementById("display").value);
    if (!isNaN(currentValue)) {
        memory -= currentValue;
        clearDisplay();
    }
}

function togglesecondFunction() {
    isSecondFunction = !isSecondFunction;
    document.getElementById("2nd").classList.toggle("active");

    if (isSecondFunction) {
        document.getElementById("sin").innerText = "sin⁻¹";
        document.getElementById("sin").setAttribute("onclick", "inverseSine()");

        document.getElementById("cos").innerText = "cos⁻¹";
        document.getElementById("cos").setAttribute("onclick", "inverseCosine()");

        document.getElementById("tan").innerText = "tan⁻¹";
        document.getElementById("tan").setAttribute("onclick", "inverseTangent()");

        document.getElementById("log10").innerText = "log₂";
        document.getElementById("log10").setAttribute("onclick", "logarith_two()");

        document.getElementById("sinh").innerText = "sinh⁻¹";
        document.getElementById("sinh").setAttribute("onclick", "inverseSineh()");

        document.getElementById("cosh").innerText = "cosh⁻¹";
        document.getElementById("cosh").setAttribute("onclick", "inverseCosineh()");

        document.getElementById("tanh").innerText = "tanh⁻¹";
        document.getElementById("tanh").setAttribute("onclick", "inverseTangenth()");
    } else {
        document.getElementById("sin").innerText = "sin";
        document.getElementById("sin").setAttribute("onclick", "sine()");

        document.getElementById("cos").innerText = "cos";
        document.getElementById("cos").setAttribute("onclick", "cosine()");

        document.getElementById("tan").innerText = "tan";
        document.getElementById("tan").setAttribute("onclick", "tangent()");

        document.getElementById("log10").innerText = "log₁₀";
        document.getElementById("log10").setAttribute("onclick", "logaritm()");

        document.getElementById("sinh").innerText = "sinh";
        document.getElementById("sinh").setAttribute("onclick", "sineh()");

        document.getElementById("cosh").innerText = "cosh";
        document.getElementById("cosh").setAttribute("onclick", "cosineh()");

        document.getElementById("tanh").innerText = "tanh";
        document.getElementById("tanh").setAttribute("onclick", "tangenth()");
    }
}

function logaritm_two(){
    display.value = Math.log2(display.value);
}

function appendPi() {
    appendToDisplay(Math.PI);
}

function appendE() {
    appendToDisplay(Math.E);
}

function appendEE() {
    appendToDisplay("e");
}

function toggleRadiansDegrees() {
    isRadian = !isRadian;
    updateModeDisplay();
}

function updateModeDisplay() {
    const radianDegreeButton = document.getElementById("radian");

    if (isRadian) {
        radianDegreeButton.innerHTML = "Rad";
    } else {
        radianDegreeButton.innerHTML = "Deg";
    }
}

function sine() {
    if (isRadian) {
        display.value = Math.sin(parseFloat(display.value));
    } else {
        display.value = Math.sin(parseFloat(display.value) * Math.PI / 180);
    }
}

function cosine() {
    if (isRadian) {
        display.value = Math.cos(parseFloat(display.value));
    } else {
        display.value = Math.cos(parseFloat(display.value) * Math.PI / 180);
    }
}

function tangent() {
    if (isRadian) {
        display.value = Math.tan(parseFloat(display.value));
    } else {
        display.value = Math.tan(parseFloat(display.value) * Math.PI / 180);
    }
}

function inverseSine() {
    if (isRadian) {
        display.value = Math.asin(parseFloat(display.value));
    } else {
        display.value = Math.asin(parseFloat(display.value) * Math.PI / 180);
    }
}

function inverseCosine() {
    if (isRadian) {
        display.value = Math.acos(parseFloat(display.value));
    } else {
        display.value = Math.acos(parseFloat(display.value) * Math.PI / 180);
    }
}

function inverseTangent() {
    if (isRadian) {
        display.value = Math.atan(parseFloat(display.value));
    } else {
        display.value = Math.atan(parseFloat(display.value) * Math.PI / 180);
    }
}

function sineh() {
    if (isRadian) {
        display.value = Math.sinh(parseFloat(display.value));
    } else {
        display.value = Math.sinh(parseFloat(display.value) * Math.PI / 180);
    }
}

function cosineh() {
    if (isRadian) {
        display.value = Math.cosh(parseFloat(display.value));
    } else {
        display.value = Math.cosh(parseFloat(display.value) * Math.PI / 180);
    }
}

function tangenth() {
    if (isRadian) {
        display.value = Math.tanh(parseFloat(display.value));
    } else {
        display.value = Math.tanh(parseFloat(display.value) * Math.PI / 180);
    }
}

function inverseSineh() {
    if (isRadian) {
        display.value = Math.asinh(parseFloat(display.value));
    } else {
        display.value = Math.asinh(parseFloat(display.value) * Math.PI / 180);
    }
}

function inverseCosineh() {
    if (isRadian) {
        display.value = Math.acosh(parseFloat(display.value));
    } else {
        display.value = Math.acosh(parseFloat(display.value) * Math.PI / 180);
    }
}

function inverseTangenth() {
    if (isRadian) {
        display.value = Math.atanh(parseFloat(display.value));
    } else {
        display.value = Math.atanh(parseFloat(display.value) * Math.PI / 180);
    }
}

function toggleScientific() {
    const sciButtons = document.querySelectorAll(".sci-op");
    const isSciVisible = sciButtons[0].classList.contains("hidden");

    sciButtons.forEach(button => {
        if (isSciVisible) {
            button.classList.remove("hidden");
        } else {
            button.classList.add("hidden");
        }
    });

    const toggleButton = document.getElementById("toggle-sci");
    toggleButton.textContent = isSciVisible ? "⏼" : "⏼";

    var theme = document.getElementsByTagName('link')[0]; 

    if (theme.getAttribute('href') == 'simple.css') { 
        theme.setAttribute('href', 'sci.css'); 
    } else { 
        theme.setAttribute('href', 'simple.css'); 
    }

    if (isSciVisible){
        document.getElementById("00").innerText = "00";
        document.getElementById("00").setAttribute("onclick", "appendToDisplay()");
    } else{
        document.getElementById("00").innerText = "⏼";
        document.getElementById("00").setAttribute("onclick", "toggleScientific()");
    }
}

toggleScientific();