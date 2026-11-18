"use client";

import { useEffect } from "react";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error("NextBites application error:", error);
  }, [error]);

  return (
    <main className="recipe-detail-page">
      <div className="container empty-state" role="alert">
        <span aria-hidden="true">!</span>
        <h1>Something went wrong.</h1>
        <p>We hit an unexpected problem while loading this page. Please try again.</p>
        <button className="primary-button" type="button" onClick={() => reset()}>
          Try again
        </button>
      </div>
    </main>
  );
}
