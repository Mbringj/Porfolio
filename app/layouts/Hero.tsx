import React from 'react'
import Image from 'next/image';

export default function Hero() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[50vh] flex items-center justify-center">
        <div className="mx-auto w-full max-w-4xl">
          <div className="flex items-center justify-between gap-6">
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
    </>
  );
};
