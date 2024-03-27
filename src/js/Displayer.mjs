import RecipeList from "./RecipeListDisplay.mjs";
import DataService from "./fetch.mjs";
import { getSearchByIngedientsPath } from "./paths";
import { renderTemplate } from "./utils.mjs";


const list = document.querySelector(".recipes-list");

function searchByIngredientsTemplate(){
    return `
    <div class="instructions"><p>Please, add a comma-separated list of ingredients that the recipes 
    should contain</p></div>
    <input type="text" placeholder="apple,banana,cinnamon">
    <button class="search-btn">Search</button>
    `;
}

function searchByComplexTemplate(){
    return `
    <div class="instructions"><p>Please, add a comma-separated list of ingredients that the recipes 
    should contain</p></div>
    <input type="text" placeholder="apple,banana,cinnamon">
    <button class="search-btn">Search</button>
    `;
}

function handleSearchButtonByIngredients(){
    const userInput = document.querySelector("input");
    console.log(userInput.value);
    const dataService = new DataService();
    const recipesdisplayer = new RecipeList(
        dataService,
        list, 
        getSearchByIngedientsPath(userInput.value));
    recipesdisplayer.init();
    document.querySelector(".recipes")
    .insertAdjacentHTML("beforebegin", `<h3>Results of '${userInput.value}'</h3>`);
    userInput.value = "";
}


export default class Displayer{
    constructor(parentElement, type){
        this.searchType = type;
        this.element = parentElement;
    }

    init(){
        if(this.searchType === "ingredients"){
            this.displaySearchByIngredients();
            document.querySelector("button").addEventListener("click", handleSearchButtonByIngredients);
        }else{

        }
        
    }

    displaySearchByIngredients(){
        renderTemplate(searchByIngredientsTemplate, this.element, true);
    }
}