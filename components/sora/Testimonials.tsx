
export default function Testimonials() {
  return (
    <section className="section testimonials-section reveal" id="stories">
      <div className="section-top">
        <span className="kicker">05 — Stories</span>

        <h2>Different people. A quieter way to work.</h2>
      </div>

      <div className="testimonial-grid">
        <article className="testimonial">
          <div className="testimonial-stars">★★★★★</div>

          <p>
            &quot;I stopped opening ten tabs before breakfast. Sora gives me
            permission to start with just one thing.&quot;
          </p>

          <div className="person">
            <span>MC</span>

            <div>
              <strong>Maya Chen</strong>
              <small>Independent Designer</small>
            </div>
          </div>
        </article>

        <article className="testimonial">
          <div className="testimonial-stars">★★★★★</div>

          <p>
            &quot;The biggest change wasn&apos;t getting more done. It was
            finally enjoying the work I was already doing.&quot;
          </p>

          <div className="person">
            <span>JA</span>

            <div>
              <strong>Jon Avery</strong>
              <small>Creative Director</small>
            </div>
          </div>
        </article>

        <article className="testimonial">
          <div className="testimonial-stars">★★★★★</div>

          <p>
            &quot;Sora feels like a small room where my thoughts can finally
            breathe.&quot;
          </p>

          <div className="person">
            <span>SR</span>

            <div>
              <strong>Sofia Reyes</strong>
              <small>Writer &amp; Artist</small>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

