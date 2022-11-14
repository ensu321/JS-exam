/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

fetch(ENDPOINT)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(response.statusText);
    }
  })
  .then((data) => {
    renderUsers(data);
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

function renderUsers(data) {
  const getOutPutContainer = document.getElementById("output");
  const getMessageDiv = document.getElementById("message");
  getMessageDiv.remove(); //removes message node

  const createList = document.createElement("ul");
  getOutPutContainer.append(createList); //create list

  data.forEach((element) => {
    const createListItem = document.createElement("li");
    createListItem.innerText = element.login;
    createList.append(createListItem); //create list item for each element
  });
}
