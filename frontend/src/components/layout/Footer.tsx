export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] mt-12">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-[var(--muted)] flex flex-col sm:flex-row gap-3 justify-between">
        <span>© {new Date().getFullYear()} Olarewaju Adebulu</span>
        <div className="flex gap-4">
          <a href="mailto:larriemoses@gmail.com">Email</a>
          <a href="https://wa.me/2348073210004" target="_blank">
            WhatsApp
          </a>
          <a
            href="https://www.linkedin.com/in/olarewaju-adebulu-320184212/"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            href="https://www.upwork.com/freelancers/~01ffd7d6d27c5a9d20"
            target="_blank"
          >
            Upwork
          </a>
        </div>
      </div>
    </footer>
  );
}
