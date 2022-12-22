document.getElementById("button").addEventListener("click", () =>{
    document.getElementById("text").setAttribute("value",prompt("Enter text to reverse").split('').reverse().join(''));
});
