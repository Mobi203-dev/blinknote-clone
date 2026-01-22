import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function Navbar({ onAuth }: { onAuth?: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <a href="/" className="text-2xl font-bold tracking-tighter">
              Blink
            </a>
            <div className="hidden md:flex items-center gap-6">
              <a href="#explore" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Explore</a>
              <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
              <a href="#docs" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Docs</a>
              <a href="#affiliates" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Affiliates</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button variant="ghost" className="hidden sm:inline-flex" onClick={onAuth}>
              Log in
            </Button>
            <Button className="rounded-full px-6 bg-primary hover:bg-primary/90" onClick={onAuth}>
              Get started for free
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
