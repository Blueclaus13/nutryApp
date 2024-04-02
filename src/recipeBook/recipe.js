
import { getLocalStorage, getParams, loadHeaderFooter } from "../js/utils.mjs";
import RecipeDetails from "./RecipeDetails.mjs";


loadHeaderFooter();
const localStorage = getLocalStorage("so-cart");
const recipeId = getParams("recipe");

// const dataService = new DataService();
// this.recipe = await  dataService.getList(getRecipeByID(this.recipeId));
const recipe = new RecipeDetails(recipeId, localStorage);
recipe.init();