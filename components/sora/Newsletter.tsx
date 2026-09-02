
"use client";

import { FormEvent, useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.trim()) return;

    setSubmitted(true);
    setEmail("");
  }

  return (
    <section className="newsletter-section section reveal" id="newsletter">
      <div className="newsletter-content">
        <span className="kicker">08 — Stay awhile</span>

        <h2>
          A little more <em>space</em> for your inbox.
        </h2>

        <p>
          Receive occasional notes about intentional work, creativity, and
          making room for what matters.
        </p>

        {submitted ? (
          <p className="newsletter-success">
            Thank you. You&apos;re on the list.
          </p>
        ) : (
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              aria-label="Email address"
              required
            />

            <button type="submit" className="button button-dark">
              Subscribe <span aria-hidden="true">↗</span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

