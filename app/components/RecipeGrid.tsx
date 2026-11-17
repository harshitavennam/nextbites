"use client";

import { useState } from "react";
import RecipeCard from "./RecipeCard";
import type { Recipe } from "../data/recipes";

type RecipeGridProps = {
  recipes: Recipe[];
};

export default function RecipeGrid({ recipes }: RecipeGridProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const normalizedSearch = searchTerm.trim().toLowerCase();
  const filteredRecipes = recipes.filter((recipe) => {
    const searchableText = [
      recipe.title,
      recipe.description,
      recipe.category,
      ...recipe.ingredients,
    ].join(" ").toLowerCase();

    return searchableText.includes(normalizedSearch);
  });

  return (
    <>
      <div className="recipe-search">
        <label htmlFor="recipe-search-input">Search recipes</label>
        <input
          id="recipe-search-input"
          type="search"
          placeholder="Try pasta, breakfast, avocado..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <span className="search-count" aria-live="polite">
          {filteredRecipes.length} {filteredRecipes.length === 1 ? "recipe" : "recipes"} found
        </span>
      </div>

      {filteredRecipes.length > 0 ? (
        <div className="recipe-grid">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <div className="empty-state" role="status">
          <span aria-hidden="true">⌕</span>
          <h3>No recipes found</h3>
          <p>We couldn't find a match for “{searchTerm}”. Try another ingredient or recipe name.</p>
          <button type="button" onClick={() => setSearchTerm("")}>
            Clear search
          </button>
        </div>
      )}
    </>
  );
}
