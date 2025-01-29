import React from 'react'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { inter } from "../font";

function InpirationQuote() {

  return (
    <figure className="max-w-screen-md mx-auto text-center">
        <svg className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
        </svg>
        <blockquote>
            <p className="text-2xl italic font-medium text-gray-900 dark:text-white">&quot;We cannot solve our problems with the same thinking we used when we created them.&quot;</p>
        </blockquote>
        <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
            <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                <cite className="pe-3 font-medium text-gray-900 dark:text-white">Albert Einstein</cite>
                <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">Physian</cite>
            </div>
        </figcaption>
    </figure>
  )
}

export default function Hero() {
  return (
    <>
    <div className={`max-w-screen-xl mx-auto px-2 md:text-left text-center lg:px-8 min-h-[50vh] flex wrap items-center justify-center ${inter.className}`}>
        <div className="mx-auto w-full max-w-4xl">
          <div className="flex flex-wrap items-center justify-center gap-6">
            {/* Texte du Hero */}
            <div className="space-y-3">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Hi, I&apos;m Jeremie <span className="inline-block animate-waving-hand">👋</span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-[600px]">
              Développeur Full Stack & Ingénieur en Sécurité des Applications
              <br />
                Je crée des applications web et mobiles performantes, intuitives et sécurisées. Mon objectif est de combiner innovation et sécurité pour offrir des solutions fiables adaptées à vos besoins.
              <br />
              Découvrez mon travail et collaborons pour donner vie à vos projets !
              </p>
              <div className='flex justify-center md:justify-normal'>
                <Button className='mr-2'>Mon Cv</Button>
                <Button>Contact Me</Button>
              </div>
            </div>

            {/* Image du Hero */}
            <div className="relative shrink-0">
              <span className="relative flex overflow-hidden rounded-full w-28 h-28">
                <Image
                  src="/img/image.png"
                  width={350}
                  height={350}
                  alt="Profile picture"
                  className="object-cover"
                  priority
                />
              </span>
            </div>
          </div>
        </div>
      </div>  
      
      <InpirationQuote />    
    </>
  );
};
