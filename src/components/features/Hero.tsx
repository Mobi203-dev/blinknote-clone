import { Button } from "@/components/ui/button";
import { Mic, Globe, Zap, ArrowUp, Plus, Layout } from "lucide-react";
import { useState } from "react";

export function Hero({ onAuth }: { onAuth?: () => void }) {
  const [inputValue, setInputValue] = useState("");

  const suggestedIdeas = [
    { icon: Layout, label: "Brainstorm business ideas" },
    { icon: Zap, label: "Weekly shopping list" },
    { icon: Layout, label: "Project milestones" },
    { icon: Zap, label: "Meeting summary" },
    { icon: Zap, label: "Reading list 2026" },
    { icon: Globe, label: "Travel itinerary" },
  ];

  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex flex-col items-center justify-center">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[500px] bg-glow opacity-50 pointer-events-none"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <span className="text-sm font-medium text-muted-foreground mb-4 block animate-in [animation-delay:0ms]">
          Minimalist Note Taking
        </span>
        <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tight mb-8 animate-in [animation-delay:100ms]">
          Don't just think it <br />
          <span className="italic text-glow">Note</span> it
        </h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-in [animation-delay:200ms]">
          Capture your thoughts, ideas, and tasks instantly with a distraction-free interface.
          Your personal lightning-fast workspace.
        </p>

        {/* Chat Input Area */}
        <div className="relative max-w-3xl mx-auto mb-12 animate-in [animation-delay:300ms]">
          <div className="glass-card rounded-2xl p-4 shadow-2xl transition-all duration-300 focus-within:ring-2 focus-within:ring-primary/20">
            <textarea
              placeholder="Jot down a quick thought..."
              className="w-full bg-transparent border-none focus:ring-0 text-lg resize-none min-h-[100px] py-2 px-2"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="rounded-lg h-9 gap-2">
                  <Plus className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="rounded-lg h-9 gap-2">
                  <Zap className="h-4 w-4" />
                  <span>Auto</span>
                </Button>
                <Button variant="ghost" size="sm" className="rounded-lg h-9 gap-2">
                  <Layout className="h-4 w-4" />
                  <span>Theme</span>
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="rounded-lg h-9 gap-2">
                  <Globe className="h-4 w-4" />
                  <span>Public</span>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full h-9 w-9">
                  <Mic className="h-4 w-4" />
                </Button>
                <Button className="rounded-full h-10 w-10 p-0" onClick={onAuth}>
                  <ArrowUp className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Suggested Ideas */}
        <div className="animate-in [animation-delay:400ms]">
          <p className="text-sm text-muted-foreground mb-4 font-medium">Not sure where to start? Try one of these:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {suggestedIdeas.map((idea, i) => (
              <button
                key={i}
                onClick={onAuth}
                className="flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium hover:bg-white/5 transition-all hover:scale-105 active:scale-95"
              >
                <idea.icon className="h-3.5 w-3.5 text-primary" />
                {idea.label}
              </button>
            ))}
          </div>
          <button className="mt-6 text-sm text-muted-foreground hover:text-foreground flex items-center gap-2 mx-auto transition-colors" onClick={onAuth}>
            <Zap className="h-3.5 w-3.5" />
            Try different ideas
          </button>
        </div>
      </div>
    </section>
  );
}
