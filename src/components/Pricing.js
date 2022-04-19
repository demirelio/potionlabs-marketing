import { Link } from "gatsby"
import React from "react"
import Helmet from "react-helmet"
export default function Pricing() {
  return (
    <section className="max-w-5xl py-[36px] px-[24px] lg:px-[48px] lg:pt-20 lg:mx-auto grid gap-8 lg:min-w-[1024px]">
      <Helmet>
      <script src="https://store.potionlabs.io/js/gumroad.js" type="text/javascript"></script>
      </Helmet>
      <h2 id='pricing' className="font-jakarta800 text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-wide lg:leading-tight xl:leading-tight">
      One simple pricing for unlimited HTML Emails
      </h2>
      <div className="lg:max-w-xl">
      <p className="font-jakarta500 text-[#d0d0d0] text-base  md:leading-relaxed">
      No contracts, no hidden fees, no notice period, you can pause or cancel your subscription any time you want. </p>
      </div>
    </section>
  )
}