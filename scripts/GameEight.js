let momoText = document.getElementById("momoText");
let gameEightInput = document.getElementById("gameEightInput");
let reverseString = document.getElementById("reverseString");


const reverseStringApi = async (password) => {
    const promise = await fetch(`https://spacekballforoneapi-ecevf6h7b0c2bfhq.westus-01.azurewebsites.net/ReverseIt/reverseString/${password}`)
    const data = await promise.text();
    return data
}

gameEightInput.addEventListener('keydown', async (event) => {
    if (event.key === 'Enter' && reverseString.value !== "" ) {
        momoText.textContent = await reverseStringApi(reverseString.value);
    }
});