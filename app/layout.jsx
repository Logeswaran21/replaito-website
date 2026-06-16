import "./globals.css";

export const metadata = {
  title: "Replaito — Your AI Employee for WhatsApp",
  description: "Automatically reply to customers, qualify leads, and hand off to your team when needed — all from one inbox. Built for Indian small businesses.",
  openGraph: {
    title: "Replaito — Your AI Employee for WhatsApp",
    description: "AI-powered WhatsApp automation for Indian small businesses.",
    url: "https://replaito.com",
    siteName: "Replaito",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="/" className="nav-logo">
          <span className="logo-r">R</span>eplaito
        </a>
        <div className="nav-links">
          <a href="/about">About</a>
          <a href="/pricing">Pricing</a>
          <a href="/contact">Contact</a>
        </div>
        <a href="https://app.replaito.com/register" className="btn btn-sm" target="_blank" rel="noopener noreferrer">
          Start free trial →
        </a>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo"><span className="logo-r">R</span>eplaito</div>
            <p className="footer-tagline">Your AI Employee for WhatsApp</p>
            <p className="footer-sub">Built for Indian small businesses.</p>
          </div>
          <div>
            <p className="footer-heading">Product</p>
            <a href="/pricing">Pricing</a>
            <a href="https://app.replaito.com/register" target="_blank" rel="noopener noreferrer">Sign up free</a>
            <a href="https://app.replaito.com/login" target="_blank" rel="noopener noreferrer">Log in</a>
          </div>
          <div>
            <p className="footer-heading">Company</p>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </div>
          <div>
            <p className="footer-heading">Legal</p>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <p className="footer-contact">support@replaito.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Replaito. All rights reserved. · Payments via Razorpay · Prices in INR + GST</p>
        </div>
      </div>
    </footer>
  );
}