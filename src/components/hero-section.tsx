"use client"

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Download, ArrowRight } from 'lucide-react'

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const textToRotate = "MERN Stack";
  const typingDelay = 150;
  const erasingDelay = 100;
  const newTextDelay = 2000; // Delay before starting to erase
  
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const textIndex = useRef(0);
  const isDeleting = useRef(false);

  useEffect(() => {
    const handleTyping = () => {
      // Determine the current text based on whether we are typing or deleting
      const currentText = isDeleting.current
        ? textToRotate.substring(0, textIndex.current - 1)
        : textToRotate.substring(0, textIndex.current + 1);

      setTypedText(currentText);
      textIndex.current = currentText.length;

      let delay = isDeleting.current ? erasingDelay : typingDelay;

      if (!isDeleting.current && currentText === textToRotate) {
        // Pause at the end of typing
        delay = newTextDelay;
        isDeleting.current = true;
      } else if (isDeleting.current && currentText === '') {
        // Finished erasing
        isDeleting.current = false;
        delay = 500; // Pause before starting to type again
      }

      timeoutRef.current = setTimeout(handleTyping, delay);
    };

    // Start the animation
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(handleTyping, 500);

    // Cleanup function to clear timeout on component unmount
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []); // Empty dependency array ensures this runs only once

  return (
    <section id="about" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Hi, I'm Yash Pawar
            </h1>
            <p className="text-xl md:text-2xl text-primary/80 mb-8 font-headline">
              A Passionate{' '}
              <span className="text-accent border-r-2 border-r-accent animate-blink min-h-[32px] inline-block pr-1">
                {typedText}
              </span>{' '}
              Developer
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              I specialize in building exceptional, high-quality websites and applications. With a strong foundation in modern web technologies, I transform ideas into powerful digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href="#contact">
                  Contact Me <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/resume.pdf" download>
                  Download Resume <Download className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <Image
                src="/images/me.jpeg"
                alt="Yash Pawar"
                width={400}
                height={400}
                className="rounded-full object-cover border-4 border-accent shadow-lg"
                data-ai-hint="professional headshot"
              />
               <div className="absolute inset-0 rounded-full border-4 border-primary/10 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
