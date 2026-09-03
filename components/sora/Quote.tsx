
export default function Quote() {
  return (
    <section className="quote-section reveal">
      <div className="quote-mark" aria-hidden="true">
        “
      </div>

      <blockquote>
        <p>
          The goal isn&apos;t to do more.
          <br />
          It&apos;s to make more room for <em>what matters.</em>
        </p>

        <footer>
          <span className="quote-line"></span>
          <span>Sora philosophy</span>
        </footer>
      </blockquote>
    </section>
  );
}

