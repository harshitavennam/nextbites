import Link from "next/link";

export default function NotFound() {
  return (
    <main className="recipe-detail-page">
      <div className="container empty-state">
        <span aria-hidden="true">404</span>
        <p className="eyebrow">PAGE NOT FOUND</p>
        <h1>We couldn&apos;t find that page.</h1>
        <p>
          The recipe may have moved, or the link may be incorrect.
          Try returning to NextBites to discover another recipe.
        </p>
        <Link className="primary-button" href="/">
          Back to NextBites
        </Link>
      </div>
    </main>
  );
}
