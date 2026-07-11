import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import heroImage from '../assets/service_homepage.png'
import pestImage from '../assets/service_pest_control.png'
import paintingImage from '../assets/service_painting.png'
import plumbingImage from '../assets/service_plumbing.png'
import carpenterImage from '../assets/service_carpenter.png'
import electricianImage from '../assets/service_electrician.png'

const WHATSAPP_NUMBER = '919494364394'
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xpqgvvqe'

const services = [
  {
    number: '01',
    title: 'Pest Management',
    description:
      'Thoughtful inspections and targeted treatments to help keep your home healthy, comfortable, and protected.',
    image: pestImage,
    imageAlt: 'Pest management service',
  },
  {
    number: '02',
    title: 'Painting',
    description:
      'Reliable interior and exterior painting that refreshes the spaces you live and work in.',
    image: paintingImage,
    imageAlt: 'Painting service',
  },
  {
    number: '03',
    title: 'Plumbing',
    description:
      'Everyday repairs, installations, and maintenance handled with care and clear communication.',
    image: plumbingImage,
    imageAlt: 'Plumbing service',
  },
  {
    number: '04',
    title: 'Carpentry',
    description:
      'Practical woodwork and repairs that bring function and a polished finish back to your home.',
    image: carpenterImage,
    imageAlt: 'Carpentry service',
  },
  {
    number: '05',
    title: 'Electrician',
    description:
      'Professional help for common electrical needs, from fittings and repairs to essential upgrades.',
    image: electricianImage,
    imageAlt: 'Electrician service',
  },
]

function App() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Hello Vico Pest Management, I would like to know more about your services.',
  )}`

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Vico Pest Management home">
          <span className="brand-mark">V</span>
          <span>Vico</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#about">Why Vico</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-call" href="#contact">
          Request service
        </a>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">Home services, made simple</p>
          <h1>Care for every corner of your home.</h1>
          <p className="hero-summary">
            Vico Pest Management brings dependable pest management and essential home services together in one place.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#contact">Book a service</a>
            <a className="text-link" href="#services">Explore services <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <div className="hero-visual">
          <img src={heroImage} alt="Vico home services" />
        </div>
      </section>

      <section className="services section" id="services">
        <div className="section-intro">
          <div>
            <p className="eyebrow">What we do</p>
            <h2>The help your home needs.</h2>
          </div>
          <p>From a focused pest-management visit to the small fixes that make a house feel right again, our team is ready to help.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-image">
                <img src={service.image} alt={service.imageAlt} />
                <strong aria-hidden="true">{service.number}</strong>
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#contact">Request this service <span aria-hidden="true">↗</span></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="promise" id="about">
        <div className="promise-number">One</div>
        <div>
          <p className="eyebrow">The Vico approach</p>
          <h2>One trusted call for your home.</h2>
          <p>We believe arranging a home service should feel straightforward. Tell us what needs attention, and we will help you take the next step with confidence.</p>
        </div>
        <a className="text-link" href="#contact">Talk to our team <span aria-hidden="true">↓</span></a>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-copy">
          <p className="eyebrow">Get in touch</p>
          <h2>Let us know how we can help.</h2>
          <p>Share a few details and our team will get back to you. Prefer a quick conversation? Message us directly on WhatsApp.</p>
          <a className="whatsapp-link" href={whatsappLink} target="_blank" rel="noreferrer">
            <span className="whatsapp-icon" aria-hidden="true">W</span>
            Connect on WhatsApp
            <span aria-hidden="true">↗</span>
          </a>
        </div>
        <form className="contact-form" action={FORMSPREE_ENDPOINT} method="POST">
          <input type="hidden" name="_subject" value="New Vico service request" />
          <label>
            Your name <span>*</span>
            <input name="name" type="text" autoComplete="name" required />
          </label>
          <label>
            Phone number <span>*</span>
            <input name="phone" type="tel" autoComplete="tel" required />
          </label>
          <label>
            Email address <small>Optional</small>
            <input name="email" type="email" autoComplete="email" />
          </label>
          <label>
            Service needed <span>*</span>
            <select name="service" defaultValue="" required>
              <option value="" disabled>Select a service</option>
              {services.map((service) => <option key={service.title}>{service.title}</option>)}
              <option>Other</option>
            </select>
          </label>
          <label className="full-width">
            Tell us a little more <small>Optional</small>
            <textarea name="description" rows="4" />
          </label>
          <button className="button button-dark full-width" type="submit">Send request <span aria-hidden="true">→</span></button>
          <p className="form-note">Fields marked <b>*</b> are required.</p>
        </form>
      </section>

      <footer>
        <a className="brand" href="#home"><span className="brand-mark">V</span><span>Vico</span></a>
        <p>Vico Pest Management</p>
        <a href={whatsappLink} target="_blank" rel="noreferrer">WhatsApp us ↗</a>
      </footer>
    </main>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
