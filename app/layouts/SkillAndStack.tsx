import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

const techCategories = [
  {
    name: 'Frontend',
    techs: [
      { name: 'React', icon: 'react' },
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
    ],
  },
  {
    name: 'Backend',
    techs: [
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Express', icon: 'express' },
      { name: 'Nestjs', icon: 'nestjs' },
    ],
  },
  {
    name: 'Database',
    techs: [
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'Redis', icon: 'redis' },
      { name: 'Firebase', icon: 'firebase'},
      { name: 'Supabase', icon: 'supabase'}
    ],
  },
  {
    name: 'DevOps & Tools',
    techs: [
      { name: 'Docker', icon: 'docker' },
      { name: 'Kubernetes', icon: 'kubernetes' },
      { name: 'Git', icon: 'git' },
      { name: 'Jenkins', icon: 'jenkins' },
      { name: 'Git Actions', icon: 'githubactions'},
    ],
  },
]

const TechStack = () => {
  return (
    <section id="tech-stack" className="container mx-auto px-4 py-16">
      <h2 className="mb-8 text-4xl font-bold text-center tracking-tight font-geist">Tech Stack</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {techCategories.map((category) => (
          <Card key={category.name}>
            <CardHeader>
              <CardTitle className="text-xl font-geist">{category.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                {category.techs.map((tech) => (
                  <div key={tech.name} className="flex flex-col items-center">
                    <Image
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}/${tech.icon}-original.svg`}
                      alt={tech.name}
                      className="w-12 h-12 mb-2"
                      width={30}
                      height={30}
                    />
                    <span className="text-sm text-center font-geist-mono">{tech.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default TechStack
