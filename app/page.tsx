// import "./globals.css";

// export default function Home() {
//   return (
//     <>
//       {/* Navigation */}
//       <header className="site-header">
//         <nav className="nav" aria-label="Main navigation">
//           <a className="logo" href="#" aria-label="Sora home">
//             so<i>r</i>a
//           </a>

//           <div className="nav-links">
//             <a href="#how">How it works</a>
//             <a href="#stories">Stories</a>
//             <a href="#journal">Journal</a>
//             <a className="button button-outline" href="#start">
//               Get Started
//             </a>
//           </div>
//         </nav>
//       </header>

//       <main>
//         {/* Hero */}
//         <section className="hero">
//           <div className="hero-content">
//             <div className="eyebrow">
//               <span className="dot"></span>
//               A quieter kind of productivity
//             </div>

//             <h1>
//               Make room for
//               <em>what matters.</em>
//             </h1>

//             <p className="hero-description">
//               Sora is a mindful workspace for your ideas,
//               intentions, and the work that brings you alive.
//             </p>

//             <div className="hero-actions">
//               <a className="button button-dark" href="#start">
//                 Begin your practice
//                 <span aria-hidden="true">↗</span>
//               </a>

//               <a className="text-link" href="#how">
//                 See how it works
//               </a>
//             </div>
//           </div>

//           {/* Abstract Artwork */}
//           <div className="art" aria-hidden="true">
//             <div className="shape sun"></div>
//             <div className="shape orange"></div>
//             <div className="orbit"></div>

//             <div className="arch">
//               <div className="arch-circle"></div>
//               <div className="arch-line"></div>
//             </div>

//             <div className="shape black"></div>

//             <div className="note">
//               <span className="note-label">Today, gently</span>

//               <strong>
//                 One thing
//                 <br />
//                 at a time.
//               </strong>

//               <span className="note-description">
//                 Take a breath. Begin here.
//               </span>
//             </div>
//           </div>
//         </section>

//         {/* Marquee */}
//         <div className="marquee" aria-hidden="true">
//           <div className="marquee-track">
//             <span>LESS NOISE</span>
//             <b>✦</b>

//             <span>MORE PRESENCE</span>
//             <b>✦</b>

//             <span>LESS NOISE</span>
//             <b>✦</b>

//             <span>MORE PRESENCE</span>
//             <b>✦</b>

//             <span>LESS NOISE</span>
//             <b>✦</b>

//             <span>MORE PRESENCE</span>
//             <b>✦</b>
//           </div>
//         </div>

//         {/* How It Works */}
//         <section className="section reveal" id="how">
//           <div className="section-top">
//             <span className="kicker">01 — The Sora way</span>

//             <h2>
//               A space for ideas,
//               <br />
//               without the noise.
//             </h2>
//           </div>

//           <div className="features">
//             <article className="feature">
//               <span className="number">01 / 03</span>

//               <div className="feature-content">
//                 <h3>Start with intention</h3>

//                 <p>
//                   Begin each day with one clear purpose
//                   and one meaningful priority.
//                   Less pressure, more focus.
//                 </p>
//               </div>
//             </article>

//             <article className="feature">
//               <span className="number">02 / 03</span>

//               <div className="feature-content">
//                 <h3>Create breathing room</h3>

//                 <p>
//                   Give your projects space to grow,
//                   connect ideas, and unfold naturally.
//                 </p>
//               </div>
//             </article>

//             <article className="feature">
//               <span className="number">03 / 03</span>

//               <div className="feature-content">
//                 <h3>End with reflection</h3>

//                 <p>
//                   Close the day with a quiet moment
//                   to reflect, reset, and start tomorrow
//                   feeling lighter.
//                 </p>
//               </div>
//             </article>
//           </div>
//         </section>

//         {/* Quote */}
//         <section className="quote reveal" id="stories">
//           <div className="quote-inner">
//             <span className="quote-mark">“</span>

//             <blockquote>
//               Sora helped me stop treating my attention
//               like an unlimited resource.
//             </blockquote>

//             <cite>
//               — Maya Chen, independent designer
//             </cite>
//           </div>
//         </section>

//         {/* Journal */}
//         <section className="journal section reveal" id="journal">
//           <div className="section-top">
//             <span className="kicker">02 — Journal</span>

//             <h2>
//               Small thoughts.
//               <br />
//               Meaningful shifts.
//             </h2>
//           </div>

//           <div className="journal-grid">
//             <article className="journal-card">
//               <span className="journal-number">01</span>

//               <h3>The art of doing less</h3>

//               <p>
//                 Why creating space can sometimes
//                 be more productive than filling it.
//               </p>

//               <a href="#">Read article ↗</a>
//             </article>

//             <article className="journal-card">
//               <span className="journal-number">02</span>

//               <h3>Attention is a practice</h3>

//               <p>
//                 A gentler approach to focus,
//                 creativity, and meaningful work.
//               </p>

//               <a href="#">Read article ↗</a>
//             </article>

//             <article className="journal-card">
//               <span className="journal-number">03</span>

//               <h3>Making room for ideas</h3>

//               <p>
//                 Give your best ideas enough space
//                 to become something real.
//               </p>

//               <a href="#">Read article ↗</a>
//             </article>
//           </div>
//         </section>

//         {/* CTA */}
//         <section className="cta reveal" id="start">
//           <div className="cta-content">
//             <span className="kicker">03 — Begin</span>

//             <h2>
//               Your time is yours.
//               <em>Spend it beautifully.</em>
//             </h2>
//           </div>

//           <a
//             className="button button-dark cta-button"
//             href="mailto:hello@example.com?subject=Join%20Sora"
//           >
//             Join the waitlist
//             <span aria-hidden="true">↗</span>
//           </a>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="footer">
//         <span>© 2026 Sora Studio</span>

//         <span>Made for more intentional days</span>

//         <div className="footer-links">
//           <a href="#">Instagram</a>
//           <a href="#">LinkedIn</a>
//         </div>
//       </footer>
//     </>
//   );
// }

// =================

import Hero from "@/components/sora/Hero";
import Marquee from "@/components/sora/Marquee";
import HowItWorks from "@/components/sora/HowItWorks";
import About from "@/components/sora/About";
import Features from "@/components/sora/Features";
import DailyPractice from "@/components/sora/DailyPractice";
import Testimonials from "@/components/sora/Testimonials";
import Journal from "@/components/sora/Journal";
import FAQ from "@/components/sora/FAQ";
import Newsletter from "@/components/sora/Newsletter";
import CTA from "@/components/sora/CTA";
import Footer from "@/components/sora/Footer";
import Navbar from "@/components/sora/Navbar";


export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <HowItWorks />
        <About />
        <Features />
        <DailyPractice />
        <Testimonials />
        <Journal />
        <FAQ />
        <Newsletter />
        <CTA />
      </main>
      <Footer />
    </>
  );
}