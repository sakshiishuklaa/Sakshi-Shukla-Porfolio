import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import profile from '../data/profile';
import SectionHeading from './SectionHeading';

const fieldClass =
  'w-full px-4 py-2.5 rounded-xl border border-accent/20 bg-charcoal/60 text-ink placeholder:text-muted/60 focus:ring-2 focus:ring-accent/40 focus:border-accent outline-none';

const Contact = () => (
  <div className="max-w-6xl mx-auto px-4 sm:px-8">
    <SectionHeading
      eyebrow="Contact"
      title="Let's"
      accent="connect"
      description={profile.contact.intro}
    />

    <div className="mt-12 grid lg:grid-cols-2 gap-6">
      <motion.form
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="surface-card p-6 sm:p-8 space-y-4"
        onSubmit={(event) => {
          event.preventDefault();
          const data = new FormData(event.currentTarget);
          const name = data.get('name') || '';
          const email = data.get('email') || '';
          const message = data.get('message') || '';
          const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
          const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
          window.location.href = `mailto:${profile.socialLinks.email}?subject=${subject}&body=${body}`;
        }}
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-ink mb-1.5">
            Name
          </label>
          <input id="name" name="name" required className={fieldClass} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-ink mb-1.5">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={fieldClass}
            placeholder="you@email.com"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-ink mb-1.5">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            className={`${fieldClass} resize-none`}
            placeholder="What would you like to talk about?"
          />
        </div>
        <button type="submit" className="btn-primary w-full">
          Send message
        </button>
      </motion.form>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <div className="surface-card p-6 sm:p-8 space-y-5">
          <div className="flex gap-4">
            <span className="p-3 rounded-full bg-accent text-charcoal">
              <FaEnvelope />
            </span>
            <div>
              <p className="label-caps">Email</p>
              <a href={`mailto:${profile.socialLinks.email}`} className="text-ink hover:text-accent">
                {profile.socialLinks.email}
              </a>
            </div>
          </div>
          {profile.contact.location && (
            <div className="flex gap-4">
              <span className="p-3 rounded-full bg-accent text-charcoal">
                <FaMapMarkerAlt />
              </span>
              <div>
                <p className="label-caps">Location</p>
                <p className="text-ink">{profile.contact.location}</p>
              </div>
            </div>
          )}
          <p className="text-sm text-muted pt-2">{profile.contact.availability}</p>
          <a
            href={profile.contact.vcfFile}
            download={profile.contact.vcfDownloadName}
            className="inline-flex text-sm font-semibold tracking-[0.04em] text-accent hover:text-ink"
          >
            Download vCard
          </a>
        </div>

        <div className="surface-card p-6 sm:p-8">
          <p className="label-caps mb-4">Social</p>
          <div className="flex gap-3">
            <a
              href={profile.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-accent/40 text-ink hover:bg-accent hover:text-charcoal hover:border-accent transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href={profile.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-accent/40 text-ink hover:bg-accent hover:text-charcoal hover:border-accent transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

export default Contact;
