export default function Connector({ height = 20 }: { height?: number }) {
  return (
    <div className="flex items-center justify-center" style={{ height }}>
      <div
        style={{
          width: 1,
          height: "100%",
          background:
            "linear-gradient(to bottom, var(--color-border-strong), var(--color-border-strong) 70%, transparent)",
        }}
      />
    </div>
  );
}
