import { Database, Shield, Zap, Cloud, Cpu, Globe, Layout } from "lucide-react";

const features = [
  {
    title: "Database",
    description: "Automatically setup your database and handle all SQL queries and migrations.",
    icon: Database,
    color: "text-blue-500"
  },
  {
    title: "Authentication",
    description: "Authenticate users with social logins, email/password, and magic links.",
    icon: Shield,
    color: "text-purple-500"
  },
  {
    title: "Edge Functions",
    description: "Build and deploy complete backend APIs for your full stack app.",
    icon: Cpu,
    color: "text-emerald-500"
  },
  {
    title: "Storage",
    description: "Upload and serve files with built-in CDN and image optimization.",
    icon: Cloud,
    color: "text-sky-500"
  },
  {
    title: "AI Models",
    description: "Generate text, create images, and synthesize voice with GPT, Whisper, etc.",
    icon: Zap,
    color: "text-amber-500"
  },
  {
    title: "Data APIs",
    description: "Scrape websites, capture screenshots, and extract data from any URL.",
    icon: Globe,
    color: "text-indigo-500"
  },
  {
    title: "Hosting",
    description: "Deploy your app with custom domains, SSL certificates, and global CDN.",
    icon: Layout,
    color: "text-pink-500"
  }
];

export function FeaturesShowcase({ onAuth }: { onAuth?: () => void }) {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[800px] bg-glow opacity-30 pointer-events-none blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Everything You Need, Built-In</h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Blink is the all-in-one app creation platform for AI-native entrepreneurs and developers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div key={i} className={`glass-card p-8 rounded-3xl group hover:scale-[1.02] transition-all duration-300 ${i === 6 ? 'lg:col-span-3' : ''}`}>
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-2xl bg-muted group-hover:bg-white/10 transition-colors`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <h3 className="text-2xl font-bold">{feature.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {feature.description}
              </p>
              
              {/* Decorative UI element representing the feature */}
              <div className="h-32 bg-background/40 rounded-xl border border-white/5 p-4 overflow-hidden">
                {i === 0 && (
                  <div className="space-y-2 text-[10px] font-mono opacity-50">
                    <div className="flex justify-between border-b pb-1 opacity-50"><span>id</span><span>name</span><span>role</span></div>
                    <div className="flex justify-between"><span>1</span><span>Sarah Chen</span><span>admin</span></div>
                    <div className="flex justify-between"><span>2</span><span>John Smith</span><span>editor</span></div>
                  </div>
                )}
                {i === 1 && (
                  <div className="space-y-3">
                    <div className="h-6 bg-white/5 rounded-md flex items-center px-2 gap-2 text-[10px]">
                      <div className="h-3 w-3 rounded-full bg-blue-500"></div> Sign in with Google
                    </div>
                    <div className="h-6 bg-white/5 rounded-md flex items-center px-2 text-[10px] opacity-50 italic">
                      Enter email...
                    </div>
                  </div>
                )}
                {i === 2 && (
                  <div className="space-y-2 font-mono text-[10px]">
                    <div className="text-emerald-500">POST /api/stripe-webhook</div>
                    <div className="text-purple-500">GET /api/user-data</div>
                  </div>
                )}
                {i === 3 && (
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-blue-500/20 border border-blue-500/30"></div>
                    <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                      <div className="w-[70%] h-full bg-blue-500"></div>
                    </div>
                  </div>
                )}
                {i === 4 && (
                  <div className="flex gap-2">
                    <div className="px-2 py-1 rounded bg-amber-500/10 border border-amber-500/20 text-[8px] text-amber-500">GPT-4</div>
                    <div className="px-2 py-1 rounded bg-indigo-500/10 border border-indigo-500/20 text-[8px] text-indigo-500">DALL-E 3</div>
                  </div>
                )}
                {i === 5 && (
                  <div className="font-mono text-[8px] opacity-40">
                    {`{ "url": "example.com", "status": 200 }`}
                  </div>
                )}
                {i === 6 && (
                  <div className="flex items-center justify-center h-full">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                      <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-[10px] text-green-500">Active - Global CDN enabled</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center max-w-3xl mx-auto">
          <p className="text-xl italic mb-10 text-muted-foreground">
            "You drive. AI builds. Blink AI Agent sets up your entire backend—database, auth, APIs, and deployment—while you focus on your vision."
          </p>
          <button className="px-10 py-4 rounded-full bg-primary text-white font-bold hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-2xl" onClick={onAuth}>
            Start Building Now
          </button>
        </div>
      </div>
    </section>
  );
}
