const name = document.querySelector('#name')
const instructions = document.querySelector('#instructions')
const ingredients = document.querySelector('#ingredients')
const recipes = document.querySelector('#recipes')
const closeTab = document.querySelector('#close-btn')
//Drink Variables
const ale = document.querySelector('#ale')
const arm = document.querySelector('#arm')
const bourbon = document.querySelector('#bourbon')
const brandy = document.querySelector('#brandy')
const vodka = document.querySelector('#vodka')
const scotch = document.querySelector('#scotch')
const gin = document.querySelector('#gin')
const tequila = document.querySelector('#tequila')
const drinkDiv  = document.querySelector('#drinkDiv')
//Meal Variables
const beef  = document.querySelector('#beef')
const chicken = document.querySelector('#chicken')
const goat = document.querySelector('#goat')
const lamb = document.querySelector('#lamb')
const pasta = document.querySelector('#pasta')
const pork = document.querySelector('#pork')
const veg = document.querySelector('#veg')
const seafood = document.querySelector('#seafood')
const mealDiv = document.querySelector('#mealDiv')

// Beef Option
const beefUrl ='https://www.themealdb.com/api/json/v1/1/lookup.php?i=52824'
function getBeef(event) {
    
    event.preventDefault()
    console.log('test')
    fetch(beefUrl)
    .then(function(response){
        return response.json();
    }).then(function(data){
        console.log(data)
        name.textContent=data.meals[0].strMeal
        instructions.textContent='Instructions: ' + data.meals[0].strInstructions
        let img = document.createElement('img')
        img.setAttribute ("src", `https://www.themealdb.com/images/media/meals/ssrrrs1503664277.jpg`)
        $("#foodImg").append(img)
        const ione = data.meals[0].strMeasure1 + ' ' + data.meals[0].strIngredient1
        const itwo = data.meals[0].strMeasure2 + ' ' + data.meals[0].strIngredient2
        const ithree = data.meals[0].strMeasure3 + ' ' + data.meals[0].strIngredient3
        const ifour = data.meals[0].strMeasure4 + ' ' + data.meals[0].strIngredient4
        const ifive = data.meals[0].strMeasure5 + ' ' + data.meals[0].strIngredient5
        const isix = data.meals[0].strMeasure6 + ' ' + data.meals[0].strIngredient6
        const iseven = data.meals[0].strMeasure7 + ' ' + data.meals[0].strIngredient7
        const ieight =data.meals[0].strMeasure8 + ' ' + data.meals[0].strIngredient8
ingredients.append('Ingredients: ',ione, ', ', itwo, ', ', ithree, ', ', ifour,', ', ifive,', ', isix,', ', iseven,', ', ieight)
getRecipes()      
    })
}
beef.addEventListener('click' , getBeef);

//Chicken Option
const chickenUrl ='https://www.themealdb.com/api/json/v1/1/lookup.php?i=52956'
function getChicken(event) {
    
    event.preventDefault()
    fetch(chickenUrl)
    .then(function(response){
        return response.json();
    }).then(function(data){
        console.log(data)
        name.textContent=data.meals[0].strMeal
        instructions.textContent='Instructions: ' + data.meals[0].strInstructions
        let img = document.createElement('img')
        img.setAttribute ("src", `https://www.themealdb.com/images/media/meals/1529446352.jpg`)
        $("#foodImg").append(img)
        const ione = data.meals[0].strMeasure1 + ' ' + data.meals[0].strIngredient1
        const itwo = data.meals[0].strMeasure2 + ' ' + data.meals[0].strIngredient2
        const ithree = data.meals[0].strMeasure3 + ' ' + data.meals[0].strIngredient3
        const ifour = data.meals[0].strMeasure4 + ' ' + data.meals[0].strIngredient4
        const ifive = data.meals[0].strMeasure5 + ' ' + data.meals[0].strIngredient5
        const isix = data.meals[0].strMeasure6 + ' ' + data.meals[0].strIngredient6
        const iseven = data.meals[0].strMeasure7 + ' ' + data.meals[0].strIngredient7
        const ieight =data.meals[0].strMeasure8 + ' ' + data.meals[0].strIngredient8
        const inine = data.meals[0].strMeasure9 + ' ' + data.meals[0].strIngredient9
ingredients.append('Ingredients: ',ione, ', ', itwo, ', ', ithree, ', ', ifour,', ', ifive,', ', isix,', ', iseven,', ', ieight,', ', inine)
 getRecipes()      
    })
}
chicken.addEventListener('click' , getChicken);

// Seafood Option
const seafoodUrl ='https://www.themealdb.com/api/json/v1/1/lookup.php?i=52918'
function getSeafood(event) {
    
    event.preventDefault()
    console.log('test')
    fetch(seafoodUrl)
    .then(function(response){
        return response.json();
    }).then(function(data){
        console.log(data)
        name.textContent=data.meals[0].strMeal
        instructions.textContent='Instructions: ' + data.meals[0].strInstructions
        let img = document.createElement('img')
        img.setAttribute ("src", `https://www.themealdb.com/images/media/meals/vptqpw1511798500.jpg`)
        $("#foodImg").append(img)
        const ione = data.meals[0].strMeasure1 + ' ' + data.meals[0].strIngredient1
        const itwo = data.meals[0].strMeasure2 + ' ' + data.meals[0].strIngredient2
        const ithree = data.meals[0].strMeasure3 + ' ' + data.meals[0].strIngredient3
        const ifour = data.meals[0].strMeasure4 + ' ' + data.meals[0].strIngredient4
        const ifive = data.meals[0].strMeasure5 + ' ' + data.meals[0].strIngredient5
        const isix = data.meals[0].strMeasure6 + ' ' + data.meals[0].strIngredient6
        const iseven = data.meals[0].strMeasure7 + ' ' + data.meals[0].strIngredient7
        const ieight =data.meals[0].strMeasure8 + ' ' + data.meals[0].strIngredient8
        const inine = data.meals[0].strMeasure9 + ' ' + data.meals[0].strIngredient9
ingredients.append('Ingredients: ',ione, ', ', itwo, ', ', ithree, ', ', ifour,', ', ifive,', ', isix,', ', iseven,', ', ieight,', ', inine)
getRecipes()  
    })
}
seafood.addEventListener('click' , getSeafood);

// Pork Option
const porkURL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52994'
function getPork(event) {
    event.preventDefault(event)
    console.log('test2')

    fetch(porkURL)
    .then(function (response){
        return response.json();
    }).then (function (data){
        console.log(data)

        name.textContent=data.meals[0].strMeal
        instructions.textContent='Instructions: ' + data.meals[0].strInstructions
        let img = document.createElement('img')
        img.setAttribute ("src", `https://www.themealdb.com/images/media/meals/h3ijwo1581013377.jpg`)
        $("#foodImg").append(img)
        const ione = data.meals[0].strMeasure1 + ' ' + data.meals[0].strIngredient1
        const itwo = data.meals[0].strMeasure2 + ' ' + data.meals[0].strIngredient2
        const ithree = data.meals[0].strMeasure3 + ' ' + data.meals[0].strIngredient3
        const ifour = data.meals[0].strMeasure4 + ' ' + data.meals[0].strIngredient4
        const ifive = data.meals[0].strMeasure5 + ' ' + data.meals[0].strIngredient5
        const isix = data.meals[0].strMeasure6 + ' ' + data.meals[0].strIngredient6
        const iseven = data.meals[0].strMeasure7 + ' ' + data.meals[0].strIngredient7
        const ieight =data.meals[0].strMeasure8 + ' ' + data.meals[0].strIngredient8
        const inine = data.meals[0].strMeasure9 + ' ' + data.meals[0].strIngredient9
        const iten = data.meals[0].strMeasure10 + ' ' + data.meals[0].strIngredient10
ingredients.append('Ingredients: ',ione, ', ', itwo, ', ', ithree, ', ', ifour,', ', ifive,', ', isix,', ', iseven,', ', ieight,', ', inine,', ',iten)
getRecipes()      
})
}
pork.addEventListener('click', getPork);

//Vegetarian Option
const veggieURL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52908'
function getVeggies(event){
    event.preventDefault(event)

    fetch(veggieURL)
    .then(function (response){
        return response.json();
    }).then(function (data){
        console.log(data)

         name.textContent=data.meals[0].strMeal
        instructions.textContent='Instructions: ' + data.meals[0].strInstructions
        let img = document.createElement('img')
        img.setAttribute ("src", `https://www.themealdb.com/images/media/meals/wrpwuu1511786491.jpg`)
        $("#foodImg").append(img)
        const ione = data.meals[0].strMeasure1 + ' ' + data.meals[0].strIngredient1
        const itwo = data.meals[0].strMeasure2 + ' ' + data.meals[0].strIngredient2
        const ithree =data.meals[0].strMeasure3 + ' ' +  data.meals[0].strIngredient3
        const ifour = data.meals[0].strMeasure4 + ' ' + data.meals[0].strIngredient4
        const ifive = data.meals[0].strMeasure5 + ' ' + data.meals[0].strIngredient5
        const isix = data.meals[0].strMeasure6 + ' ' + data.meals[0].strIngredient6
        const iseven = data.meals[0].strMeasure7 + ' ' + data.meals[0].strIngredient7
        const ieight = data.meals[0].strMeasure8+ ' ' + data.meals[0].strIngredient8
        const inine = data.meals[0].strMeasure9 + ' ' + data.meals[0].strIngredient9
        const iten = data.meals[0].strMeasure10 + ' ' + data.meals[0].strIngredient10
ingredients.append('Ingredients: ',ione, ', ', itwo, ', ', ithree, ', ', ifour,', ', ifive,', ', isix,', ', iseven,', ', ieight,', ', inine,', ',iten)
getRecipes()      
})
}
veg.addEventListener('click', getVeggies);

//Lamb Options
const lambURL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=53010'
function getLamb(event){
    event.preventDefault(event)

    fetch(lambURL)
    .then(function (response){
        return response.json();
    }).then( function (data){
        console.log(data)

        name.textContent=data.meals[0].strMeal
        instructions.textContent='Instructions: ' + data.meals[0].strInstructions
        let img = document.createElement('img')
        img.setAttribute ("src", `https://www.themealdb.com/images/media/meals/k420tj1585565244.jpg`)
        var src = document.getElementById("foodImg")
        src.appendChild(img);
        $("#foodImg").append(img)
        const ione = data.meals[0].strMeasure1 + ' ' +  data.meals[0].strIngredient1
        const itwo = data.meals[0].strMeasure2 + ' ' +  data.meals[0].strIngredient2
        const ithree =  data.meals[0].strMeasure3 + ' ' + data.meals[0].strIngredient3
        const ifour = data.meals[0].strMeasure4 + ' ' + data.meals[0].strIngredient4
        const ifive = data.meals[0].strMeasure5 + ' ' + data.meals[0].strIngredient5
        const isix = data.meals[0].strMeasure6 + ' ' + data.meals[0].strIngredient6
        const iseven = data.meals[0].strMeasure7 + ' ' + data.meals[0].strIngredient7
        const ieight = data.meals[0].strMeasure8 + ' ' + data.meals[0].strIngredient8
        const inine = data.meals[0].strMeasure9 + ' ' + data.meals[0].strIngredient9
        const iten = data.meals[0].strMeasure10 + ' ' + data.meals[0].strIngredient10
        const ieleven = data.meals[0].strMeasure11+ ' ' + data.meals[0].strIngredient11
ingredients.append('Ingredients: ',ione, ', ', itwo, ', ', ithree, ', ', ifour,', ', ifive,', ', isix,', ', iseven,', ', ieight,', ', inine,', ',iten,' ,', ieleven)
getRecipes()     
})

}
lamb.addEventListener('click', getLamb);

//Pasta Option
const pastaURL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52835'
function getPasta (event){
    event.preventDefault(event)

    fetch(pastaURL)
    .then( function (response){
        return response.json();
    }).then(function (data){
        console.log(data)

        name.textContent=data.meals[0].strMeal
        instructions.textContent='Instructions: ' + data.meals[0].strInstructions
        let img = document.createElement('img')
        img.setAttribute ("src", `https://www.themealdb.com/images/media/meals/uquqtu1511178042.jpg`)
        var src = document.getElementById("foodImg")
        src.appendChild(img);
        $("#foodImg").append(img)
        const ione = data.meals[0].strMeasure1 + ' ' + data.meals[0].strIngredient1
        const itwo = data.meals[0].strMeasure2 + ' ' + data.meals[0].strIngredient2
        const ithree = data.meals[0].strMeasure3 + ' ' + data.meals[0].strIngredient3 
        const ifour = data.meals[0].strMeasure4 + ' ' + data.meals[0].strIngredient4
        const ifive = data.meals[0].strMeasure5 + ' ' + data.meals[0].strIngredient5
        const isix = data.meals[0].strMeasure6 + ' ' + data.meals[0].strIngredient6
        const iseven = data.meals[0].strMeasure7 + ' ' + data.meals[0].strIngredient7
       
ingredients.append('Ingredients: ',ione, ', ', itwo, ', ', ithree, ', ', ifour,', ', ifive,', ', isix,', ', iseven)
getRecipes()      
}) 
}
pasta.addEventListener('click', getPasta);

//Vodka

const vodkaUrl='https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=14622'
function getVodka(event) {
    event.preventDefault()
    console.log ('test')
    fetch(vodkaUrl)
    .then(function(response){
        return response.json();
    }).then (function(data){
        console.log(data)
        drinkName.textContent=data.drinks[0].strDrink
        drinkInstructions.textContent = 'Instructions: ' + data.drinks[0].strInstructions
        let img = document.createElement('img')
        img.setAttribute ("src", `https://www.thecocktaildb.com/images/media/drink/ttsvwy1472668781.jpg`)
        var src = document.getElementById("drinkImg")
        src.appendChild(img);
        $("#drinkImg").append(img)
        const ione = data.drinks[0].strMeasure1 + ' ' + data.drinks[0].strIngredient1
        const itwo = data.drinks[0].strMeasure2 + ' ' + data.drinks[0].strIngredient2
        const ithree = data.drinks[0].strMeasure3 + ' ' + data.drinks[0].strIngredient3
        const ifour = data.drinks[0].strMeasure4 + ' ' + data.drinks[0].strIngredient4
        const ifive = data.drinks[0].strMeasure5 + ' ' + data.drinks[0].strIngredient5
drinkIngredients.append('Ingredients: ',ione, ', ', itwo, ', ', ithree, ', ', ifour,', ', ifive)
getRecipes()      
})
}
vodka.addEventListener('click' , getVodka);

//Gin
const ginUrl='https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11005'
function getGin(event) {
    event.preventDefault()
    console.log ('test')
    fetch(ginUrl)
    .then(function(response){
        return response.json();
    }).then (function(data){
        console.log(data)
        drinkName.textContent=data.drinks[0].strDrink
        drinkInstructions.textContent = 'Instructions: ' + data.drinks[0].strInstructions
        let img = document.createElement('img')
        img.setAttribute ("src", `https://www.thecocktaildb.com/images/media/drink/6ck9yi1589574317.jpg`)
        var src = document.getElementById("drinkImg")
        src.appendChild(img);
        $("#drinkImg").append(img)
        const ione = data.drinks[0].strMeasure1 + ' ' + data.drinks[0].strIngredient1
        const itwo = data.drinks[0].strMeasure2 + ' ' + data.drinks[0].strIngredient2
        const ithree = data.drinks[0].strMeasure3 + ' ' + data.drinks[0].strIngredient3
        const ifour = data.drinks[0].strMeasure4 + ' ' + data.drinks[0].strIngredient4
        const ifive = data.drinks[0].strMeasure5 + ' ' + data.drinks[0].strIngredient5
drinkIngredients.append('Ingredients: ',ione, ', ', itwo, ', ', ithree,)
getRecipes()      
})
}
gin.addEventListener('click' , getGin);

//Bourbon
const bourbonUrl='https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11001'
function getBourbon(event) {
    event.preventDefault()
    console.log ('test')
    fetch(bourbonUrl)
    .then(function(response){
        return response.json();
    }).then (function(data){
        console.log(data)
        drinkName.textContent=data.drinks[0].strDrink
        drinkInstructions.textContent = 'Instructions: ' + data.drinks[0].strInstructions
        let img = document.createElement('img')
        img.setAttribute ("src", `https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg`)
        var src = document.getElementById("drinkImg")
        src.appendChild(img);
        $("#drinkImg").append(img)
        const ione = data.drinks[0].strMeasure1 + ' ' + data.drinks[0].strIngredient1
        const itwo = data.drinks[0].strMeasure2 + ' ' + data.drinks[0].strIngredient2
        const ithree = data.drinks[0].strMeasure3 + ' ' + data.drinks[0].strIngredient3
        const ifour = data.drinks[0].strMeasure4 + ' ' + data.drinks[0].strIngredient4
drinkIngredients.append('Ingredients: ',ione, ', ', itwo, ', ', ithree, ', ', ifour)
getRecipes()      
})
}
bourbon.addEventListener('click' , getBourbon);

//Tequila
const tequilaUrl='https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=16158'
function getTequila(event) {
    event.preventDefault()
    console.log ('test')
    fetch(tequilaUrl)
    .then(function(response){
        return response.json();
    }).then (function(data){
        console.log(data)
        drinkName.textContent=data.drinks[0].strDrink
        drinkInstructions.textContent = 'Instructions: ' + data.drinks[0].strInstructions
        let img = document.createElement('img')
        img.setAttribute ("src", `https://www.thecocktaildb.com/images/media/drink/srpxxp1441209622.jpg`)
        var src = document.getElementById("drinkImg")
        src.appendChild(img);
        $("#drinkImg").append(img)
        const ione = data.drinks[0].strMeasure1 + ' ' + data.drinks[0].strIngredient1
        const itwo = data.drinks[0].strMeasure2 + ' ' + data.drinks[0].strIngredient2
        const ithree = data.drinks[0].strMeasure3 + ' ' + data.drinks[0].strIngredient3
        const ifour = data.drinks[0].strMeasure4 + ' ' + data.drinks[0].strIngredient4
        const ifive = data.drinks[0].strMeasure5 + ' ' + data.drinks[0].strIngredient5
drinkIngredients.append('Ingredients: ',ione, ', ', itwo, ', ', ithree, ', ', ifour,)
getRecipes()      
})
}
tequila.addEventListener('click' , getTequila);

//Amaretto
const armUrl='https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=13202'
function getArm(event) {
    event.preventDefault()
    fetch(armUrl)
    .then(function(response){
        return response.json();
    }).then (function(data){
        console.log(data)
        drinkName.textContent=data.drinks[0].strDrink
        drinkInstructions.textContent = 'Instructions: ' + data.drinks[0].strInstructions
        let img = document.createElement('img')
        img.setAttribute ("src", `https://www.thecocktaildb.com/images/media/drink/d30z931503565384.jpg`)
        var src = document.getElementById("drinkImg")
        src.appendChild(img);
        $("#drinkImg").append(img)
        const ione = data.drinks[0].strMeasure1 + ' ' + data.drinks[0].strIngredient1
        const itwo = data.drinks[0].strMeasure2 + ' ' + data.drinks[0].strIngredient2
        const ithree = data.drinks[0].strMeasure3 + ' ' + data.drinks[0].strIngredient3
        const ifour = data.drinks[0].strMeasure4 + ' ' + data.drinks[0].strIngredient4
        const ifive = data.drinks[0].strMeasure5 + ' ' + data.drinks[0].strIngredient5
drinkIngredients.append('Ingredients: ',ione, ', ', itwo, ', ', ithree, ', ', ifour,', ', ifive)
getRecipes()      
})
}
arm.addEventListener('click' , getArm);

//Brandy
const brandyUrl='https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=12198'
function getBrandy(event) {
    event.preventDefault()
    console.log ('test')
    fetch(brandyUrl)
    .then(function(response){
        return response.json();
    }).then (function(data){
        console.log(data)
        drinkName.textContent=data.drinks[0].strDrink
        drinkInstructions.textContent = 'Instructions: ' + data.drinks[0].strInstructions
        let img = document.createElement('img')
        img.setAttribute ("src", `https://www.thecocktaildb.com/images/media/drink/ewjxui1504820428.jpg`)
        var src = document.getElementById("drinkImg")
        src.appendChild(img);
        $("#drinkImg").append(img)
        const ione = data.drinks[0].strMeasure1 + ' ' + data.drinks[0].strIngredient1
        const itwo = data.drinks[0].strMeasure2 + ' ' + data.drinks[0].strIngredient2
        const ithree = data.drinks[0].strMeasure3 + ' ' + data.drinks[0].strIngredient3
drinkIngredients.append('Ingredients: ',ione, ', ', itwo, ', ', ithree)
getRecipes()      
})
}
brandy.addEventListener('click' , getBrandy);

//Ale
const aleUrl='https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=13202'
function getAle(event) {
    event.preventDefault()
    console.log ('test')
    fetch(aleUrl)
    .then(function(response){
        return response.json();
    }).then (function(data){
        console.log(data)
        drinkName.textContent=data.drinks[0].strDrink
        drinkInstructions.textContent = 'Instructions: ' + data.drinks[0].strInstructions
        let img = document.createElement('img')
        img.setAttribute ("src", `https://www.thecocktaildb.com/images/media/drink/d30z931503565384.jpg`)
        var src = document.getElementById("drinkImg")
        src.appendChild(img);
        $("#drinkImg").append(img)
        const ione = data.drinks[0].strMeasure1 + ' ' + data.drinks[0].strIngredient1
        const itwo = data.drinks[0].strMeasure2 + ' ' + data.drinks[0].strIngredient2
        const ithree = data.drinks[0].strMeasure3 + ' ' + data.drinks[0].strIngredient3
        const ifour = data.drinks[0].strMeasure4 + ' ' + data.drinks[0].strIngredient4
        const ifive = data.drinks[0].strMeasure5 + ' ' + data.drinks[0].strIngredient5
drinkIngredients.append('Ingredients: ',ione, ', ', itwo, ', ', ithree, ', ', ifour,', ', ifive)
getRecipes()      
})
}
ale.addEventListener('click' , getAle);

//Scotch
const scotchUrl='https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11369'
function getScotch(event) {
    event.preventDefault()
    console.log ('test')
    fetch(scotchUrl)
    .then(function(response){
        return response.json();
    }).then (function(data){
        console.log(data)
        drinkName.textContent=data.drinks[0].strDrink
        drinkInstructions.textContent = 'Instructions: ' + data.drinks[0].strInstructions
        let img = document.createElement('img')
        img.setAttribute ("src", `https://www.thecocktaildb.com/images/media/drink/q53l911582482518.jpg`)
        var src = document.getElementById("drinkImg")
        src.appendChild(img);
        $("#drinkImg").append(img)
        const ione = data.drinks[0].strMeasure1 + ' ' + data.drinks[0].strIngredient1
        const itwo = data.drinks[0].strMeasure2 + ' ' + data.drinks[0].strIngredient2
        const ithree = data.drinks[0].strMeasure3 + ' ' + data.drinks[0].strIngredient3
        const ifour = data.drinks[0].strMeasure4 + ' ' + data.drinks[0].strIngredient4
        const ifive = data.drinks[0].strMeasure5 + ' ' + data.drinks[0].strIngredient5
drinkIngredients.append('Ingredients: ',ione, ', ', itwo, ', ', ithree,)
getRecipes()      
})
}
scotch.addEventListener('click' , getScotch);

function getRecipes() {
    recipes.style.visibility = "visible";
}
function resetRecipes(event) {
    event.preventDefault();

    document.location.reload();
 }
closeTab.addEventListener('click', resetRecipes);