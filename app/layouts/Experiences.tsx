import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import AnimationContainer from "../utils";

const experiences = [
  {
    title: "Senior Web Developer",
    company: "Tech Innovators Inc.",
    period: "Jan 2021 - Present",
    description:
      "Lead developer for multiple high-profile web applications. Implemented modern front-end architectures using React and Next.js.",
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    period: "Mar 2018 - Dec 2020",
    description:
      "Developed and maintained various web applications using the MERN stack. Collaborated with cross-functional teams to deliver projects on time.",
  },
  {
    title: "Junior Web Developer",
    company: "WebCraft Agency",
    period: "Jun 2016 - Feb 2018",
    description:
      "Assisted in the development of responsive websites for clients. Gained expertise in HTML, CSS, and JavaScript.",
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