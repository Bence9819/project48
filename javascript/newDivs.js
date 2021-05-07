const DivContainer = document.getElementById("div-container");

function AddNewDivs(){
    const newDiv = document.createElement("div");
    console.log("add");
    newDiv.classList.add('div-shadow');

    
    DivContainer.appendChild(newDiv);

    // itt visszaadjuk a referenciat
    return newDiv;
}
