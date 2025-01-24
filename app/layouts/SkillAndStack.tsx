import React from 'react';
import Image from 'next/image';
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent
} from "@/components/ui/tooltip";

export default function SkillAndStack() {
  return (
    <div>
      <h1>Tech and Stack</h1>
      <div className="category">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Image
                alt="mongodb" 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
                width={50}
                height={50}
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>Mongo DB</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  )
}
