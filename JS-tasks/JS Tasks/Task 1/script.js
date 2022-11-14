/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */
const getOutputElement = document.getElementById("output");
getOutputElement.innerText = `Svarų: 
Gramų: 
Uncijų:`;

const getForm = document
  .querySelector("form")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    const getValue = document.getElementById("search").value;

    const calculatePounds = getValue * 2.2046;
    const calculateGrams = getValue / 0.001;
    const calculateOunces = getValue * 35.274;

    const getOutputElement = document.getElementById("output");
    getOutputElement.innerText = `Svarų: ${calculatePounds}; 
    Gramų: ${calculateGrams};
    Uncijų: ${calculateOunces}`;
  });
