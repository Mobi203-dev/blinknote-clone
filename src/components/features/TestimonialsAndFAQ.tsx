import { Star, Linkedin } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const testimonials = [
  {
    content: "In one uninterrupted evening, I was able to build a full-featured, enterprise-grade platform 'Quantum Social AI' from zero to working prototype, entirely on Blink.new. What used to take a team and a roadmap, I did solo in a few hours.",
    author: "Jeff Robinson",
    role: "Venture Scout",
    social: Linkedin,
    rating: 5
  },
  {
    content: "Dude, I'm sure you're getting a lot of messages and people reaching out to you! I wanted to thank you for releasing Blink, I was able yesterday (while on holiday) to build this web app I've been trying to build for the last year. It has everything I need. Your software actually did it!",
    author: "Riccardo Vincenzi",
    role: "Entrepreneur",
    social: Linkedin,
    rating: 5
  },
  {
    content: "The builder is really cool. I went further in 5 days than I have in 5 months with other tools. It's an absolute game changer for rapid prototyping and validation.",
    author: "Chris R. Pettigrew, Sr",
    role: "President, Intelliese, LLC",
    social: Linkedin,
    rating: 5
  }
];

const faqs = [
  {
    question: "What is Blink?",
    answer: "Blink is a full-stack AI app builder that uses vibe coding to create production-ready web and mobile applications from natural language descriptions without writing code. It's an all-in-one app creation platform that automatically handles database setup, authentication, APIs, hosting, and deployment."
  },
  {
    question: "What is an AI app builder?",
    answer: "An AI app builder is a platform that leverages large language models to translate natural language prompts into working software, including frontend UI and backend infrastructure."
  },
  {
    question: "Do I need coding experience to use Blink?",
    answer: "No, Blink is designed to be accessible to everyone. You can build complex applications just by describing what you want in plain English."
  },
  {
    question: "Do I own the applications I create with Blink?",
    answer: "Yes, you have full ownership of the applications you build on our platform."
  },
  {
    question: "How much does Blink cost?",
    answer: "We offer a range of plans from a free tier for hobbyists to enterprise solutions for large organizations. Check our pricing page for details."
  }
];

export function TestimonialsAndFAQ({ onAuth }: { onAuth?: () => void }) {
  return (
    <>
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Loved by Builders Worldwide</h2>
            <p className="text-muted-foreground text-xl">Join thousands of developers and entrepreneurs building their dreams with Blink</p>
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
            <p className="text-muted-foreground">Everything you need to know about building with Blink</p>
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
            <div className="flex gap-4">
              <button className="px-8 py-3 rounded-full bg-primary text-white font-bold" onClick={onAuth}>Start building now →</button>
              <button className="px-8 py-3 rounded-full glass-card font-bold">View all FAQ →</button>
            </div>
            
            <div className="text-center pt-20">
              <h3 className="text-5xl md:text-7xl font-serif font-bold tracking-tight mb-4 italic">
                Don't just think it, <span className="text-glow">Blink</span> it.
              </h3>
              <p className="text-muted-foreground text-xl mb-10">Join thousands shipping ideas to production in minutes</p>
              <div className="flex gap-4 justify-center">
                <button className="px-8 py-3 rounded-full bg-primary text-white font-bold" onClick={onAuth}>Get started for free →</button>
                <button className="px-8 py-3 rounded-full glass-card font-bold">View Pricing →</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
