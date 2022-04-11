import React from "react"
import Advantages from "../components/Advantages"
import ClientInfo from "../components/ClientInfo"
import CTA from "../components/cta"
import { EmailClientList } from "../components/EmailClientList"
import { FeatureList } from "../components/feature-list"
import Features from "../components/Features"
import { Hero } from "../components/Hero"
import Layout from "../components/Layout"
import { Nav } from "../components/Nav"
import Pricing from "../components/Pricing"
import SocialProof from "../components/social-proof"
import { Steps } from "../components/Steps"

export default function Home() {
  return (
  <Layout>
      <Nav />
      <Hero />
      <SocialProof />
      <Advantages />
      <Steps />
      <Features />
      <FeatureList />
      <ClientInfo />
      <EmailClientList />
      <Pricing />
      <CTA />
  </Layout>
  )
}
