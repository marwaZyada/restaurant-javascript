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
        detailssection.innerHTML=`
        <div class="image">
        <img src=../${item.image} alt="">
    </div>
    <div class="item">
        <h2>category : <span>${item.category}</span> </h2>
        <h2>price : <span>${item.price}</span> </h2>
        <h2>description :  <span>${item.description}</span></h2>
        <h2>ingredients : <span>${item.ingredients}</span></h2>

    </div>
        `

    });

})

