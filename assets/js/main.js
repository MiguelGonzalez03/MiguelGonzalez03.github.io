document.getElementById("Saludar").addEventListener("click",()=>{
    const saludar1  = document.getElementById("h1")
    const nombre = prompt("Escribir tu nombre")

    if(nombre != null) saludar1.textContent += ` ${nombre}!`
})