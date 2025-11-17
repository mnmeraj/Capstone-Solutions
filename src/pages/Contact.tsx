export default function Contact() {
  return (
    <div className="fade-in">
      <div className="container mt-4">
        <h1 className="text-center mb-4">Contact Us</h1>
        <p className="lead text-center">
          We’d love to hear from you! Fill out the form below or reach us directly at:
        </p>

        <ul className="list-unstyled text-center mb-5">
          <li>Office Hours: Mon–Fri, 9 AM – 5 PM</li>
        </ul>

        {/* --- Contact Form --- */}
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <form className="p-4 border rounded shadow-sm bg-light text-start">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input type="text" className="form-control" id="name" placeholder="Your name" />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input type="email" className="form-control" id="email" placeholder="you@example.com" />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows={4}
                  placeholder="Tell us how we can help..."
                ></textarea>
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-primary px-4">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

/* smtaxservicesinc@gmail.com* comp gmail*/