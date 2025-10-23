import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Muscle &amp; Strength Pyramids</title>
      </Head>
      <main id="main">
        <section className="hero">
          <div className="hero-inner">
            <div className="hero-copy">
              <h1 data-variant-copy>Transform your training with evidence-based coaching</h1>
              <p>
                The Muscle &amp; Strength Pyramids distill years of coaching experience and research into actionable programming
                and nutrition systems that scale with you from novice to elite.
              </p>
              <div className="hero-actions">
                <Link className="btn btn-primary" href="/checkout" data-track="cta-primary">
                  Start Building Strength
                </Link>
                <Link className="btn btn-secondary" href="/product">
                  Explore the books
                </Link>
              </div>
              <div className="badge-list" aria-label="Key value propositions">
                <span className="badge" data-variant="highlight">
                  Updated 2025 Edition
                </span>
                <span className="badge">Video Companion Library</span>
                <span className="badge">Printable Templates</span>
              </div>
            </div>
            <aside className="hero-visual" aria-label="What you get">
              <h2>Inside the Pyramid System</h2>
              <ul>
                <li>
                  <svg
                    aria-hidden="true"
                    width={28}
                    height={28}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#f4a261"
                    strokeWidth={1.75}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Periodised training plans for every level
                </li>
                <li>
                  <svg
                    aria-hidden="true"
                    width={28}
                    height={28}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#f4a261"
                    strokeWidth={1.75}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Macro calculators &amp; diet periodisation strategies
                </li>
                <li>
                  <svg
                    aria-hidden="true"
                    width={28}
                    height={28}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#f4a261"
                    strokeWidth={1.75}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Lifetime updates plus private Q&amp;A sessions
                </li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="section" id="benefits">
          <div className="section-heading">
            <h2>Why athletes and coaches trust the Pyramids</h2>
            <p>Proven frameworks that blend sports science with real-world coaching to keep you progressing.</p>
          </div>
          <div className="feature-grid">
            <article className="feature-card">
              <svg
                aria-hidden="true"
                width={40}
                height={40}
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1d3557"
                strokeWidth={1.75}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 20l9-16H3l9 16z" />
              </svg>
              <h3>Structured Progression</h3>
              <p>Follow a clear hierarchy that prioritises what matters most at each stage of training, eliminating guesswork.</p>
            </article>
            <article className="feature-card">
              <svg
                aria-hidden="true"
                width={40}
                height={40}
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1d3557"
                strokeWidth={1.75}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0z" />
              </svg>
              <h3>Adaptive Nutrition</h3>
              <p>Dial in your nutrition strategy with macros that adjust to your goals, energy availability and lifestyle.</p>
            </article>
            <article className="feature-card">
              <svg
                aria-hidden="true"
                width={40}
                height={40}
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1d3557"
                strokeWidth={1.75}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M8 21h8M12 17v4M7 4h10l1 9H6l1-9z" />
              </svg>
              <h3>Real-world Tools</h3>
              <p>Downloadable spreadsheets, exercise libraries, and coaching cues keep every workout efficient and focused.</p>
            </article>
          </div>
        </section>

        <section className="section" id="social-proof">
          <div className="section-heading">
            <h2>Loved by 75,000+ lifters worldwide</h2>
            <p>Social proof, testimonials, and ratings from real athletes and coaches using the system right now.</p>
          </div>
          <div className="testimonial-grid">
            <article className="testimonial-card">
              <p>
                “The Pyramids cut through the noise. I hit personal records in 12 weeks and finally understand why my training
                works.”
              </p>
              <div className="testimonial-author">
                <img
                  src="https://placehold.co/96x96"
                  alt="Photo of Jamie, intermediate athlete"
                  width={48}
                  height={48}
                  loading="lazy"
                />
                <div>
                  <strong>Jamie R.</strong>
                  <div>Intermediate athlete</div>
                </div>
              </div>
            </article>
            <article className="testimonial-card">
              <p>
                “My clients love the clarity. The periodisation ladder gives us the flexibility to build sustainable programs.”
              </p>
              <div className="testimonial-author">
                <img
                  src="https://placehold.co/96x96"
                  alt="Photo of Coach Malik"
                  width={48}
                  height={48}
                  loading="lazy"
                />
                <div>
                  <strong>Coach Malik</strong>
                  <div>Strength coach</div>
                </div>
              </div>
            </article>
            <article className="testimonial-card">
              <p>“Finally a resource that respects evidence and makes it simple to apply. The video walkthroughs are gold.”</p>
              <div className="testimonial-author">
                <img
                  src="https://placehold.co/96x96"
                  alt="Photo of Taylor, nutritionist"
                  width={48}
                  height={48}
                  loading="lazy"
                />
                <div>
                  <strong>Taylor W.</strong>
                  <div>Sports nutritionist</div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="section" id="cta">
          <div className="cta-banner">
            <h2>Ready to run your strongest program yet?</h2>
            <p>
              Choose the bundle that fits your goals and get instant access to downloads, video library, and private Q&amp;A
              sessions.
            </p>
            <div className="hero-actions" style={{ justifyContent: "center" }}>
              <Link className="btn btn-primary" href="/checkout" data-track="cta-primary">
                Buy the Bundle
              </Link>
              <a className="btn btn-secondary" href="/product#pricing">
                See pricing
              </a>
            </div>
            <div className="trust-badges" aria-label="Trusted and secure checkout">
              <span className="trust-badge">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.75}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 7l-8-4-8 4v5c0 5 3.4 9.9 8 11 4.6-1.1 8-6 8-11V7z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
                Secure checkout
              </span>
              <span className="trust-badge">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.75}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx={12} cy={12} r={10} />
                  <path d="M12 6v6l4 2" />
                </svg>
                30-day guarantee
              </span>
              <span className="trust-badge">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.75}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 13V7l-8-4-8 4v6a8 8 0 0 0 16 0z" />
                  <path d="M12 10a2 2 0 1 0 2 2 2 2 0 0 0-2-2z" />
                </svg>
                Trusted by pros
              </span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
