import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Your EmailJS credentials
  const EMAILJS_CONFIG = {
    serviceId: 'service_11j2dnw',
    templateId: 'template_cm5u09l', 
    publicKey: 'OhNszTL4HqHBWy1q9'
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    const form = e.target;
    const formData = {
      name: (form.name as any).value,
      email: (form.email as any).value,
      phone: (form.phone as any).value || '',
      message: (form.message as any).value
    };

    try {
      console.log('Sending data to Lambda...');
      
      // Step 1: Send data to your Lambda (saves to database)
      const lambdaResponse = await fetch('https://6buwhb3rfc.execute-api.us-east-1.amazonaws.com/prod/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const lambdaResult = await lambdaResponse.json();
      
      if (!lambdaResponse.ok) {
        throw new Error(lambdaResult.error || 'Failed to save contact information');
      }

      console.log('Data saved to database, now sending email...');

      // Step 2: Send email via EmailJS (frontend)
      const emailResult = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          message: formData.message,
          date: new Date().toLocaleString()
        },
        EMAILJS_CONFIG.publicKey
      );

      console.log('Email sent successfully:', emailResult);
      setSubmitMessage('Message sent successfully! We will get back to you soon.');
      form.reset();

    } catch (error: any) {
      console.error('Submission error:', error);
      
      // Check if it's an email error or lambda error
      if (error.message.includes('Failed to save')) {
        setSubmitMessage('Error: ' + error.message);
      } else {
        setSubmitMessage('Message saved! (Email notification failed)');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fade-in">
      <div className="container mt-4">
        <h1 className="text-center mb-4">Contact Us</h1>
        <p className="lead text-center">
          We'd love to hear from you! Fill out the form below or reach us directly at:
        </p>

        <ul className="list-unstyled text-center mb-5">
          <li>Office Hours: Mon–Fri, 9 AM – 5 PM</li>
        </ul>

        {/* --- Contact Form --- */}
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-light text-start">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input type="text" className="form-control" id="name" placeholder="Your name" required />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input type="email" className="form-control" id="email" placeholder="you@example.com" required />
              </div>

              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input type="tel" className="form-control" id="phone" placeholder="Your phone number" />
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
                  required
                ></textarea>
              </div>

              {/* Success/Error Message */}
              {submitMessage && (
                <div className={`alert ${submitMessage.includes('Error') ? 'alert-danger' : 'alert-success'} mb-3`}>
                  {submitMessage}
                </div>
              )}

              <div className="text-center">
                <button 
                  type="submit" 
                  className="btn btn-primary px-4"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
