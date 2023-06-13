let bgColorInputElement = document.getElementById("bgColorInput");
let fontColorInputElement = document.getElementById("fontColorInput");
let fontSizeInputElement = document.getElementById("fontSizeInput");
let fontWeightInputElement = document.getElementById("fontWeightInput");
let paddingInputElement = document.getElementById("paddingInput");
let borderRadiusInputElement = document.getElementById("borderRadiusInput");
let borderColorInputElement = document.getElementById("borderColorInput");
let customButtonElement = document.getElementById("customButton");
let borderStyleInputElement = document.getElementById("borderStyleInput")

function applyButtonOn() {
    let bgColorValue = bgColorInputElement.value;
    let fontColorValue = fontColorInputElement.value;
    let fontSizeValue = fontSizeInputElement.value;
    let fontWeightValue = fontWeightInputElement.value;
    let paddingValue = paddingInputElement.value;
    let borderRadiusValue = borderRadiusInputElement.value;
    let borderStyleValue = borderStyleInputElement.value;
    let borderColorValue = borderColorInputElement.value;


    customButtonElement.style.backgroundColor = bgColorValue;
    customButtonElement.style.color = fontColorValue;
    customButtonElement.style.fontSize = fontSizeValue;
    customButtonElement.style.fontWeight = fontWeightValue;
    customButtonElement.style.padding = paddingValue;
    customButtonElement.style.borderRadius = borderRadiusValue;
    customButtonElement.style.borderStyle = borderStyleValue;
    customButtonElement.style.borderColor =  borderColorValue;
}
