import { Badge } from "@/components/ui/badge";
import { Heart, GitFork } from "lucide-react";

const projects = [
  {
    title: "Startup Idea Board",
    author: "v00m8b78ywf3wo4z",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=2670&auto=format&fit=crop",
    likes: 124,
    clones: 45
  },
  {
    title: "Daily Stoic Journal",
    author: "Amrith eshwar",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2573&auto=format&fit=crop",
    likes: 89,
    clones: 12
  },
  {
    title: "Grocery List Template",
    author: "Arya Chandra",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2668&auto=format&fit=crop",
    likes: 56,
    clones: 8
  },
  {
    title: "Project Milestone Tracker",
    author: "Niso Cosmetology",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2672&auto=format&fit=crop",
    likes: 210,
    clones: 67
  },
  {
    title: "Fitness Goals 2026",
    author: "Saurabh Hagawane",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=2670&auto=format&fit=crop",
    likes: 43,
    clones: 5
  },
  {
    title: "Book Summary: Deep Work",
    author: "2NPHybF0N4PiXKp2",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2573&auto=format&fit=crop",
    likes: 156,
    clones: 34
  }
];

export function CommunityProjects() {
  return (
    <section id="explore" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Explore Public Notes</h2>
          <p className="text-muted-foreground text-lg">Discover how others are using BlinkNote to organize their lives.</p>
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
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-bold">
                    {project.author[0].toUpperCase()}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-bold text-sm leading-none">{project.title}</h3>
                    <span className="text-[10px] text-muted-foreground mt-1">{project.author}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1"><Heart className="h-3 w-3" /> {project.likes}</span>
                    <span className="flex items-center gap-1"><GitFork className="h-3 w-3" /> {project.clones}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="px-8 py-3 rounded-full glass-card hover:bg-white/5 transition-all font-medium">
            Load More →
          </button>
        </div>
      </div>
    </section>
  );
}
