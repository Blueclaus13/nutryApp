import RecipeList from "./RecipeListDisplay.mjs";
import DataService from "./fetch.mjs";
import { loadHeaderFooter, renderTemplate } from "./utils.mjs";
import {getSearchByIngedientsPath} from "./paths";
import Displayer from "./Displayer.mjs";

function handleByIngredients() {
    document.querySelector("#search-container").innerHTML = "";
    byIngredientsTab.style.backgroundColor = "#4ECDC4";
    byNameTab.style.backgroundColor = "";
    const displayer = new Displayer("#search-container", "ingredients");
    displayer.init();
}

function handleByName() {
    document.querySelector("#search-container").innerHTML = "";
    byNameTab.style.backgroundColor = "#4ECDC4";
    byIngredientsTab.style.backgroundColor = "";
}


loadHeaderFooter();

const dataService = new DataService();


const byNameTab = document.querySelector("#byName");
const byIngredientsTab = document.querySelector("#byIngredients");

byNameTab.addEventListener("click", handleByName);

byIngredientsTab.addEventListener("click", handleByIngredients);





