interface Props {
  title: string;
  subtitle?: string;
}

function SectionHeader({ title, subtitle }: Props) {
  return (
    <div>
      <h1
        style={{
          fontFamily: "Source Serif Pro, serif",
          fontWeight: 600,
          fontSize: "clamp(28px, 4.5vw, 40px)",
          marginBottom: "1rem",
        }}
      >
        {title}
      </h1>
      {subtitle && (
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "18px",
            color: "var(--muted)",
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;
