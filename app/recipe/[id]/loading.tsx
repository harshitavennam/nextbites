export default function LoadingRecipe() {
  return (
    <main
      className="recipe-detail-page"
      aria-busy="true"
      aria-live="polite"
      aria-label="Loading recipe"
    >
      <div className="container">
        <p className="eyebrow" role="status">GETTING YOUR RECIPE READY</p>
        <div className="detail-hero">
          <div className="detail-image" aria-hidden="true" />
          <div className="detail-intro">
            <h1>Loading recipe…</h1>
            <p>Please wait while we prepare the ingredients and steps.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
