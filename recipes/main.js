import recipes from './recipes.mjs';



function random(num){
    return Math.floor(Math.random() * num);
}



function getRandomListEntry(list){
    const listLength = list.length;
    const randomNum = random(listLength);
    return list[randomNum];
}

//console.log(getRandomListEntry(recipes));



function recipeTemplate(recipe) {
	return `<div class="recipe-container" >
            <div class="recipe-img-container" >
                <img class="recipe-img" src="${recipe.image}" alt="${recipe.image}">
            </div>
            <div class="sub-recipe-container" >
                <h2>${tagsTemplate(recipe.tags)}</h2>
                <h3 class="recipe-tital" >${recipe.name}</h3>
                <span
                    class="rating"
                    role="img"
                    aria-label="Rating: 4 out of 5 stars">
                    <span>${ratingTemplate(recipe.rating)}</span>
                </span>
                <p class="recipe-description">${recipe.description}</p>
            </div>
        </div>`;
}

 

function tagsTemplate(tags){
    let html = '';
    for (const tag of tags){
        html += `<span class="body-font tag">${tag}</span>`;
    }
    return html;
}



function ratingTemplate(rating){
    let html = `<span
    class = "rating"
    role = "img"
    aria-label = "Rating: ${rating} out of 5 stars"
    >`

    for (let i = 1; i <= 5; i++){
        if (i <= rating){
            html += `⭐`;
        }
        else{
            html += `☆`;
        }
    }
    html += `</span>` //closing tag to string

    return html
}

//const recipe = getRandomListEntry(recipes);
//console.log(recipeTemplate(recipe));



function renderRecipes(recipeList){
    const outputElement = document.querySelector('.dynamic-recipe-container');
    const recipesHTML = recipeList.map(recipeTemplate);
    const combinedHTML = recipesHTML.join('');
    outputElement.innerHTML = combinedHTML;
}



function init() {
    // get a random recipe
    const recipe = getRandomListEntry(recipes);
    // render the recipe with renderRecipes.
    renderRecipes([recipe]);
  }
  init();



document.querySelector('#search-icon-button').addEventListener('click', searchHandler);



function searchHandler(e) {
	e.preventDefault();
    const query = document.querySelector('#recipeSearch').value.toLowerCase();
    const filteredRecipes = filterRecipes(query);
    renderRecipes(filteredRecipes);
}



function filterRecipes(query) {
    const filtered = recipes.filter(recipe => {
        return(
            recipe.name.toLowerCase().includes(query) ||
            recipe.description.toLowerCase().includes(query) ||
            recipe.tags.find(tag => tag.toLowerCase().includes(query)) ||
            recipe.recipeIngredient.find(recipeIngredient => recipeIngredient.toLowerCase().includes(query)) 
        );
    });
    
    const sorted = filtered.sort(function(a,b){
        if (a.name < b.name){
            return -1;
        }
        else if (a.name > b.name){
            return 1;
        }
        else {
            return 0
        }
    });
        return sorted
    
    }