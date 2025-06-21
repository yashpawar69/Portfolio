import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Jane Smith',
    title: 'CEO, Tech Solutions Inc.',
    quote: "Working with John was an absolute pleasure. His expertise in the MERN stack is evident, and he delivered a high-quality product ahead of schedule. Highly recommended!",
    avatar: 'https://placehold.co/100x100.png',
    aiHint: 'woman smiling',
  },
  {
    name: 'Mike Johnson',
    title: 'Project Manager, Creative Minds',
    quote: "John's communication skills and attention to detail are top-notch. He was able to translate our complex requirements into a seamless and intuitive user experience.",
    avatar: 'https://placehold.co/100x100.png',
    aiHint: 'man portrait',
  },
  {
    name: 'Sarah Lee',
    title: 'Founder, Innovate Startups',
    quote: "I'm incredibly impressed with the final product. John is a talented developer who is not only technically proficient but also has a great eye for design.",
    avatar: 'https://placehold.co/100x100.png',
    aiHint: 'woman professional',
  },
]

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-headline">What My Clients Say</h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
          I strive to build not just applications, but also strong relationships. Here's what some of my clients have to say.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="flex flex-col justify-between">
              <CardContent className="pt-6">
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
              </CardContent>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold font-headline">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
