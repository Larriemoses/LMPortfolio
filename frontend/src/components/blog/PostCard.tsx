import Tag from "../ui/Tag";
import PostMeta from "./PostMeta";

interface Props {
  title: string;
  excerpt: string;
  tags: string[];
  date: string;
  readTime: string;
}

function PostCard({ title, excerpt, tags, date, readTime }: Props) {
  return (
    <article
      style={{
        backgroundColor: "var(--card)",
        padding: "1.5rem",
        borderRadius: "8px",
        boxShadow: "var(--shadow)",
        transition: "transform 150ms ease-out",
      }}
    >
      <h2
        style={{
          fontFamily: "Source Serif Pro",
          fontSize: "24px",
          marginBottom: "0.5rem",
        }}
      >
        {title}
      </h2>
      <PostMeta date={date} readTime={readTime} />
      <p style={{ marginTop: "1rem", marginBottom: "1rem" }}>{excerpt}</p>
      <div>
        {tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
    </article>
  );
}

export default PostCard;
