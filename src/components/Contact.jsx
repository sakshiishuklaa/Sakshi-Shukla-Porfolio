import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import profile from '../data/profile';
import SectionHeading from './SectionHeading';

const Contact = () => (
  <section className="py-6 sm:py-8">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
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
            <label htmlFor="name" className="block text-sm font-medium text-supply-dark mb-1.5">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              className="w-full px-4 py-2.5 rounded-xl border border-supply-lightgray bg-supply-background focus:ring-2 focus:ring-supply-primary/30 focus:border-supply-primary outline-none"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-supply-dark mb-1.5">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-4 py-2.5 rounded-xl border border-supply-lightgray bg-supply-background focus:ring-2 focus:ring-supply-primary/30 focus:border-supply-primary outline-none"
              placeholder="you@email.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-supply-dark mb-1.5">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full px-4 py-2.5 rounded-xl border border-supply-lightgray bg-supply-background focus:ring-2 focus:ring-supply-primary/30 focus:border-supply-primary outline-none resize-none"
              placeholder="What would you like to talk about?"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-full bg-supply-dark text-white font-semibold hover:bg-supply-primary transition-colors"
          >
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
              <span className="p-3 rounded-full bg-supply-light text-supply-primary">
                <FaEnvelope />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-supply-gray">Email</p>
                <a href={`mailto:${profile.socialLinks.email}`} className="text-supply-dark hover:text-supply-primary">
                  {profile.socialLinks.email}
                </a>
              </div>
            </div>
            {profile.contact.location && (
              <div className="flex gap-4">
                <span className="p-3 rounded-full bg-supply-light text-supply-primary">
                  <FaMapMarkerAlt />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-supply-gray">Location</p>
                  <p className="text-supply-dark">{profile.contact.location}</p>
                </div>
              </div>
            )}
            <p className="text-sm text-supply-gray pt-2">{profile.contact.availability}</p>
            <a
              href={profile.contact.vcfFile}
              download={profile.contact.vcfDownloadName}
              className="inline-flex text-sm font-semibold text-supply-primary hover:underline"
            >
              Download vCard
            </a>
          </div>

          <div className="surface-card p-6 sm:p-8">
            <p className="text-xs uppercase tracking-wider text-supply-gray mb-4">Social</p>
            <div className="flex gap-3">
              <a
                href={profile.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-supply-light text-supply-dark hover:bg-supply-primary hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href={profile.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-supply-light text-supply-dark hover:bg-supply-primary hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Contact;
