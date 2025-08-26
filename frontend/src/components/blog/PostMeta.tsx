interface Props {
  date: string;
  readTime: string;
}

function PostMeta({ date, readTime }: Props) {
  return (
    <small style={{ color: "var(--muted)", fontSize: "14px" }}>
      {new Date(date).toLocaleDateString()} • {readTime}
    </small>
  );
}

export default PostMeta;
