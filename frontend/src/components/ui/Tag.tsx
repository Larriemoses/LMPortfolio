interface Props {
  label: string;
}

function Tag({ label }: Props) {
  return (
    <span
      style={{
        padding: "0.25rem 0.5rem",
        borderRadius: "999px",
        backgroundColor: "var(--card)",
        border: "1px solid var(--border)",
        fontSize: "14px",
        fontWeight: 500,
        marginRight: "0.5rem",
      }}
    >
      {label}
    </span>
  );
}

export default Tag;
