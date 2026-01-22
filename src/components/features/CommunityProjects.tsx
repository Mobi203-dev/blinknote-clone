import { Badge } from "@/components/ui/badge";
import { Heart, GitFork, Sparkles } from "lucide-react";

const projects = [
  {
    title: "AI Headshot Generator",
    author: "v00m8b78ywf3wo4z",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2620&auto=format&fit=crop",
    likes: 1240,
    clones: 450
  },
  {
    title: "SaaS Analytics Dashboard",
    author: "Amrith eshwar",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2670&auto=format&fit=crop",
    likes: 890,
    clones: 120
  },
  {
    title: "Real-time Chat App",
    author: "Arya Chandra",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=2670&auto=format&fit=crop",
    likes: 560,
    clones: 80
  },
  {
    title: "E-commerce Storefront",
    author: "Niso Cosmetology",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop",
    likes: 2100,
    clones: 670
  },
  {
    title: "Personal Portfolio",
    author: "Saurabh Hagawane",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    likes: 430,
    clones: 50
  },
  {
    title: "Task Management Tool",
    author: "2NPHybF0N4PiXKp2",
    image: "https://images.unsplash.com/photo-1454165833762-0165b067640a?q=80&w=2670&auto=format&fit=crop",
    likes: 1560,
    clones: 340
  }
];

export function CommunityProjects() {
  return (
    <section id="explore" className="py-24 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-6">
            <Sparkles className="h-3 w-3" />
            <span>Community Showcase</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Built with Blink</h2>
          <p className="text-muted-foreground text-lg">Explore thousands of production apps created by the community.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div key={i} className="group glass-card rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300">
              <div className="aspect-video relative overflow-hidden bg-muted">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold border border-primary/10">
                    {project.author[0].toUpperCase()}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-bold text-sm leading-none">{project.title}</h3>
                    <span className="text-[10px] text-muted-foreground mt-1">{project.author}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5 hover:text-primary transition-colors cursor-pointer">
                      <Heart className="h-3.5 w-3.5" /> {project.likes}
                    </span>
                    <span className="flex items-center gap-1.5 hover:text-primary transition-colors cursor-pointer">
                      <GitFork className="h-3.5 w-3.5" /> {project.clones}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="px-8 py-3 rounded-full glass-card hover:bg-white/10 transition-all font-bold text-sm">
            View all projects →
          </button>
        </div>
      </div>
    </section>
  );
}
