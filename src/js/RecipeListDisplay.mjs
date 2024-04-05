import { renderListWithTemplate } from "./utils.mjs";

function cardRecipeTemplate(recipe) {
    const newRecipe = `
    <li class="recipe-card">
            <a href="../recipeBook/recipe.html?recipe=${recipe.id}">
              <h3 class="recipe-name">${recipe.title}</h3>
              <img src="${recipe.image}" alt="${recipe.title}">
            </a>
    </li>`;
    return newRecipe;
}


export default class RecipeList{
    constructor(dataSource, listElement, pathName){
        this.dataSource = dataSource;
        this.listElement = listElement;
        this.pathName = pathName;
    }

    async renderListByIngredientsPath() {
        const list = await this.dataSource.getList(this.pathName);
        renderListWithTemplate(cardRecipeTemplate, this.listElement, list, true);
    }

    async renderListBySearchRecipePath() {
        const list = await this.dataSource.getList(this.pathName);
        renderListWithTemplate(cardRecipeTemplate, this.listElement, list.results, true);
    }
}