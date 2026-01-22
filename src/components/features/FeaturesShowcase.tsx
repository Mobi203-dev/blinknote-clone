import { Database, Shield, Zap, Cloud, Cpu, Globe, Layout } from "lucide-react";

const features = [
  {
    title: "AI App Generation",
    description: "Describe your app idea in plain English and watch Blink build it in minutes.",
    icon: Cpu,
    color: "text-blue-500"
  },
  {
    title: "Full-Stack Included",
    description: "Every app comes with a database, hosting, authentication, and edge functions.",
    icon: Database,
    color: "text-purple-500"
  },
  {
    title: "Real-time Collaboration",
    description: "Work with AI in real-time. See changes instantly as they are applied to your code.",
    icon: Globe,
    color: "text-emerald-500"
  },
  {
    title: "Custom Domain",
    description: "Publish your app to a custom domain with one click. We handle the SSL and CDN.",
    icon: Cloud,
    color: "text-sky-500"
  },
  {
    title: "Vibe Coding",
    description: "The fastest way to go from idea to production. No boilerplate, no complex setup.",
    icon: Zap,
    color: "text-amber-500"
  },
  {
    title: "Secure by Default",
    description: "Enterprise-grade security for your data and your users' data, out of the box.",
    icon: Shield,
    color: "text-indigo-500"
  }
];

export function FeaturesShowcase({ onAuth }: { onAuth?: () => void }) {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[800px] bg-glow opacity-30 pointer-events-none blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-glow">Built for Speed</h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Blink is the all-in-one platform for building production-ready applications by chatting with AI.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div key={i} className={`glass-card p-8 rounded-3xl group hover:scale-[1.02] transition-all duration-300`}>
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-2xl bg-muted group-hover:bg-white/10 transition-colors`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <h3 className="text-2xl font-bold">{feature.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {feature.description}
              </p>
              
              <div className="h-32 bg-background/40 rounded-xl border border-white/5 p-4 overflow-hidden flex items-center justify-center">
                <div className="w-full space-y-2 opacity-30">
                  <div className="h-2 bg-foreground/20 rounded-full w-3/4"></div>
                  <div className="h-2 bg-foreground/20 rounded-full w-full"></div>
                  <div className="h-2 bg-foreground/20 rounded-full w-1/2"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center max-w-3xl mx-auto">
          <p className="text-xl italic mb-10 text-muted-foreground">
            "Blink is to app development what the steam engine was to the industrial revolution."
          </p>
          <button className="px-10 py-4 rounded-full bg-primary text-white font-bold hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-primary/20" onClick={onAuth}>
            Start Building for Free
          </button>
        </div>
      </div>
    </section>
  );
}
