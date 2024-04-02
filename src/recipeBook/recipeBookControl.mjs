import { renderListWithTemplate } from "../js/utils.mjs";

function cardRecipeTemplate(recipe) {
    const newRecipe = `
    <li class="recipe-card">
            <a href="../recipeBook/recipe.html?recipe=${recipe.id}">
              <h3 class="recipe-name">${recipe.title}</h3>
              <img src="${recipe.image}" alt="${recipe.title}">
            </a>
          </li>`;
    return newRecipe;
}


export default class RecipeBook {
    constructor(recipes){
        this.recipes = recipes ?? [];
    }
    init() {
       const element = document.querySelector(".recipes-list");
       if(this.recipes.length === 0){
        element.innerHTML += "<p> You haven't added any recipe</p>";
       }else{
        this.renderRecipes(element);
       }
    }

    renderRecipes(element) {
        renderListWithTemplate(cardRecipeTemplate, element, this.recipes);
    }

}