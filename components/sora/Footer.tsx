
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <a className="logo footer-logo" href="#" aria-label="Sora home">
            so<i>r</i>a
          </a>

          <p>
            A quieter space for
            <br />
            meaningful work.
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <span className="footer-label">Explore</span>
            <a href="#how">How it works</a>
            <a href="#features">Features</a>
            <a href="#journal">Journal</a>
            <a href="#faq">FAQ</a>
          </div>

          <div className="footer-column">
            <span className="footer-label">Connect</span>
            <a href="#">Instagram</a>
            <a href="#">Pinterest</a>
            <a href="#">LinkedIn</a>
            <a href="mailto:hello@sora.com">Email us</a>
          </div>

          <div className="footer-column">
            <span className="footer-label">Start</span>
            <a href="#start">Get started ↗</a>
            <a href="#newsletter">Newsletter</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Sora. All rights reserved.</span>

        <div className="footer-bottom-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>

        <a className="back-to-top" href="#">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}

