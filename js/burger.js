function burger(){
    let button = document.getElementById("burger-button")
    let menu = document.getElementById("navbarTogglerDemo02")

    let is_open = false

    button.addEventListener('click', () => {
        if(is_open){
            menu.style.display = "none"
            is_open = false
        }
        else{
            menu.style.display = "block"
            is_open = true
        }

    })

    window.addEventListener('resize', () => {
        menu.style.display = "none"
        is_open = false
    })
}



function main(){
    burger()
}


window.onload = main