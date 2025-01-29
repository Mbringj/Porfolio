'use client'

import * as React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
const projects =  [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and MongoDB.",
    image: "",
    stack: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Chart.js"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Task Management App",
    description: "A React Native mobile app for managing tasks and projects.",
    image: "",
    stack: ["React", "React Native", "Expo"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Weather Dashboard",
    description: "A weather dashboard using OpenWeatherMap API and Chart.js.",
    image: "",
    stack: ["React", "Tailwind CSS", "Chart.js"],
    demoLink: "#",
    codeLink: "#",
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
  )
}

export default Projects