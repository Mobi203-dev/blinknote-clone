import { Star, Linkedin } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const testimonials = [
  {
    content: "I've tried every note app under the sun. Notion is too slow, Apple Notes is too simple. BlinkNote is the perfect 'in-between' - fast as light and always there when I need it.",
    author: "Jeff Robinson",
    role: "Product Designer",
    social: Linkedin,
    rating: 5
  },
  {
    content: "The distraction-free interface is a game changer. I've written more in the last week than I have in the last month. It just gets out of the way.",
    author: "Riccardo Vincenzi",
    role: "Writer & Entrepreneur",
    social: Linkedin,
    rating: 5
  },
  {
    content: "Sync is flawless. I jot something down on my phone and it's there on my desktop before I can even look. Exactly what I wanted.",
    author: "Chris R. Pettigrew, Sr",
    role: "Tech Consultant",
    social: Linkedin,
    rating: 5
  }
];

const faqs = [
  {
    question: "What is BlinkNote?",
    answer: "BlinkNote is a minimalist note-taking app built with the same speed-first philosophy as blink.new. It's designed for capturing quick thoughts and tasks without the clutter of traditional apps."
  },
  {
    question: "Is it free?",
    answer: "Yes, BlinkNote has a generous free tier that includes instant sync and secure storage for all your personal notes."
  },
  {
    question: "How do I save a note?",
    answer: "Just type in the main input box and press Enter. Your note is instantly saved to our secure database."
  },
  {
    question: "Can I use it on mobile?",
    answer: "Absolutely. BlinkNote is fully responsive and works beautifully as a web app on any smartphone or tablet."
  }
];

export function TestimonialsAndFAQ({ onAuth }: { onAuth?: () => void }) {
  return (
    <>
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Built for Thinkers</h2>
            <p className="text-muted-foreground text-xl">Join the community of productive minds using BlinkNote.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="glass-card p-8 rounded-2xl flex flex-col justify-between">
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

      <section className="py-24 bg-background border-t">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Everything you need to know about BlinkNote</p>
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
          
          <div className="mt-16 flex flex-col items-center gap-8">
            <div className="text-center pt-20">
              <h3 className="text-5xl md:text-7xl font-serif font-bold tracking-tight mb-4 italic">
                Don't just think it, <span className="text-glow">Note</span> it.
              </h3>
              <p className="text-muted-foreground text-xl mb-10">Capture your first note in seconds.</p>
              <div className="flex gap-4 justify-center">
                <button className="px-8 py-3 rounded-full bg-primary text-white font-bold" onClick={onAuth}>Get started for free →</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
