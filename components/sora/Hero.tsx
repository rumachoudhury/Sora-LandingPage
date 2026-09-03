
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="eyebrow">
          <span className="dot"></span>
          A quieter kind of productivity
        </div>

        <h1>
          Make room for <em>what matters.</em>
        </h1>

        <p className="hero-description">
          Sora is a mindful workspace for your ideas, intentions, and the work
          that brings you alive.
        </p>

        <div className="hero-actions">
          <a className="button button-dark" href="#start">
            Begin your practice <span aria-hidden="true">↗</span>
          </a>

          <a className="text-link" href="#how">
            See how it works
          </a>
        </div>
      </div>

      {/* CSS ARTWORK */}
      <div className="art" aria-hidden="true">
        <div className="shape sun"></div>
        <div className="shape orange"></div>

        <div className="orbit"></div>

        <div className="arch">
          <div className="arch-circle"></div>
          <div className="arch-line"></div>
        </div>

        <div className="shape black"></div>

        <div className="note">
          <span className="note-label">Today, gently</span>

          <strong>
            One thing
            <br />
            at a time.
          </strong>

          <span className="note-description">
            Take a breath. Begin here.
          </span>
        </div>
      </div>
    </section>
  );
}

