import { useAuth } from "./hooks/useAuth";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/features/Hero";
import { CommunityProjects } from "./components/features/CommunityProjects";
import { FeaturesShowcase } from "./components/features/FeaturesShowcase";
import { TestimonialsAndFAQ } from "./components/features/TestimonialsAndFAQ";
import { Dashboard } from "./components/features/Dashboard";
import { Toaster } from "sonner";

function App() {
  const { isAuthenticated, isLoading, login } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="h-8 w-8 rounded-full border-2 border-primary border-t-transparent animate-spin"></div>
      </div>
    );
  }

  if (isAuthenticated) {
    return (
      <div className="min-h-screen bg-background selection:bg-primary/30">
        <Dashboard />
        <Toaster position="top-center" richColors />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background selection:bg-primary/30">
      <Navbar onAuth={() => login()} />
      <main>
        <Hero onAuth={() => login()} />
        <CommunityProjects />
        <FeaturesShowcase onAuth={() => login()} />
        <TestimonialsAndFAQ onAuth={() => login()} />
      </main>
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;
