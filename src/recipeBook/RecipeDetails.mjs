import DataService from "../js/fetch.mjs";
import { getNutritionByID, getRecipeByID } from "../js/paths";
import { alertMessage, getLocalStorage, removeAllAlerts, renderListWithTemplate, renderTemplate, setLocalStorage } from "../js/utils.mjs";

const dataService = new DataService();
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
    <div class="nutrition">
        <h5>Nutrition Information</h5>
        <ul class="nutrients"></ul>
    </div>
    <div class="buttons">
    <button id="addRecipe">Add to Recipe Book</button>
    <button class="hide" id="removeRecipe">Remove from Recipe Book</button>
    <a href="${recipe.sourceUrl}">Link to check source</a></div>
    `;

}

function nutritionTemplate(nutrient){
    let color = "";
    if(nutrient.percentOfDailyNeeds >= 60){
        color = "#FF6B6B";
    }else if(nutrient.percentOfDailyNeeds >= 30){
        color = "#FFE66D;";
    }else{
        color = "#23afe3";
    }
    
    return`<li class="nutrient">
            <div class="chart-container">
                <div class="chart" data-percent=${nutrient.percentOfDailyNeeds} data-bar-color="${color}">
                    <span class="percent" style="color: ${color}"data-after="%">${nutrient.percentOfDailyNeeds}%</span>
                </div>
                <p class="amount" data-after="%">${nutrient.amount} ${nutrient.unit}</p>
                <p>${nutrient.name} </p>
            </div>
        </li>`;

}

export default class RecipeDetails{
    constructor(recipeId, localStore){
        this.recipeId = recipeId;
        this.recipe = {};
        this.localStore = localStore ?? [];
        this.isInRecipeBook = false;
    }

    async init() {
        if(this.isInLocalStore()){
            this.localStore = getLocalStorage("so-cart");
            this.recipe = this.localStore.find(i=> i.id === parseInt(this.recipeId));
            //console.log(this.recipe)
            this.isInRecipeBook = true;
        }else{
            this.recipe = await  dataService.getList(getRecipeByID(this.recipeId));
        }
        this.renderRecipeDetails(".recipes-detail");
        document
        .getElementById('addRecipe')
        .addEventListener('click', this.addToBook.bind(this));
        document
        .getElementById('removeRecipe')
        .addEventListener('click', this.removeFromBook.bind(this));
        this.switchVisibleButtons();
        this.renderNutrition(".nutrients");
    }

    addToBook() {
        removeAllAlerts();
        this.localStore.push(this.recipe)
        setLocalStorage("so-cart", this.localStore);
        alertMessage("Added to Recipe Book");
        this.isInRecipeBook = true;
        this.switchVisibleButtons();
      }

    removeFromBook(){
        removeAllAlerts();
        this.localStore.splice(this.localStore.findIndex(a => a.id === parseInt(this.recipeId)) , 1);
        setLocalStorage("so-cart", this.localStore);
        alertMessage("Removed from Recipe Book");
        this.isInRecipeBook = false;
        this.switchVisibleButtons();
      }

    isInLocalStore(){
        return this.localStore.some(e => e.id === parseInt(this.recipeId));
      }
    switchVisibleButtons(){
        const addBtn = document.querySelector("#addRecipe");
        const removeBtn = document.querySelector("#removeRecipe");
        if(this.isInRecipeBook){
            removeBtn.classList.remove("hide")
            addBtn.classList.add("hide");
        }else{
            addBtn.classList.remove("hide")
            removeBtn.classList.add("hide");
        }
    }

    renderRecipeDetails(selector) {
        renderTemplate(recipeTemplate, selector, this.recipe, true);
    }

    async callNutritionData(){
        return await  dataService.getList(getNutritionByID(this.recipeId));
    }

    async renderNutrition(selector){
        const parentElement = document.querySelector(selector);
        const nutrientsList = await this.callNutritionData();
        renderListWithTemplate(nutritionTemplate, parentElement, nutrientsList.nutrients, true);
    }

}