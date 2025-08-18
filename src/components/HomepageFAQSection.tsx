import { Button } from '@/components/ui/button';
import { ChevronDown, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const HomepageFAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "How long has United Security been in business?",
      answer: "United Security has been serving Southwest Virginia since 1988 - over 35 years of professional security services. We are a family-owned and operated company with deep roots in the local community."
    },
    {
      question: "Do you require long-term monitoring contracts?",
      answer: "No, we offer flexible monitoring options without requiring long-term contracts. You own your security system outright and can choose month-to-month monitoring or self-monitoring options."
    },
    {
      question: "Are there monthly fees for camera systems?",
      answer: "No, our camera systems have no monthly fees. You own your system outright with local recording and remote viewing capabilities. Optional cloud storage and professional monitoring are available if desired."
    },
    {
      question: "Do you provide free estimates?",
      answer: "Yes, we provide free consultations and estimates for all security services. We'll assess your needs, recommend solutions, and provide detailed pricing with no obligation."
    }
  ];

  return (
    <section id="faq" className="py-16 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Headline */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
              Frequently Asked Questions
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed animate-fade-in-up [animation-delay:0.2s]">
              Get quick answers to common questions about our security services
            </p>
          </div>
          
          {/* FAQ Items */}
          <div className="space-y-4 mb-12">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  aria-expanded={openFAQ === index}
                >
                  <h3 className="text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-200 ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* See All FAQs Button */}
          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <a href="/faq">See All FAQs</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageFAQSection;