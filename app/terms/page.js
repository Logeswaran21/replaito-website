import React from "react";

export default function Terms() {
  const lastUpdated  = "24 June 2026";
  const legalName    = "ReplAI";
  const brandName    = "Replaito";
  const contactEmail = "hello@replaito.com";
  const website      = "https://replaito.com";

  return (
    <div style={s.page}>
      <div style={s.container}>

        <div style={s.header}>
          <div style={s.logo}>
            <div style={s.logoMark}>R</div>
            <span style={s.logoText}>Replaito</span>
          </div>
          <h1 style={s.title}>Terms of Service</h1>
          <p style={s.meta}>Last updated: {lastUpdated}</p>
        </div>

        <div style={s.content}>

          <Section title="1. Acceptance of Terms">
            <p>By accessing or using {brandName} ("the Service"), operated by {legalName}, you agree to be bound by these Terms of Service. If you do not agree, do not use the Service.</p>
            <p>These terms apply to all users including business owners, team members, and any other persons accessing the platform.</p>
          </Section>

          <Section title="2. Description of Service">
            <p>{brandName} is a WhatsApp and Instagram AI automation platform that enables Indian small and medium businesses to:</p>
            <ul>
              <li>Automate customer conversations using AI</li>
              <li>Collect leads and bookings via WhatsApp flows</li>
              <li>Send broadcast messages to opted-in contacts</li>
              <li>Manage customer contacts and conversations</li>
              <li>Track leads via a built-in pipeline CRM</li>
            </ul>
          </Section>

          <Section title="3. Account Registration">
            <ul>
              <li>You must provide accurate and complete information when registering</li>
              <li>You are responsible for maintaining the security of your account credentials</li>
              <li>You must notify us immediately of any unauthorized account access</li>
              <li>One account per business — multiple team members can be added under one account</li>
              <li>You must be at least 18 years old to create an account</li>
            </ul>
          </Section>

          <Section title="4. Subscription Plans and Billing">
            <SubSection title="4.1 Plans">
              <p>Current pricing (all amounts in INR, exclusive of GST):</p>
              <table style={s.table}>
                <thead>
                  <tr>
                    <th style={s.th}>Plan</th>
                    <th style={s.th}>Price</th>
                    <th style={s.th}>AI Messages/month</th>
                    <th style={s.th}>Contacts</th>
                    <th style={s.th}>Team seats</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Starter", "₹999/month",  "1,000", "300",       "1"],
                    ["Growth",  "₹1,999/month", "5,000", "2,000",     "3"],
                    ["Pro",     "₹3,999/month", "25,000", "Unlimited", "10"],
                  ].map(([plan, price, msgs, contacts, seats]) => (
                    <tr key={plan}>
                      <td style={s.td}><strong>{plan}</strong></td>
                      <td style={s.td}>{price}</td>
                      <td style={s.td}>{msgs}</td>
                      <td style={s.td}>{contacts}</td>
                      <td style={s.td}>{seats}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p style={{ marginTop: 10, fontSize: 13, color: "#6B7280" }}>
                All plans include WhatsApp and Instagram (Instagram pending Meta Business Verification — included automatically once live, no upgrade needed). Broadcast sends are charged separately by Meta per template message. Plan limits are enforced fair-use caps.
              </p>
            </SubSection>

            <SubSection title="4.2 Free Trial">
              <ul>
                <li>New accounts receive a 7-day free trial on the plan of your choice</li>
                <li>No credit card required for trial</li>
                <li>Full plan limits apply during the trial period</li>
                <li>Trial automatically ends after 7 days — no auto-charge</li>
                <li>Account moves to free plan after trial expires</li>
              </ul>
            </SubSection>

            <SubSection title="4.3 AI Message Top-ups">
              <p>If you exceed your monthly AI message limit, one-time top-ups are available:</p>
              <ul>
                <li>+500 messages: ₹199</li>
                <li>+1,000 messages: ₹349</li>
                <li>+2,500 messages: ₹699</li>
              </ul>
              <p>Top-ups are valid until your next billing cycle reset and are not carried over.</p>
            </SubSection>

            <SubSection title="4.4 Billing">
              <ul>
                <li>Subscriptions are billed monthly in advance</li>
                <li>Payments are processed securely via Razorpay</li>
                <li>GST will be added as applicable</li>
                <li>Failed payments result in service suspension after 3 days</li>
              </ul>
            </SubSection>

            <SubSection title="4.5 Refund Policy">
              <ul>
                <li>Monthly plans: no refund after the billing date</li>
                <li>Refunds considered for verified technical failures on our side lasting more than 24 hours</li>
                <li>Refund requests must be submitted within 7 days of the billing date</li>
                <li>Email <a href={`mailto:${contactEmail}`} style={s.link}>{contactEmail}</a> for refund requests</li>
              </ul>
            </SubSection>
          </Section>

          <Section title="5. Acceptable Use Policy">
            <p style={s.important}>Violation of this section may result in immediate account termination without refund.</p>
            <SubSection title="5.1 You MAY use Replaito to:">
              <ul>
                <li>Automate replies to customers who have messaged your business</li>
                <li>Send broadcast messages to contacts who have opted in</li>
                <li>Collect orders, bookings, and enquiries via automated flows</li>
                <li>Manage customer relationships and follow-ups</li>
              </ul>
            </SubSection>
            <SubSection title="5.2 You MAY NOT use Replaito to:">
              <ul>
                <li>Send unsolicited messages (spam) to people who haven't contacted you</li>
                <li>Send misleading, fraudulent, or deceptive content</li>
                <li>Violate <a href="https://www.whatsapp.com/legal/business-policy/" target="_blank" rel="noreferrer" style={s.link}>WhatsApp Business Policy</a></li>
                <li>Send adult, political, or harmful content</li>
                <li>Impersonate other businesses or individuals</li>
                <li>Harass, threaten, or abuse customers</li>
                <li>Collect or store sensitive personal data without consent</li>
                <li>Use the platform for any illegal activity</li>
              </ul>
            </SubSection>
          </Section>

          <Section title="6. WhatsApp Business Policy Compliance">
            <p>You are solely responsible for ensuring your use of WhatsApp through Replaito complies with Meta's policies. Replaito is not responsible for:</p>
            <ul>
              <li>WhatsApp number bans due to policy violations</li>
              <li>Message delivery failures due to Meta API issues</li>
              <li>Changes to WhatsApp Business API pricing or policies</li>
              <li>Loss of WhatsApp Business API access</li>
            </ul>
            <p>You must obtain Meta's Business Verification and maintain good quality ratings on your WhatsApp number.</p>
          </Section>

          <Section title="7. AI-Generated Content">
            <ul>
              <li>AI replies are generated by OpenAI's GPT models based on your configured prompts</li>
              <li>You are responsible for reviewing and configuring appropriate AI prompts</li>
              <li>Replaito does not guarantee the accuracy of AI-generated responses</li>
              <li>You should monitor AI conversations and intervene when necessary</li>
              <li>Do not use AI for medical, legal, or financial advice to customers</li>
              <li>AI replies may be blocked once your monthly message limit is reached — customers will be notified to expect a human follow-up</li>
            </ul>
          </Section>

          <Section title="8. Data Ownership">
            <ul>
              <li>You own your business data, customer contacts, and conversation history</li>
              <li>You can export your data at any time from the Contacts section</li>
              <li>Upon account closure, your data will be deleted within 30 days</li>
              <li>Replaito retains anonymised, aggregated usage data for platform improvement</li>
            </ul>
          </Section>

          <Section title="9. Service Availability">
            <ul>
              <li>We target 99.5% uptime but do not guarantee uninterrupted service</li>
              <li>Scheduled maintenance will be communicated 24 hours in advance where possible</li>
              <li>We are not liable for downtime caused by third-party services (Meta, OpenAI, Razorpay)</li>
              <li>Message delivery depends on WhatsApp API — we cannot guarantee delivery</li>
            </ul>
          </Section>

          <Section title="10. Limitation of Liability">
            <p>To the maximum extent permitted by law:</p>
            <ul>
              <li>Replaito's liability is limited to the amount you paid in the last 3 months</li>
              <li>We are not liable for lost profits, data loss, or business interruption</li>
              <li>We are not liable for actions taken by AI-generated responses</li>
              <li>We are not liable for WhatsApp or Meta API failures</li>
            </ul>
          </Section>

          <Section title="11. Account Termination">
            <SubSection title="11.1 By You">
              <ul>
                <li>You may cancel your subscription anytime from the Billing page</li>
                <li>Service continues until the end of the current billing period</li>
                <li>Data export available before account closure</li>
              </ul>
            </SubSection>
            <SubSection title="11.2 By Replaito">
              <p>We may suspend or terminate your account if you:</p>
              <ul>
                <li>Violate the Acceptable Use Policy</li>
                <li>Fail to pay subscription fees</li>
                <li>Violate WhatsApp Business Policy repeatedly</li>
                <li>Engage in fraudulent activity</li>
              </ul>
            </SubSection>
          </Section>

          <Section title="12. Changes to Terms">
            <p>We may update these Terms. We will notify you by email at least 14 days before significant changes take effect. Continued use after that date constitutes acceptance.</p>
          </Section>

          <Section title="13. Governing Law">
            <p>These Terms are governed by the laws of India. {brandName} is operated by {legalName}, registered in India. Any disputes shall be subject to the exclusive jurisdiction of the courts of Chennai, Tamil Nadu.</p>
          </Section>

          <Section title="14. Contact Us">
            <div style={s.contactBox}>
              <p><strong>{legalName}</strong> (operating as {brandName})</p>
              <p>Email: <a href={`mailto:${contactEmail}`} style={s.link}>{contactEmail}</a></p>
              <p>Website: <a href={website} style={s.link}>{website}</a></p>
              <p>Response time: Within 5 business days</p>
            </div>
          </Section>

        </div>

        <div style={s.footer}>
          <a href="/privacy" style={s.footerLink}>Privacy Policy</a>
          <span style={{ color: "#D1D5DB" }}>·</span>
          <a href="/" style={s.footerLink}>Back to Replaito</a>
        </div>

      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#111827", marginBottom: 12, paddingBottom: 8, borderBottom: "1px solid #F3F4F6" }}>
        {title}
      </h2>
      <div style={{ fontSize: 15, color: "#374151", lineHeight: 1.7 }}>
        {children}
      </div>
    </div>
  );
}

function SubSection({ title, children }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <h3 style={{ fontSize: 15, fontWeight: 600, color: "#374151", marginBottom: 8 }}>{title}</h3>
      <div style={{ fontSize: 15, color: "#374151", lineHeight: 1.7 }}>{children}</div>
    </div>
  );
}

const s = {
  page:       { minHeight: "100vh", background: "#F9F7FF", padding: "40px 20px" },
  container:  { maxWidth: 800, margin: "0 auto", background: "#fff", borderRadius: 16, padding: "40px 48px", boxShadow: "0 1px 3px rgba(0,0,0,0.06)" },
  header:     { textAlign: "center", marginBottom: 40, paddingBottom: 32, borderBottom: "2px solid #F3F4F6" },
  logo:       { display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 20 },
  logoMark:   { width: 36, height: 36, background: "#7C3AED", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700, fontSize: 16 },
  logoText:   { fontSize: 20, fontWeight: 700, color: "#1E1144" },
  title:      { fontSize: 28, fontWeight: 700, color: "#111827", margin: "0 0 8px" },
  meta:       { fontSize: 13, color: "#9CA3AF" },
  content:    { fontSize: 15, lineHeight: 1.7 },
  important:  { background: "#FEE2E2", border: "1px solid #FECACA", padding: "12px 16px", borderRadius: 8, marginBottom: 12, color: "#991B1B", fontWeight: 500 },
  table:      { width: "100%", borderCollapse: "collapse", marginTop: 12, fontSize: 14 },
  th:         { background: "#F9FAFB", padding: "10px 12px", textAlign: "left", fontWeight: 600, border: "1px solid #E5E7EB", color: "#374151" },
  td:         { padding: "10px 12px", border: "1px solid #E5E7EB", color: "#374151", verticalAlign: "top" },
  link:       { color: "#7C3AED", textDecoration: "none" },
  contactBox: { background: "#F9F7FF", border: "1px solid #EDE9FE", padding: "16px 20px", borderRadius: 10, marginTop: 12 },
  footer:     { marginTop: 40, paddingTop: 20, borderTop: "1px solid #F3F4F6", display: "flex", justifyContent: "center", gap: 20 },
  footerLink: { color: "#7C3AED", textDecoration: "none", fontSize: 14 },
};