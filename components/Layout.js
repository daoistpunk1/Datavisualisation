import Link from "next/link";
import { useRouter } from "next/router";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Products" },
  { href: "/faq", label: "FAQ" },
  { href: "/checkout", label: "Buy Now" }
];

function SiteHeader() {
  const router = useRouter();

  return (
    <header id="site-header">
      <div className="header-inner">
        <Link className="brand" href="/">
          <img src="/assets/logo.svg" alt="Muscle & Strength Pyramids" width={40} height={40} loading="lazy" />
          <span>Muscle &amp; Strength Pyramids</span>
        </Link>
        <button className="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">
          <span className="sr-only">Toggle navigation</span>
          <svg aria-hidden="true" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
        <nav id="site-nav" data-open="false">
          {navItems.map((item) => {
            const isActive = router.pathname === item.href;
            return (
              <Link key={item.href} href={item.href} aria-current={isActive ? "page" : undefined}>
                {item.label}
              </Link>
            );
          })}
        </nav>
        <Link className="btn btn-primary" href="/checkout" data-track="cta-primary">
          Get the Guides
        </Link>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer>
      <div className="footer-inner">
        <div>
          <Link className="footer-brand" href="/">
            Muscle &amp; Strength Pyramids
          </Link>
          <p>Your playbook for sustainable, high-performance training and nutrition.</p>
        </div>
        <div>
          <h3>Navigate</h3>
          <ul className="footer-nav">
            <li>
              <Link href="/product">Product Details</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/checkout">Buy Now</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Stay in the loop</h3>
          <p>Get launch updates and exclusive programming tips.</p>
          <form className="form-grid" data-track="newsletter">
            <label className="sr-only" htmlFor="email-footer">
              Email
            </label>
            <input
              id="email-footer"
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              autoComplete="email"
            />
            <button className="btn btn-primary" type="submit">
              Join the list
            </button>
          </form>
        </div>
      </div>
      <div className="footer-meta">
        © <span id="year"></span> Muscle &amp; Strength Pyramids. All rights reserved.
      </div>
    </footer>
  );
}

export default function Layout({ children }) {
  return (
    <>
      <a className="sr-only" href="#main">
        Skip to main content
      </a>
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  );
}
