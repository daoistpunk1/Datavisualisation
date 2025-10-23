import Head from "next/head";
import Link from "next/link";

export default function FAQ() {
  return (
    <>
      <Head>
        <title>FAQ – Muscle &amp; Strength Pyramids</title>
      </Head>
      <main id="main">
        <section className="section">
          <div className="section-heading">
            <h1>Frequently asked questions</h1>
            <p>
              Everything you need to know about the Muscle &amp; Strength Pyramids before you start your next training block.
            </p>
          </div>
          <div className="faq-list">
            <article className="faq-item">
              <h3>How are the books delivered?</h3>
              <p>
                Immediately after purchase you will get a download link to the ePub, PDF, and audiobook versions. You also
                receive a login to the resource portal where all templates, calculators, and video modules live.
              </p>
            </article>
            <article className="faq-item">
              <h3>Do I need both guides?</h3>
              <p>
                You can start with either the Training or Nutrition guide. When you are ready to upgrade, we automatically deduct
                what you have already paid so you only pay the difference to unlock the bundle extras.
              </p>
            </article>
            <article className="faq-item">
              <h3>Is there coaching support?</h3>
              <p>
                Absolutely. Bundle purchasers get access to quarterly live webinars and coaching office hours. Single-guide buyers
                can join for a discounted add-on when they are ready for more accountability.
              </p>
            </article>
            <article className="faq-item">
              <h3>What if I am a beginner?</h3>
              <p>
                The Pyramid model is designed to meet you where you are. Each chapter highlights the core priorities for novices,
                intermediates, and advanced athletes so you know exactly where to focus.
              </p>
            </article>
            <article className="faq-item">
              <h3>Do you offer refunds?</h3>
              <p>
                Yes. Try the guides risk-free for 30 days. If you are not satisfied, email support@pyramids.fit and we will process
                a full refund—no hoops to jump through.
              </p>
            </article>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="cta-banner">
            <h2>Still have questions?</h2>
            <p>Our support team typically replies within 12 hours. We are here to make sure the Pyramids are the right fit.</p>
            <div className="hero-actions" style={{ justifyContent: "center" }}>
              <a className="btn btn-primary" href="mailto:support@pyramids.fit" data-track="cta-support">
                Email support
              </a>
              <Link className="btn btn-secondary" href="/product">
                Review product details
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
