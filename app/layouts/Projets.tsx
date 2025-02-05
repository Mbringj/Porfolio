'use client'

import * as React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import AnimationContainer from '../utils';
const projects =  [
  {
    title: "Nike landing page clone",
    description: "A full-stack next js landing page nike clone",
    image: "/img/landing.png",
    stack: ["React", "Node.js", "Nextjs","Tailwind CSS",],
    demoLink: "https://nike-landing-clone-blue.vercel.app/",
    codeLink: "https://github.com/Mbringj/nike-landing-clone",
  },
  {
    title: "My personal Porfolio web site",
    description: "My personal porfolio for shocase my work and skills.",
    image: "/img/porfolio.png",
    stack: ["React", "Next js", "Node js", "shadcn UI", "Tailwind css", "Framer Motion"],
    demoLink: "https://mbringjeremy.vercel.app",
    codeLink: "https://github.com/Mbringj/Porfolio",
  },
  {
    title: "Financiel app dashdoard for learning next js",
    description: "Friendly simple and intutive app for managing finance",
    image: "/img/Finantial.png",
    stack: ["React", "Next js", "Chart.js", "Node js"],
    demoLink: "https://financial-app-psi.vercel.app/",
    codeLink: "https://github.com/Mbringj/financial-app",
  },
]

const Projects = () => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <AnimationContainer>
        <section id="projects" className="container mx-auto px-4 py-16">
        <h2 className="mb-8 text-3xl font-bold text-center">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="mb-4 rounded-lg"
                />
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {
                    project.stack.map((tech) => (
                      <Button 
                        variant="outline" 
                        key={tech}
                      >
                        {tech}
                      </Button>
                    ))
                  }
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button asChild variant="outline">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    Demo
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                    Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </AnimationContainer>
  )
}

export default Projects