import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Search, LogOut, Settings, MoreVertical, Trash2 } from "lucide-react";
import { blink } from "@/lib/blink";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";

interface Note {
  id: string;
  content: string;
  createdAt: string;
}

export function Dashboard() {
  const { user, logout } = useAuth();
  const [notes, setNotes] = useState<Note[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const data = await blink.db.notes.list({
        orderBy: { createdAt: "desc" },
      });
      // Handle the fact that SQLite might return data differently if needed, 
      // but SDK usually handles camelCase
      setNotes(data as Note[]);
    } catch (error) {
      console.error("Failed to fetch notes:", error);
      toast.error("Failed to load notes");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    if (!inputValue.trim()) return;

    const newNote = {
      id: `temp-${Date.now()}`,
      content: inputValue,
      createdAt: new Date().toISOString(),
    };

    // Optimistic update
    setNotes([newNote, ...notes]);
    setInputValue("");

    try {
      await blink.db.notes.create({
        content: inputValue,
        userId: user?.id,
      });
      fetchNotes(); // Refresh to get the real ID and stable order
      toast.success("Note saved");
    } catch (error) {
      console.error("Failed to save note:", error);
      toast.error("Failed to save note");
      // Revert optimistic update
      setNotes(notes);
      setInputValue(inputValue);
    }
  };

  const handleDelete = async (id: string) => {
    const originalNotes = [...notes];
    setNotes(notes.filter(n => n.id !== id));

    try {
      await blink.db.notes.delete(id);
      toast.success("Note deleted");
    } catch (error) {
      console.error("Failed to delete note:", error);
      toast.error("Failed to delete note");
      setNotes(originalNotes);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSave();
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center">
      {/* Top Bar */}
      <header className="w-full h-16 border-b px-4 flex items-center justify-between glass-card sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <span className="text-xl font-bold tracking-tighter">BlinkNote</span>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Settings className="h-5 w-5" />
          </Button>
          <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold border border-primary/20">
            {user?.displayName?.[0] || user?.email?.[0]?.toUpperCase()}
          </div>
          <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground hover:text-destructive" onClick={logout}>
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <main className="flex-1 w-full max-w-3xl px-4 py-12 flex flex-col gap-12">
        {/* Main Input Area */}
        <div className="w-full animate-in">
          <div className="glass-card rounded-3xl p-6 shadow-2xl focus-within:ring-2 focus-within:ring-primary/20 transition-all">
            <textarea
              ref={inputRef}
              placeholder="What's on your mind? (Enter to save)"
              className="w-full bg-transparent border-none focus:ring-0 text-xl resize-none min-h-[120px] py-2 px-2"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
            />
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="rounded-lg h-9 gap-2">
                  <Plus className="h-4 w-4" />
                  <span>Topic</span>
                </Button>
              </div>
              <Button 
                onClick={handleSave} 
                className="rounded-full px-6 bg-primary hover:bg-primary/90 transition-transform active:scale-95"
                disabled={!inputValue.trim()}
              >
                Save Note
              </Button>
            </div>
          </div>
        </div>

        {/* Notes List */}
        <div className="space-y-6">
          <h2 className="text-sm font-medium text-muted-foreground px-4 uppercase tracking-widest">Recent Notes</h2>
          {isLoading ? (
            <div className="flex justify-center py-12">
              <div className="h-8 w-8 rounded-full border-2 border-primary border-t-transparent animate-spin"></div>
            </div>
          ) : notes.length === 0 ? (
            <div className="text-center py-20 glass-card rounded-3xl border-dashed">
              <p className="text-muted-foreground">No notes yet. Start by writing something above!</p>
            </div>
          ) : (
            <div className="grid gap-4">
              {notes.map((note) => (
                <div key={note.id} className="glass-card p-6 rounded-2xl group hover:border-primary/30 transition-all animate-in">
                  <div className="flex justify-between gap-4">
                    <p className="text-lg whitespace-pre-wrap flex-1">{note.content}</p>
                    <div className="flex flex-col items-end gap-2">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8 rounded-full opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-destructive"
                        onClick={() => handleDelete(note.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-[10px] text-muted-foreground font-medium">
                      {new Date(note.createdAt).toLocaleDateString()} at {new Date(note.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                    <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <MoreVertical className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
