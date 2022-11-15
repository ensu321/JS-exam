/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

fetch(ENDPOINT)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(response.statusText);
    }
  })
  .then((data) => {
    renderJson(data);
  })
  .catch((error) => {
    console.error(error);
  });

const getOutputContainer = document.getElementById("output");

function renderJson(data) {
  const createTable = document.createElement("table");
  createTable.setAttribute("id", "brandTable");
  getOutputContainer.append(createTable);

  const createTableModels = document.createElement("table");
  createTableModels.setAttribute("id", "modelsTable");
  getOutputContainer.append(createTableModels);

  let counter = -1;
  data.forEach((element) => {
    counter++;
    const createTableRow = document.createElement("tr");
    createTable.append(createTableRow);

    const createBrandCell = document.createElement("td");
    createBrandCell.style.fontWeight = "900";
    createBrandCell.style.fontSize = "20px";
    createBrandCell.style.textAlign = "center";
    createBrandCell.innerText = element.brand;
    createBrandCell.setAttribute("id", counter);
    createTableRow.append(createBrandCell);
  });

  renderModelsTable(data);
}

function renderModelsTable(data) {
  const getModelsTable = document.getElementById("modelsTable");

  const getClickAction = document.querySelectorAll("td");
  getClickAction.forEach((element) => {
    element.addEventListener("click", (event) => {
      createModelTable(event);
    });
  });

  function createModelTable(event) {
    getModelsTable.innerHTML = "";

    const theIDOfClickedItem = event.target.id;

    const newArray = data.map((element) => {
      return element.models;
    });

    const theArrayOfClickedItem = newArray[theIDOfClickedItem];

    const getClickedTDBrand = event.target.innerText;

    const createTableHeader = document.createElement("caption");
    createTableHeader.innerText = getClickedTDBrand;
    getModelsTable.append(createTableHeader);

    theArrayOfClickedItem.forEach((element) => {
      const createTRForModel = document.createElement("tr");
      createTRForModel.innerText = element;
      getModelsTable.append(createTRForModel);
    });
  }
}
