let menubtn = document.getElementById("menubtn")
let togglemenu = document.getElementById("togglemenu")
let flag = false
let overlay = document.getElementById("overlay")
let detailssection = document.getElementById("details-content")

let meals_menu = []

//load main cources meals
window.addEventListener('DOMContentLoaded', () => {

    var urlparams = new URLSearchParams(location.search)
    const id = urlparams.get('id')
    console.log(id)
    fetch('../../data.json').then(res => res.json()).then(e => {
        meals_menu = e.meals
        console.log(meals_menu)
        const item = meals_menu.find(el => el.id == id)
        console.log(item)
        detailssection.innerHTML = `
        <div class="image">
        <img src=../${item.image} alt="">
    </div>
    <div class="item">
        <h2>name : <span>${item.title}</span> </h2>
        <h2>category : <span>${item.category}</span> </h2>
        <h2>price : <span>${item.price}</span> </h2>
        <h2>description :  <span>${item.description}</span></h2>
        <h2>ingredients : <span>${item.ingredients}</span></h2>

    </div>
        `

    });

})

//start toggle-menu in navbar
menubtn.onclick = Toggle
function Toggle() {

    //appearance menu
    if (flag == false) {
        // togglemenu.style.opacity = 1
        togglemenu.style.display = "flex"
        overlay.style.display = "block"
        flag = true
    }
    //disappear menu
    else {
        // togglemenu.style.opacity = 0
        togglemenu.style.display = "none"
        overlay.style.display = "none"
        flag = false
    }

}
//end toggle-menu in navbar





// start menu in large screen
window.onresize = () => {
    if (window.innerWidth > 992) {
        togglemenu.style.display = "flex"
        overlay.style.display = "none"

    }
    else {
        togglemenu.style.display = "none"
    }
}

// end menu in large screen



