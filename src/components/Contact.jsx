// src/components/Contact.jsx - Updated with EmailJS
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { config } from '../config'


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // null, 'success', 'error'
  const [errors, setErrors] = useState({})

  // Replace these with your actual EmailJS credentials
  const EMAILJS_SERVICE_ID = 'service_i0toesr'
  const EMAILJS_TEMPLATE_ID = 'template_jo8ctfp'
  const EMAILJS_PUBLIC_KEY = '5-wlRAkQHSvZLLFCC'

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message should be at least 10 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    try {
      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Your Name', // Your name that will appear in the email
          reply_to: formData.email,
        },
        EMAILJS_PUBLIC_KEY
      )
      
      if (response.status === 200) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
        
        // Reset status after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null)
        }, 5000)
      } else {
        throw new Error('Failed to send message')
      }
      
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
      setErrors({ submit: 'Failed to send message. Please try again or contact me directly.' })
      
      // Reset error status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
        setErrors({})
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="contact fade-in">
      <div className="container">
        <h2 className="section-title">
          Get In <span className="highlight">Touch</span>
        </h2>
        
        <div className="contact-content">
          <div className="contact-info card">
            <h3>Let's Work Together</h3>
            <p>
              I'm currently open to new opportunities, whether it's a 
              full-time position, contract work, or freelance projects. 
              Feel free to reach out if you have any questions or just 
              want to connect!
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className="contact-detail">
                  <h4>Location</h4>
                  <p>{config.location}</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div className="contact-detail">
                  <h4>Email</h4>
                  <p>{config.email}</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div className="contact-detail">
                  <h4>Phone</h4>
                  <p>{config.phone}</p> 
                </div>
              </div>
            </div>
            
            <div className="social-links">
              <h4>Connect with me</h4>
              <div className="social-icons">
                <a href="https://github.com/YolandaMashaba" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                  </svg>
                </a>
                <a href="https://linkedin.com/in/nkoka-mashaba" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="contact-form card">
            <h3>Send Me a Message</h3>
            
            {submitStatus === 'success' && (
              <div className="success-message">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <div>
                  <h4>Message Sent Successfully!</h4>
                  <p>Thank you for your message. I'll get back to you within 24 hours.</p>
                </div>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="error-message">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="15" y1="9" x2="9" y2="15"/>
                  <line x1="9" y1="9" x2="15" y2="15"/>
                </svg>
                <div>
                  <h4>Failed to Send Message</h4>
                  <p>{errors.submit || 'Please try again or contact me directly via email.'}</p>
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'error' : ''}
                  disabled={isSubmitting}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                  disabled={isSubmitting}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Project Inquiry"
                  value={formData.subject}
                  onChange={handleChange}
                  className={errors.subject ? 'error' : ''}
                  disabled={isSubmitting}
                />
                {errors.subject && <span className="error-message">{errors.subject}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? 'error' : ''}
                  disabled={isSubmitting}
                ></textarea>
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>
              
              <button 
                type="submit" 
                className="btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="spinner" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="2" x2="12" y2="6"/>
                      <line x1="12" y1="18" x2="12" y2="22"/>
                      <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/>
                      <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/>
                      <line x1="2" y1="12" x2="6" y2="12"/>
                      <line x1="18" y1="12" x2="22" y2="12"/>
                      <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/>
                      <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"/>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 3rem;
        }
        
        .contact-info h3,
        .contact-form h3 {
          font-size: 1.75rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: var(--primary-color);
        }
        
        .contact-info p {
          color: var(--text-secondary);
          margin-bottom: 2rem;
          line-height: 1.7;
        }
        
        .contact-details {
          margin: 2rem 0;
        }
        
        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        
        .contact-icon {
          width: 48px;
          height: 48px;
          background: var(--bg-color);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        
        .contact-icon svg {
          color: var(--primary-color);
        }
        
        .contact-detail h4 {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
          color: var(--text-color);
        }
        
        .contact-detail p {
          color: var(--text-secondary);
          margin: 0;
        }
        
        .social-links h4 {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: var(--text-color);
        }
        
        .social-icons {
          display: flex;
          gap: 1rem;
        }
        
        .social-icon {
          width: 44px;
          height: 44px;
          background: var(--bg-color);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-color);
          transition: var(--transition);
          text-decoration: none;
        }
        
        .social-icon:hover {
          background: var(--primary-color);
          color: white;
          transform: translateY(-3px);
        }
        
        .success-message,
        .error-message {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.25rem;
          border-radius: 0.75rem;
          margin-bottom: 2rem;
          animation: slideIn 0.5s ease-out;
        }
        
        .success-message {
          background: linear-gradient(135deg, #10b981, #34d399);
          color: white;
        }
        
        .error-message {
          background: linear-gradient(135deg, #ef4444, #f87171);
          color: white;
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .success-message svg,
        .error-message svg {
          flex-shrink: 0;
          margin-top: 0.25rem;
        }
        
        .success-message h4,
        .error-message h4 {
          margin: 0 0 0.5rem;
          font-size: 1rem;
        }
        
        .success-message p,
        .error-message p {
          margin: 0;
          font-size: 0.875rem;
          opacity: 0.9;
        }
        
        .form-group {
          margin-bottom: 1.5rem;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: var(--text-color);
        }
        
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.875rem 1rem;
          border: 2px solid var(--border-color);
          border-radius: 0.75rem;
          font-family: inherit;
          font-size: 1rem;
          background-color: var(--card-bg);
          color: var(--text-color);
          transition: var(--transition);
          resize: vertical;
        }
        
        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary-color);
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
        }
        
        .form-group input.error,
        .form-group textarea.error {
          border-color: #ef4444;
        }
        
        .form-group input:disabled,
        .form-group textarea:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        
        .form-group .error-message {
          display: block;
          margin-top: 0.5rem;
          font-size: 0.875rem;
          color: #ef4444;
          background: none;
          padding: 0;
          animation: none;
        }
        
        .form-error {
          background: #fee2e2;
          color: #dc2626;
          padding: 0.875rem 1rem;
          border-radius: 0.75rem;
          margin-bottom: 1.5rem;
          font-size: 0.875rem;
        }
        
        .spinner {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @media (max-width: 1024px) {
          .contact-content {
            gap: 2rem;
          }
        }
        
        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
          }
          
          .contact-info,
          .contact-form {
            padding: 1.5rem;
          }
        }
        
        @media (max-width: 480px) {
          .social-icons {
            justify-content: center;
          }
          
          .form-group {
            margin-bottom: 1.25rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Contact