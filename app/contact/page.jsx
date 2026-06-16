"use client";
import { useState } from "react";

export default function Contact() {
  return (
    <>
      <section className="contact-hero">
        <div className="container">
          <p className="section-label mx-auto" style={{justifyContent:"center"}}>Contact</p>
          <h1 style={{fontSize:"clamp(1.8rem, 4vw, 2.8rem)", fontWeight:800, letterSpacing:"-0.03em", marginBottom:12}}>
            We're here to help
          </h1>
          <p style={{fontSize:17, color:"var(--gray-500)", maxWidth:460, margin:"0 auto"}}>
            Question about the product, need help setting up, or want to talk before signing up — just reach out.
          </p>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div className="contact-grid">

            {/* Form */}
            <ContactForm />

            {/* Info */}
            <div className="contact-info">
              <div className="contact-card">
                <div className="contact-card-icon">✉️</div>
                <div>
                  <h3>Email us</h3>
                  <p>For support, billing, or anything else:</p>
                  <a href="mailto:support@replaito.com">support@replaito.com</a>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-card-icon">💬</div>
                <div>
                  <h3>WhatsApp us</h3>
                  <p>Fastest way to reach us — we usually reply within a few hours.</p>
                  <a
                    href="https://wa.me/message/replaito"
                    className="wa-contact-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>💬</span> Chat on WhatsApp
                  </a>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-card-icon">🚀</div>
                <div>
                  <h3>Ready to start?</h3>
                  <p>Skip the wait — sign up and try Replaito free for 7 days.</p>
                  <a
                    href="https://app.replaito.com/register"
                    className="btn btn-primary btn-sm"
                    style={{marginTop:12, display:"inline-flex"}}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Start free trial →
                  </a>
                </div>
              </div>

              <div style={{padding:"20px 24px", borderRadius:"var(--radius)", background:"var(--gray-50)", border:"1px solid var(--gray-100)"}}>
                <p style={{fontSize:13, color:"var(--gray-500)", lineHeight:1.6}}>
                  <strong style={{color:"var(--gray-700)"}}>Response time:</strong> We aim to reply within 4 hours during business hours (9am–8pm IST, Mon–Sat). WhatsApp is fastest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", business: "", message: "" });
  const [status, setStatus] = useState(""); // "sending" | "sent" | "error"

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    // In production: POST to /api/contact or a form service like Formspree
    // For now simulate success after 1s
    setTimeout(() => setStatus("sent"), 1000);
  };

  if (status === "sent") {
    return (
      <div className="contact-form" style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", minHeight:320, textAlign:"center"}}>
        <div style={{fontSize:48, marginBottom:16}}>✅</div>
        <h2 style={{marginBottom:8, fontSize:20}}>Message received!</h2>
        <p style={{fontSize:14}}>We'll get back to you within a few hours. Check your WhatsApp too — we may follow up there.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Send us a message</h2>
      <div className="form-group">
        <label>Your name</label>
        <input required placeholder="Priya Krishnan" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
      </div>
      <div className="form-group">
        <label>Email address</label>
        <input required type="email" placeholder="priya@djcakehouse.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
      </div>
      <div className="form-group">
        <label>Business name</label>
        <input placeholder="DJ Cakehouse" value={form.business} onChange={e => setForm({...form, business: e.target.value})} />
      </div>
      <div className="form-group">
        <label>How can we help?</label>
        <textarea required placeholder="I'd like to know more about..." value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        style={{width:"100%", justifyContent:"center", opacity: status==="sending" ? 0.7 : 1}}
        disabled={status==="sending"}
      >
        {status === "sending" ? "Sending..." : "Send message →"}
      </button>
    </form>
  );
}