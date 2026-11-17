import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";

export const metadata: Metadata = {
  title: "NextBites | Good food, made simple",
  description: "Find fresh, approachable recipes for every kind of day with NextBites."
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
  return <a className="footer-brand" href="/">next<span>bites.</span></a>;
}
