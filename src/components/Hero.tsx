import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";
import HeroArchitecture from "./HeroArchitecture";
import { site } from "../data/site";

export default function Hero() {
  return (
    <section className="container-page pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        <div className="fade-in">
          <p className="eyebrow mb-5">Cloud &amp; Software Engineer</p>
          <h1
            className="text-[2.4rem] leading-[1.08] sm:text-[3.1rem] sm:leading-[1.06] font-bold tracking-tight"
            style={{ color: "var(--color-text)" }}
          >
            I design and build secure enterprise systems on AWS.
          </h1>
          <p
            className="mt-6 text-[16px] sm:text-[17px] leading-relaxed max-w-xl"
            style={{ color: "var(--color-text-muted)" }}
          >
            Cloud infrastructure, backend systems, and enterprise applications
            built with AWS, Terraform, Docker, Django, React, and PostgreSQL.
          </p>

          <p
            className="font-mono text-[12.5px] mt-6 tracking-wide"
            style={{ color: "var(--color-text-faint)" }}
          >
            AWS · Terraform · Docker · Django · React · PostgreSQL
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-9">
            <Link to="/projects" className="btn-primary">
              View My Work
              <ArrowRight size={15} />
            </Link>
            <a href={site.resumeUrl} download className="btn-secondary">
              <Download size={15} />
              Download Resume
            </a>
          </div>
        </div>

        <div className="fade-in" style={{ animationDelay: "120ms" }}>
          <HeroArchitecture />
        </div>
      </div>
    </section>
  );
}
