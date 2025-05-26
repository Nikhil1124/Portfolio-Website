import './contact.css'

export default function Contact() {
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const form = e.target;
      const data = new FormData(form);
  
      fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          alert('Thank you for your message! I will get back to you soon.');
          form.reset(); 
        } else {
          alert('Oops! There was a problem submitting your form.');
        }
      }).catch(() => {
        alert('Oops! There was a problem submitting your form.');
      });
    };
  
    return (
      <section id="contact" className="section contact-section">
        <h2>Get In Touch</h2>
        <p>If you’d like to connect or discuss opportunities, please send me a message.</p>
  
        <form 
          action="https://formspree.io/f/xanogpro" 
          method="POST"
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="_replyto" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
  
        <div className="contact-info">
          <p>Email: <a href="mailto:nikhiljai2003@gmail.com">nikhiljai2003@gmail.com</a></p>
          <p>Phone: +91 9014015663</p>
          <p>Location: Vijayawada, India</p>
        </div>
      </section>
    );
  }
  