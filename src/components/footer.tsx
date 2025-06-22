import Link from 'next/link'
import { Github, Linkedin, Twitter, Code, Instagram, CodeXml } from 'lucide-react'
import { Button } from '@/components/ui/button'

const socialLinks = [
  {
    href: 'https://x.com/YashPawar401',
    label: 'Twitter',
    icon: <Twitter className="h-5 w-5" />,
  },
  {
    href: 'https://github.com/yashpawar69',
    label: 'GitHub',
    icon: <Github className="h-5 w-5" />,
  },
  {
    href: 'https://www.linkedin.com/in/yash-pawar-805376219/',
    label: 'LinkedIn',
    icon: <Linkedin className="h-5 w-5" />,
  },
  {
    href: 'https://www.instagram.com/bytesofyash/',
    label: 'Instagram',
    icon: <Instagram className="h-5 w-5" />,
  },
  {
    href: 'https://leetcode.com/u/Yash_pawar69/',
    label: 'LeetCode',
    icon: <CodeXml className="h-5 w-5" />,
  },
  {
    href: 'https://www.codechef.com/users/yash_pwr',
    label: 'CodeChef',
    icon: <CodeXml className="h-5 w-5" />,
  },
  {
    href: 'https://www.geeksforgeeks.org/user/vinaya2bnhk/',
    label: 'GeeksforGeeks',
    icon: <CodeXml className="h-5 w-5" />,
  },
]

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
             <Link href="/" className="flex items-center gap-2 mb-2 justify-center md:justify-start">
                <Code className="h-6 w-6 text-accent" />
                <span className="font-bold font-headline text-lg">Yash Pawar</span>
            </Link>
            <p className="text-sm text-primary-foreground/80">© {new Date().getFullYear()} Yash Pawar. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-2 flex-wrap justify-center">
            {socialLinks.map((link) => (
              <Button key={link.href} asChild variant="ghost" size="icon" className="text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                  {link.icon}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
