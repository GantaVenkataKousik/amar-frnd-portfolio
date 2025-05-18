import { Header } from "@/components/header"
import { EnhancedHeroSection } from "@/components/enhanced-hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { CertificationsSection } from "@/components/certifications-section"
import { ServicesSection } from "@/components/services-section"
import { FloatingIcons } from "@/components/ui/floating-icons"

export default function Home() {
  const awsIcons = [
    {
      icon: "/aws-icons/ec2.png",
      size: 40,
      position: { x: 10, y: 20 },
      animation: { y: 15, duration: 5, delay: 0 },
    },
    {
      icon: "/aws-icons/s3.png",
      size: 40,
      position: { x: 85, y: 15 },
      animation: { y: 20, duration: 7, delay: 1 },
    },
    {
      icon: "/aws-icons/lambda.png",
      size: 40,
      position: { x: 20, y: 70 },
      animation: { y: 15, duration: 6, delay: 2 },
    },
    {
      icon: "/aws-icons/dynamodb.png",
      size: 40,
      position: { x: 80, y: 75 },
      animation: { y: 20, duration: 8, delay: 3 },
    },
    {
      icon: "/aws-icons/cloudformation.png",
      size: 40,
      position: { x: 50, y: 40 },
      animation: { y: 15, duration: 9, delay: 4 },
    },
  ]

  return (
    <main className="min-h-screen">
      <FloatingIcons icons={awsIcons} />
      <Header />
      <EnhancedHeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ServicesSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
