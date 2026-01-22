import { Button } from "@/components/ui/button";
import { Github, Mail, ArrowUp, Plus, Zap, Layout, Globe, Mic } from "lucide-react";
import { useState } from "react";

export default function AuthPage() {
  const [email, setEmail] = useState("");

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Left Column: Auth Form */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 lg:p-12">
        <div className="w-full max-w-sm space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tighter mb-4">Blink</h1>
            <h2 className="text-2xl font-bold mb-2">Build your dream app</h2>
            <p className="text-muted-foreground text-sm">
              Join millions of users building faster with Blink. No credit card required.
            </p>
          </div>

          <div className="space-y-3">
            <Button variant="outline" className="w-full h-12 gap-3 text-base rounded-xl border-border/50 hover:bg-muted/50">
              <img src="https://www.google.com/favicon.ico" alt="Google" className="h-5 w-5" />
              Continue with Google
            </Button>
            <Button variant="outline" className="w-full h-12 gap-3 text-base rounded-xl border-border/50 hover:bg-muted/50">
              <Github className="h-5 w-5" />
              Continue with GitHub
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border/50"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-4 text-muted-foreground font-medium">Or continue with email</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-12 px-4 rounded-xl bg-muted/30 border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
            <Button className="w-full h-12 rounded-xl text-base font-bold bg-muted/50 text-muted-foreground hover:bg-muted/70 cursor-not-allowed">
              Continue with Email
            </Button>
          </div>

          <p className="text-center text-sm text-muted-foreground">
            Already have an account? <a href="#" className="text-primary hover:underline font-medium">Sign in</a>
          </p>

          <p className="text-center text-[10px] text-muted-foreground px-8 leading-relaxed">
            By continuing, you agree to our <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a>
          </p>
        </div>
      </div>

      {/* Right Column: Preview/Background */}
      <div className="hidden lg:flex flex-1 relative overflow-hidden bg-[#1a1b1e]">
        {/* Sky/Cloud Background Image */}
        <div 
          className="absolute inset-0 opacity-40 bg-cover bg-center mix-blend-overlay"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1534067783941-51c9c23ea337?q=80&w=2574&auto=format&fit=crop")' }}
        ></div>
        
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-primary/20 via-transparent to-transparent"></div>

        {/* Floating UI Preview */}
        <div className="relative z-10 w-full flex items-center justify-center p-12">
          <div className="w-full max-w-xl glass-card rounded-2xl p-6 shadow-[0_0_100px_rgba(0,0,0,0.5)]">
            <div className="flex flex-col gap-4">
              <div className="text-sm text-muted-foreground leading-relaxed">
                Build an AI marketing agent that can search the web and generate |
              </div>
              <div className="flex items-center justify-between mt-8">
                <div className="flex items-center gap-3">
                  <Button variant="ghost" size="sm" className="h-8 gap-2 text-muted-foreground">
                    <Layout className="h-4 w-4" />
                    <span>Attach</span>
                  </Button>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                    Return <span className="h-3 w-3 rounded border border-muted-foreground/30 flex items-center justify-center">✓</span>
                  </span>
                  <Button className="h-10 w-10 rounded-full p-0 bg-primary shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                    <ArrowUp className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
