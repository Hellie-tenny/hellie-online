import { useState } from 'react';
import emailjs from '@emailjs/browser';
import contactImage from '../assets/imgs/contact.png';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = (event) => {
    event.preventDefault();

    const serviceId = 'service_cjxelre';
    const templateId = 'template_lftgm7b';
    const publicKey = 'Eyl2GAaRPWlxznFdY';

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Hellings',
      message,
    };

    setStatus('sending');

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setStatus('success');
        setName('');
        setMessage('');
        setEmail('');
      })
      .catch(() => {
        setStatus('error');
      });
  };

  return (
    <section id="contact" className="scroll-mt-20 bg-[#E7FDF6] px-4 py-20">
      <div className="w-full sm:flex">
        <div className="flex-1">
          <img src={contactImage} alt="Contact" className="max-h-80 object-contain" />
          <h2 className="text-2xl font-bold text-[#233860]">Say Hi!</h2>
          <p className="text-[#233860]">Feel free to contact me. I&apos;m always happy for an adventure.</p>
        </div>
        <div className="flex-1">
          <form className="flex flex-col p-5" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="border-b py-4 outline-none"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="border-b py-4 outline-none"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="min-h-32 border-b py-4 outline-none"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              required
            />
            <button
              className="my-5 cursor-pointer bg-[#233860] p-4 text-white transition hover:bg-[#F25C0C] disabled:cursor-not-allowed disabled:opacity-60"
              type="submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Send'}
            </button>

            {status === 'success' && (
              <p role="status" className="text-sm font-medium text-green-700">
                Message sent successfully!
              </p>
            )}
            {status === 'error' && (
              <p role="alert" className="text-sm font-medium text-red-600">
                Something went wrong sending your message. Please try again, or email me directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
