let printGameField = document.getElementById("print-elements");

const populateField = () => {

    let myflexrowcontainer;
    let myflexiteminside;

    for (let j = 0; j < 10; j++) {
        myflexrowcontainer = document.createElement("div");
        myflexrowcontainer.className = "my-flex-row-container";

        for (let i = 0; i < 10; i++) {
            myflexiteminside = document.createElement("div");
            myflexiteminside.className = "my-flex-item-inside";
            myflexrowcontainer.appendChild(myflexiteminside);
        }
        printGameField.appendChild(myflexrowcontainer);
    }

}

populateField()