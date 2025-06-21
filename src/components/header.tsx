"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Code } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const navLinks = [
  { href: 'about', label: 'About' },
  { href: 'skills', label: 'Skills' },
  { href: 'projects', label: 'Projects' },
  { href: 'education', label: 'Education' },
  { href: 'testimonials', label: 'Testimonials' },
  { href: 'blog', label: 'Blog' },
  { href: 'contact', label: 'Contact' },
]

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    setIsOpen(false)
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Adjust for header height
        behavior: 'smooth',
      })
    }
  }

  const NavLinkItems = () => (
    <>
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={`#${link.href}`}
          onClick={(e) => handleNavClick(e, link.href)}
          className="font-medium text-foreground/80 transition-colors hover:text-foreground"
        >
          {link.label}
        </a>
      ))}
    </>
  )

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Code className="h-6 w-6 text-accent" />
          <span className="font-bold font-headline text-lg">Yash Pawar</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavLinkItems />
        </nav>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="p-4">
              <div className="flex justify-between items-center mb-6">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                  <Code className="h-6 w-6 text-accent" />
                  <span className="font-bold font-headline text-lg">Yash Pawar</span>
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>
              <nav className="flex flex-col gap-6">
                <NavLinkItems />
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

export default Header
