export default function PageTransition({ children, className = '' }) {
  return (
    <div className={`transition-opacity duration-300 animate-fadeIn ${className}`}>
      {children}
    </div>
  );
}
