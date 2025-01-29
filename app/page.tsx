import Hero from '@/app/layouts/Hero'
import TechStack from './layouts/SkillAndStack'
import Projets from '@/app/layouts/Projets'
import Contacts from '@/app/layouts/Contacts'
import Experience from '@/app/layouts/Experiences'
import Education from '@/app/layouts/Education-other'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col" suppressHydrationWarning={true}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <Hero />
        <Projets />
        <TechStack />
        <Experience />
        <Education />
        <Contacts />
      </div>
    </main>
  )
}
