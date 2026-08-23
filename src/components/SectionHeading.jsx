const SectionHeading = ({ eyebrow, title, accent, description }) => (
  <div className="max-w-2xl">
    {eyebrow && (
      <p className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-supply-primary mb-3">
        {eyebrow}
      </p>
    )}
    <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-supply-dark tracking-tight">
      {title} {accent && <span className="text-supply-primary">{accent}</span>}
    </h2>
    {description && (
      <p className="mt-4 text-supply-gray text-base sm:text-lg leading-relaxed">
        {description}
      </p>
    )}
  </div>
);

export default SectionHeading;
