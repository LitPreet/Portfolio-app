import { IconType } from "react-icons";
import { SiMongodb, SiNextdotjs, SiNodedotjs, SiReact, SiStripe, SiSupabase, SiTailwindcss, SiTypescript } from "react-icons/si";

export interface Project {
    title: string
    tech: IconType[],
    link: string,
    cover: string,
    background: string
}
export const data: Project[] = [{
    title: 'Formiverse',
    tech: [SiReact, SiNodedotjs, SiTypescript, SiMongodb, SiTailwindcss],
    link: 'https://formiverse.netlify.app/',
    cover: '/form.png',
    background: 'bg-indigo-500'
}, {
    title: 'Dev Vault',
    tech: [SiNextdotjs, SiNodedotjs, SiTypescript, SiMongodb, SiTailwindcss],
    link: 'https://dev-vaulti.netlify.app/',
    cover: '/pic2.png',
    background: 'bg-green-500'
},{
    title: 'Tech Blogs SAAS',
    tech: [SiNextdotjs, SiTypescript, SiSupabase, SiTailwindcss, SiStripe],
    link: 'https://tech-blogs2.vercel.app/',
    cover: '/blog.png',
    background: 'bg-green-500'
}, {
    title: 'Bid Buddy',
    tech: [SiNextdotjs, SiTypescript, SiSupabase, SiTailwindcss],
    link: 'https://bid-buddy-alpha.vercel.app/',
    cover: '/bid.png',
    background: 'bg-indigo-500'
}]
