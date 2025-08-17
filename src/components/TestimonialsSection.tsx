import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Roxana Navab",
      title: "",
      review: "Eddy came today to fix our intercom system. He was knowledgeable and skilled. He was patient in explaining the problem and how to fix it. He had a positive and cheerful attitude. Thank you, Eddy!",
      rating: 5
    },
    {
      name: "Terry Morrison", 
      title: "",
      review: "United Security designed and installed a monitored fire and security system for my business and home. They did an excellent job and we're very professional.",
      rating: 5
    },
    {
      name: "nekko1431",
      title: "",
      review: "Excellent company. Customer service is great. I would recommend this company for any security needs you may need.",
      rating: 5
    }
  ];

  // Auto-rotate every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-12 animate-fade-in-up">
            What Our Customers Say
          </h2>

          {/* Testimonial Container */}
          <div className="relative bg-white rounded-2xl shadow-lg p-8 sm:p-12 mb-8 min-h-[280px] flex items-center">
            <div className="w-full">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 text-yellow-400 fill-yellow-400 mx-1"
                  />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="text-lg sm:text-xl text-foreground leading-relaxed mb-6 transition-all duration-500 ease-in-out">
                "{testimonials[currentIndex].review}"
              </blockquote>

              {/* Customer Name */}
              <div className="text-center transition-all duration-500 ease-in-out">
                <p className="text-primary font-semibold text-lg">
                  — {testimonials[currentIndex].name}
                </p>
                {testimonials[currentIndex].title && (
                  <p className="text-muted-foreground text-sm mt-1">
                    {testimonials[currentIndex].title}
                  </p>
                )}
              </div>
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-primary"
              onClick={goToPrevious}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-primary"
              onClick={goToNext}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary scale-125'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;