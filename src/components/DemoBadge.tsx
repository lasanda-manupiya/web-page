export default function DemoBadge({ label = 'Demonstration data' }: { label?: string }) {
  return (
    <span className="demo-badge" title="Example values for demonstration only — must be reviewed before publication (PDF §10).">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 2 1 21h22L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M12 9v5M12 17h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
      {label}
    </span>
  );
}
