"use client";

import Link from "next/link";

export default function NavBar() {
  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Main navigation">
        <Link className="brand" href="/" aria-label="NextBites home">
          <span className="brand-mark">N</span>
          <span>next<span className="brand-accent">bites</span></span>
        </Link>
        <div className="nav-links">
          <Link href="/">Discover</Link>
          <a href="#recipes">Recipes</a>
          <a className="nav-cta" href="#about">Our kitchen <span aria-hidden="true">↗</span></a>
        </div>
      </nav>
    </header>
  );
}
