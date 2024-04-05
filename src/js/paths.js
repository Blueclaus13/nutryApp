export function getSearchByIngedientsPath(params) {
    return `/findByIngredients?ingredients=${params}&number=10&ignorePantry=true&ranking=1`;
}

export function getComplexSearchPath(params){
    return`/complexSearch?${params}&type=main%20course&instructionsRequired=true&fillIngredients=false&addRecipeInformation=false&offset=0&number=10&limitLicense=false&ranking=2`;
}

export function getRecipeByID(id){
    return`/${id}/information`;
}

export function getNutritionByID(id){
    return `/${id}/nutritionWidget.json`;
}