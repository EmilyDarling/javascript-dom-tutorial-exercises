let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

// Your code here
for(let i=0; i<countries.length;i++){
    const para = document.createElement("option");
    para.innerHTML = countries[i];
    document.getElementById("mySelect").appendChild(para);
}

function displaySelection(){
    let e = document.getElementById("mySelect");
   
    alert(`${ e.options[e.selectedIndex].text}`);
}

document.getElementById("mySelect").addEventListener("change", displaySelection);