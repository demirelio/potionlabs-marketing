import React from "react"

export default function ClientInfo() {
  return (
    <section className="max-w-5xl py-[36px] px-[24px] lg:px-[48px] lg:pt-20 lg:mx-auto grid gap-8 lg:min-w-[1024px]">
      <h1 className="font-jakarta800 text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-wide lg:leading-tight xl:leading-tight">
      Your emails will look amazing <span className="text-green-500">in 40+ email clients</span>. Yes! Even mobile devices.
      </h1>
      <div className="lg:max-w-3xl">
      <p className="font-jakarta500 text-[#d0d0d0] text-base  md:leading-relaxed">
      Your client approves your unique email design, right? Do you know how to make it look and work as intended for all email clients out there?<br/><br/>

I presume the answer is no. (since you are here). Worry no more. We are professional email developers who know what's happening in the Email Realm. (and it's way different than the web)<br/><br/>

Your design will work in all major email clients and their mobile versions. We are testing and ensuring that all our work is mobile responsive and works everywhere as intended.
      </p>
      </div>
    </section>
  )
}