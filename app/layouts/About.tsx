import React from 'react'

export default function About() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mx-auto w-full max-w-4xl">
        <h2 className="text-3xl font-bold mb-8">À propos de moi</h2>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Passionné par le développement web et la sécurité informatique, je combine créativité et expertise technique pour créer des solutions innovantes.
          </p>
        </div>
      </div>
    </section>
  );
};
