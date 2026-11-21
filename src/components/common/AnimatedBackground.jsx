export default function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
    >
      {/* Architectural blueprint grid */}
      <div className="absolute inset-0 architect-grid opacity-75"></div>

      {/* Layered subtle gradient ambient glow */}
      <div
        className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[600px] md:w-[900px] h-[500px] rounded-full blur-[140px] opacity-25 dark:opacity-20 transition-colors duration-500"
        style={{
          background: 'radial-gradient(circle, #2563EB 0%, #172554 60%, transparent 80%)'
        }}
      ></div>

      <div
        className="absolute top-[45%] -right-[10%] w-[450px] h-[450px] rounded-full blur-[130px] opacity-15 dark:opacity-10 transition-colors duration-500"
        style={{
          background: 'radial-gradient(circle, #38BDF8 0%, #172554 70%, transparent 90%)'
        }}
      ></div>

      <div
        className="absolute -bottom-[10%] -left-[10%] w-[500px] h-[500px] rounded-full blur-[140px] opacity-15 dark:opacity-10 transition-colors duration-500"
        style={{
          background: 'radial-gradient(circle, #172554 0%, #0B1120 70%, transparent 90%)'
        }}
      ></div>

    </div>
  );
}
