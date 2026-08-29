import { FileText, Scissors, Braces, Database, Search, Sparkles, MessageSquare } from "lucide-react";
import ArchNode from "./ArchNode";
import Connector from "./Connector";

export default function RagArchitectureDiagram() {
  return (
    <div className="card p-6 sm:p-10">
      <div className="flex flex-col items-center">
        <p className="section-label mb-4 self-start sm:self-center">Ingestion</p>
        <div className="grid grid-cols-1 xs:grid-cols-3 gap-3 w-full max-w-2xl">
          <ArchNode
            label="Documents"
            icon={<FileText size={13} />}
            description="PDFs and text files dropped into the ingestion folder."
          />
          <ArchNode
            label="Chunking"
            icon={<Scissors size={13} />}
            description="Splits documents into overlapping token windows to preserve context."
          />
          <ArchNode
            label="Embeddings"
            icon={<Braces size={13} />}
            description="Sentence Transformers convert each chunk into a dense vector."
          />
        </div>

        <Connector />

        <ArchNode
          label="ChromaDB"
          icon={<Database size={13} />}
          description="Vector database storing chunk embeddings with source metadata."
          accent
        />

        <Connector />

        <p className="section-label mb-4 self-start sm:self-center">Query</p>
        <div className="grid grid-cols-1 xs:grid-cols-3 gap-3 w-full max-w-2xl">
          <ArchNode
            label="Retrieval"
            icon={<Search size={13} />}
            description="Embeds the question and retrieves the most relevant chunks by similarity."
          />
          <ArchNode
            label="Groq LLM"
            icon={<Sparkles size={13} />}
            description="Generates a grounded answer from the retrieved context."
          />
          <ArchNode
            label="Response"
            icon={<MessageSquare size={13} />}
            description="Streamed answer returned to the chat UI with cited sources."
          />
        </div>
      </div>

      <div className="mt-9 pt-7 border-t" style={{ borderColor: "var(--color-border)" }}>
        <p className="section-label mb-4">Supporting infrastructure</p>
        <div className="flex flex-wrap gap-2.5">
          <ArchNode label="Flask API" size="sm" description="REST endpoints for querying, history and document ingestion." />
          <ArchNode label="SQLite" size="sm" description="Stores conversation history per user and session." />
          <ArchNode label="Celery" size="sm" description="Runs ingestion and long-running tasks asynchronously." />
          <ArchNode label="Docker" size="sm" description="Containerized for local development and deployment." />
        </div>
      </div>
    </div>
  );
}
