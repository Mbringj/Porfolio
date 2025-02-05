import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import AnimationContainer from "../utils";

const experiences = [
  {
    title: "Junior Web Developer",
    company: "TIMER DIGITECH",
    period: "Jun 2022 - Feb 2024",
    description:
      "Développeur web full-stack spécialisé dans la création d'interfaces utilisateur conformes aux maquettes, le développement d'API RESTful et la mise en place de pipelines CI/CD. Expérience en déploiement et maintenance d'applications web. Projets réalisés : bots de marketing, applications e-learning (en cours), timerdigitech.com. Compétences : HTML, CSS, JavaScript, Node.js, MongoDB, MySQL, GitHub Actions.",
  },
];

const Experience = () => {
  return (
    <AnimationContainer>
        <section id="experience" className="container mx-auto px-4 py-16">
        <h2 className="mb-8 text-3xl font-bold text-center">Work Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
              <CardHeader>
                <CardTitle>{exp.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-muted-foreground">{exp.company}</p>
                <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
                <p>{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </AnimationContainer>
  )
}

export default Experience;