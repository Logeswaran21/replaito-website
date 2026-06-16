export const metadata = {
  title: "Pricing — Replaito",
  description: "Simple, honest pricing for WhatsApp AI automation. Starter ₹999/mo, Growth ₹1,999/mo. 7-day free trial.",
};

export default function Pricing() {
  return (
    <>
      <section className="pricing-hero">
        <div className="container">
          <p className="section-label mx-auto" style={{justifyContent: "center"}}>Pricing</p>
          <h1 style={{fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 12}}>
            Simple pricing. No hidden fees.
          </h1>
          <p style={{fontSize: 17, color: "var(--gray-500)", maxWidth: 480, margin: "0 auto"}}>
            Start with a 7-day free trial. Cancel anytime. All plans include WhatsApp, Instagram, and Facebook.
          </p>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div className="pricing-grid">

            {/* Starter */}
            <div className="plan-card">
              <div style={{display:"flex", gap:8, flexWrap:"wrap", marginBottom:16}}>
                {["WhatsApp","Instagram*","Facebook*"].map(ch => (
                  <span key={ch} style={{padding:"3px 10px", borderRadius:999, fontSize:11, fontWeight:600, background: ch==="WhatsApp" ? "#D1FAE5" : "#F5F3FF", color: ch==="WhatsApp" ? "#065F46" : "var(--purple)"}}>
                    {ch}
                  </span>
                ))}
              </div>
              <div className="plan-name">Starter</div>
              <div className="plan-desc">For solo business owners just getting started</div>
              <div className="plan-price">₹999 <span>/month</span></div>
              <div className="plan-perday">₹33/day · Billed monthly</div>
              <p className="plan-trial">✅ 7-day free trial available</p>
              <ul className="plan-features">
                {[
                  "1,000 AI messages/month",
                  "300 contacts",
                  "1 team seat",
                  "2 broadcasts/month",
                  "Flow engine",
                  "Pipeline CRM",
                  "Keyword templates",
                  "Email support",
                ].map(f => <li key={f}>{f}</li>)}
              </ul>
              <a href="https://app.replaito.com/register" className="btn btn-outline" style={{justifyContent:"center", width:"100%"}}>
                Start free trial
              </a>
            </div>

            {/* Growth */}
            <div className="plan-card popular">
              <div className="plan-badge">Most popular</div>
              <div style={{display:"flex", gap:8, flexWrap:"wrap", marginBottom:16}}>
                {["WhatsApp","Instagram*","Facebook*"].map(ch => (
                  <span key={ch} style={{padding:"3px 10px", borderRadius:999, fontSize:11, fontWeight:600, background: ch==="WhatsApp" ? "#D1FAE5" : "#F5F3FF", color: ch==="WhatsApp" ? "#065F46" : "var(--purple)"}}>
                    {ch}
                  </span>
                ))}
              </div>
              <div className="plan-name">Growth</div>
              <div className="plan-desc">For growing businesses with a team</div>
              <div className="plan-price" style={{color:"var(--purple)"}}>₹1,999 <span>/month</span></div>
              <div className="plan-perday">₹67/day · Billed monthly</div>
              <p className="plan-trial">✅ 7-day free trial available</p>
              <ul className="plan-features">
                {[
                  "5,000 AI messages/month",
                  "2,000 contacts",
                  "3 team seats",
                  "10 broadcasts/month",
                  "Flow engine",
                  "Pipeline CRM",
                  "Custom AI prompt",
                  "Basic analytics",
                  "Priority support",
                ].map(f => <li key={f}>{f}</li>)}
              </ul>
              <a href="https://app.replaito.com/register" className="btn btn-primary" style={{justifyContent:"center", width:"100%"}}>
                Start free trial →
              </a>
            </div>
          </div>

          <p style={{textAlign:"center", fontSize:13, color:"var(--gray-300)", marginTop:16}}>
            *Instagram & Facebook launching soon — included in your plan automatically, no upgrade needed.
          </p>
          <p style={{textAlign:"center", fontSize:13, color:"var(--gray-300)", marginTop:4}}>
            ✨ A higher-tier plan with advanced AI features is in the works — stay tuned.
          </p>

          {/* Comparison table */}
          <div className="compare">
            <h2>Compare plans</h2>
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Starter</th>
                  <th style={{color:"var(--purple)"}}>Growth</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Price", "₹999/mo", "₹1,999/mo"],
                  ["Channels", "WA + IG + FB*", "WA + IG + FB*"],
                  ["AI messages/mo", "1,000", "5,000"],
                  ["Contacts", "300", "2,000"],
                  ["Team seats", "1", "3"],
                  ["Broadcasts/mo", "2", "10"],
                  ["Flow engine", "✓", "✓"],
                  ["Pipeline CRM", "✓", "✓"],
                  ["Custom AI prompt", "✗", "✓"],
                  ["Analytics", "✗", "Basic"],
                  ["Support", "Email", "Priority"],
                ].map(([label, s, g]) => (
                  <tr key={label}>
                    <td>{label}</td>
                    <td className={s==="✓"?"check":s==="✗"?"cross":""}>{s}</td>
                    <td className={g==="✓"?"check":g==="✗"?"cross":""}>{g}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* FAQ */}
          <div className="faq">
            <h2>Frequently asked questions</h2>
            {[
              { q: "Is there a contract?", a: "No contracts. Cancel anytime from your billing page. Your plan stays active until the end of the month." },
              { q: "What happens after the 7-day trial?", a: "Your account moves to the free plan. You keep your data and can subscribe anytime to restore access." },
              { q: "How are AI messages counted?", a: "Each message sent by the AI counts as 1 message — roughly 6-8 per conversation. Unused messages don't roll over." },
              { q: "Do I keep my WhatsApp Business app?", a: "Yes. With WhatsApp Coexistence, you keep your Status, Catalog, and Groups on the app while Replaito handles automated replies on the same number." },
              { q: "What is the refund policy?", a: "Refunds for verified technical failures on our side lasting over 24 hours. Email legal@replaito.com within 7 days of the issue." },
              { q: "Do I need Meta Business Verification?", a: "For the WhatsApp Cloud API you'll eventually need Meta Business Verification. We guide you through the process — it typically requires a GST certificate." },
            ].map(item => (
              <div key={item.q} className="faq-item">
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container">
          <h2>Ready to automate your WhatsApp?</h2>
          <p>Start your 7-day free trial. No credit card required.</p>
          <a href="https://app.replaito.com/register" className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">
            Get started free →
          </a>
        </div>
      </section>
    </>
  );
}