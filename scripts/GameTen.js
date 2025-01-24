let froppyText = document.getElementById("froppyText");
let gameTenInput = document.getElementById("gameTenInput");
let foodText = document.getElementById("foodText");

const restaurantPickerApi = async (restarauntCategory) => {
    const promise = await fetch(`https://spacekballforoneapi-ecevf6h7b0c2bfhq.westus-01.azurewebsites.net/RestarauntPicker/RestarauntPicker/${restarauntCategory}`)
    const data = await promise.text();
    return data
}

gameTenInput.addEventListener('keydown', async (event) => {
    if (event.key === 'Enter' && foodText.value !== "" ) {
        froppyText.textContent = await restaurantPickerApi(foodText.value);
    }

});