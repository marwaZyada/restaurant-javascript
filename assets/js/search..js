let menubtn = document.getElementById("menubtn")
let togglemenu = document.getElementById("togglemenu")
let searchvalue = document.getElementById("input")
let resultsectionscroll = document.getElementById("result")
let resultsection=document.querySelector("#result .meals")
let flag = false
let overlay=document.getElementById("overlay")
let meals_menu=[]
let result=[]

//load meals
window.addEventListener('DOMContentLoaded', () => {


    fetch('../../data.json').then(res=>res.json()).then(e=>{
        meals_menu=e.meals
        console.log(meals_menu)
    })
       
    })



// search
searchvalue.onkeyup=()=>{
    console.log(resultsectionscroll.offsetTop)
    window.scrollTo(0,resultsectionscroll.offsetTop)
    resultsection.innerHTML=''
  
    result=meals_menu.filter(el=>{return el.title.includes(searchvalue.value.trim().toLowerCase())})
    console.log(result)
    if(result.length>0){
        result.forEach(el => {
            resultsection.innerHTML+=`
            <div class="meal">
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
    }
    else{
        resultsection.innerHTML=`<p>there is no meal of title ***<span style="color:red"> ${searchvalue.value} </span> ***</p>`
    }
}

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


