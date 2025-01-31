import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import AnimationContainer from '../utils';

const techCategories = [
  {
    name: 'Languages',
    techs: [
      { name: 'Css', icon: 'css3', wordmark: false, wordmarkUrl: ''},
      { name: 'Html', icon: 'html5', wordmark: false, wordmarkUrl: ''},
      { name: 'TypeScript', icon: 'typescript', wordmark: false, wordmarkUrl: ''},
      { name: 'Javascript', icon: 'javascript', wordmark: false, wordmarkUrl: ''},
      { name: 'C', icon: 'c', wordmark: false, wordmarkUrl: ''},
      { name: 'Python', icon: 'python', wordmark: false, wordmarkUrl: ''},
      { name: 'Java', icon: 'java', wordmark: false, wordmarkUrl: ''},
      
    ],
  },
  {
    name: 'Frontend',
    techs: [
      { name: 'React', icon: 'react', wordmark: false, wordmarkUrl: ''},
      { name: 'Next.js', icon: 'nextjs', wordmark: false, wordmarkUrl: ''},
      { name: 'TypeScript', icon: 'typescript', wordmark: false, wordmarkUrl: ''},
      { name: 'Tailwind CSS', icon: 'tailwindcss', wordmark: false, wordmarkUrl: ''},
    ],
  },
  {
    name: 'Backend',
    techs: [
      { name: 'Node.js', icon: 'nodejs', wordmark: false, wordmarkUrl: ''},
      { name: 'Express', icon: 'express', wordmark: false, wordmarkUrl: ''},
      { name: 'Nestjs', icon: 'nestjs', wordmark: false, wordmarkUrl: ''},
      { name: 'Graphql', icon: 'graphql', wordmark: true, wordmarkUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg'},
    ],
  },
  {
    name: 'Database',
    techs: [
      { name: 'MongoDB', icon: 'mongodb', wordmark: false, wordmarkUrl: ''},
      { name: 'PostgreSQL', icon: 'postgresql', wordmark: false, wordmarkUrl: ''},
      { name: 'MySQL', icon: 'mysql', wordmark: false, wordmarkUrl: ''},
      { name: 'Redis', icon: 'redis', wordmark: false, wordmarkUrl: ''},
      { name: 'Firebase', icon: 'firebase', wordmark: false, wordmarkUrl: ''},
      { name: 'Supabase', icon: 'supabase', wordmark: false, wordmarkUrl: ''},
      { name: 'Sqlite', icon: 'sqlite', wordmark: true, wordmarkUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg'},
      
    ],
  },
  {
    name: 'DevOps & Tools',
    techs: [
      { name: 'Docker', icon: 'docker', wordmark: false, wordmarkUrl: ''},
      { name: 'Kubernetes', icon: 'kubernetes', wordmark: false, wordmarkUrl: ''},
      { name: 'Git', icon: 'git', wordmark: false},
      { name: 'Jenkins', icon: 'jenkins', wordmark: false, wordmarkUrl: ''},
      { name: 'Git Actions', icon: 'githubactions', wordmark: false, wordmarkUrl: ''},
      { name: 'Amazone', icons: 'amazonwebservices', wordmark: true, wordmarkUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg'},
      { name: 'Digital Ocean', icons: 'digitalocean', wordmark: true, wordmarkUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/digitalocean/digitalocean-original.svg'},
      { name: 'Azure', icons: 'azure', wordmark: true, wordmarkUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg'}
    ],
  },
  {
    name: 'IT Tools',
    techs: [
      { name: 'Linux', icon: 'linux', wordmark: false, wordmarkUrl: ''},
      { name: 'Nginx', icon: 'nginx', wordmark: false, wordmarkUrl: ''},
      { name: 'Prometheus', icon: 'prometheus', wordmark: false},
      { name: 'Apache kafka', icon: 'apachekafka', wordmark: false, wordmarkUrl: ''},
      { name: 'rabbitmq', icon: 'rabbitmq', wordmark: false, wordmarkUrl: ''},
      { name: 'Ansible', icons: 'ansible', wordmark: true, wordmarkUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ansible/ansible-original.svg'},
      // { name: 'Digital Ocean', icons: 'digitalocean', wordmark: true, wordmarkUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/digitalocean/digitalocean-original.svg'},
      // { name: 'Azure', icons: 'azure', wordmark: true, wordmarkUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg'}
    ],
  },
]

const TechStack = () => {
  return (
    <AnimationContainer customClassName="container mx-auto px-4 py-16" customDelay={0.3}>
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
                        src={tech.wordmarkUrl || ''}
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
    </AnimationContainer>
  )
}

export default TechStack
