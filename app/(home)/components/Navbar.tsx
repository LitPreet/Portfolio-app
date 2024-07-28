import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { SiGithub, SiLinkedin, SiX } from 'react-icons/si'

export default function Navbar({className}:{className?:string}) {
    const socials = [{
        link:'https://www.linkedin.com/in/preet-bhardwaj-9b04a724b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        label:'Linkdin',
        Icon: SiLinkedin 
    },{
        link: 'https://github.com/LitPreet',
        label: 'Github',
        Icon: SiGithub 
    },{
        link: 'https://twitter.com/lit_preet',
        label: 'X',
        Icon: SiX 
    }]
  return (
    <nav className={cn("py-10 flex justify-between items-center animate-move-down",className)}>
      <h1 className='text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2'>Preet bhardwaj 👨‍💻</h1>
      <div className="flex items-center gap-5">
        {socials.map((social, i) => {
            return (
                <Link  href={social.link} key={i} aria-label={social.label}><social.Icon className='w-5 h-5 hover:scale-125 transition-all'/></Link>
            )
        })}
      </div>
    </nav>
  )
}
