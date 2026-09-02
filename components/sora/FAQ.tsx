
"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is Sora?",
    answer:
      "Sora is a mindful workspace designed to help you organize your thoughts, focus on meaningful work, and create more intentional days.",
  },
  {
    question: "Who is Sora for?",
    answer:
      "Sora is for creators, designers, entrepreneurs, students, and anyone who wants a calmer and more intentional way to work.",
  },
  {
    question: "How does Sora help me focus?",
    answer:
      "Instead of overwhelming you with endless tasks, Sora encourages you to choose one meaningful priority and create space around it.",
  },
  {
    question: "Can I use Sora every day?",
    answer:
      "Yes. Sora is designed around a simple daily rhythm: set an intention, create with focus, and end the day with reflection.",
  },
];

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="faq-section section reveal" id="faq">
      <div className="faq-heading">
        <span className="kicker">07 — FAQ</span>

        <h2>
          Questions,
          <br />
          answered <em>gently.</em>
        </h2>
      </div>

      <div className="faq-list">
        {faqs.map((faq, index) => {
          const isOpen = openFaq === index;

          return (
            <article
              className={`faq-item ${isOpen ? "faq-open" : ""}`}
              key={faq.question}
            >
              <button
                type="button"
                onClick={() => setOpenFaq(isOpen ? null : index)}
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>

                <span className="faq-plus" aria-hidden="true">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {isOpen && (
                <p className="faq-answer">
                  {faq.answer}
                </p>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}

