import DataService from "../js/fetch.mjs";
import { getRecipeByID } from "../js/paths";
import { alertMessage, getLocalStorage, removeAllAlerts, renderTemplate, setLocalStorage } from "../js/utils.mjs";

function recipeTemplate(recipe){
    return `<h2>${recipe.title}</h2>
    <img src="${recipe.image}" alt="${recipe.title}">
    <div class="details"><p>Ready in: ${recipe.readyInMinutes}</p>
    <p>servings: ${recipe.servings}</p>
    <h5>Diets</h5>
    <span>${recipe.diets.map(i=>{
        return "<p>" + i + "</p>";
     }).join(" ")}</span></div>
    <div class="ingredients"><h5>Ingredients</h5>
    <span>${recipe.extendedIngredients.map(i=>{
       return "<p>" + i.name + "</p>";
    }).join(" ")}</span></div>
    <div class="instructions"><h5>Instructions</h5>
    <p>${recipe.instructions}</p></div>
    <h5 class="nutrition">Nutrition graphic</h5>
    <button id="addRecipe">Add to Recipe Book</button>
    <a href="${recipe.sourceUrl}">Link to check source</a>
    `;

}

export default class RecipeDetails{
    constructor(recipeId, localStore){
        this.recipeId = recipeId;
        this.recipe = {};
        this.localStore = localStore ?? [];
    }

    async init() {
        const dataService = new DataService();
        this.localStore = getLocalStorage("so-cart");
        this.recipe = this.localStore[0];
        // this.recipe = await  dataService.getList(getRecipeByID(this.recipeId));
        this.renderRecipeDetails(".recipes-detail");
        document
        .getElementById('addRecipe')
        .addEventListener('click', this.addToBook.bind(this));
    }

    addToBook() {
        removeAllAlerts();
        const isAdded = this.localStore.find(item => item.id === this.recipeId) === undefined;
        if(isAdded){
            //console.log("Alert, it's already added in Recipe book");
            alertMessage("Recipe is already added in Recipe book");
        }else{
            
            this.localStore.push(this.product)
            setLocalStorage("so-cart", this.localStore);
            alertMessage("Added to Recipe Book");
        }

        
      }

    renderRecipeDetails(selector) {
        renderTemplate(recipeTemplate, selector, this.recipe, true);
    }

}