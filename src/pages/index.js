import React from "react"
import Advantages from "../components/Advantages"
import { Hero } from "../components/Hero"
import Layout from "../components/Layout"
import { Nav } from "../components/Nav"
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
  </Layout>
  )
}
