let uraracaText = document.getElementById("uraracaText");
let gameFourInput = document.getElementById("gameFourInput");
let oddOrEvenNumber = document.getElementById("oddOrEvenNumber");

const oddOrEvenApi = async (enterNumber) => {
    const promise = await fetch(`https://spacekballforoneapi-ecevf6h7b0c2bfhq.westus-01.azurewebsites.net/OddOrEven/oddOrEven/${enterNumber}`)
    const data = await promise.text();
    return data
}

gameFourInput.addEventListener('keydown', async (event) => {
    if (event.key === 'Enter' && oddOrEvenNumber.value !== "" ) {
        uraracaText.textContent = await oddOrEvenApi(oddOrEvenNumber.value);
    }
});