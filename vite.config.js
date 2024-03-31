import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        recipeBook: resolve(__dirname, "src/recipeBook/index.html"),
        product: resolve(__dirname, "src/recipeBook/recipe.html")
    },
  },
}});
