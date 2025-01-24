// Add 2 Numbers 

let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");
let bakugoText = document.getElementById("bakugoText");
let inputFields = document.getElementById("inputFields");


const addNumbersApi = async (num1, num2) => {
    const promise = await fetch(`https://spacekballforoneapi-ecevf6h7b0c2bfhq.westus-01.azurewebsites.net/AddNumbers/Adding/${num1}/${num2}`)
    const data = await promise.text();
    return data
}

inputFields.addEventListener('keydown', async (event) => {
    if (event.key === 'Enter' && firstNumber.value !== "" && secondNumber.value !== "") {
        bakugoText.textContent = await addNumbersApi(firstNumber.value, secondNumber.value);
    }
});