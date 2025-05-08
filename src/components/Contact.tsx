import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MailIcon, PhoneIcon, MapPinIcon, LinkedinIcon, GithubIcon, TwitterIcon, SendIcon, CheckCircleIcon } from 'lucide-react'; // Added CheckCircleIcon

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.2
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false); // Kept for potential UI feedback, though actual submission is via mailto
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Define your email address here
  const YOUR_EMAIL_ADDRESS = 'naitik@wayne.edu';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true); // Indicate that an action has started

    const { name, email, subject, message } = formData;

    // Construct the mailto link
    // The body can be customized to include the sender's name and email as well.
    const mailtoBody = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:${YOUR_EMAIL_ADDRESS}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailtoBody)}`;

    // Open the user's default email client
    window.location.href = mailtoLink;

    // Since the actual sending happens in the user's email client,
    // we can consider the "submission" to our website as complete once the mailto link is opened.
    // You might want to adjust the UI feedback accordingly.
    // For example, you could show a message like "Please complete sending the email in your email client."

    // Simulate a brief delay for UI feedback then reset the form
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true); // Show a success message
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 500); // Reduced timeout as no server submission is happening here
  };

  return <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{
        opacity: 0
      }} animate={isInView ? {
        opacity: 1
      } : {
        opacity: 0
      }} transition={{
        duration: 0.5
      }} ref={ref}>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-white"> {/* Ensured text visibility */}
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-12"></div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700 h-full">
                <h3 className="text-xl font-bold mb-6 text-white">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <MailIcon size={18} className="text-blue-400" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-gray-400 text-sm">Email</h4>
                      <p className="text-white">{YOUR_EMAIL_ADDRESS}</p> {/* Used the constant */}
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                        <MapPinIcon size={18} className="text-purple-400" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-gray-400 text-sm">Location</h4>
                      <p className="text-white">United States</p>
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <h4 className="text-gray-300 mb-4">Connect with me</h4>
                  <div className="flex gap-4">
                    <a href="https://www.linkedin.com/in/naitik-shah-49baba1a1/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-700 hover:bg-blue-600 flex items-center justify-center transition-colors duration-300">
                      <LinkedinIcon size={18} className="text-white" />
                    </a>
                    <a href="https://github.com/naitik2314" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-900 flex items-center justify-center transition-colors duration-300">
                      <GithubIcon size={18} className="text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
                <h3 className="text-xl font-bold mb-6 text-white">
                  Send Me a Message
                </h3>
                {isSubmitted ? <motion.div initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} className="bg-green-900/30 border border-green-500 rounded-lg p-4 text-center">
                  <div className="w-16 h-16 mx-auto bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                    <CheckCircleIcon size={32} className="text-green-400" /> {/* Make sure you have CheckCircleIcon imported */}
                  </div>
                  <h4 className="text-xl font-medium text-white mb-2">
                    Email Client Opened!
                  </h4>
                  <p className="text-green-300">
                    Please complete sending the email in your mail application. Your form has been reset.
                  </p>
                </motion.div> : <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                        Your Name
                      </label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 outline-none transition-colors" placeholder="John Doe" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                        Your Email (So I can reply)
                      </label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 outline-none transition-colors" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                      Subject
                    </label>
                    <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 outline-none transition-colors" placeholder="Project Collaboration" />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                      Message
                    </label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 outline-none transition-colors resize-none" placeholder="I'd like to discuss a potential project..."></textarea>
                  </div>
                  <div className="text-right">
                    <motion.button whileHover={{
                  scale: 1.02
                }} whileTap={{
                  scale: 0.98
                }} type="submit" disabled={isSubmitting} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-8 rounded-lg font-medium shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center gap-2 disabled:opacity-70 ml-auto"> {/* Added ml-auto for right alignment if parent is flex */}
                      {isSubmitting ? <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Preparing...</span>
                      </> : <>
                        <span>Open in Email App</span>
                        <SendIcon size={18} />
                      </>}
                    </motion.button>
                  </div>
                </form>}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};

export default Contact;
