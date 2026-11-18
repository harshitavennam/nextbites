import Image from "next/image";
import RecipeGrid from "./components/RecipeGrid";
import { recipes } from "./data/recipes";

const categories = ["Breakfast", "Lunch", "Dinner", "Dessert"];

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow"><span className="eyebrow-dot" /> FRESH IDEAS FOR EVERY DAY</span>
            <h1>Make room for<br /><em>something</em> delicious.</h1>
            <p>Simple recipes, feel-good ingredients and a little inspiration to make every meal worth looking forward to.</p>
            <a className="primary-button" href="#recipes">Explore recipes <span aria-hidden="true">↗</span></a>
            <div className="hero-note"><span className="note-stars">★★★★★</span><span>Loved by home cooks everywhere</span></div>
          </div>
          <div className="hero-visual">
            <div className="hero-image">
              <Image
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&q=90"
                alt="A fresh table spread with colourful, wholesome food"
                fill
                priority
                sizes="(max-width: 800px) 100vw, 50vw"
              />
            </div>
            <div className="floating-card"><span className="floating-icon">✳</span><span><strong>Good food mood</strong><small>Starts right here</small></span></div>
            <span className="visual-caption">FRESH · SIMPLE · DELICIOUS</span>
          </div>
        </div>
      </section>

      <section className="category-strip container" aria-label="Recipe categories">
        {categories.map((category) => <a href="#recipes" key={category}>{category}<span>↗</span></a>)}
      </section>

      <section className="recipes-section container" id="recipes">
        <div className="section-heading">
          <div>
            <span className="eyebrow">A LITTLE INSPIRATION</span>
            <h2>Find your next <em>favourite.</em></h2>
          </div>
          <p>Everyday ingredients. Unforgettable bites.</p>
        </div>
        <RecipeGrid recipes={recipes} />
      </section>
    </main>
  );
}
