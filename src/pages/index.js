import React from "react"
import Advantages from "../components/Advantages"
import ClientInfo from "../components/ClientInfo"
import CTA from "../components/cta"
import { EmailClientList } from "../components/EmailClientList"
import FAQs from "../components/faq"
import { FeatureList } from "../components/feature-list"
import Features from "../components/Features"
import { Hero } from "../components/Hero"
import Layout from "../components/Layout"
import { Nav } from "../components/Nav"
import Pricing from "../components/Pricing"
import SocialProof from "../components/social-proof"
import { Steps } from "../components/Steps"
import Seo from "../components/Seo"

export default function Home() {
  return (
    <Layout>
      <Seo 
        title={"Potion Labs | Unlimited HTML Emails for a monthly fixed price."} 
        image={"/og-image.png"} 
        desc="We build top of the quality HTML emails with best practices for you. You focus on your clients and grow your business. No last-minute contractor hunting, no hourly rate negotiations, or paying extra for revisions." 
        canonical="https://potionlabs.io"
      />
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
      <FAQs />
      <CTA />
    </Layout>
  )
}
