export default class FormManager{
    constructor(formSelector){
        this.formElement = document.querySelector(formSelector); 
        this.formData = new FormData(this.formElement);
    }

    getDatafromComplexSearchForm(){
        //let formValues = [...this.formData];
        if(this.formData.get("name") === ""){
            result
        }
        const listParams = {
            query: this.formData.get("name"),
            maxReadyTime: this.formData.get("maxReadyTime"),
            intolerances: this.formData.get("intolerances"),
            diet: this.formData.get("diet"),
            includeIngredients: this.formData.get("in-ingredients"),
            excludeIngredients: this.formData.get("out-ingredients"),
            excludeCuisine: this.formData.get("cuisine")};
        const result ={};
        for(let key in listParams){
            if(listParams[key] !== ""){
                result[key] = listParams[key];
            };
        };
      const url = Object.keys(result).map(key => key + "=" + result[key]).join("&");
        
        return url;
    }

}