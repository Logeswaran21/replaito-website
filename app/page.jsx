export default function Home() {
  return (
    <>
      <Hero />
      <Trust />
      <Features />
      <HowItWorks />
      <Testimonial />
      <BusinessTypes />
      <CtaBanner />
    </>
  );
}

/* ── HERO ──────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div>
          <div className="hero-eyebrow">
            <span>🟢</span> WhatsApp AI — built for India
          </div>
          <h1>Your AI Employee<br />for WhatsApp</h1>
          <p className="hero-sub">
            Automatically reply to customers, qualify leads, and hand off to your team when needed — all from one inbox.
          </p>
          <div className="hero-actions">
            <a href="https://app.replaito.com/register" className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">
              Start free trial →
            </a>
            <a href="/pricing" className="btn btn-outline btn-lg" style={{ borderColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.7)" }}>
              See pricing
            </a>
          </div>
          <p className="hero-note">7-day free trial · No credit card required · Cancel anytime</p>
        </div>

        {/* WhatsApp chat mock — signature element */}
        <div className="wa-mock">
          <div className="wa-header">
            <div className="wa-avatar">DJ</div>
            <div className="wa-header-info">
              <div className="wa-header-name">DJ Cakehouse</div>
              <div className="wa-header-status">online</div>
            </div>
          </div>
          <div className="wa-body">
            <div className="wa-msg wa-incoming">
              Hai, vanilla cake 1kg cost enna?
              <div className="wa-msg-time">10:32 AM</div>
            </div>
            <div className="wa-msg wa-outgoing">
              <div className="wa-ai-badge">🤖 Replaito AI</div>
              <div>Vanilla cake 1kg ₹850 🎂</div>
              <div style={{marginTop: 6}}>Customised design, photo print ellam possible! Design list pathkalama?</div>
              <div className="wa-msg-time">10:32 AM ✓✓</div>
            </div>
            <div className="wa-msg wa-incoming">
              Yes please! Also need for Saturday
              <div className="wa-msg-time">10:33 AM</div>
            </div>
            <div className="wa-msg wa-outgoing">
              <div className="wa-ai-badge">🤖 Replaito AI</div>
              <div>Saturday order possible! 😊</div>
              <div style={{marginTop: 6}}>Name, design preference, and delivery or pickup — confirm pannunga. Owner confirm panniduvaanga within 30 mins!</div>
              <div className="wa-msg-time">10:33 AM ✓✓</div>
            </div>
            <div className="wa-msg wa-incoming">
              Pickup. Name: Priya
              <div className="wa-msg-time">10:34 AM</div>
            </div>
            <div className="wa-msg wa-outgoing">
              <div className="wa-ai-badge">🤖 Replaito AI</div>
              <div>Got it Priya! 🎉 Order noted — Owner will confirm soon. Thank you!</div>
              <div className="wa-msg-time">10:34 AM ✓✓</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── TRUST ─────────────────────────────────────────────────── */
function Trust() {
  const types = ["Bakeries", "Salons", "Clinics", "Coaching", "Restaurants", "Return Gifts", "E-commerce"];
  return (
    <div className="trust">
      <div className="container">
        <p className="trust-label">Trusted by Indian small businesses across</p>
        <div className="trust-logos">
          {types.map(t => <span key={t} className="trust-pill">{t}</span>)}
        </div>
      </div>
    </div>
  );
}

/* ── FEATURES ──────────────────────────────────────────────── */
function Features() {
  const features = [
    { icon: "🤖", title: "AI that speaks your customer's language", body: "Replies in Tamil, Hindi, or English — even Tanglish — based on how your customer writes. No awkward bot-speak." },
    { icon: "📥", title: "One inbox for your whole team", body: "Agents see all conversations across WhatsApp, Instagram, and Facebook. Assign, handoff, and reply from one place." },
    { icon: "⚡", title: "Keyword templates for instant answers", body: "\"Price\", \"menu\", \"timings\" — common questions auto-answered in seconds. Free your team for conversations that need a human." },
    { icon: "📋", title: "Order & booking capture", body: "AI collects the details — name, preference, date — and structures them for your team. No more chasing customers for basic info." },
    { icon: "📣", title: "Broadcast to contacts", body: "Send offers, reminders, and updates to your WhatsApp contacts. Segment by tag — not everyone needs every message." },
    { icon: "📊", title: "Pipeline CRM built in", body: "Every lead captured by AI lands in your pipeline. Track from inquiry to sale — no separate CRM needed." },
  ];
  return (
    <section className="section">
      <div className="container">
        <div className="text-center">
          <p className="section-label">Features</p>
          <h2 className="section-title">Everything a WhatsApp-first business needs</h2>
          <p className="section-sub mx-auto">Not a generic chatbot. Replaito is built around how Indian SMBs actually use WhatsApp — high volume, mixed languages, price enquiries, and order taking.</p>
        </div>
        <div className="features-grid">
          {features.map(f => (
            <div key={f.title} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p style={{marginTop: 8, fontSize: 14}}>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── HOW IT WORKS ──────────────────────────────────────────── */
function HowItWorks() {
  const steps = [
    { title: "Connect your WhatsApp Business number", body: "Takes under 5 minutes. Your existing number, existing contacts — nothing changes for your customers." },
    { title: "Set up your AI with your business details", body: "Tell the AI your products, prices, and how you want to respond. Use our suggested prompts or write your own." },
    { title: "AI handles the routine, you focus on closing", body: "Price questions, timings, availability — AI replies instantly, 24/7. You step in for the conversations that need you." },
    { title: "Track everything from one dashboard", body: "Every conversation, lead, and order captured. Your team stays in sync without WhatsApp group chaos." },
  ];
  return (
    <section className="section how-bg">
      <div className="container">
        <div className="text-center">
          <p className="section-label section-label-dark">How it works</p>
          <h2 className="section-title section-title-dark">Up and running in an afternoon</h2>
          <p className="section-sub section-sub-dark mx-auto">No technical setup. No developer needed. If you can use WhatsApp, you can set up Replaito.</p>
        </div>
        <div className="steps">
          {steps.map((step, i) => (
            <div key={step.title} className="step">
              <div className="step-num">{i + 1}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── TESTIMONIAL ───────────────────────────────────────────── */
function Testimonial() {
  return (
    <section className="section testimonial-section">
      <div className="container">
        <div className="text-center">
          <p className="section-label">Customer stories</p>
          <h2 className="section-title">Real businesses, real results</h2>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-stars">★★★★★</div>
          <p className="testimonial-quote">
            "Before Replaito, I was replying to the same cake price questions 40-50 times a day on WhatsApp. Now the AI handles all of it — even takes the order details. I just confirm and bake. Saturday orders used to stress me out; now I wake up to a full order list already captured."
          </p>
          <div className="testimonial-author">
            <div className="testimonial-avatar">D</div>
            <div>
              <div className="testimonial-name">DJ Cakehouse</div>
              <div className="testimonial-biz">Custom Cake Business, Chennai</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── BUSINESS TYPES ────────────────────────────────────────── */
function BusinessTypes() {
  const types = [
    { icon: "🎂", label: "Bakeries & Home Bakers" },
    { icon: "💇", label: "Salons & Spas" },
    { icon: "🏥", label: "Clinics & Hospitals" },
    { icon: "📚", label: "Coaching & Tuition" },
    { icon: "🍽️", label: "Restaurants" },
    { icon: "🎁", label: "Return Gifts" },
    { icon: "🛍️", label: "E-commerce & D2C" },
    { icon: "🏠", label: "Real Estate" },
  ];
  return (
    <section className="section" style={{paddingTop: 0}}>
      <div className="container text-center">
        <p className="section-label">Who it's for</p>
        <h2 className="section-title">Built for every WhatsApp-first business</h2>
        <p className="section-sub mx-auto">If your customers message you on WhatsApp to ask price, book, or order — Replaito is for you.</p>
        <div className="biz-grid">
          {types.map(t => (
            <div key={t.label} className="biz-pill">
              <span>{t.icon}</span> {t.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CTA BANNER ────────────────────────────────────────────── */
function CtaBanner() {
  return (
    <section className="cta-banner">
      <div className="container">
        <h2>Stop replying manually.<br />Start growing.</h2>
        <p>Join Indian small businesses already using Replaito to handle WhatsApp automatically.</p>
        <a href="https://app.replaito.com/register" className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">
          Start your free trial →
        </a>
        <p style={{marginTop: 16, fontSize: 13, color: "rgba(255,255,255,0.25)", position: "relative"}}>
          7-day free trial · No credit card · Cancel anytime
        </p>
      </div>
    </section>
  );
}