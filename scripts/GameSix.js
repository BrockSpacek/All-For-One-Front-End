let firstInput = document.getElementById("firstInput");
let secondInput = document.getElementById("secondInput");
let thirdInput = document.getElementById("thirdInput");
let fourthInput = document.getElementById("fourthInput");
let fifthInput = document.getElementById("fifthInput");
let sixthInput = document.getElementById("sixthInput");
let seventhInput = document.getElementById("seventhInput");
let eighthInput = document.getElementById("eighthInput");
let ninethInput = document.getElementById("ninethInput");
let tenthInput = document.getElementById("tenthInput");
let eleventhInput = document.getElementById("eleventhInput");

let allMightText = document.getElementById("allMightText");
let gameSixInputs = document.getElementById("gameSixInputs");

let storyText = document.getElementById("storyText");
let gameSixMainBtn = document.getElementById("gameSixMainBtn");


const MadLibApi = async (enterName, enterNumberOne, enterNameTwo, enterNumberTwo, city, animal, hobby, job, car, carTwo, yesOrNo) => {
    const promise = await fetch(`https://spacekballforoneapi-ecevf6h7b0c2bfhq.westus-01.azurewebsites.net/MadLib/Madlibs/${enterName}/${enterNumberOne}/${enterNameTwo}/${enterNumberTwo}/${city}/${animal}/${hobby}/${job}/${car}/${carTwo}/${yesOrNo}`)
    const data = await promise.text();
    return data
}

gameSixInputs.addEventListener('keydown', async (event) => {
    if (event.key === 'Enter' && firstInput.value !== "" && secondInput.value !== "" && thirdInput.value !== "" && fourthInput.value !== "" && fifthInput.value !== "" && sixthInput.value !== "" && seventhInput.value !== "" && eighthInput.value !== "" && ninethInput.value !== "" && tenthInput.value !== "" && eleventhInput.value !== "") {
        storyText.className = "bg-[#B60A0D] place-content-center text-center text-white h-[175px] w-[1500px] rounded-2xl"
        gameSixMainBtn.className = "flex justify-end mt-5 mr-7"
        storyText.textContent = await MadLibApi(firstInput.value, secondInput.value, thirdInput.value, fourthInput.value, fifthInput.value, sixthInput.value, seventhInput.value, eighthInput.value, ninethInput.value, tenthInput.value, eleventhInput.value);
    } 
});