
import { loadHeaderFooter} from "./utils.mjs";
import Displayer from "./Displayer.mjs";

function handleByIngredients() {
    document.querySelector("#complex").innerHTML = "";
    byIngredientsTab.style.backgroundColor = "#4ECDC4";
    byNameTab.style.backgroundColor = "";
    const displayer = new Displayer("#ingredients", "ingredients");
    displayer.init();
}

function handleByName() {
    document.querySelector("#ingredients").innerHTML = "";
    byNameTab.style.backgroundColor = "#4ECDC4";
    byIngredientsTab.style.backgroundColor = "";
    const displayer = new Displayer("#complex", "complex");
    displayer.init();
}


loadHeaderFooter();

const byNameTab = document.querySelector("#byName");
const byIngredientsTab = document.querySelector("#byIngredients");

byNameTab.addEventListener("click", handleByName);
byIngredientsTab.addEventListener("click", handleByIngredients);





