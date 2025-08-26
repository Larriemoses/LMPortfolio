import SectionHeader from "../components/ui/SectionHeader";
import Button from "../components/ui/Button";

function HomePage() {
  return (
    <main style={{ padding: "4rem 1rem", maxWidth: "960px", margin: "0 auto" }}>
      <SectionHeader
        title="SEO that drives results"
        subtitle="Helping brands grow through technical precision and strategic content."
      />
      <div
        style={{
          marginTop: "2rem",
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <Button label="View Work" href="/portfolio" />
        <Button label="Read Blog" href="/blogs" variant="secondary" />
      </div>
    </main>
  );
}

export default HomePage;
