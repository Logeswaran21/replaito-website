export const metadata = {
  title: "About — Replaito",
  description: "We built Replaito after watching small business owners spend hours manually replying to the same WhatsApp questions every day.",
};

export default function About() {
  return (
    <>
      <section className="about-hero">
        <div className="container">
          <p className="section-label section-label-dark mx-auto" style={{justifyContent:"center"}}>Our story</p>
          <h1>Built for the business owner who replies to WhatsApp all day</h1>
          <p>We saw the problem firsthand — and built the fix.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-content">

            <h2>Why we built Replaito</h2>
            <p>
              We built Replaito after watching small business owners spend hours manually replying to the same WhatsApp questions every day. A bakery owner answering "what is the price of 1kg vanilla cake?" forty times before noon. A salon owner losing Saturday bookings because she couldn't reply fast enough while cutting hair. A clinic receptionist managing three WhatsApp numbers simultaneously, missing half the messages.
            </p>
            <p>
              The problem wasn't effort — these business owners worked harder than anyone. The problem was that WhatsApp, their most important sales channel, had no automation built for them. The tools that existed were either too expensive, too complex, or built for large enterprises that could afford a dedicated tech team.
            </p>
            <p>
              Replaito is our answer to that gap. An AI that understands the way Indian customers actually write — Tamil, Hindi, English, Tanglish — and replies the way a knowledgeable, polite team member would. That captures order details, qualifies leads, and knows when to hand off to the owner. That works at 2am when your customer is browsing and you're asleep.
            </p>

            <h2 style={{marginTop: 48}}>Who we're building for</h2>
            <p>
              We're building for the baker who takes orders on WhatsApp. The salon owner whose phone never stops buzzing. The clinic that books appointments through DMs. The coaching center that gets 50 enquiries a day and follows up with none of them. The return gifts shop that quotes the same MOQ a hundred times a week.
            </p>
            <p>
              If your business runs on WhatsApp, Replaito is built for you — not as an add-on to some enterprise software stack, but as the primary tool that makes your WhatsApp inbox work the way it should.
            </p>

            {/* ── Legal entity section — required for Meta Business Verification.
                This paragraph explicitly connects the brand "Replaito" with the
                registered legal entity "ReplAI" as required by Meta's reviewer.
                Replace the placeholder GSTIN and address with your actual values. ── */}
            <h2 style={{marginTop: 48}}>About the company</h2>
            <p>
              Replaito is a product built and operated by <strong>ReplAI</strong>, a company registered in India
              (GSTIN: 33APXPL4723P1Z4). Our registered office is at 15/2, Alacrity Flats, 14th Street, Iyappa Nagar, Lake View Road, Madipakkam, Chennai - 600091.
              For any business correspondence, reach us at{" "}
              <a href="mailto:support@replaito.com" style={{color: "var(--purple)"}}>support@replaito.com</a>.
            </p>
          </div>

          {/* Values */}
          <div style={{marginTop: 80}}>
            <h2 className="text-center" style={{marginBottom: 16}}>What we stand for</h2>
            <p className="section-sub text-center mx-auto" style={{marginBottom: 0}}>The principles that guide every product decision.</p>
            <div className="values-grid">
              {[
                { icon: "🤝", title: "Honest about what's built", body: "We only show features that actually work. No vaporware, no upsells that lead nowhere." },
                { icon: "🗣️", title: "Built for how India communicates", body: "Tamil, Hindi, English, Tanglish — AI that works with the language your customers actually use." },
                { icon: "⚡", title: "Simple enough for any business", body: "If you can use WhatsApp, you can use Replaito. No developer, no IT team required." },
                { icon: "💰", title: "Priced for Indian SMBs", body: "₹999/month. Not ₹9,999. We price for the businesses we're actually building for." },
                { icon: "🔒", title: "Your data, your business", body: "We never sell customer data. Conversations stay in your account and nowhere else." },
                { icon: "🚀", title: "Ship fast, fix fast", body: "Small team, fast decisions. When something breaks or needs improving, we fix it the same day." },
              ].map(v => (
                <div key={v.title} className="value-card">
                  <div className="icon">{v.icon}</div>
                  <h3>{v.title}</h3>
                  <p style={{fontSize:14, marginTop:6}}>{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container">
          <h2>Give your WhatsApp an AI employee.</h2>
          <p>Start your 7-day free trial — no credit card needed.</p>
          <a href="https://app.replaito.com/register" className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">
            Start free trial →
          </a>
        </div>
      </section>
    </>
  );
}