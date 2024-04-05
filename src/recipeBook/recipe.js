
import { getLocalStorage, getParams, loadHeaderFooter } from "../js/utils.mjs";
import RecipeDetails from "./RecipeDetails.mjs";


loadHeaderFooter();
const localStorage = getLocalStorage("so-cart");
const recipeId = getParams("recipe");

const recipe = new RecipeDetails(recipeId, localStorage);
recipe.init();