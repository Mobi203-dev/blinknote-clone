import { Star, Linkedin } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const testimonials = [
  {
    content: "Blink has completely changed how we build products. We went from idea to live app in a single afternoon. It's actually magic.",
    author: "Jeff Robinson",
    role: "Product Designer",
    social: Linkedin,
    rating: 5
  },
  {
    content: "The best part about Blink is that it handles all the boring stuff. I just talk to the AI, and it gives me a full-stack app with auth and DB ready to go.",
    author: "Riccardo Vincenzi",
    role: "Full-stack Developer",
    social: Linkedin,
    rating: 5
  },
  {
    content: "I've never seen anything like this. The speed and quality of the generated code are top-tier. Highly recommended for any startup.",
    author: "Chris R. Pettigrew, Sr",
    role: "Tech Consultant",
    social: Linkedin,
    rating: 5
  }
];

const faqs = [
  {
    question: "What is Blink?",
    answer: "Blink is an AI-powered platform that builds full-stack web and mobile applications from natural language prompts. It includes hosting, database, authentication, and more."
  },
  {
    question: "Do I need to know how to code?",
    answer: "No. Blink is designed for both non-technical founders and experienced developers who want to move 10x faster."
  },
  {
    question: "Is it really full-stack?",
    answer: "Yes. Every project in Blink comes with a built-in database, authentication system, and edge functions for complex server-side logic."
  },
  {
    question: "Can I export my code?",
    answer: "Yes, you have full access to the source code and can download or sync it to GitHub at any time."
  }
];

export function TestimonialsAndFAQ({ onAuth }: { onAuth?: () => void }) {
  return (
    <>
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-glow">Loved by Builders</h2>
            <p className="text-muted-foreground text-xl">Join thousands of developers building the future on Blink.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="glass-card p-8 rounded-2xl flex flex-col justify-between group hover:scale-[1.02] transition-all">
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-8 leading-relaxed">
                    "{t.content}"
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-bold">{t.author}</span>
                    <span className="text-xs text-muted-foreground">{t.role}</span>
                  </div>
                  <t.social className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Everything you need to know about building on Blink</p>
          </div>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="glass-card border-none rounded-xl px-6">
                <AccordionTrigger className="text-left font-bold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-20 text-center">
            <h3 className="text-5xl md:text-7xl font-serif font-bold tracking-tight mb-8 italic">
              Don't just think it, <span className="text-glow text-primary">Blink</span> it.
            </h3>
            <p className="text-muted-foreground text-xl mb-10">Start building your next big idea today.</p>
            <Button size="lg" className="rounded-full px-10 h-14 text-lg font-bold bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20" onClick={onAuth}>
              Get Started for Free
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
