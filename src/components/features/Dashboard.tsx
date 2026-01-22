import { useState, useEffect } from "react";
import { 
  Plus, 
  Search, 
  LogOut, 
  Settings, 
  Code, 
  Database, 
  Layout, 
  Eye, 
  Play, 
  Github, 
  Bell, 
  Moon, 
  CheckCircle2, 
  Circle, 
  ChevronDown, 
  Mic, 
  ArrowUp,
  Sparkles,
  Zap,
  MoreHorizontal
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

type Tab = "workspace" | "preview" | "code" | "database";

interface Step {
  id: string;
  content: string;
  status: "pending" | "completed" | "in_progress" | "read" | "edited";
  type?: "read" | "write" | "edit" | "command";
}

export function Dashboard() {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState<Tab>("preview");
  const [inputValue, setInputValue] = useState("");
  
  const [steps] = useState<Step[]>([
    { id: "1", content: "Check src/index.css", status: "read", type: "read" },
    { id: "2", content: "Check tailwind.config.cjs", status: "read", type: "read" },
    { id: "3", content: "Check index.html", status: "read", type: "read" },
    { id: "4", content: "Edit src/index.css (+62 -130)", status: "edited", type: "edit" },
    { id: "5", content: "Implement Features showcase section", status: "pending" },
    { id: "6", content: "Implement Testimonials and FAQ sections", status: "pending" },
    { id: "7", content: "Implement Auth/Login page (split view)", status: "pending" },
  ]);

  const [messages] = useState([
    { role: "assistant", content: "I've analyzed your request. I'll start by setting up the core design system and then proceed to build the sections you mentioned." }
  ]);

  return (
    <div className="flex h-screen bg-[#0A0A0A] text-foreground selection:bg-primary/30 overflow-hidden">
      {/* Left Sidebar - Chat & Progress */}
      <aside className="w-[380px] flex flex-col border-r border-white/5 bg-[#0D0D0D]">
        {/* Sidebar Header */}
        <div className="p-4 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-primary/20 flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-primary" />
            </div>
            <span className="font-semibold text-sm">Blink Agent</span>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>

        {/* Sidebar Content (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar">
          {/* Progress Steps */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-[11px] text-muted-foreground uppercase tracking-widest font-bold">
              <span>Execution Steps</span>
              <span>{steps.filter(s => s.status !== "pending").length} / {steps.length}</span>
            </div>
            <div className="space-y-2">
              {steps.map((step) => (
                <div 
                  key={step.id} 
                  className={cn(
                    "flex items-center gap-3 p-2.5 rounded-xl text-sm transition-all border border-transparent",
                    step.status === "pending" ? "text-muted-foreground/50" : "bg-white/[0.03] border-white/[0.05]"
                  )}
                >
                  {step.status === "completed" || step.status === "read" || step.status === "edited" ? (
                    <div className={cn(
                      "h-5 w-5 rounded-full flex items-center justify-center",
                      step.status === "read" ? "bg-emerald-500/20 text-emerald-500" : 
                      step.status === "edited" ? "bg-emerald-500/20 text-emerald-500" : 
                      "bg-primary/20 text-primary"
                    )}>
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </div>
                  ) : (
                    <Circle className="h-5 w-5 text-muted-foreground/30" />
                  )}
                  <span className="flex-1 truncate">
                    {step.type && (
                      <span className={cn(
                        "mr-2 px-1.5 py-0.5 rounded text-[10px] font-bold uppercase",
                        step.type === "read" ? "bg-emerald-500/10 text-emerald-500" : "bg-primary/10 text-primary"
                      )}>
                        {step.type}
                      </span>
                    )}
                    {step.content}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Messages */}
          <div className="space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-5 w-5 rounded bg-primary/20 flex items-center justify-center">
                    <Sparkles className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-xs font-bold text-muted-foreground">BLINK</span>
                </div>
                <div className="text-sm leading-relaxed text-muted-foreground bg-white/[0.02] p-4 rounded-2xl border border-white/[0.05]">
                  {msg.content}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Footer - Chat Input */}
        <div className="p-4 border-t border-white/5 space-y-4 bg-[#0D0D0D]">
          <div className="flex items-center gap-2 text-[10px] text-muted-foreground px-2">
            <Zap className="h-3 w-3" />
            <span>You've used 1/5 daily credits</span>
            <button className="ml-auto flex items-center gap-1 font-bold text-foreground hover:text-primary transition-colors">
              <ArrowUp className="h-3 w-3 rotate-45" />
              UPGRADE
            </button>
          </div>
          <div className="relative glass-card rounded-2xl p-2 focus-within:ring-1 focus-within:ring-primary/50 transition-all bg-white/[0.02]">
            <textarea
              placeholder="Blink is working..."
              className="w-full bg-transparent border-none focus:ring-0 text-sm resize-none min-h-[80px] py-2 px-3 outline-none"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <div className="flex items-center justify-between p-1">
              <div className="flex items-center gap-1">
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                  <Plus className="h-4 w-4 text-muted-foreground" />
                </Button>
                <Button variant="ghost" className="h-8 px-2 rounded-lg gap-2 text-xs font-bold text-muted-foreground">
                  <Zap className="h-3.5 w-3.5" />
                  Auto
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </div>
              <div className="flex items-center gap-1">
                <Button variant="ghost" className="h-8 px-3 rounded-lg gap-2 text-xs font-bold text-muted-foreground">
                  <Play className="h-3.5 w-3.5" />
                  Agent
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                  <Mic className="h-4 w-4 text-muted-foreground" />
                </Button>
                <Button size="icon" className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20">
                  <div className="h-2 w-2 rounded-sm bg-foreground" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 bg-[#0A0A0A]">
        {/* Top Header */}
        <header className="h-14 border-b border-white/5 flex items-center justify-between px-4 bg-[#0D0D0D]/50 backdrop-blur-md sticky top-0 z-50">
          <div className="flex items-center gap-3 min-w-0">
            <div className="flex items-center gap-1 px-2 py-1 rounded-md hover:bg-white/5 transition-colors cursor-pointer group">
              <Globe className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              <span className="text-sm font-semibold truncate max-w-[200px]">AI App Builder</span>
              <ChevronDown className="h-3 w-3 text-muted-foreground" />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center bg-white/[0.03] rounded-full p-1 border border-white/[0.05]">
              <Button 
                variant="ghost" 
                size="sm" 
                className={cn(
                  "h-8 rounded-full gap-2 px-4 text-xs font-bold transition-all",
                  activeTab === "workspace" ? "bg-white/10 text-foreground" : "text-muted-foreground"
                )}
                onClick={() => setActiveTab("workspace")}
              >
                <Layout className="h-3.5 w-3.5" />
                Workspace
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className={cn(
                  "h-8 rounded-full gap-2 px-4 text-xs font-bold transition-all",
                  activeTab === "preview" ? "bg-white/10 text-foreground" : "text-muted-foreground"
                )}
                onClick={() => setActiveTab("preview")}
              >
                <Eye className="h-3.5 w-3.5" />
                Preview
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className={cn(
                  "h-8 rounded-full gap-2 px-4 text-xs font-bold transition-all",
                  activeTab === "code" ? "bg-white/10 text-foreground" : "text-muted-foreground"
                )}
                onClick={() => setActiveTab("code")}
              >
                <Code className="h-3.5 w-3.5" />
                Code
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className={cn(
                  "h-8 rounded-full gap-2 px-4 text-xs font-bold transition-all",
                  activeTab === "database" ? "bg-white/10 text-foreground" : "text-muted-foreground"
                )}
                onClick={() => setActiveTab("database")}
              >
                <Database className="h-3.5 w-3.5" />
                Database
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 mr-2">
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full text-muted-foreground hover:text-foreground transition-colors">
                <Search className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full text-muted-foreground hover:text-foreground transition-colors">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full text-muted-foreground hover:text-foreground transition-colors">
                <Moon className="h-4 w-4" />
              </Button>
            </div>
            <Button size="sm" className="h-9 px-4 rounded-lg bg-primary hover:bg-primary/90 text-white font-bold text-xs gap-2">
              <Sparkles className="h-3.5 w-3.5" />
              Publish
            </Button>
            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold border border-primary/20 cursor-pointer ml-2">
              {user?.displayName?.[0] || user?.email?.[0]?.toUpperCase()}
            </div>
          </div>
        </header>

        {/* Tab Content */}
        <div className="flex-1 relative bg-[#0D0D0D] overflow-hidden">
          {activeTab === "preview" && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
              <div className="h-12 w-12 rounded-full border-2 border-primary/30 border-t-primary animate-spin mb-6"></div>
              <h3 className="text-xl font-bold mb-2">Blink is working on your request</h3>
              <p className="text-muted-foreground text-sm max-w-sm">
                (This might take a few minutes)
              </p>
              
              <div className="mt-12 space-y-4 w-full max-w-xs">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>Never break working code</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span>Auto debugging and error fixing</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <Layout className="h-4 w-4 text-muted-foreground/50" />
                  <span>All-in-one app development platform</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "code" && (
            <div className="absolute inset-0 flex">
              <div className="w-64 border-r border-white/5 bg-[#0D0D0D] p-2 space-y-1 overflow-y-auto">
                <div className="text-[10px] font-bold text-muted-foreground px-2 py-1 uppercase tracking-widest">Files</div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 text-sm">
                  <div className="w-4 h-4 rounded bg-primary/20 flex items-center justify-center">
                    <span className="text-[8px] font-bold text-primary">TS</span>
                  </div>
                  App.tsx
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm text-muted-foreground hover:bg-white/[0.02]">
                  <div className="w-4 h-4 rounded bg-blue-500/20 flex items-center justify-center">
                    <span className="text-[8px] font-bold text-blue-500">CSS</span>
                  </div>
                  index.css
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm text-muted-foreground hover:bg-white/[0.02]">
                  <div className="w-4 h-4 rounded bg-amber-500/20 flex items-center justify-center">
                    <span className="text-[8px] font-bold text-amber-500">JS</span>
                  </div>
                  tailwind.config.cjs
                </div>
              </div>
              <div className="flex-1 bg-[#050505] p-6 font-mono text-sm overflow-auto">
                <pre className="text-emerald-500/80">
                  {`import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}`}
                </pre>
              </div>
            </div>
          )}

          {activeTab === "database" && (
            <div className="absolute inset-0 flex flex-col">
              <div className="p-4 border-b border-white/5 flex items-center gap-4 overflow-x-auto custom-scrollbar">
                <Button variant="ghost" size="sm" className="rounded-lg bg-white/5 gap-2 px-4 font-bold text-xs">
                  <Database className="h-3.5 w-3.5" />
                  users
                </Button>
                <Button variant="ghost" size="sm" className="rounded-lg gap-2 px-4 font-bold text-xs text-muted-foreground">
                  <Database className="h-3.5 w-3.5" />
                  products
                </Button>
                <Button variant="ghost" size="sm" className="rounded-lg gap-2 px-4 font-bold text-xs text-muted-foreground">
                  <Plus className="h-3.5 w-3.5" />
                  New Table
                </Button>
              </div>
              <div className="flex-1 p-6 overflow-auto">
                <div className="border border-white/5 rounded-2xl overflow-hidden bg-white/[0.01]">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-white/5 border-b border-white/5">
                      <tr>
                        <th className="px-6 py-3 font-bold text-xs uppercase tracking-widest text-muted-foreground">ID</th>
                        <th className="px-6 py-3 font-bold text-xs uppercase tracking-widest text-muted-foreground">Email</th>
                        <th className="px-6 py-3 font-bold text-xs uppercase tracking-widest text-muted-foreground">Role</th>
                        <th className="px-6 py-3 font-bold text-xs uppercase tracking-widest text-muted-foreground">Created At</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr>
                        <td className="px-6 py-4 font-mono text-xs text-muted-foreground">user_1</td>
                        <td className="px-6 py-4">admin@example.com</td>
                        <td className="px-6 py-4">admin</td>
                        <td className="px-6 py-4 text-xs text-muted-foreground">2024-01-22</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === "workspace" && (
            <div className="absolute inset-0 flex items-center justify-center text-center p-8">
              <div className="max-w-md space-y-6">
                <div className="h-16 w-16 rounded-3xl bg-primary/10 flex items-center justify-center mx-auto border border-primary/20">
                  <Layout className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Workspace</h3>
                <p className="text-muted-foreground">
                  Manage your project files, dependencies, and settings in one place.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass-card p-4 rounded-2xl text-left hover:border-primary/30 transition-all cursor-pointer">
                    <div className="font-bold text-sm mb-1">Project Settings</div>
                    <div className="text-[10px] text-muted-foreground">Configure domains, env vars, etc.</div>
                  </div>
                  <div className="glass-card p-4 rounded-2xl text-left hover:border-primary/30 transition-all cursor-pointer">
                    <div className="font-bold text-sm mb-1">Dependencies</div>
                    <div className="text-[10px] text-muted-foreground">Manage npm packages.</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
