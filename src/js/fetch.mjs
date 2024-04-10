

export default class DataService{
    constructor(){
        this.baseURL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes";
        this.headers = {'X-RapidAPI-Key': '41fa2d97cbmsh57a238602969424p120998jsnfc23970fd1eb',
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'};
    }

    getBaseURL(){
        return this.baseURL;
    }

    async getList(pathName){
        const options = {
            method: 'GET',
            headers: this.headers
          };
        try {
            const res = await fetch(this.baseURL + pathName, options)
            const response=  await res.json();
            console.log(response)
            return response;
        } catch (error) {
            throw { name: "Service Error", message: error.message}
            
        }
    }    
}