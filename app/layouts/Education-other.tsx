import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const educations = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Tech University",
    year: "2012 - 2016",
    description: "Focused on web technologies and software engineering. Graduated with honors.",
  },
]

const hackathons = [
  {
    name: "Global Code Jam 2022",
    position: "1st Place",
    description: "Developed an AI-powered accessibility tool for visually impaired users.",
  },
  {
    name: "Hack for Good 2021",
    position: "Runner-up",
    description: "Created a platform connecting local food banks with donors to reduce food waste.",
  },
]

const certifications = [
  {
    name: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    year: "2023",
  },
  {
    name: "Google Professional Cloud Developer",
    issuer: "Google Cloud",
    year: "2022",
  },
  {
    name: "React Native Specialist",
    issuer: "React Native Academy",
    year: "2021",
  },
]

const EducationAndAchievements = () => {
  return (
    <section id="education-and-achievements" className="container mx-auto px-4 py-16">
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

        <div>
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
        </div>
      </div>
    </section>
  )
}

export default EducationAndAchievements

