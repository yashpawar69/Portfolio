import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Download, ArrowRight } from 'lucide-react'

const HeroSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Hi, I'm Yash Pawar
            </h1>
            <p className="text-xl md:text-2xl text-primary/80 mb-8 font-headline">
              A Passionate <span className="text-accent">MERN Stack</span> Developer
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
                src="https://placehold.co/400x400.png"
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
