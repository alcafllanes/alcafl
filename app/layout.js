import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'alcafl, eCommerce Store Builder and Ops Specialist',
  description: 'Shopify builds, QA passes, and Klaviyo flow audits from Alpha Cathleen (alcafl).',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="blob b1" />
        <div className="blob b2" />
        <Header />
        <main>
          <div id="app-content">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
