let menubtn = document.getElementById("menubtn")
let togglemenu = document.getElementById("togglemenu")
let flag = false
let searchbtn = document.getElementById("btn")
let overlay = document.getElementById("overlay")
let coursesection = document.querySelector("#main-cources .meals")
let desertsection = document.querySelector("#desert .meals")
let peveragesection = document.querySelector("#peverages .drinks")
let apetizersection = document.querySelector("#apetizers .meals")

let meals_menu = [];
let main_cources = [];
let desserts = []
let apetizers = []
let peverages = []


// loading all sections dynamic
window.addEventListener('DOMContentLoaded', () => {


    fetch('./data.json').then(res => res.json()).then(e => {
        meals_menu = e.meals
        console.log(meals_menu)
   
        main_cources = meals_menu.filter(el => { return el.category == "main-course" })
        desserts = meals_menu.filter(el => { return el.category == "dessert" })
        peverages = meals_menu.filter(el => { return el.category == "peverage" })
        apetizers = meals_menu.filter(el => { return el.category == "apetizer" })
        console.log(main_cources, desserts, apetizers, peverages)

        // load cources 
        main_cources.forEach(el => {
            coursesection.innerHTML += `
            <div class="meal" onclick="GetElementInfo(${el.id})" >
            <div class="content">
                <div class="image">
                    <img src=./assets${el.image} alt="">
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

        //load peverages
        peverages.forEach(el => {
            peveragesection.innerHTML += `
            <div class="drink" onclick="GetElementInfo(${el.id})">
            <div class="content">
                <div class="image">
                    <img src=./assets${el.image} alt="">
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

        // load apetizers 
        apetizers.forEach(el => {
            apetizersection.innerHTML += `
            <div class="meal" onclick="GetElementInfo(${el.id})">
            <div class="content">
                <div class="image">
                    <img src=./assets${el.image} alt="">
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

        // load desserts 
        desserts.forEach(el => {
            desertsection.innerHTML += `
            <div class="meal" onclick="GetElementInfo(${el.id})">
            <div class="content">
                <div class="image">
                    <img src=./assets${el.image} alt="">
                </div>

                <h3>${el.title}</h3>
                <h6>${el.price}</h6>
            </div>

        </div>
            `
        });
    })
})






// set active to specific element
$(".navbar li.nav-item").each(function () {
    $(this).click(function () {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    })
});





// scroll to section 
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 2000
});


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

//search btn
searchbtn.onclick = GoSearchPage
function GoSearchPage() {
    console.log("hi")
    location.href = './assets/pages/search.html'
}



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



// get item details
function GetElementInfo(id) {
    console.log(id)
    var query = new URLSearchParams();
    query.append("id", id);
    location.href = "./assets/pages/details.html?"+ query.toString();
}
