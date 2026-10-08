import ContactForm from "../components/ContactForm"
import ContactInfo from "../components/ContactInfo"
import "../../../styles/contact/Contact.css"

const Contact = () => {
  return (
    <section className="container contact-page">
      <ContactInfo />
      <ContactForm />
    </section>
  )
}

export default Contact