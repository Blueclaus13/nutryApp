export function getSearchByIngedientsPath(params) {
    return `/findByIngredients?ingredients=${params}&number=10&ignorePantry=true&ranking=1`;
}

export function getComplexSearchPath(params){
    return`/complexSearch?query=${params.name}&cuisine=${params.cuisine}&intolerances=gluten
    &includeIngredients=tomato%2Ccheese&type=main%20course&instructionsRequired=true
    &fillIngredients=true&addRecipeInformation=true&maxReadyTime=20
    &ignorePantry=true
    &sortDirection=desc&number=15
    &limitLicense=false&ranking=2`;
}

export function getRecipeByID(id){
    return`/${id}/information`;
}