import React, { useState } from "react";
import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/data/portfolioData";
import confetti from "canvas-confetti";
import {
  Mail,
  Linkedin,
  Github,
  Instagram,
  Send,
  Sparkles,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";
import "./Contact.css";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="contact__section">
      <div className="contact__container">
        {/* Section Header */}
        <div className="contact__header">
          <div className="contact__badge">
            <MessageSquare className="contact__badge-icon" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="contact__title">
            Get In Touch
          </h2>
          <p className="contact__subtitle">
            Whether you have an exciting opportunity, a project collaboration, or just want to talk code — my inbox is always open!
          </p>
        </div>

        <div className="contact__content-wrapper">
          {/* Direct Links */}
          <div className="contact__card">
            <div>
              <h3 className="contact__card-heading">
                Let's build something extraordinary.
              </h3>
              <p className="contact__card-description">
                I am actively seeking software engineering roles, AI product development opportunities, and high-impact technical collaborations.
              </p>

              <div className="contact__links-list">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="contact__link-item contact__link-item--email"
                >
                  <div className="contact__link-icon-box contact__link-icon-box--purple">
                    <Mail className="contact__icon" />
                  </div>
                  <div>
                    <div className="contact__link-label">Direct Email</div>
                    <div className="contact__link-value">{PERSONAL_INFO.email}</div>
                  </div>
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="contact__link-item contact__link-item--linkedin"
                >
                  <div className="contact__link-icon-box contact__link-icon-box--blue">
                    <Linkedin className="contact__icon" />
                  </div>
                  <div>
                    <div className="contact__link-label">LinkedIn Profile</div>
                    <div className="contact__link-value">linkedin.com/in/sidhantkaushik</div>
                  </div>
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="contact__link-item contact__link-item--github"
                >
                  <div className="contact__link-icon-box contact__link-icon-box--neutral">
                    <Github className="contact__icon" />
                  </div>
                  <div>
                    <div className="contact__link-label">GitHub Repositories</div>
                    <div className="contact__link-value">github.com/sidkaushikkk</div>
                  </div>
                </a>

                <a
                  href={PERSONAL_INFO.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="contact__link-item contact__link-item--instagram"
                >
                  <div className="contact__link-icon-box contact__link-icon-box--pink">
                    <Instagram className="contact__icon" />
                  </div>
                  <div>
                    <div className="contact__link-label">Instagram Profile</div>
                    <div className="contact__link-value">instagram.com/sid.kaushikk_</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
