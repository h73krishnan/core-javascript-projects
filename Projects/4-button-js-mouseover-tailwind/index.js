console.log("Here");
document.getElementById("btn").addEventListener("mouseover", (event) =>{
    event.target.style.backgroundColor = "#3DBE29";
    setTimeout(() =>{
        event.target.style.backgroundColor = "";
    }, 500);
}, false);