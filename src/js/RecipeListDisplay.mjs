import { deleteElement, emptyIcon, renderListWithTemplate } from "./utils.mjs";

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
    async ListByIngredientsPath(){
        const list = await this.dataSource.getList(this.pathName);
        return list;
    }
    async getListByComplexPath(){
        const list = await this.dataSource.getList(this.pathName);
        return list.results;
    }

    async renderList( type) {
        var data =  await this.dataSource.getList(this.pathName);
        var list = type === "ingredients" ? data : data.results;
        this.removeIcon();
        if(list.length === 0){
            this.emptyList();
            emptyIcon(this.listElement, "Not results for search");
        }else{
            renderListWithTemplate(cardRecipeTemplate, this.listElement, list, true);
        }
    }

    emptyList(){
        this.listElement.innerHTML = "";
    }
    removeIcon(){
        if(document.getElementById("img_container")){
            deleteElement(".recipes", "#img_container");
        }
    }
}