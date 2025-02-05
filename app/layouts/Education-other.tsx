import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { inter } from "../font"
import AnimationContainer from "../utils"

const educations = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Ecole Nationale Superieure Polytechnique de Maroua ",
    year: "2018 - 2022",
    description: "Focused on web technologies and software engineering. Graduated with honors.",
  },
]

const hackathons = [
  {
    name: "PADGOF GIZ Jam 2024",
    position: "1st Place",
    description: "Developed an AI-powered accessibility tool for visually impaired users.",
  },
]

const EducationAndAchievements = () => {
  return (
    <AnimationContainer>
        <section id="education-and-achievements" className={`container mx-auto px-4 py-16 ${inter.className}`}>
        <h2 className="mb-8 text-3xl font-bold text-center">Education & Achievements</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Education</h3>
            {educations.map((edu, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{edu.degree}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground mb-2">{edu.year}</p>
                  <p>{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Hackathons</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {hackathons.map((hack, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{hack.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-primary">{hack.position}</p>
                    <p>{hack.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* <div>
            <h3 className="text-2xl font-semibold mb-4">Certifications</h3>
            <div className="grid gap-4 md:grid-cols-3">
              {certifications.map((cert, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{cert.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold">{cert.issuer}</p>
                    <p className="text-sm text-muted-foreground">{cert.year}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div> */}
        </div>
      </section>
    </AnimationContainer>
  )
}

export default EducationAndAchievements

