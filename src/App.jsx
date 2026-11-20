import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import { RouterProvider, useRouter } from './context/RouterContext';
import AnimatedBackground from './components/common/AnimatedBackground';
import PageTransition from './components/common/PageTransition';
import Navbar from './components/layout/Navbar';
import MultilingualGreeting from './components/common/MultilingualGreeting.jsx';
import Seo from './components/common/Seo';
import Footer from './components/layout/Footer';
import CustomCursor from './components/common/CustomCursor';

/* Include CustomCursor component for desktop pointer devices */
import HomePage from './pages/HomePage';
import ProjectDetailPage from './pages/ProjectDetailPage';

function AppContent() {
  const { currentPath } = useRouter();

  // Route matching
  const renderCurrentView = () => {
    if (currentPath.startsWith('/projects/')) {
      const slug = currentPath.replace('/projects/', '').replace(/\/$/, '');
      return <ProjectDetailPage slug={slug} />;
    }
    return <HomePage />;
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-primary)] flex flex-col relative selection:bg-[var(--color-primary-accent)]/30 selection:text-[var(--color-secondary-accent)]">
      {/* Dynamic SEO metadata updater */}
      <Seo />

      {/* Subtle Digital Architect Blueprint Background */}
      <AnimatedBackground />

      {/* Global Responsive Navigation */}
      <Navbar />

      {/* Greeting overlay – plays once on fresh load */}
      <MultilingualGreeting />

      {/* Main Dynamic View with Transition */}
      <main className="flex-1 relative z-10">
        <PageTransition key={currentPath}>
          {renderCurrentView()}
        </PageTransition>
      </main>

      {/* Global Architectural Footer */}
      <Footer />
      {/* Custom cursor for desktop */}
      <CustomCursor />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider>
        <AppContent />
      </RouterProvider>
    </ThemeProvider>
  );
}
