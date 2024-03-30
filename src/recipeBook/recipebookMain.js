import { getLocalStorage, loadHeaderFooter } from "../js/utils.mjs";
import RecipeBook from "./recipeBookControl.mjs";

loadHeaderFooter();
const recipes = new RecipeBook(getLocalStorage("so-cart"));
recipes.init();