'use client'

import React from 'react';
import Image from 'next/image';
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent
} from "@/components/ui/tooltip";

export default function SkillAndStack() {
  const technologies = [
    { name: 'MongoDB', icon: 'mongodb/mongodb-original.svg' },
  ]

  return (
    <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-4xl">
        <h2 className="text-3xl font-bold mb-8">Technologies & Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {technologies.map((tech, index) => (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-lg transition-all cursor-pointer">
                    <Image
                      alt={tech.name}
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}`}
                      width={50}
                      height={50}
                      unoptimized
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{tech.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>
    </section>
  )
}
