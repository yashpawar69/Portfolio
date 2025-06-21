import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CodeXml, ServerCog, DatabaseZap, GitFork,LayoutPanelLeft, PenTool } from 'lucide-react'

const skills = [
  { name: 'React & Next.js', icon: <CodeXml className="h-10 w-10 text-accent" />, description: 'Building dynamic and responsive user interfaces.' },
  { name: 'Node.js & Express', icon: <ServerCog className="h-10 w-10 text-accent" />, description: 'Creating robust and scalable server-side applications.' },
  { name: 'MongoDB', icon: <DatabaseZap className="h-10 w-10 text-accent" />, description: 'Designing and managing NoSQL databases for performance.' },
  { name: 'Git & GitHub', icon: <GitFork className="h-10 w-10 text-accent" />, description: 'Version control and collaborative development workflows.' },
  { name: 'Tailwind CSS', icon: <LayoutPanelLeft className="h-10 w-10 text-accent" />, description: 'Rapidly building modern designs with utility-first CSS.' },
  { name: 'UI/UX Design', icon: <PenTool className="h-10 w-10 text-accent" />, description: 'Focus on user-centric design principles and experiences.' },
]

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-headline">My Tech Stack</h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
          I work with modern technologies to build amazing products. Here are some of the key tools and technologies I use.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <Card key={skill.name} className="text-center hover:shadow-xl transition-shadow duration-300 group">
              <CardHeader>
                <div className="mx-auto bg-accent/10 p-4 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                </div>
                <CardTitle className="mt-4 font-headline">{skill.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
