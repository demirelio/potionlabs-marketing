import React from "react"
import { Link } from "gatsby";

export default function CTA() {
  return (
    <section className="max-w-5xl py-[36px] px-[24px] lg:px-[48px] lg:pt-20 lg:mx-auto grid gap-8 lg:min-w-[1024px]">
      <h1 className="font-jakarta800 text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-wide lg:leading-tight xl:leading-tight">
        Contact and see if Potion Labs is for you. What are you waiting for?
      </h1>
      <div className="lg:max-w-3xl">
        <div className="flex gap-4 items-center justify-start">
          <Link to='/' className="font-jakarta500 bg-[#FFD23F] hover:bg-yellow-500 py-3 px-12 text-black rounded">Get Started</Link>
          <a href='https://superpeer.com/alchemist' target='_blank' className="font-jakarta500 bg-transparent border-2 border-white hover:border-[#FFD23F] py-3 px-12 text-white rounded">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}