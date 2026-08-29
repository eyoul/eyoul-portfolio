import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container-page py-32 text-center">
      <p className="font-mono text-sm mb-4" style={{ color: "var(--color-accent)" }}>
        404
      </p>
      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6">
        Page not found
      </h1>
      <Link to="/" className="btn-secondary inline-flex">
        <ArrowLeft size={15} />
        Back to home
      </Link>
    </div>
  );
}
