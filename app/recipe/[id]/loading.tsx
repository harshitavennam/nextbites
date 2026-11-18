export default function LoadingRecipe() {
  return (
    <main className="recipe-detail-page" aria-busy="true" aria-live="polite">
      <div className="container">
        <p className="eyebrow">GETTING YOUR RECIPE READY</p>
        <div className="detail-hero">
          <div className="detail-image" />
          <div className="detail-intro">
            <p>Loading recipe…</p>
            <p>Please wait while we prepare the ingredients and steps.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
