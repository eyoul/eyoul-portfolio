import { Github, ArrowUpRight, ShieldCheck, EyeOff, Gauge } from "lucide-react";
import Reveal from "../components/Reveal";
import RagArchitectureDiagram from "../components/RagArchitectureDiagram";
import { projects } from "../data/projects";

const workflow = [
  { step: "Ingest", desc: "Documents are dropped into a folder and parsed from PDF or plain text." },
  { step: "Chunk & Embed", desc: "Text is split into overlapping windows and embedded with Sentence Transformers." },
  { step: "Store", desc: "Embeddings are written to ChromaDB alongside file and page metadata." },
  { step: "Ask a Question", desc: "A user submits a natural-language question through the chat interface." },
  { step: "Retrieve & Generate", desc: "The top matching chunks are retrieved and passed to the LLM to ground its answer." },
  { step: "Respond with Sources", desc: "The streamed answer is returned along with the source documents it drew from." },
];

const metrics = [
  { label: "Context Precision", value: "0.92", desc: "Share of retrieved chunks that were actually relevant." },
  { label: "Context Recall", value: "0.88", desc: "How much of the necessary information was retrieved." },
  { label: "Faithfulness", value: "0.95", desc: "How closely answers stayed grounded in the retrieved sources." },
  { label: "Answer Relevancy", value: "0.91", desc: "How well answers addressed the intent of the question." },
];

const safety = [
  { icon: EyeOff, title: "Anti-Hallucination Guardrail", desc: "Falls back to an explicit \"insufficient data\" response when retrieval similarity is too low, rather than guessing." },
  { icon: ShieldCheck, title: "Rate Limiting & Logging", desc: "Per-user rate limits and full request logging support safe, auditable production use." },
  { icon: Gauge, title: "Evaluation-Driven", desc: "Retrieval and generation quality are benchmarked with RAGAS rather than assumed." },
];

export default function AuditGuard() {
  const project = projects.find((p) => p.slug === "auditguard")!;

  return (
    <div>
      <div className="container-page pt-20 pb-16 sm:pt-28 sm:pb-20">
        <Reveal>
          <p className="eyebrow mb-4">Case Study</p>
          <h1 className="text-3xl sm:text-[2.6rem] font-bold tracking-tight leading-tight max-w-3xl">
            {project.name}
          </h1>
          <p className="mt-4 text-[16px] max-w-2xl" style={{ color: "var(--color-accent)" }}>
            {project.subtitle}
          </p>
          <p className="mt-5 text-[15px] leading-relaxed max-w-2xl" style={{ color: "var(--color-text-muted)" }}>
            {project.problem}
          </p>

          <div className="flex flex-wrap gap-2 mt-8">
            {project.technology.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>

          {project.githubUrl && (
            <a href={project.githubUrl} className="btn-secondary mt-8">
              <Github size={15} />
              View on GitHub
            </a>
          )}
        </Reveal>
      </div>

      {/* Business Problem */}
      <section className="container-page pb-20 sm:pb-24">
        <Reveal>
          <div className="grid lg:grid-cols-[280px_1fr] gap-10">
            <p className="section-label">01 — Business Problem</p>
            <div className="max-w-2xl space-y-4 text-[15px] leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
              <p>
                Audit and compliance work involves answering specific
                questions against large bodies of policy documents, standards
                and filings — SOX controls, risk policies, HR policies and
                internal standards. Finding the right passage by hand across
                hundreds of pages is slow and error-prone, and answers still
                need to be traceable back to a source document.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Solution */}
      <section className="container-page pb-20 sm:pb-24">
        <Reveal>
          <div className="grid lg:grid-cols-[280px_1fr] gap-10">
            <p className="section-label">02 — Solution</p>
            <p className="max-w-2xl text-[15px] leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
              {project.solution}
            </p>
          </div>
        </Reveal>
      </section>

      {/* Architecture */}
      <section className="container-page pb-20 sm:pb-24">
        <Reveal>
          <p className="section-label mb-8">03 — Architecture</p>
        </Reveal>
        <Reveal delay={80}>
          <RagArchitectureDiagram />
        </Reveal>
      </section>

      {/* Workflow */}
      <section className="container-page pb-20 sm:pb-24">
        <Reveal>
          <p className="section-label mb-8">04 — Workflow</p>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-4">
          {workflow.map((w, i) => (
            <Reveal key={w.step} delay={i * 50}>
              <div className="card p-5 flex gap-4">
                <span className="font-mono text-[12px] pt-0.5" style={{ color: "var(--color-accent)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-semibold text-[14px] mb-1">{w.step}</p>
                  <p className="text-[13px] leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                    {w.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Evaluation */}
      <section className="container-page pb-20 sm:pb-24">
        <Reveal>
          <p className="section-label mb-3">05 — Evaluation</p>
          <p className="max-w-2xl text-[14.5px] leading-relaxed mb-8" style={{ color: "var(--color-text-muted)" }}>
            Retrieval and answer quality were benchmarked with RAGAS across a
            set of queries against sample audit and policy documents.
          </p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 60}>
              <div className="card p-6 h-full">
                <p className="font-mono text-3xl font-semibold mb-3" style={{ color: "var(--color-accent)" }}>
                  {m.value}
                </p>
                <p className="font-semibold text-[13.5px] mb-2">{m.label}</p>
                <p className="text-[12.5px] leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                  {m.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Safety */}
      <section className="container-page pb-24 sm:pb-32">
        <Reveal>
          <p className="section-label mb-8">06 — Safety &amp; Reliability</p>
        </Reveal>
        <div className="grid sm:grid-cols-3 gap-4">
          {safety.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <div className="card p-6 h-full">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-md mb-4"
                  style={{ backgroundColor: "var(--color-accent-soft)" }}
                >
                  <s.icon size={16} style={{ color: "var(--color-accent)" }} />
                </div>
                <p className="font-semibold text-[13.5px] mb-2">{s.title}</p>
                <p className="text-[12.5px] leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <div className="mt-14 flex flex-wrap gap-4">
            <a href={project.githubUrl} className="btn-primary">
              View Source on GitHub
              <ArrowUpRight size={15} />
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
