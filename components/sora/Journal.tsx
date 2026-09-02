
export default function Journal() {
  return (
    <section className="journal section reveal" id="journal">
      <div className="section-top">
        <span className="kicker">06 — Journal</span>

        <h2>Small thoughts. Meaningful shifts.</h2>
      </div>

      <div className="journal-grid">
        <article className="journal-card">
          <span className="journal-number">01</span>

          <h3>The art of doing less</h3>

          <p>
            Why creating space can sometimes be more productive than filling
            it.
          </p>

          <a href="#">Read article ↗</a>
        </article>

        <article className="journal-card">
          <span className="journal-number">02</span>

          <h3>Attention is a practice</h3>

          <p>
            A gentler approach to focus, creativity, and meaningful work.
          </p>

          <a href="#">Read article ↗</a>
        </article>

        <article className="journal-card">
          <span className="journal-number">03</span>

          <h3>Making room for ideas</h3>

          <p>
            Give your best ideas enough space to become something real.
          </p>

          <a href="#">Read article ↗</a>
        </article>
      </div>
    </section>
  );
}

