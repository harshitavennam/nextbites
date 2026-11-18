import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { recipes } from "../../data/recipes";

type RecipeDetailPageProps = {
  params: Promise<{ id: string }>;
};

// Pre-render every known recipe so the detail pages work with static export.
export function generateStaticParams() {
  return recipes.map((recipe) => ({ id: String(recipe.id) }));
}

export default async function RecipeDetailPage({ params }: RecipeDetailPageProps) {
  const { id } = await params;

  // Reject malformed IDs before looking up a recipe.
  if (!/^\d+$/.test(id)) {
    notFound();
  }

  const recipeId = Number(id);
  const recipe = recipes.find((item) => item.id === recipeId);

  if (!Number.isSafeInteger(recipeId) || !recipe) {
    notFound();
  }

  return (
    <main className="recipe-detail-page">
      <div className="container">
        <Link className="back-link" href="/">← Back to all recipes</Link>

        <section className="detail-hero">
          <div className="detail-image">
            <Image
              src={recipe.image}
              alt={recipe.title}
              fill
              priority
              sizes="(max-width: 800px) 100vw, 50vw"
            />
          </div>
          <div className="detail-intro">
            <span className="eyebrow">{recipe.category.toUpperCase()}</span>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
            <div className="detail-meta">
              <span>Prep: {recipe.prepTime} min</span>
              <span>Cook: {recipe.cookTime} min</span>
              <span>Serves: {recipe.servings}</span>
              <span>{recipe.difficulty}</span>
              <span>★ {recipe.rating.toFixed(1)}</span>
            </div>
          </div>
        </section>

        <section className="detail-content">
          <div className="ingredients-panel">
            <span className="eyebrow">WHAT YOU&apos;LL NEED</span>
            <h2>Ingredients</h2>
            <ul>
              {recipe.ingredients.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div className="steps-panel">
            <span className="eyebrow">LET&apos;S GET COOKING</span>
            <h2>Steps</h2>
            <ol>
              {recipe.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </section>
      </div>
    </main>
  );
}
