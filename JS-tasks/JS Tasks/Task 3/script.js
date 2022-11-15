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

const getButtonEvent = document.getElementById("btn");
getButtonEvent.addEventListener("click", runFetch);

function runFetch() {
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
}

function renderUsers(data) {
  const getOutPutContainer = document.getElementById("output");
  const getMessageDiv = document.getElementById("message");
  getMessageDiv.remove(); //removes message node

  const createColumnAvatar = document.createElement("div");
  createColumnAvatar.setAttribute("id", "avatarColumn");
  getOutPutContainer.append(createColumnAvatar);

  const createColumnLogin = document.createElement("div");
  createColumnLogin.setAttribute("id", "loginColumn");
  getOutPutContainer.append(createColumnLogin);

  data.forEach((element) => {
    const createAvatar = document.createElement("img");
    createAvatar.src = element.avatar_url;
    createAvatar.setAttribute("class", "avatar");
    createColumnAvatar.append(createAvatar);

    const createLogin = document.createElement("div");
    createLogin.setAttribute("class", "login");
    createLogin.innerText = element.login;
    createColumnLogin.append(createLogin);
  });
}
