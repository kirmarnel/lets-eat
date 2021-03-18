const name = document.querySelector('#name')
const instructions = document.querySelector('#instructions')
const ingredients = document.querySelector('#ingredients')
//Drink Variables
const ale = document.querySelector('#ale')
const arm = document.querySelector('#arm')
const bourban = document.querySelector('#bourban')
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
        const ione = data.meals[0].strIngredient1
        const itwo = data.meals[0].strIngredient2
        const ithree = data.meals[0].strIngredient3
        const ifour = data.meals[0].strIngredient4
        const ifive = data.meals[0].strIngredient5
        const isix = data.meals[0].strIngredient6
        const iseven = data.meals[0].strIngredient7
        const ieight = data.meals[0].strIngredient8
ingredients.append('Ingredients: ',ione, ', ', itwo, ', ', ithree, ', ', ifour,', ', ifive,', ', isix,', ', iseven,', ', ieight)
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
        const ione = data.meals[0].strIngredient1
        const itwo = data.meals[0].strIngredient2
        const ithree = data.meals[0].strIngredient3
        const ifour = data.meals[0].strIngredient4
        const ifive = data.meals[0].strIngredient5
        const isix = data.meals[0].strIngredient6
        const iseven = data.meals[0].strIngredient7
        const ieight = data.meals[0].strIngredient8
        const inine = data.meals[0].strIngredient9
ingredients.append('Ingredients: ',ione, ', ', itwo, ', ', ithree, ', ', ifour,', ', ifive,', ', isix,', ', iseven,', ', ieight,', ', inine)
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
        const ione = data.meals[0].strIngredient1
        const itwo = data.meals[0].strIngredient2
        const ithree = data.meals[0].strIngredient3
        const ifour = data.meals[0].strIngredient4
        const ifive = data.meals[0].strIngredient5
        const isix = data.meals[0].strIngredient6
        const iseven = data.meals[0].strIngredient7
        const ieight = data.meals[0].strIngredient8
        const inine = data.meals[0].strIngredient9
ingredients.append('Ingredients: ',ione, ', ', itwo, ', ', ithree, ', ', ifour,', ', ifive,', ', isix,', ', iseven,', ', ieight,', ', inine)
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
    })
}
pork.addEventListener('click', getPork);

//Vegetarian Option
const veggieURL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52994'
function getVeggies(event){
    event.preventDefault(event)

    fetch(veggieURL)
    .then(function (response){
        return response.json();
    }).then(function (data){
        console.log(data)

         name.textContent=data.meals[0].strMeal
        instructions.textContent='Instructions: ' + data.meals[0].strInstructions
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
        const ione = data.meals[0].strMeasure1 + ' ' + data.meals[0].strIngredient1
        const itwo = data.meals[0].strMeasure2 + ' ' + data.meals[0].strIngredient2
        const ithree = data.meals[0].strMeasure3 + ' ' + data.meals[0].strIngredient3 
        const ifour = data.meals[0].strMeasure4 + ' ' + data.meals[0].strIngredient4
        const ifive = data.meals[0].strMeasure5 + ' ' + data.meals[0].strIngredient5
        const isix = data.meals[0].strMeasure6 + ' ' + data.meals[0].strIngredient6
        const iseven = data.meals[0].strMeasure7 + ' ' + data.meals[0].strIngredient7
       
ingredients.append('Ingredients: ',ione, ', ', itwo, ', ', ithree, ', ', ifour,', ', ifive,', ', isix,', ', iseven)
    })
    
}
pasta.addEventListener('click', getPasta);