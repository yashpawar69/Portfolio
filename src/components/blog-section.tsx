import Image from 'next/image'
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight } from 'lucide-react'

const blogPosts = [
  {
    title: 'Mastering State Management in React with Redux Toolkit',
    description: 'A deep dive into modern Redux patterns for efficient and scalable state management in large React applications.',
    image: 'https://placehold.co/600x400.png',
    category: 'React',
    date: 'July 15, 2024',
    aiHint: 'code abstract',
  },
  {
    title: 'Building a RESTful API with Node.js and Express',
    description: 'A step-by-step guide to creating a secure and performant RESTful API from scratch using the power of Node.js and Express.',
    image: 'https://placehold.co/600x400.png',
    category: 'Node.js',
    date: 'June 28, 2024',
    aiHint: 'server network',
  },
  {
    title: 'The Ultimate Guide to MongoDB Performance Tuning',
    description: 'Discover best practices for optimizing your MongoDB database, including indexing, query optimization, and schema design.',
    image: 'https://placehold.co/600x400.png',
    category: 'Databases',
    date: 'May 10, 2024',
    aiHint: 'database technology',
  },
]

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-headline">From My Blog</h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
          I enjoy sharing my knowledge and insights on web development. Check out some of my latest articles.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.title} className="flex flex-col overflow-hidden group">
              <div className="relative w-full h-48 overflow-hidden">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  layout="fill" 
                  objectFit="cover" 
                  className="rounded-t-lg group-hover:scale-110 transition-transform duration-300"
                  data-ai-hint={post.aiHint}
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <Badge variant="outline">{post.category}</Badge>
                  <time dateTime={post.date}>{post.date}</time>
                </div>
                <CardTitle className="font-headline mt-2">{post.title}</CardTitle>
                <CardDescription>{post.description}</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto">
                <Button asChild variant="link" className="p-0 h-auto text-accent hover:text-accent/90">
                  <a href="#">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
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

export default BlogSection
