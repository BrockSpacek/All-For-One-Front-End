let aizawaText = document.getElementById("aizawaText");
let gameSevenInput = document.getElementById("gameSevenInput");
let reverseNumber = document.getElementById("reverseNumber");


const reverseNumberApi = async (inputNumber) => {
    const promise = await fetch(`https://spacekballforoneapi-ecevf6h7b0c2bfhq.westus-01.azurewebsites.net/ReverseIt/reverseNumber/${inputNumber}`)
    const data = await promise.text();
    return data
}

gameSevenInput.addEventListener('keydown', async (event) => {
    if (event.key === 'Enter' && reverseNumber.value !== "" ) {
        aizawaText.textContent = await reverseNumberApi(reverseNumber.value);
    }
});