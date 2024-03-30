function cardRecipeTemplate(recipe) {
    const newRecipe = `
    <li class="recipe-card">
            <a href="">
              <h3 class="recipe-name">${recipe.title}</h3>
              <img src="${recipe.image}" alt="${recipe.title}">
            </a>
          </li>`;
    return newRecipe;
}


export default class RecipeBook {
    constructor(recipes){
        this.recipes = recipes ?? [];
    }
    init() {
       const element = document.querySelector(".recipes-list");
       this.renderRecipes(element);
        //this.addListenerToElements();
    }

    renderRecipes(element) {
        renderListWithTemplate(cardRecipeTemplate, element, this.recipes);
    }

    addListenerToElements() {
        // console.log(this.getProductsId());
        // const listId = this.getProductsId();
        // listId.forEach(element => {
        //   document
        //     .getElementById(element)
        //     .addEventListener('click', this.deleteItem.bind(this));
        // });
    }

}