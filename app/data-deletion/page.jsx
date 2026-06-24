export const metadata = {
  title: "Data Deletion — Replaito",
  description: "How to request deletion of your data from Replaito.",
};

export default function DataDeletion() {
  return (
    <div style={s.page}>
      <div style={s.container}>

        <div style={s.header}>
          <div style={s.logo}>
            <div style={s.logoMark}>R</div>
            <span style={s.logoText}>Replaito</span>
          </div>
          <h1 style={s.title}>Data Deletion Instructions</h1>
          <p style={s.meta}>How to request removal of your data from Replaito</p>
        </div>

        <div style={s.content}>

          <div style={s.intro}>
            <p>
              Replaito is a product of <strong>ReplAI</strong>. If you have used Replaito or connected it to your WhatsApp or Instagram account and would like your data deleted, follow the steps below.
            </p>
          </div>

          <div style={s.section}>
            <h2 style={s.h2}>For Business Owners (Replaito Subscribers)</h2>
            <p style={s.p}>If you have a Replaito account and want your data deleted:</p>
            <ol style={s.ol}>
              <li>Log into your account at <a href="https://app.replaito.com" style={s.link}>app.replaito.com</a></li>
              <li>Go to <strong>Settings</strong></li>
              <li>Click <strong>Delete Account</strong> at the bottom of the page</li>
              <li>Confirm deletion — your account and all associated data will be permanently deleted within 30 days</li>
            </ol>
            <p style={s.p}>
              Alternatively, email us directly at{" "}
              <a href="mailto:privacy@replaito.com" style={s.link}>privacy@replaito.com</a>{" "}
              with subject line <strong>"Data Deletion Request"</strong> and we will process your request within 72 hours.
            </p>
          </div>

          <div style={s.section}>
            <h2 style={s.h2}>For End Customers (WhatsApp/Instagram Users)</h2>
            <p style={s.p}>
              If you are a customer who messaged a business that uses Replaito and want your conversation data removed:
            </p>
            <ol style={s.ol}>
              <li>Email us at <a href="mailto:privacy@replaito.com" style={s.link}>privacy@replaito.com</a></li>
              <li>Include your phone number and the name of the business you contacted</li>
              <li>We will locate your data and delete it within 30 days</li>
              <li>You will receive a confirmation email once deletion is complete</li>
            </ol>
          </div>

          <div style={s.section}>
            <h2 style={s.h2}>What Gets Deleted</h2>
            <ul style={s.ul}>
              <li>Your account information (name, email, phone number)</li>
              <li>All conversation history</li>
              <li>Contact records and tags</li>
              <li>Order and booking details</li>
              <li>AI configuration and prompts</li>
            </ul>
            <p style={s.p}>
              <strong>Note:</strong> Billing records are retained for 7 years as required by Indian law (GST compliance). Anonymised, aggregated usage statistics that cannot be linked to you are retained for platform improvement.
            </p>
          </div>

          <div style={s.section}>
            <h2 style={s.h2}>Facebook / Instagram Connected Data</h2>
            <p style={s.p}>
              If you connected your Facebook or Instagram account to Replaito, you can also remove Replaito's access directly from Facebook:
            </p>
            <ol style={s.ol}>
              <li>Go to <strong>Facebook Settings → Apps and Websites</strong></li>
              <li>Find <strong>Replaito</strong> in the list</li>
              <li>Click <strong>Remove</strong></li>
            </ol>
            <p style={s.p}>
              This revokes Replaito's access to your Facebook/Instagram data. To also delete data already collected, email us at{" "}
              <a href="mailto:privacy@replaito.com" style={s.link}>privacy@replaito.com</a>.
            </p>
          </div>

          <div style={s.contactBox}>
            <p style={{ fontWeight: 600, color: "#111827", marginBottom: 8 }}>Contact our Privacy Team</p>
            <p style={{ fontSize: 14, color: "#374151", marginBottom: 4 }}>
              Email: <a href="mailto:privacy@replaito.com" style={s.link}>privacy@replaito.com</a>
            </p>
            <p style={{ fontSize: 14, color: "#374151", marginBottom: 4 }}>
              Response time: Within 72 hours
            </p>
            <p style={{ fontSize: 14, color: "#374151" }}>
              <strong>ReplAI</strong> · GSTIN: 33APXPL4723P1Z4 · 15/2, Alacrity Flats, 14th Street, Iyappa Nagar, Lake View Road, Madipakkam, Chennai - 600091
            </p>
          </div>

        </div>

        <div style={s.footer}>
          <a href="/privacy" style={s.footerLink}>Privacy Policy</a>
          <span style={{ color: "#D1D5DB" }}>·</span>
          <a href="/terms" style={s.footerLink}>Terms of Service</a>
          <span style={{ color: "#D1D5DB" }}>·</span>
          <a href="/" style={s.footerLink}>Back to Replaito</a>
        </div>

      </div>
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
  intro:      { background: "#F9F7FF", border: "1px solid #EDE9FE", borderRadius: 10, padding: "16px 20px", marginBottom: 32, fontSize: 15, color: "#374151" },
  section:    { marginBottom: 32, paddingBottom: 32, borderBottom: "1px solid #F3F4F6" },
  h2:         { fontSize: 18, fontWeight: 600, color: "#111827", marginBottom: 12 },
  p:          { fontSize: 15, color: "#374151", lineHeight: 1.7, marginBottom: 12 },
  ol:         { paddingLeft: 20, marginBottom: 12, color: "#374151", lineHeight: 2 },
  ul:         { paddingLeft: 20, marginBottom: 12, color: "#374151", lineHeight: 2 },
  link:       { color: "#7C3AED", textDecoration: "none" },
  contactBox: { background: "#F9F7FF", border: "1px solid #EDE9FE", borderRadius: 10, padding: "20px 24px", marginTop: 16 },
  footer:     { marginTop: 40, paddingTop: 20, borderTop: "1px solid #F3F4F6", display: "flex", justifyContent: "center", gap: 20, flexWrap: "wrap" },
  footerLink: { color: "#7C3AED", textDecoration: "none", fontSize: 14 },
};