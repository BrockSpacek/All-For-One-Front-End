let darkShadowText = document.getElementById("darkShadowText");
let gameNineInput = document.getElementById("gameNineInput");
let magicEight = document.getElementById("magicEight");

const magicEightApi = async (yesOrNoQuestion) => {
    const promise = await fetch(`https://spacekballforoneapi-ecevf6h7b0c2bfhq.westus-01.azurewebsites.net/Magic8Ball/MagicEightBall/${yesOrNoQuestion}`)
    const data = await promise.text();
    return data
}

gameNineInput.addEventListener('keydown', async (event) => {
    if (event.key === 'Enter' && magicEight.value !== "" ) {
        darkShadowText.textContent = await magicEightApi(magicEight.value);
    }
});