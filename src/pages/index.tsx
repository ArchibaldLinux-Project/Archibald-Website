import Hero from '@/components/Hero'
import Features from '@/components/Features'
import SystemRequirements from '@/components/SystemRequirements'
import Downloads from '@/components/Downloads'
import Documentation from '@/components/Documentation'
import Community from '@/components/Community'

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <SystemRequirements />
      <Downloads />
      <Documentation />
      <Community />
    </div>
  )
}
