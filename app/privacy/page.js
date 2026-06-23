import React from "react";

export default function Privacy() {
  const lastUpdated = "24 June 2026";
  const legalName   = "ReplAI";
  const brandName   = "Replaito";
  const contactEmail = "privacy@replaito.com";
  const website = "https://replaito.com";

  return (
    <div style={s.page}>
      <div style={s.container}>

        <div style={s.header}>
          <div style={s.logo}>
            <div style={s.logoMark}>R</div>
            <span style={s.logoText}>Replaito</span>
          </div>
          <h1 style={s.title}>Privacy Policy</h1>
          <p style={s.meta}>Last updated: {lastUpdated}</p>
        </div>

        <div style={s.content}>

          <Section title="1. Introduction">
            <p>Welcome to {brandName}, a product of {legalName} ("we", "our", or "us"). We operate a WhatsApp and Instagram AI automation platform for Indian small and medium businesses.</p>
            <p>This Privacy Policy explains how we collect, use, disclose, and protect information when you use our services at {website}.</p>
            <p>By using Replaito, you agree to the collection and use of information in accordance with this policy.</p>
          </Section>

          <Section title="2. Information We Collect">
            <SubSection title="2.1 Account Information">
              <ul>
                <li>Name, email address, and password when you register</li>
                <li>Company name, business type, and WhatsApp phone number</li>
                <li>Billing information processed securely via Razorpay</li>
              </ul>
            </SubSection>
            <SubSection title="2.2 Business Data">
              <ul>
                <li>WhatsApp Business API credentials (stored encrypted)</li>
                <li>AI configuration including system prompts</li>
                <li>Product and service information you configure</li>
                <li>Template messages you create</li>
              </ul>
            </SubSection>
            <SubSection title="2.3 Customer Conversation Data">
              <p>When your customers message your WhatsApp Business number through Replaito:</p>
              <ul>
                <li>Customer phone numbers and names (if provided)</li>
                <li>Message content and conversation history</li>
                <li>Order and appointment details collected via automated flows</li>
                <li>Tags and notes you add to customer contacts</li>
              </ul>
            </SubSection>
            <SubSection title="2.4 Usage Data">
              <ul>
                <li>Log data including IP addresses and browser information</li>
                <li>Feature usage and interaction data</li>
                <li>Message delivery statistics</li>
              </ul>
            </SubSection>
          </Section>

          <Section title="3. How We Use Your Information">
            <ul>
              <li>To provide and operate the Replaito platform</li>
              <li>To power AI-generated replies via OpenAI's API</li>
              <li>To send automated WhatsApp messages on your behalf</li>
              <li>To process payments and manage subscriptions via Razorpay</li>
              <li>To send service-related notifications and updates</li>
              <li>To improve our platform and develop new features</li>
              <li>To comply with legal obligations</li>
            </ul>
            <p style={s.note}>
              <strong>Important:</strong> We do not sell your data or your customers' data to third parties. We do not use customer conversation data for advertising purposes.
            </p>
          </Section>

          <Section title="4. Third-Party Services">
            <p>Replaito uses the following third-party services to operate:</p>
            <table style={s.table}>
              <thead>
                <tr>
                  <th style={s.th}>Service</th>
                  <th style={s.th}>Purpose</th>
                  <th style={s.th}>Data Shared</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["OpenAI", "AI reply generation", "Message content, system prompts"],
                  ["Meta (WhatsApp/Instagram)", "Message delivery", "Phone numbers, message content"],
                  ["Razorpay", "Payment processing", "Billing details (not stored by us)"],
                  ["MongoDB Atlas", "Data storage", "All platform data (encrypted at rest)"],
                  ["Render", "Backend hosting", "Server logs"],
                  ["Vercel", "Frontend hosting", "Static assets only"],
                  ["SendGrid", "Transactional email", "Email address, name"],
                ].map(([svc, purpose, data]) => (
                  <tr key={svc}>
                    <td style={s.td}>{svc}</td>
                    <td style={s.td}>{purpose}</td>
                    <td style={s.td}>{data}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Section>

          <Section title="5. Data Retention">
            <ul>
              <li>Conversation messages are retained for 12 months from creation</li>
              <li>Contact data is retained while your account is active</li>
              <li>Account data is deleted within 30 days of account closure</li>
              <li>Billing records are retained for 7 years as required by law</li>
            </ul>
          </Section>

          <Section title="6. Your Rights (DPDP Act 2023)">
            <p>Under India's Digital Personal Data Protection Act 2023, you have the right to:</p>
            <ul>
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Correction:</strong> Request correction of inaccurate data</li>
              <li><strong>Erasure:</strong> Request deletion of your personal data</li>
              <li><strong>Grievance:</strong> File a complaint about data processing</li>
              <li><strong>Nominee:</strong> Nominate a person to exercise rights on your behalf</li>
            </ul>
            <p>To exercise these rights, email us at <a href={`mailto:${contactEmail}`} style={s.link}>{contactEmail}</a></p>
          </Section>

          <Section title="7. Data Security">
            <ul>
              <li>All data is transmitted over HTTPS/TLS encryption</li>
              <li>Sensitive credentials (API keys, tokens) are encrypted at rest</li>
              <li>Passwords are hashed using bcrypt</li>
              <li>Access is restricted by multi-tenant data isolation</li>
              <li>Regular security reviews are conducted</li>
            </ul>
          </Section>

          <Section title="8. WhatsApp and Instagram Data">
            <p>When you connect your WhatsApp Business account to Replaito:</p>
            <ul>
              <li>We process messages in real-time to generate AI replies</li>
              <li>Message content may be sent to OpenAI for processing</li>
              <li>We store conversation history to provide inbox functionality</li>
              <li>You remain the data controller for your customers' data</li>
            </ul>
            <p>Your use of WhatsApp through Replaito must comply with <a href="https://www.whatsapp.com/legal/business-policy/" target="_blank" rel="noreferrer" style={s.link}>WhatsApp Business Policy</a>.</p>
          </Section>

          <Section title="9. Cookies">
            <p>Replaito uses session tokens for authentication. We do not use advertising or tracking cookies.</p>
          </Section>

          <Section title="10. Children's Privacy">
            <p>Replaito is a B2B platform intended for business use only. We do not knowingly collect data from anyone under 18 years of age.</p>
          </Section>

          <Section title="11. Changes to This Policy">
            <p>We may update this Privacy Policy periodically. We will notify you of significant changes via email or an in-app notification. Continued use of Replaito after changes constitutes acceptance of the updated policy.</p>
          </Section>

          <Section title="12. Grievance Officer">
            <p>As required by Indian law, our Grievance Officer for data privacy matters:</p>
            <div style={s.contactBox}>
              <p><strong>{legalName} Privacy Team</strong></p>
              <p>Email: <a href={`mailto:${contactEmail}`} style={s.link}>{contactEmail}</a></p>
              <p>Response time: Within 72 hours</p>
            </div>
          </Section>

          <Section title="13. Contact Us">
            <p>For any privacy-related questions or concerns:</p>
            <div style={s.contactBox}>
              <p><strong>{legalName}</strong> (operating as {brandName})</p>
              <p>Email: <a href={`mailto:${contactEmail}`} style={s.link}>{contactEmail}</a></p>
              <p>Website: <a href={website} style={s.link}>{website}</a></p>
            </div>
          </Section>

        </div>

        <div style={s.footer}>
          <a href="/terms" style={s.footerLink}>Terms of Service</a>
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
  note:       { background: "#FEF3C7", border: "1px solid #FDE68A", padding: "12px 16px", borderRadius: 8, marginTop: 12 },
  table:      { width: "100%", borderCollapse: "collapse", marginTop: 12, fontSize: 14 },
  th:         { background: "#F9FAFB", padding: "10px 12px", textAlign: "left", fontWeight: 600, border: "1px solid #E5E7EB", color: "#374151" },
  td:         { padding: "10px 12px", border: "1px solid #E5E7EB", color: "#374151", verticalAlign: "top" },
  link:       { color: "#7C3AED", textDecoration: "none" },
  contactBox: { background: "#F9F7FF", border: "1px solid #EDE9FE", padding: "16px 20px", borderRadius: 10, marginTop: 12 },
  footer:     { marginTop: 40, paddingTop: 20, borderTop: "1px solid #F3F4F6", display: "flex", justifyContent: "center", gap: 20 },
  footerLink: { color: "#7C3AED", textDecoration: "none", fontSize: 14 },
};