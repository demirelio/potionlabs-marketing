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
import { Helmet } from "react-helmet"
import ogImage from "../../static/og-image.png"

export default function Home() {
  return (
    <Layout>
      <Helmet>
        <title>Potion Labs | Unlimited HTML Emails for a monthly fixed price.</title>
        <meta name="description" content="We build top of the quality HTML emails with best practices for you. You focus on your clients and grow your business. No last-minute contractor hunting, no hourly rate negotiations, or paying extra for revisions." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charset="UTF-8" />

        <meta property="og:title" content="Potion Labs | Unlimited HTML Emails for a monthly fixed price." />
        <meta property="og:description" content="We build top of the quality HTML emails with best practices for you. You focus on your clients and grow your business. No last-minute contractor hunting, no hourly rate negotiations, or paying extra for revisions." />
        <meta property="og:url" content="https://potionlabs.io" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogImage} />

      </Helmet>
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
