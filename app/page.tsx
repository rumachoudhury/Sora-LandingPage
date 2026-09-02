// import Hero from "@/components/sora/ Hero";
// import Navbar from "@/components/sora/Navbar";

// const journalEntries = [
//   { number: "01", title: "The art of doing less", description: "Why creating space can sometimes be more productive than filling it." },
//   { number: "02", title: "Attention is a practice", description: "A gentler approach to focus, creativity, and meaningful work." },
//   { number: "03", title: "Making room for ideas", description: "Give your best ideas enough space to become something real." },
// ];

// export default function Home() {
//   return (
//     <>
//       <Navbar />
//       <main>
//         <Hero />

//         <div className="marquee" aria-hidden="true">
//           <div className="marquee-track">
//             <span>LESS NOISE</span><b>✦</b><span>MORE PRESENCE</span><b>✦</b>
//             <span>LESS NOISE</span><b>✦</b><span>MORE PRESENCE</span><b>✦</b>
//             <span>LESS NOISE</span><b>✦</b><span>MORE PRESENCE</span><b>✦</b>
//           </div>
//         </div>

//         <section className="section" id="how">
//           <div className="section-top">
//             <span className="kicker">01 — The Sora way</span>
//             <h2>A space for ideas,<br />without the noise.</h2>
//           </div>
//           <div className="features">
//             <article className="feature">
//               <span className="number">01 / 03</span>
//               <div className="feature-content">
//                 <h3>Start with intention</h3>
//                 <p>Begin each day with one clear purpose and one meaningful priority. Less pressure, more focus.</p>
//               </div>
//             </article>
//             <article className="feature">
//               <span className="number">02 / 03</span>
//               <div className="feature-content">
//                 <h3>Create breathing room</h3>
//                 <p>Give your projects space to grow, connect ideas, and unfold naturally.</p>
//               </div>
//             </article>
//             <article className="feature">
//               <span className="number">03 / 03</span>
//               <div className="feature-content">
//                 <h3>End with reflection</h3>
//                 <p>Close the day with a quiet moment to reflect, reset, and start tomorrow feeling lighter.</p>
//               </div>
//             </article>
//           </div>
//         </section>

//         <section className="quote" id="stories">
//           <div className="quote-inner">
//             <span className="quote-mark">“</span>
//             <blockquote>Sora helped me stop treating my attention like an unlimited resource.</blockquote>
//             <cite>— Maya Chen, independent designer</cite>
//           </div>
//         </section>

//         <section className="journal section" id="journal">
//           <div className="section-top">
//             <span className="kicker">02 — Journal</span>
//             <h2>Small thoughts.<br />Meaningful shifts.</h2>
//           </div>
//           <div className="journal-grid">
//             {journalEntries.map((entry) => (
//               <article className="journal-card" key={entry.number}>
//                 <span className="journal-number">{entry.number}</span>
//                 <h3>{entry.title}</h3>
//                 <p>{entry.description}</p>
//                 <a href="#journal">Read article ↗</a>
//               </article>
//             ))}
//           </div>
//         </section>

//         <section className="cta" id="start">
//           <div className="cta-content">
//             <span className="kicker">03 — Begin</span>
//             <h2>Your time is yours.<br /><em>Spend it beautifully.</em></h2>
//           </div>
//           <a className="button button-dark cta-button" href="mailto:hello@example.com?subject=Join%20Sora">
//             Join the waitlist <span aria-hidden="true">↗</span>
//           </a>
//         </section>
//       </main>

//       <footer className="footer">
//         <span>© 2026 Sora Studio</span>
//         <span>Made for more intentional days</span>
//         <div className="footer-links">
//           <a href="#journal">Instagram</a>
//           <a href="#journal">LinkedIn</a>
//         </div>
//       </footer>
//     </>
//   );
// }

// =======

import Hero from "@/components/sora/ Hero";
import Marquee from "@/components/sora/Marquee";
import Navbar from "@/components/sora/Navbar";
import HowItWorks from "@/components/sora/HowItWorks";
import About from "@/components/sora/About";
import Features from "@/components/sora/Features";
import DailyPractice from "@/components/sora/DailyPractice";
import Testimonials from "@/components/sora/Testimonials";
import Journal from "@/components/sora/Journal";




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
      </main>
    </>
  );
}