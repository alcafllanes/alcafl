import Reveal from '@/components/Reveal';
import Faq from '@/components/Faq';
import ContactForm from '@/components/ContactForm';
import { contactFaqs } from '@/lib/data';

export const metadata = {
  title: 'Contact, alcafl',
};

export default function ContactPage() {
  return (
    <div className="page">
      <section className="fx-now">
        <span className="eyebrow">Contact</span>
        <h1 className="giant-title" style={{ fontSize: 'clamp(2.4rem, 6vw, 4.4rem)' }}>
          LET&apos;S
          <br />
          <span className="grad-text">BUILD IT.</span>
        </h1>
      </section>

      <div className="contact-grid" style={{ marginTop: 50 }}>
        <div className="fx-now contact-info">
          <p>
            Whether it is a full store build, a QA pass, or fixing flows that used to convert better, tell me what you are working with and I will respond with next steps.
          </p>
          <div className="contact-channel">
            <div className="ci-label">Email</div>
            <div className="ci-value">hello@alcafl.com</div>
          </div>
          <div className="contact-channel">
            <div className="ci-label">Also reachable on</div>
            <div className="ci-value">Upwork and LinkedIn</div>
          </div>
          <div className="contact-channel">
            <div className="ci-label">Typical response time</div>
            <div className="ci-value">Within 24 hours</div>
          </div>
        </div>

        <div className="glass form-card fx-now">
          <ContactForm />
        </div>
      </div>

      <Reveal className="section-block">
        <div className="sb-head">
          <h2>What happens after you send it</h2>
        </div>
        <div className="about-steps-row">
          <div className="glass about-steps-cell">
            <div className="as-num">01</div>
            <p>I read through what you sent and take a quick look at your store if there is a link.</p>
          </div>
          <div className="glass about-steps-cell">
            <div className="as-num">02</div>
            <p>I reply with next steps, usually within a day, sometimes with a couple of questions.</p>
          </div>
          <div className="glass about-steps-cell">
            <div className="as-num">03</div>
            <p>If it looks like a fit, we hop on a short call or move straight into the work.</p>
          </div>
        </div>
      </Reveal>

      <Reveal className="section-block">
        <div className="sb-head">
          <h2>Before you send that</h2>
        </div>
        <Faq items={contactFaqs} />
      </Reveal>
    </div>
  );
}
