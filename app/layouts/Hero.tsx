import React from 'react'

export default function Hero() {
  return (
    <>
      <div className="mx-auto w-full max-w-2xl space-y-8">
        <div className="gap-2 flex justify-between">
          <div className="flex-col flex flex-1 space-y-1.5">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Hi, I&apos;m Jeremie👋</h1>
            <p className="max-w-[600px] md:text-xl">FullStack Web Code Developer and Security Engineer specializing in web application development and security. I am enthusiastic about developing software that helps people. Happy reading!🤠</p>
            <span className="relative flex shrink-0 overflow-hidden rounded-full size-32 border">
              {/* <Image></Image> */}
            </span>
          </div>        
        </div>
      </div>      
    </>
  );
};
