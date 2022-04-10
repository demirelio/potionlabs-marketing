import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function SocialProof() {
  return (
    <section className="max-w-5xl py-[36px] px-[24px] lg:px-[48px] lg:pt-20 lg:mx-auto grid gap-8 xl:min-w-[1024px]">
      <h2 className="font-jakarta800 text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-wide xl:leading-none">
        You are in good hands
      </h2>
      <div className="lg:max-w-lg">
      <StaticImage src="../../static/quote-left-solid.svg" alt="Quote left" className="m-0 max-w-[16px]" />
      <p className="font-jakarta500 text-[#d0d0d0] text-base  md:leading-relaxed">
      We managed to gain the attention of younger learners over email in the era of Tiktok and Instagram - in a country where young learners don't use email at all. Big kudos to Potion Labs for doing all the heavy-lifting for our email operations.
      </p>
      </div>
      <div className="flex gap-4">
      <StaticImage src="../../static/ekin.jpeg" alt="Quote left" className="m-0 max-w-[50px] rounded" />
      <p className="font-jakarta500">
        <strong className="text-lg ">Ekin Kahraman</strong><br/>
        <span className="text-[#d0d0d0] text-base">Founder, Bikifi & Okulsecim</span>
      </p>
      </div>
    </section>
  )
}