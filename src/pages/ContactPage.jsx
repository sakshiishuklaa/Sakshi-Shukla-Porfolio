import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FiCheck, FiMapPin, FiSend } from 'react-icons/fi';
import { PageHeader } from '../components/SiteShell';
import profile from '../data/profile';

const initial = { name: '', email: '', subject: '', message: '' };

export default function ContactPage() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    document.title = 'Contact | Sakshi Shukla';
  }, []);

  const update = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
  };

  const submit = (event) => {
    event.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Please enter a valid email.';
    if (!form.subject.trim()) next.subject = 'Please add a subject.';
    if (form.message.trim().length < 10) next.message = 'Please write at least a short message.';
    setErrors(next);
    if (Object.keys(next).length) return;

    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    const href = `mailto:${profile.socialLinks.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
    setStatus('sending');
    window.setTimeout(() => {
      window.location.href = href;
      setStatus('sent');
      setForm(initial);
    }, 1500);
  };

  const channels = [
    {
      label: 'GitHub',
      value: profile.socialLinks.githubLabel,
      href: profile.socialLinks.github,
      icon: FaGithub
    },
    {
      label: 'LinkedIn',
      value: profile.socialLinks.linkedinLabel,
      href: profile.socialLinks.linkedin,
      icon: FaLinkedinIn
    },
    {
      label: 'Email',
      value: profile.socialLinks.email,
      href: `mailto:${profile.socialLinks.email}`,
      icon: FaEnvelope
    }
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 pb-20 md:px-6">
      <PageHeader title="Get In Touch" subtitle={profile.contact.intro} />
      <div className="grid items-start gap-6 lg:grid-cols-2">
        <motion.section
          className="panel p-6 sm:p-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-xl font-bold">Send me a message</h2>
          <p className="mt-2 text-sm text-muted-foreground">{profile.contact.formNote}</p>
          <AnimatePresence mode="wait">
            {status === 'sent' ? (
              <motion.div
                key="sent"
                className="mt-10 flex flex-col items-center py-8 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: 'spring', duration: 0.6 }}
              >
                <motion.div
                  className="rounded-full bg-secondary p-5 text-primary"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', delay: 0.2, duration: 0.6 }}
                >
                  <FiCheck className="h-10 w-10" />
                </motion.div>
                <motion.h3 className="mt-4 text-2xl font-semibold" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                  Message Sent!
                </motion.h3>
                <motion.p className="mt-2 max-w-md text-sm text-muted-foreground" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                  Your email app should open with this message. Thank you for reaching out.
                </motion.p>
                <motion.button
                  type="button"
                  className="btn-outline mt-4"
                  onClick={() => setStatus('idle')}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            ) : (
          <motion.form key="form" className="mt-6 space-y-4" onSubmit={submit} noValidate initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            {[
              ['name', 'Name', 'text'],
              ['email', 'Email', 'email'],
              ['subject', 'Subject', 'text']
            ].map(([name, label, type]) => (
              <label key={name} className="block text-sm font-medium">
                {label}
                <input
                  name={name}
                  type={type}
                  value={form[name]}
                  onChange={update}
                  className="mt-1 h-11 w-full rounded-control border border-border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                />
                {errors[name] && <span className="mt-1 block text-xs text-red-500">{errors[name]}</span>}
              </label>
            ))}
            <label className="block text-sm font-medium">
              Message
              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={update}
                className="mt-1 w-full rounded-control border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
              />
              {errors.message && <span className="mt-1 block text-xs text-red-500">{errors.message}</span>}
            </label>
            <button type="submit" className="btn-primary" disabled={status === 'sending'}>
              {status === 'sending' ? (
                <span className="inline-flex items-center gap-2">
                  Sending
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                </span>
              ) : (
                <span className="inline-flex items-center gap-2">
                  <FiSend className="h-4 w-4" /> Send Message
                </span>
              )}
            </button>
          </motion.form>
            )}
          </AnimatePresence>
        </motion.section>

        <motion.section
          className="panel p-6 sm:p-8"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-xl font-bold">Connect with me</h2>
          <p className="mt-2 text-sm text-muted-foreground">{profile.contact.connectNote}</p>
          <ul className="mt-6 space-y-3">
            {channels.map((channel, index) => (
              <motion.li
                key={channel.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + 0.1 * index }}
              >
                <a
                  href={channel.href}
                  {...(channel.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
                  className="flex items-center gap-3 rounded-control border border-border px-4 py-3 transition-colors hover:bg-secondary"
                >
                  <channel.icon className="h-4 w-4 text-primary" />
                  <span>
                    <span className="block text-sm font-semibold">{channel.label}</span>
                    <span className="block text-xs text-muted-foreground">{channel.value}</span>
                  </span>
                </a>
              </motion.li>
            ))}
            <li className="flex items-center gap-3 rounded-control border border-border px-4 py-3">
              <FiMapPin className="h-4 w-4 text-primary" />
              <span>
                <span className="block text-sm font-semibold">Current Location</span>
                <span className="block text-xs text-muted-foreground">{profile.location}</span>
              </span>
            </li>
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">{profile.contact.availability}</p>
        </motion.section>
      </div>
    </div>
  );
}
