let menubtn = document.getElementById("menubtn")
let togglemenu = document.getElementById("togglemenu")
let searchbtn = document.getElementById("btn")
let peveragessection=document.querySelector("#peverages .drinks")
let flag = false
let overlay=document.getElementById("overlay")
let meals_menu=[]
let apetizers=[]

//load main cources meals
window.addEventListener('DOMContentLoaded', () => {


    fetch('../../data.json').then(res=>res.json()).then(e=>{
        meals_menu=e.meals
        console.log(meals_menu)
  
        peverages=meals_menu.filter(el=>{return el.category=="peverage"})
        peverages.forEach(el => {
            peveragessection.innerHTML+=`
            <div class="drink" onclick="GetElementInfo(${el.id})">
            <div class="content">
                <div class="image">
                    <img src=../${el.image} alt="">
                </div>
                <div class="info">
                    <div class="name-price d-flex">
                        <h3>${el.title}</h3>
                        <span>${el.price}</span>
                    </div>
                    <p>${el.description}</p>
                </div>
            </div>

        </div>
            `
        });
       
    })
    window.scrollTo(0,peveragessection.offsetTop)
})

// search button


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



//search btn
searchbtn.onclick = GoSearchPage
function GoSearchPage() {
    console.log("hi")
    location.href = '../pages/search.html'
}


// get item details
function GetElementInfo(id) {
    console.log(id)
    var query = new URLSearchParams();
    query.append("id", id);
    location.href = "../pages/details.html?"+ query.toString();
}