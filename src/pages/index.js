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
import TopBanner from "../components/top-banner"
import PricingSets from "../components/pricing-sets"

export default function Home() {
  return (
    <Layout>
      <Seo
        title={"Potion Labs | We build unlimited HTML Emails for a monthly fixed price."}
        desc="No surprise fees or hidden costs, no last-minute contractor hunting, no hourly rate negotiations, or paying extra for revisions."
        canonical="https://potionlabs.io"
      />
      <TopBanner />
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
      <PricingSets />
      <FAQs />
      <CTA />
    </Layout>
  )
}
