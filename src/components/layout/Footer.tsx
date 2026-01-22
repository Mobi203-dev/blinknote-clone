import { Github, Twitter, Linkedin, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <a href="/" className="text-2xl font-bold tracking-tighter mb-4 block">
              Blink
            </a>
            <p className="text-muted-foreground mb-6 max-w-xs">
              The AI-powered platform for building production-ready applications in minutes.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full hover:bg-muted transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="p-2 rounded-full hover:bg-muted transition-colors"><MessageCircle className="h-5 w-5" /></a>
              <a href="#" className="p-2 rounded-full hover:bg-muted transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="p-2 rounded-full hover:bg-muted transition-colors"><Github className="h-5 w-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">PRODUCT</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Explore</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Alternatives</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Status</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">RESOURCES</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Prompts</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">LEGAL</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Affiliate Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t text-xs text-muted-foreground gap-4">
          <div className="flex items-center gap-4">
            <span>© 2026 Blink Inc.</span>
            <span>Built with precision and AI.</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
            <span>All systems normal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
