import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import NavBar from "./components/NavBar";

export const metadata: Metadata = {
  title: "NextBites | Fresh, Simple Recipes for Every Day",
  description:
    "Discover easy, feel-good recipes for breakfast, lunch, dinner, and dessert. Explore ingredients, preparation steps, cooking times, and inspiration for your next meal.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <footer className="site-footer" id="about">
          <div className="container footer-inner">
            <LinkToHome />
            <p>Made with care for curious home cooks.</p>
            <span>© {new Date().getFullYear()} NextBites</span>
          </div>
        </footer>
      </body>
    </html>
  );
}

function LinkToHome() {
  return <Link className="footer-brand" href="/">next<span>bites.</span></Link>;
}
