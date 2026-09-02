
export default function About() {
  return (
    <section className="about-section reveal" id="about">
      <div className="about-art" aria-hidden="true">
        <div className="about-circle"></div>
        <div className="about-square"></div>
        <div className="about-line"></div>

        <div className="about-card">
          <span>YOUR SPACE</span>
          <strong>Think slowly.</strong>
          <strong>Create deeply.</strong>
        </div>
      </div>

      <div className="about-content">
        <span className="kicker">02 — About Sora</span>

        <h2>
          Productivity doesn&apos;t have to feel <em>productive.</em>
        </h2>

        <p>
          We built Sora around a simple belief: your attention is valuable.
          Your best work needs space, not more noise.
        </p>

        <p>
          Sora gives you a calmer place to collect ideas, choose what matters,
          and move through your day with intention.
        </p>

        <a className="text-link" href="#start">
          Discover Sora <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}

