let idaText = document.getElementById("idaText");
let gameFiveInputs = document.getElementById("gameFiveInputs");
let greaterNumber = document.getElementById("greaterNumber");
let lessNumber = document.getElementById("lessNumber");

const greaterOrLessApi = async (numberOne, numberTwo) => {
    const promise = await fetch(`https://spacekballforoneapi-ecevf6h7b0c2bfhq.westus-01.azurewebsites.net/GreaterOrLess/GreaterOrLessThan/${numberOne}/${numberTwo}`)
    const data = await promise.text();
    return data
}

gameFiveInputs.addEventListener('keydown', async (event) => {
    if (event.key === 'Enter' && greaterNumber.value !== "" && lessNumber.value !== "") {
        idaText.textContent = await greaterOrLessApi(greaterNumber.value, lessNumber.value);
    }
});