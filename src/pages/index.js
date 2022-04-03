import React from "react"
import { Hero } from "../components/Hero"
import Layout from "../components/Layout"
import { Nav } from "../components/Nav"

export default function Home() {
  return (
  <Layout>
      <Nav />
      <Hero />
  </Layout>
  )
}
