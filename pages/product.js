import Head from "next/head";
import Link from "next/link";

export default function Product() {
  return (
    <>
      <Head>
        <title>Product Details – Muscle &amp; Strength Pyramids</title>
      </Head>
      <main id="main">
        <section className="section">
          <div className="section-heading">
            <h1>Build a complete training and nutrition system</h1>
            <p>
              Choose the format that fits the way you learn. Every option includes lifetime updates and access to the private
              community Q&amp;A sessions.
            </p>
          </div>
          <div className="feature-grid">
            <article className="feature-card">
              <h3>Training Pyramid Guide</h3>
              <p>
                Periodised training frameworks, exercise selection guidance, and ready-to-use templates for lifters from
                beginner to elite. Includes strength, hypertrophy, and powerlifting tracks.
              </p>
              <ul className="pricing-features">
                <li>
                  <svg
                    aria-hidden="true"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2a9d8f"
                    strokeWidth={1.75}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  340+ page eBook with practical breakdowns
                </li>
                <li>
                  <svg
                    aria-hidden="true"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2a9d8f"
                    strokeWidth={1.75}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Video demos for main lifts &amp; accessory work
                </li>
                <li>
                  <svg
                    aria-hidden="true"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2a9d8f"
                    strokeWidth={1.75}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Printable progression tracker &amp; auto-regulation tools
                </li>
              </ul>
              <a className="btn btn-secondary" href="/checkout#training">
                Choose training guide
              </a>
            </article>
            <article className="feature-card">
              <h3>Nutrition Pyramid Guide</h3>
              <p>
                A deep dive into energy balance, macro timing, micronutrients, and behaviour change. Includes calculators and
                seasonal meal planning templates.
              </p>
              <ul className="pricing-features">
                <li>
                  <svg
                    aria-hidden="true"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2a9d8f"
                    strokeWidth={1.75}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Meal planning blueprints by goal and lifestyle
                </li>
                <li>
                  <svg
                    aria-hidden="true"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2a9d8f"
                    strokeWidth={1.75}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Habit coaching scripts and checklists
                </li>
                <li>
                  <svg
                    aria-hidden="true"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2a9d8f"
                    strokeWidth={1.75}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Macro &amp; calorie calculators with update tracker
                </li>
              </ul>
              <a className="btn btn-secondary" href="/checkout#nutrition">
                Choose nutrition guide
              </a>
            </article>
            <article className="feature-card">
              <h3>Ultimate Performance Bundle</h3>
              <p>
                Combine the training and nutrition guides plus the strategy call bonus. Save 20% and get aligned plans that cover
                every pillar of progress.
              </p>
              <ul className="pricing-features">
                <li>
                  <svg
                    aria-hidden="true"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2a9d8f"
                    strokeWidth={1.75}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Both eBooks + audiobook versions
                </li>
                <li>
                  <svg
                    aria-hidden="true"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2a9d8f"
                    strokeWidth={1.75}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Quarterly live coaching webinars &amp; replays
                </li>
                <li>
                  <svg
                    aria-hidden="true"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2a9d8f"
                    strokeWidth={1.75}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Bonus: 8-week accelerator program with templates
                </li>
              </ul>
              <Link className="btn btn-primary" href="/checkout#bundle" data-track="cta-primary">
                Best value bundle
              </Link>
            </article>
          </div>
        </section>

        <section className="section" id="pricing">
          <div className="section-heading">
            <h2>Flexible pricing for every goal</h2>
            <p>Pick the option that matches your needs today. Upgrade later with prorated pricing.</p>
          </div>
          <div className="pricing">
            <article className="pricing-card">
              <h3>Training Guide</h3>
              <div className="pricing-value">$79</div>
              <ul className="pricing-features">
                <li>
                  <svg
                    aria-hidden="true"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1d3557"
                    strokeWidth={1.75}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Strength &amp; hypertrophy programs
                </li>
                <li>
                  <svg
                    aria-hidden="true"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1d3557"
                    strokeWidth={1.75}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Exercise demo library access
                </li>
                <li>
                  <svg
                    aria-hidden="true"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1d3557"
                    strokeWidth={1.75}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Progress tracker spreadsheets
                </li>
              </ul>
              <a className="btn btn-secondary" href="/checkout#training">
                Get training guide
              </a>
            </article>
            <article className="pricing-card">
              <h3>Nutrition Guide</h3>
              <div className="pricing-value">$79</div>
              <ul className="pricing-features">
                <li>
                  <svg
                    aria-hidden="true"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1d3557"
                    strokeWidth={1.75}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Macro &amp; calorie calculators
                </li>
                <li>
                  <svg
                    aria-hidden="true"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1d3557"
                    strokeWidth={1.75}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Habit change playbooks
                </li>
                <li>
                  <svg
                    aria-hidden="true"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1d3557"
                    strokeWidth={1.75}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Recipe collection and meal prep toolkit
                </li>
              </ul>
              <a className="btn btn-secondary" href="/checkout#nutrition">
                Get nutrition guide
              </a>
            </article>
            <article className="pricing-card pricing-card--highlight">
              <h3>Ultimate Bundle</h3>
              <div className="pricing-value">$147</div>
              <ul className="pricing-features">
                <li>
                  <svg
                    aria-hidden="true"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#e63946"
                    strokeWidth={1.75}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Both guides + audiobook editions
                </li>
                <li>
                  <svg
                    aria-hidden="true"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#e63946"
                    strokeWidth={1.75}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Exclusive webinars &amp; coaching Q&amp;A
                </li>
                <li>
                  <svg
                    aria-hidden="true"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#e63946"
                    strokeWidth={1.75}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Seasonal program upgrades included
                </li>
              </ul>
              <Link className="btn btn-primary" href="/checkout#bundle" data-track="cta-primary">
                Buy ultimate bundle
              </Link>
            </article>
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <h2>What&apos;s inside every purchase</h2>
            <p>Confidently run your training and nutrition with assets made for busy lifters and coaches.</p>
          </div>
          <div className="timeline">
            <article>
              <h3>Evidence-based frameworks</h3>
              <p>Learn the hierarchy of priorities so you know where to focus and when to adjust.</p>
            </article>
            <article>
              <h3>Templates &amp; calculators</h3>
              <p>Download spreadsheets, calculators, and printable sheets that accelerate implementation.</p>
            </article>
            <article>
              <h3>Companion videos</h3>
              <p>Watch coaching walk-throughs that clarify programming decisions and cue execution.</p>
            </article>
            <article>
              <h3>Private community support</h3>
              <p>Join monthly Q&amp;A sessions, submit form checks, and learn from peers chasing similar goals.</p>
            </article>
          </div>
        </section>

        <section className="section">
          <div className="cta-banner">
            <h2>Prefer a quick overview?</h2>
            <p>Download the syllabus outlining every chapter, resource, and bonus in the Pyramid system.</p>
            <form className="form-grid" data-track="newsletter">
              <label className="sr-only" htmlFor="syllabus-email">
                Email
              </label>
              <input id="syllabus-email" type="email" name="email" placeholder="you@example.com" required autoComplete="email" />
              <button className="btn btn-primary" type="submit">
                Email me the syllabus
              </button>
            </form>
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <h2>Frequently bought with the Pyramids</h2>
            <p>Boost your progress with complementary coaching products from the team.</p>
          </div>
          <div className="card-grid">
            <article className="card">
              <h3>Powerlifting Meet Prep</h3>
              <p>12-week peaking plan with attempt selection, warm-ups, and strategy calls.</p>
              <a className="btn btn-secondary" href="#">
                Explore program
              </a>
            </article>
            <article className="card">
              <h3>Macro Masterclass</h3>
              <p>Deep dive video series on macro periodisation, refeeds, and contest prep strategy.</p>
              <a className="btn btn-secondary" href="#">
                Join the waitlist
              </a>
            </article>
            <article className="card">
              <h3>Coaching Business Toolkit</h3>
              <p>Systems, templates, and scripts for coaches building a sustainable practice.</p>
              <a className="btn btn-secondary" href="#">
                See details
              </a>
            </article>
          </div>
        </section>

        <section className="section">
          <div className="cta-banner">
            <h2>Ready to choose your guide?</h2>
            <p>Select the bundle that matches your current goal and start executing the plan today.</p>
            <div className="hero-actions" style={{ justifyContent: "center" }}>
              <Link className="btn btn-primary" href="/checkout" data-track="cta-primary">
                Buy now
              </Link>
              <a className="btn btn-secondary" href="/checkout#bundle">
                Compare bundles
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
