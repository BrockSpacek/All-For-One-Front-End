// Say Hello 
let firstName = document.getElementById("firstName");
let dekuText = document.getElementById("dekuText");


const sayHelloApi = async (names) => {
    const promise = await fetch(`https://spacekballforoneapi-ecevf6h7b0c2bfhq.westus-01.azurewebsites.net/SayHello/Greeting/${names}`)
    const data = await promise.text();
    return data
}


firstName.addEventListener('keydown', async (event) => {
    if (event.key === 'Enter' ) {
        dekuText.textContent = await sayHelloApi(firstName.value);
    }
});

