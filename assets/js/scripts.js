let question = document.querySelectorAll('.question')
let btnDropdown = document.querySelectorAll('.question .more')
let repuesta = document.querySelectorAll('.repuesta')
let parrafo = document.querySelectorAll('.repuesta p')

for (let i = 0; i < btnDropdown.length; i++) {
    
    let altoParrafo = parrafo[i].clientHeight
    let switchc = 0

    btnDropdown[i].addEventListener("click", () =>{

        if (switchc == 0) {

            repuesta[i].style.height = `${altoParrafo}px`
            question[i].style.marginBotton = "10px"
            btnDropdown[i].innerHTML = "<i>-</i>"
            switchc++
        }

        else if (switchc == 1) {
            
            repuesta[i].style.height = `0`
            question[i].style.marginBotton = "0"
            btnDropdown[i].innerHTML = "<i>+</i>"
            switchc--
        }
    })
}