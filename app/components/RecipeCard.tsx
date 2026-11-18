import Image from "next/image";
import Link from "next/link";
import type { Recipe } from "../data/recipes";

type RecipeCardProps = {
  recipe: Recipe;
};

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Link
      className="recipe-card"
      href={`/recipe/${recipe.id}`}
      aria-label={`View recipe: ${recipe.title}`}
    >
      <div className="recipe-image-wrap">
        <Image
          src={recipe.image}
          alt={recipe.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="recipe-image"
        />
        <span className="category-pill">{recipe.category}</span>
        <span className="rating"><span aria-hidden="true">★</span> {recipe.rating.toFixed(1)}</span>
      </div>
      <div className="recipe-content">
        <div className="recipe-meta">
          <span>◷ {recipe.prepTime + recipe.cookTime} min</span>
          <span>{recipe.difficulty}</span>
        </div>
        <h3>{recipe.title}</h3>
        <p>{recipe.description}</p>
        <span className="recipe-link">
          Explore recipe <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}
