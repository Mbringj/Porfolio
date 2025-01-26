import React from 'react'

export default function Work() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mx-auto w-full max-w-4xl">
        <h2 className="text-3xl font-bold mb-8">Expérience Professionnelle</h2>
        <div className="space-y-8">
          {/* Timeline d'expériences */}
          <div className="relative border-l border-gray-200 dark:border-gray-700 pl-8">
            <div className="mb-10">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <h3 className="text-xl font-semibold">Poste actuel</h3>
              <p className="text-gray-500 dark:text-gray-400">2023 - Présent</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
