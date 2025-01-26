import Hero from '@/app/layouts/Hero'
import About from '@/app/layouts/About'
import SkillAndStack from '@/app/layouts/SkillAndStack'
import Work from '@/app/layouts/work'
import Projets from '@/app/layouts/Projets'
import Education from '@/app/layouts/Education'
import Certification from '@/app/layouts/Certification'
import Hackathon from '@/app/layouts/Hackathon'
import Contacts from '@/app/layouts/Contacts'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <Hero />
        <About />
        <SkillAndStack />
        <Work />
        <Projets />
        <Education />
        <Certification />
        <Hackathon />
        <Contacts />
      </div>
    </main>
  )
}
