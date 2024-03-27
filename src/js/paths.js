export function getSearchByIngedientsPath(params) {
    return `/findByIngredients?ingredients=${params}&number=10&ignorePantry=true&ranking=1`;
}