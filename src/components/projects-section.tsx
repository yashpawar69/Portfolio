import Image from 'next/image'
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Github, ExternalLink } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const projects = [
  {
    title: 'Next Chess Game',
    description: 'An interactive full-stack online chess platform built with React and Next.js. Features real-time gameplay, and a responsive UI. Ideal for casual and competitive play.',
    image: '/images/next.png',
    technologies: ['React', 'Next.js', 'Node.js', 'Express', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://next-chess-00.vercel.app/',
    githubUrl: 'https://github.com/yashpawar69/NextChess',
    aiHint: 'multiplayer chess game',
  }
  ,
  {
    title: 'My Journal',
    description: 'A minimalist, elegant blogging platform where users can write, edit, and manage posts effortlessly. Built with Next.js and Tailwind CSS, AI-powered live tag suggestions enhance discoverability and streamline content creation.',
    image: '/images/journal.png',
    technologies: ['react', 'mongodb', 'gemini', 'Next.js', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
    aiHint: 'blog journal writing',
  },
  {
    title: 'Shop Me',
    description: 'Shop Me — A sleek, AI-powered shopping platform with curated product discovery, wishlist features, and smart recommendations. Includes a minimalist admin dashboard, seamless checkout, and external retailer integration for smooth purchasing.',
    image: '/images/shopme.png',
    technologies: ['Next.js', 'MongoDB', 'React', 'Tailwind CSS', 'TypeScript', 'Gemini'],
    liveUrl: 'https://shopme-git-master-yashs-projects-e4896251.vercel.app/',
    githubUrl: '#',
    aiHint: 'fashion ecommerce online',
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-headline">Featured Projects</h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
          Here are some of the projects I'm proud to have worked on. Each one represents a challenge I was excited to tackle.
        </p>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto"
        >
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem key={project.title} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="flex flex-col overflow-hidden h-full transition-shadow hover:shadow-lg">
                    <CardHeader>
                      <div className="relative w-full h-48 mb-4">
                        <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" className="rounded-t-lg" data-ai-hint={project.aiHint} />
                      </div>
                      <CardTitle className="font-headline">{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">{tech}</Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-end gap-4 mt-auto">
                      <Button asChild variant="outline" disabled={project.githubUrl === '#'}>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" /> GitHub
                        </a>
                      </Button>
                      <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground" disabled={project.liveUrl === '#'}>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  )
}

export default ProjectsSection
