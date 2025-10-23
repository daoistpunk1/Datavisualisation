import Head from "next/head";

export default function Checkout() {
  return (
    <>
      <Head>
        <title>Checkout – Muscle &amp; Strength Pyramids</title>
      </Head>
      <main id="main">
        <section className="section">
          <div className="section-heading">
            <h1>Secure checkout</h1>
            <p>Complete your order and unlock instant access to the guides, calculators, and private community.</p>
          </div>
          <div className="checkout" id="checkout">
            <form className="checkout-card" data-track="checkout-form">
              <h2>Billing information</h2>
              <div className="form-grid">
                <label htmlFor="full-name">Full name</label>
                <input id="full-name" type="text" name="name" autoComplete="name" required />
                <label htmlFor="email">Email address</label>
                <input id="email" type="email" name="email" autoComplete="email" required />
                <label htmlFor="country">Country</label>
                <select id="country" name="country" autoComplete="country" required defaultValue="">
                  <option value="" disabled>
                    Select your country
                  </option>
                  <option value="us">United States</option>
                  <option value="ca">Canada</option>
                  <option value="uk">United Kingdom</option>
                  <option value="au">Australia</option>
                  <option value="eu">European Union</option>
                  <option value="other">Other</option>
                </select>
                <label htmlFor="plan">Choose your plan</label>
                <select id="plan" name="plan" required defaultValue="bundle">
                  <option value="bundle">Ultimate Bundle – $147</option>
                  <option value="training">Training Guide – $79</option>
                  <option value="nutrition">Nutrition Guide – $79</option>
                </select>
              </div>
              <h2>Payment details</h2>
              <div className="form-grid">
                <label htmlFor="card-number">Card number</label>
                <input
                  id="card-number"
                  type="text"
                  name="cardNumber"
                  inputMode="numeric"
                  autoComplete="cc-number"
                  placeholder="1234 5678 9012 3456"
                  required
                />
                <label htmlFor="expiry">Expiry</label>
                <input
                  id="expiry"
                  type="text"
                  name="expiry"
                  inputMode="numeric"
                  autoComplete="cc-exp"
                  placeholder="MM/YY"
                  required
                />
                <label htmlFor="cvc">CVC</label>
                <input
                  id="cvc"
                  type="text"
                  name="cvc"
                  inputMode="numeric"
                  autoComplete="cc-csc"
                  placeholder="123"
                  required
                />
              </div>
              <button className="btn btn-primary" type="submit" data-track="checkout-submit">
                Complete purchase
              </button>
              <p style={{ color: "var(--color-muted)", fontSize: "0.9rem", marginTop: "1rem" }}>
                By completing your purchase you agree to the <a href="#">terms of service</a> and <a href="#">privacy policy</a>.
              </p>
            </form>
            <aside className="checkout-card" aria-label="Order summary">
              <h2>Order summary</h2>
              <ul className="summary-list">
                <li>
                  <strong>Ultimate Performance Bundle</strong>
                  <div>Training + Nutrition Guides, video library, live Q&amp;A access</div>
                </li>
                <li>Instant digital delivery</li>
                <li>Lifetime updates included</li>
                <li>30-day money-back guarantee</li>
              </ul>
              <div className="summary-total">
                <span>Total due</span>
                <span>$147</span>
              </div>
              <div className="trust-badges" aria-label="Payment security">
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
                  SSL secure
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
                  Instant access
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
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                  Money-back guarantee
                </span>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
}
