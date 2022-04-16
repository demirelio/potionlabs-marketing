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
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 justify-items-center">
        <div className="col-span-1 lg:col-span-2 font-jakarta500 bg-[#201E1E] rounded-2xl px-6 py-12 flex flex-col gap-4">
          <h3 className="text-xl font-jakarta600">Unlimited HTML Emails</h3>
          <p className="text-sm text-[#d0d0d0] leading-relaxed">For <span className="underline decoration-emerald-500 decoration-2">companies</span> and <span className="underline decoration-pink-500 decoration-2">digital marketing agencies</span> with ongoing HTML Email needs.</p>
          <p className="text-3xl font-jakarta600">$495/<span className="text-xl">month</span><span className="text-sm font-jakarta200"> + vat</span></p>
          <div className="flex flex-col items-stretch text-center gap-2">
          <a href="https://store.potionlabs.io/l/unlimited-html-emails?wanted=true" className="font-jakarta700 bg-[#FFD23F] hover:bg-yellow-500 py-3 mt-2  text-black rounded">Get Started</a>
          <a href='https://superpeer.com/alchemist' className=" text-[#d0d0d0] hover:underline text-sm">Book a call</a>
          </div>
          <h4 className="font-jakarta600 mt-6">What's included?</h4>
          <div className="font-jakarta400 text-[#d0d0d0] grid gap-2">
            <p><span className="pr-4 text-sm">✅</span>Unlimited requests</p>
            <p><span className="pr-4 text-sm">✅</span>Unlimited revisions</p>
            <p><span className="pr-4 text-sm">✅</span>Invite unlimited team members</p>
            <p><span className="pr-4 text-sm">✅</span>Cancel anytime you want</p>
            <p><span className="pr-4 text-sm">✅</span>NDA</p>
            <p><span className="pr-4 text-sm">✅</span>All files are yours</p>
            <p><span className="pr-4 text-sm">✅</span>Early access to new features</p>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-3 font-jakarta500 bg-[#201E1E] rounded-2xl px-6 py-12 flex flex-col gap-4">
          <h3 className="text-xl">What can you request?</h3>
          <p className="text-sm text-[#d0d0d0] ">We constantly add new services to our offer.</p>
          <div className="font-jakarta400 text-[#d0d0d0] grid gap-2 mt-6">
            <p><span className="pr-4 text-sm">🚀</span>Full responsive and custom HTML Email Development</p>
            <p><span className="pr-4 text-sm">🚀</span>Email modernization and restoration from existing templates</p>
            <p><span className="pr-4 text-sm">🚀</span>HTML Email Design</p>
            <p><span className="pr-4 text-sm">🚀</span>Email testing over 40+ email clients</p>
            <p><span className="pr-4 text-sm">🚀</span>Email Design Systems <sup className="italic text-red-500 font-jakarta500">upcoming</sup></p>
            <p><span className="pr-4 text-sm">🚀</span>Fully editable OFT Email Development for Outlook</p>
            <p><span className="pr-4 text-sm">🚀</span>Spam filter testing and consultation<sup className="italic text-red-500 font-jakarta500">upcoming</sup></p>
            <p><span className="pr-4 text-sm">🚀</span>Email BIMI setup for increased conversion and ROI</p>
            <p><span className="pr-4 text-sm">🚀</span>Custom email integration for ESPs<sup className="italic text-red-500 font-jakarta500">upcoming</sup></p>
            <div className="pl-8 grid gap-1 text-sm">
            <p>Mailchimp <sup className="italic text-red-500 font-jakarta500">upcoming</sup></p>
            <p>Campaign Monitor <sup className="italic text-red-500 font-jakarta500">upcoming</sup></p>
            <p>Klaviyo <sup className="italic text-red-500 font-jakarta500">upcoming</sup></p>
            <p>GetResponse <sup className="italic text-red-500 font-jakarta500">upcoming</sup></p>
            <p>Autopilot <sup className="italic text-red-500 font-jakarta500">upcoming</sup></p>
            <p>Salesforce Pardot <sup className="italic text-red-500 font-jakarta500">upcoming</sup></p>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}