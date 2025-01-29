import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

const techCategories = [
  {
    name: 'Frontend',
    techs: [
      { name: 'React', icon: 'react', wordmark: false},
      { name: 'Next.js', icon: 'nextjs', wordmark: false},
      { name: 'TypeScript', icon: 'typescript', wordmark: false},
      { name: 'Tailwind CSS', icon: 'tailwindcss', wordmark: false},
    ],
  },
  {
    name: 'Backend',
    techs: [
      { name: 'Node.js', icon: 'nodejs', wordmark: false},
      { name: 'Express', icon: 'express', wordmark: false},
      { name: 'Nestjs', icon: 'nestjs', wordmark: false},
    ],
  },
  {
    name: 'Database',
    techs: [
      { name: 'MongoDB', icon: 'mongodb', wordmark: false},
      { name: 'PostgreSQL', icon: 'postgresql', wordmark: false},
      { name: 'MySQL', icon: 'mysql', wordmark: false},
      { name: 'Redis', icon: 'redis', wordmark: false},
      { name: 'Firebase', icon: 'firebase', wordmark: false},
      { name: 'Supabase', icon: 'supabase', wordmark: false}
    ],
  },
  {
    name: 'DevOps & Tools',
    techs: [
      { name: 'Docker', icon: 'docker', wordmark: false},
      { name: 'Kubernetes', icon: 'kubernetes', wordmark: false},
      { name: 'Git', icon: 'git', wordmark: false},
      { name: 'Jenkins', icon: 'jenkins', wordmark: false},
      { name: 'Git Actions', icon: 'githubactions', wordmark: false},
      { name: 'Amazone', icons: 'amazonwebservices', wordmark: true}
    ],
  },
]

const TechStack = () => {
  return (
    <section id="tech-stack" className="container mx-auto px-4 py-16">
      <h2 className="mb-8 text-4xl font-bold text-center tracking-tight font-geist">Skill and Technology</h2>
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
                    { 
                      tech.wordmark ? 
                      <Image
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg`}
                        alt={tech.name}
                        className="w-12 h-12 mb-2"
                        width={30}
                        height={30}
                      />: 
                      <Image
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}/${tech.icon}-original.svg`}
                        alt={tech.name}
                        className="w-12 h-12 mb-2"
                        width={30}
                        height={30}
                      />
                    }
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
