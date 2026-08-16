import { useState } from 'react';
import { motion } from 'motion/react';
import emailjs from '@emailjs/browser';

const MotionDiv = motion.div;

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
      .catch((error) => {
        console.error('EmailJS error:', error);
        setStatus('error');
      });
  };

  return (
    <section id="contact" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8">
      <MotionDiv
        className="mx-auto max-w-md"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="mb-2 text-3xl font-bold text-[#233860]">Say hi</h2>
        <p className="mb-8 text-[#233860]/70">Feel free to reach out. I&apos;m always happy for an adventure.</p>

        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="border-b border-[#233860]/20 py-2 outline-none transition focus:border-[#F25C0C]"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="border-b border-[#233860]/20 py-2 outline-none transition focus:border-[#F25C0C]"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="min-h-28 border-b border-[#233860]/20 py-2 outline-none transition focus:border-[#F25C0C]"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
          />
          <button
            className="mt-2 rounded bg-[#233860] px-6 py-3 font-medium text-white transition hover:bg-[#F25C0C] disabled:cursor-not-allowed disabled:opacity-60"
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
      </MotionDiv>
    </section>
  );
}

export default Contact;
