const SectionHeading = ({ eyebrow, title, accent, description }) => (
  <div className="max-w-2xl">
    {eyebrow && (
      <p className="label-caps mb-3">
        {eyebrow}
      </p>
    )}
    <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-ink">
      {title} {accent && <span className="text-accent italic font-semibold">{accent}</span>}
    </h2>
    {description && (
      <p className="mt-4 text-body text-muted">
        {description}
      </p>
    )}
  </div>
);

export default SectionHeading;
