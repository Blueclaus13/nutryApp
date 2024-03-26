

export default class DataService{
    constructor(){
        this.baseURL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes";
        this.headers = {'X-RapidAPI-Key': '41fa2d97cbmsh57a238602969424p120998jsnfc23970fd1eb',
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'};
    }

    getBaseURL(){
        return this.baseURL;
    }

    async getList(params){
        const options = {
            method: 'GET',
            headers: this.headers
          };
        try {
            const response = await fetch(this.baseURL + `/guessNutrition?title=${params}`, options);
            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }

    
}

//const fetch = require('node-fetch');

//const url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/guessNutrition?title=Spaghetti%20Aglio%20et%20Olio';


