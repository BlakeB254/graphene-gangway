export function SprayHalos() {
  return (
    <div className="urban-texture texture-spray absolute inset-0">
      <div
        className="absolute h-[200px] w-[200px] rounded-full"
        style={{
          left: "15%",
          top: "35%",
          background:
            "radial-gradient(circle, rgba(0,240,255,0.12) 0%, rgba(0,240,255,0.04) 40%, transparent 70%)",
        }}
      />
      <div
        className="absolute h-[160px] w-[160px] rounded-full"
        style={{
          left: "72%",
          top: "60%",
          background:
            "radial-gradient(circle, rgba(0,240,255,0.10) 0%, rgba(0,240,255,0.03) 45%, transparent 70%)",
        }}
      />
      <div
        className="absolute h-[240px] w-[240px] rounded-full"
        style={{
          left: "50%",
          top: "15%",
          background:
            "radial-gradient(circle, rgba(0,240,255,0.08) 0%, rgba(0,240,255,0.02) 50%, transparent 70%)",
        }}
      />
      <div
        className="absolute h-[140px] w-[140px] rounded-full"
        style={{
          left: "85%",
          top: "80%",
          background:
            "radial-gradient(circle, rgba(0,240,255,0.14) 0%, rgba(0,240,255,0.05) 35%, transparent 70%)",
        }}
      />
    </div>
  );
}
