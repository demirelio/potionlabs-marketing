import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export const FeatureList  = () => {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 pt-0 pb-[36px] px-[24px] lg:px-[48px] mx-auto justify-center">
      <div className="bg-[#201E1E] rounded-2xl p-6 flex flex-col gap-1 max-w-xs">
        <StaticImage src="../../static/infinity.svg" alt="Infinity" className="w-[50px]" />
        <p className="font-jakarta800 text-[#fff] text-base pt-2 md:leading-relaxed">Unlimited requests</p>
        <p className="font-jakarta500 text-[#d0d0d0] text-base  md:leading-relaxed">Make as many HTML Email requests as you want</p>
      </div>

      <div className="bg-[#201E1E] rounded-2xl p-6 flex flex-col gap-1 max-w-xs">
        <StaticImage src="../../static/dollar.svg" alt="Infinity" className="w-[24px]" />
        <p className="font-jakarta800 text-[#fff] text-base pt-2 md:leading-relaxed">Fixed monthly price</p>
        <p className="font-jakarta500 text-[#d0d0d0] text-base  md:leading-relaxed">Pay the same fixed price each month.</p>
      </div>

      <div className="bg-[#201E1E] rounded-2xl p-6 flex flex-col gap-1 max-w-xs">
        <StaticImage src="../../static/bolt.svg" alt="Infinity" className="w-[30px]" />
        <p className="font-jakarta800 text-[#fff] text-base pt-2 md:leading-relaxed">Blazing fast delivery</p>
        <p className="font-jakarta500 text-[#d0d0d0] text-base  md:leading-relaxed">Get your HTML Emails within few business days.</p>
      </div>

      <div className="bg-[#201E1E] rounded-2xl p-6 flex flex-col gap-1 max-w-xs">
        <StaticImage src="../../static/handshake.svg" alt="Infinity" className="w-[50px]" />
        <p className="font-jakarta800 text-[#fff] text-base pt-2 md:leading-relaxed">NDA</p>
        <p className="font-jakarta500 text-[#d0d0d0] text-base  md:leading-relaxed">We sign Non-Disclosure Agreement</p>
      </div>

      <div className="bg-[#201E1E] rounded-2xl p-6 flex flex-col gap-1 max-w-xs">
        <StaticImage src="../../static/mobile.svg" alt="Infinity" className="w-[28px]" />
        <p className="font-jakarta800 text-[#fff] text-base pt-2 md:leading-relaxed">Mobile device ready</p>
        <p className="font-jakarta500 text-[#d0d0d0] text-base  md:leading-relaxed">All emails are fully responsive and mobile first</p>
      </div>

      <div className="bg-[#201E1E] rounded-2xl p-6 flex flex-col gap-1 max-w-xs">
        <StaticImage src="../../static/code.svg" alt="Infinity" className="w-[50px]" />
        <p className="font-jakarta800 text-[#fff] text-base pt-2 md:leading-relaxed">Pixel perfect build</p>
        <p className="font-jakarta500 text-[#d0d0d0] text-base  md:leading-relaxed">Best-in-class development quality.</p>
      </div>

      <div className="bg-[#201E1E] rounded-2xl p-6 flex flex-col gap-1 max-w-xs">
        <StaticImage src="../../static/heart.svg" alt="Infinity" className="w-[40px]" />
        <p className="font-jakarta800 text-[#fff] text-base pt-2 md:leading-relaxed">Cancel anytime</p>
        <p className="font-jakarta500 text-[#d0d0d0] text-base  md:leading-relaxed">We don't offer a contract. Cancel anytime with no fees.</p>
      </div>

      <div className="bg-[#201E1E] rounded-2xl p-6 flex flex-col gap-1 max-w-xs">
        <StaticImage src="../../static/envelope.svg" alt="Infinity" className="max-w-[50px]" />
        <p className="font-jakarta800 text-[#fff] text-base pt-2 md:leading-relaxed">Tests in 40+ clients</p>
        <p className="font-jakarta500 text-[#d0d0d0] text-base  md:leading-relaxed">All emails are tested in 40+ clients.</p>
      </div>

      <div className="bg-[#201E1E] rounded-2xl p-6 flex flex-col gap-1 max-w-xs">
        <StaticImage src="../../static/crown.svg" alt="Infinity" className="max-w-[46px]" />
        <p className="font-jakarta800 text-[#fff] text-base pt-2 md:leading-relaxed">Whitelabel and yours</p>
        <p className="font-jakarta500 text-[#d0d0d0] text-base  md:leading-relaxed">All Emails are 100% whitelabel & yours.</p>
      </div>

      <div className="bg-[#201E1E] rounded-2xl p-6 flex flex-col gap-1 max-w-xs">
        <StaticImage src="../../static/mailchimp.svg" alt="Infinity" className="w-[34px]" />
        <p className="font-jakarta800 text-[#fff] text-base pt-2 md:leading-relaxed">Easily upload in your ESPs & mailers</p>
        <p className="font-jakarta500 text-[#d0d0d0] text-base  md:leading-relaxed">Custom HTML structure for your mailers and ESPs</p>
      </div>

      <div className="bg-[#201E1E] rounded-2xl p-6 flex flex-col gap-1 max-w-xs">
        <StaticImage src="../../static/microsoft.svg" alt="Infinity" className="w-[34px]" />
        <p className="font-jakarta800 text-[#fff] text-base pt-2 md:leading-relaxed">OFT Email development</p>
        <p className="font-jakarta500 text-[#d0d0d0] text-base  md:leading-relaxed">Not just HTML but also Outlook Email template creation</p>
      </div>

    </section>
  );
};