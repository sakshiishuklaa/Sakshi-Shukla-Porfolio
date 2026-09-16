import profile from '../data/profile';
import SectionHeading from './SectionHeading';

const featured = ['SQL', 'Python', 'ETL', 'AWS'];

const extraSkills = [
  ...profile.skills.frameworks,
  ...profile.skills.databases,
  ...profile.skills.cloud,
  ...profile.skills.bigData,
  ...profile.skills.tools,
].filter((skill) => skill !== 'Amazon Web Services (AWS)');

const Skills = () => (
  <div className="max-w-6xl mx-auto px-4 sm:px-8">
    <SectionHeading
      eyebrow="Capabilities"
      title="Data engineering"
      accent="skills"
      description="Core stack I use to validate pipelines, shape reliable tables, and move data from ingestion to analytics."
    />

    <div className="mt-10 surface-card p-6 sm:p-8">
      <p className="label-caps mb-4">Core</p>
      <div className="flex flex-wrap gap-2.5">
        {featured.map((skill) => (
          <span key={skill} className="chip-accent px-4 py-1.5 text-sm">
            {skill}
          </span>
        ))}
      </div>

      <p className="label-caps mt-8 mb-4">Also working with</p>
      <div className="flex flex-wrap gap-2">
        {extraSkills.map((skill) => (
          <span key={skill} className="chip border border-white/10 bg-charcoal/50 text-muted hover:border-accent/50 hover:text-accent transition-colors">
            {skill}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default Skills;
