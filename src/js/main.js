import DataService from "./fetch.mjs";

const dataService = new DataService();
const userInput = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", ()=>{
    console.log(userInput.value);
    dataService.getList(userInput.value);
    userInput.value = "";
});

