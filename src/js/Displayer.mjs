import RecipeList from "./RecipeListDisplay.mjs";
import DataService from "./fetch.mjs";
import FormManager from "./form.mjs";
import { getComplexSearchPath, getSearchByIngedientsPath } from "./paths";
import { loadSearch} from "./utils.mjs";

const list = document.querySelector(".recipes-list");

export default class Displayer{
    constructor(parentElement, type){
        this.searchType = type;
        this.element = parentElement;
    }

    init(){
        const parentElement = document.querySelector(this.element);
        if(this.searchType === "ingredients"){
            parentElement.addEventListener('submit', this.search.bind(this));
            this.displaySearch("/partials/ingredientsForm.html", this.element);
        }else{
            parentElement.addEventListener('submit', this.search.bind(this));
            this.displaySearch("/partials/complexForm.html", this.element);
        }
    }

    displaySearch(path, formSelector){
        loadSearch(path, formSelector);
    }

    search(event){
        const userInput = document.getElementById("name");
        event.preventDefault(); 
        const formData = new FormManager(this.element);
        const url =formData.getDatafromComplexSearchForm();
        if(this.searchType === "ingredients"){
            console.log(userInput.value);
            const dataService = new DataService();
            const recipesdisplayer = new RecipeList(
                dataService,
                list, 
                getSearchByIngedientsPath(userInput.value));
            recipesdisplayer.renderListByIngredientsPath();
        } else{
            console.log(url);
            const dataService = new DataService();
            const recipesdisplayer = new RecipeList(
                dataService,
                list, 
                getComplexSearchPath(url));
            recipesdisplayer.renderListBySearchRecipePath();
        }
        const info =document.getElementById("searchInfo");
        info.innerHTML = `Result of ${userInput.value}`;
        userInput.value = "";
    }
}