import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { GraduationCap } from 'lucide-react'

const educationHistory = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of Technology',
    period: '2018 - 2022',
    description: 'Focused on software development, algorithms, and data structures. Completed a final year project on a full-stack web application.',
  },
  {
    degree: 'MERN Stack Development Bootcamp',
    institution: 'Online Code Academy',
    period: '2022',
    description: 'Intensive training on MongoDB, Express.js, React, and Node.js. Built multiple hands-on projects from scratch.',
  },
]

const EducationSection = () => {
  return (
    <section id="education" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-headline">My Education</h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
          My academic background has provided me with a strong foundation in computer science and web development principles.
        </p>
        <div className="relative pl-6">
          <div className="absolute left-9 top-0 h-full w-0.5 bg-border -translate-x-1/2"></div>
          {educationHistory.map((item, index) => (
            <div key={index} className="relative mb-12">
              <div className="absolute left-9 top-2 h-6 w-6 bg-accent rounded-full -translate-x-1/2 flex items-center justify-center">
                <GraduationCap className="h-4 w-4 text-accent-foreground" />
              </div>
              <div className="ml-16">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="font-headline">{item.degree}</CardTitle>
                        <CardDescription className="text-base text-accent font-semibold">{item.institution}</CardDescription>
                      </div>
                      <p className="text-sm text-muted-foreground whitespace-nowrap">{item.period}</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EducationSection
