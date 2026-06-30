import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriterecipes: [], // Stores favorite recipes
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const recipe = action.payload;

      // Check if recipe already exists in favorites
      const existingRecipe = state.favoriterecipes.find(
        (item) => item.idFood === recipe.idFood
      );

      if (existingRecipe) {
        // Remove from favorites
        state.favoriterecipes = state.favoriterecipes.filter(
          (item) => item.idFood !== recipe.idFood
        );
      } else {
        // Add to favorites
        state.favoriterecipes.push(recipe);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;