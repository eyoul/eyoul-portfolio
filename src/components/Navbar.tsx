import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Download, Cloud } from "lucide-react";
import { site } from "../data/site";

const links = [
  { label: "Work", to: "/projects" },
  { label: "Architecture", to: "/architecture" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 border-b transition-colors duration-300"
      style={{
        borderColor: "var(--color-border)",
        backgroundColor: scrolled ? "rgba(11,17,32,0.92)" : "rgba(11,17,32,0.5)",
        backdropFilter: "blur(10px)",
      }}
    >
      <nav className="container-page flex items-center justify-between h-16">
        <Link
          to="/"
          className="flex items-center gap-2 font-semibold tracking-tight text-[15px]"
          aria-label={`${site.name} — home`}
        >
          <span
            className="flex h-7 w-7 items-center justify-center rounded"
            style={{ backgroundColor: "var(--color-surface-2)", border: "1px solid var(--color-border)" }}
          >
            <Cloud size={15} style={{ color: "var(--color-accent)" }} strokeWidth={2} />
          </span>
          <span style={{ color: "var(--color-text)" }}>{site.name}</span>
          <span
            className="hidden sm:inline font-mono text-[11px] font-normal"
            style={{ color: "var(--color-text-faint)" }}
          >
            / solutions-architect
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `link-underline text-[13px] font-medium tracking-wide ${
                  isActive ? "" : ""
                }`
              }
              style={({ isActive }) => ({
                color: isActive ? "var(--color-text)" : "var(--color-text-muted)",
              })}
            >
              {l.label}
            </NavLink>
          ))}
          <a
            href={site.resumeUrl}
            download
            className="flex items-center gap-1.5 text-[13px] font-medium"
            style={{ color: "var(--color-text-muted)" }}
          >
            <Download size={14} />
            Resume
          </a>
        </div>

        <button
          className="md:hidden p-2 -mr-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="md:hidden border-t"
          style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-bg)" }}
        >
          <div className="container-page py-4 flex flex-col gap-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-[15px] font-medium py-1.5"
                style={({ isActive }) => ({
                  color: isActive ? "var(--color-accent)" : "var(--color-text)",
                })}
              >
                {l.label}
              </NavLink>
            ))}
            <a
              href={site.resumeUrl}
              download
              className="btn-primary justify-center mt-2"
            >
              <Download size={15} />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
