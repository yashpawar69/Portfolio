import Image from 'next/image'
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'MERN E-commerce Platform',
    description: 'A full-stack e-commerce site featuring product listings, a shopping cart, user authentication, and an admin dashboard for managing products and orders.',
    image: 'https://placehold.co/600x400.png',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux Toolkit'],
    liveUrl: '#',
    githubUrl: '#',
    aiHint: 'online store',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application that allows users to create projects, assign tasks, and track progress with an intuitive drag-and-drop interface.',
    image: 'https://placehold.co/600x400.png',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Socket.IO'],
    liveUrl: '#',
    githubUrl: '#',
    aiHint: 'kanban board',
  },
  {
    title: 'Portfolio Website Generator',
    description: 'A dynamic web application that allows users to generate and customize their own portfolio website by filling out a simple form, with multiple templates to choose from.',
    image: 'https://placehold.co/600x400.png',
    technologies: ['Next.js', 'Tailwind CSS', 'Firebase', 'Vercel'],
    liveUrl: '#',
    githubUrl: '#',
    aiHint: 'web design',
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col overflow-hidden hover:scale-105 transition-transform duration-300">
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
              <CardFooter className="flex justify-end gap-4">
                <Button asChild variant="outline">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </a>
                </Button>
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
