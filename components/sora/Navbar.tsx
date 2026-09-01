```tsx
export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="nav" aria-label="Main navigation">
        <a className="logo" href="#" aria-label="Sora home">
          so<i>r</i>a
        </a>

        <div className="nav-links">
          <a href="#how">How it works</a>
          <a href="#features">Features</a>
          <a href="#journal">Journal</a>
          <a href="#faq">FAQ</a>

          <a className="button button-outline" href="#start">
            Get Started
          </a>
        </div>
      </nav>
    </header>
  );
}
```
