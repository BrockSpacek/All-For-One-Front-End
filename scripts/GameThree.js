let heroName = document.getElementById("heroName");
let wakeUpTime = document.getElementById("wakeUpTime");
let shotoText = document.getElementById("shotoText");
let gameThreeInputs = document.getElementById("gameThreeInputs");


const askQuestionsApi = async (yourName, timeYouWokeUp) => {
    const promise = await fetch(`https://spacekballforoneapi-ecevf6h7b0c2bfhq.westus-01.azurewebsites.net/AskTwoQuestions/AddTwoInputs/${yourName}/${timeYouWokeUp}`)
    const data = await promise.text();
    return data
}

gameThreeInputs.addEventListener('keydown', async (event) => {
    if (event.key === 'Enter' && heroName.value !== "" && wakeUpTime.value !== "") {
        shotoText.textContent = await askQuestionsApi(heroName.value, wakeUpTime.value);
    }
});