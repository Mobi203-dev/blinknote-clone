import { useState } from "react";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/features/Hero";
import { CommunityProjects } from "./components/features/CommunityProjects";
import { FeaturesShowcase } from "./components/features/FeaturesShowcase";
import { TestimonialsAndFAQ } from "./components/features/TestimonialsAndFAQ";
import AuthPage from "./pages/AuthPage";

function App() {
  const [showAuth, setShowAuth] = useState(false);

  if (showAuth) {
    return <AuthPage />;
  }

  return (
    <div className="min-h-screen bg-background selection:bg-primary/30">
      <Navbar onAuth={() => setShowAuth(true)} />
      <main>
        <Hero onAuth={() => setShowAuth(true)} />
        <CommunityProjects />
        <FeaturesShowcase onAuth={() => setShowAuth(true)} />
        <TestimonialsAndFAQ onAuth={() => setShowAuth(true)} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
