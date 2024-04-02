import RecipeList from "./RecipeListDisplay.mjs";
import DataService from "./fetch.mjs";
import { getComplexSearchPath, getSearchByIngedientsPath } from "./paths";
import { loadSearch, renderTemplate } from "./utils.mjs";


const list = document.querySelector(".recipes-list");

function searchByIngredientsTemplate(){
    return `
    <div class="instructions"><p>Please, add a comma-separated list of ingredients that the recipes 
    should contain</p></div>
    <input type="text" placeholder="apple,banana,cinnamon">
    <button class="search-btn">Search</button>
    `;
}

function handleSearchButtonByIngredients(){
    
}

function handleSearchButtonByName(){

}


export default class Displayer{
    constructor(parentElement, type){
        this.searchType = type;
        this.element = parentElement;
    }

    init(){
        const form = document.querySelector('form');  
        form.addEventListener('submit', this.search.bind(this));

        if(this.searchType === "ingredients"){
            // this.displaySearchByIngredients();
            this.displayComplexSearch("/partials/ingredientsForm.html");
            //document.querySelector("button").addEventListener("click", handleSearchButtonByIngredients);
        }else{
            this.displayComplexSearch("/partials/complexForm.html");
            //document.querySelector("button").addEventListener("click", handleSearchButtonByName);
        }
        
    }

    displaySearchByIngredients(){
        renderTemplate(searchByIngredientsTemplate, this.element, true);
    }

    displayComplexSearch(path){
        loadSearch(path);
    }

    search(event){
        event.preventDefault(); 
        if(this.searchType === "ingredients"){
            const userInput = document.querySelector("input");
            console.log(userInput.value);
            const dataService = new DataService();
            const recipesdisplayer = new RecipeList(
                dataService,
                list, 
                getSearchByIngedientsPath(userInput.value));
            recipesdisplayer.renderListByIngredientsPath();
            document.querySelector(".recipes")
            .insertAdjacentHTML("beforebegin", `<h3>Results of '${userInput.value}'</h3>`);
            userInput.value = "";
        } else{
            const userInput = document.querySelector("input");
            console.log(userInput.value);
            const dataService = new DataService();
            const recipesdisplayer = new RecipeList(
                dataService,
                list, 
                getComplexSearchPath(userInput.value));
            recipesdisplayer.renderListBySearchRecipePath();
            document.querySelector(".recipes")
            .insertAdjacentHTML("beforebegin", `<h3>Results of '${userInput.value}'</h3>`);
            userInput.value = "";
        }
    }
}