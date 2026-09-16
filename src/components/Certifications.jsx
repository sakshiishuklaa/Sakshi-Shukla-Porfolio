import { motion } from 'framer-motion';
import { FaAward } from 'react-icons/fa';
import profile from '../data/profile';
import SectionHeading from './SectionHeading';

const Certifications = () => (
  <div className="max-w-6xl mx-auto px-4 sm:px-8">
    <SectionHeading
      eyebrow="Credentials"
      title="Certifications"
      accent="earned"
      description="Cloud, DevOps, and development certifications that support the way I build and operate data systems."
    />

    <div className="mt-12 grid sm:grid-cols-2 gap-6">
      {profile.certifications.map((item, index) => (
        <motion.article
          key={item.name}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.06 }}
          className="surface-card p-6 sm:p-8"
        >
          <div className="flex items-start gap-3">
            <span className="mt-0.5 p-2.5 rounded-full bg-accent text-charcoal shrink-0">
              <FaAward className="w-4 h-4" />
            </span>
            <div>
              <h3 className="font-heading text-xl font-bold text-ink leading-snug">{item.name}</h3>
              {item.issuer && (
                <p className="text-sm text-muted mt-2">{item.issuer}</p>
              )}
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  </div>
);

export default Certifications;
