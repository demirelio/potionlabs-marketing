import { Link } from "gatsby";
import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import bgImage from "../../static/bg.png"

export const Hero = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-[36px] px-[24px] lg:px-[48px] lg:pr-0 items-center">
      <div>
        <div className="max-w-full lg:max-w-2xl mx-auto grid grid-cols-1 gap-6">
          <h1 className="font-jakarta800 text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-wide xl:leading-tight">
          We build <span className="text-[#FFD23F]">unlimited HTML Emails</span> for <span className="text-green-500">a monthly fixed price</span>. <span className="underline decoration-pink-500">No surprise fees or hidden costs.</span>
          </h1>
          <p className="font-jakarta500 text-[#fff] text-lg md:text-xl md:pr-[10rem] md:leading-relaxed">
            <span className="underline decoration-2 decoration-red-500">No last-minute contractor hunting</span>, <span className="underline decoration-2 decoration-blue-500">no hourly rate negotiations</span>, or <span className="underline decoration-2 decoration-green-500">paying extra for revisions</span>. You focus on your clients and grow your business. We handle all your email production.
          </p>
          <div className="flex md:flex-row flex-col gap-4 text-center items-stretch md:items-start md:justify-start">
            <Link to='/#pricing' className="font-jakarta500 bg-[#FFD23F] hover:bg-yellow-500 py-3 px-12 text-black rounded">Get started in 5 minutes</Link>
            <a href='https://superpeer.com/alchemist' target='_blank' className="font-jakarta500 bg-transparent border-2 border-white hover:border-[#FFD23F] py-3 px-12 text-white rounded">Let's Talk</a>
          </div>
          <p className="font-jakarta500 text-[#d0d0d0] text-sm md:text-sm md:pr-[1rem] md:leading-relaxed">
            👉 Average time spent on landing here to subscribe to request your first task is 5 minutes.
          </p>
        </div>
      </div>
      <div style={{ backgroundImage: `url(${bgImage})` }} className='flex bg-transparent bg-cover rounded-3xl lg:rounded-r-none'>
        <StaticImage src="../../static/hero.png" alt="Email example" className="m-6 max-w-xl" />
      </div>
    </section>
  );
};