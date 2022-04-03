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
            We <span className="text-yellow-500">design & develop unlimited</span> HTML Emails with a <span className="text-green-500">monthly fixed price.</span> <span className="underline decoration-pink-500">No surprise fees or hidden costs.</span>
          </h1>
          <p className="font-jakarta500 text-[#fff] text-lg md:text-xl md:pr-[10rem] md:leading-relaxed">
            We build top of the quality HTML emails with best practices for you. You focus on your clients and grow your business. <span className="underline decoration-2 decoration-red-500">No last-minute contractor hunting</span>, <span className="underline decoration-2 decoration-blue-500">no hourly rate negotiations</span>, or <span className="underline decoration-2 decoration-green-500">paying extra for revisions</span>.
          </p>
          <div className="flex gap-4 items-center justify-start">
            <Link to='/' className="font-jakarta500 bg-[#540D6E] hover:bg-[#651184] py-3 px-12 text-white rounded">Get Started</Link>
            <Link to='/' className="font-jakarta500 bg-transparent border-2 border-white hover:border-[#651184] py-3 px-12 text-white rounded">Book a Call</Link>
          </div>
        </div>
      </div>
      <div style={{ backgroundImage: `url(${bgImage})` }} className='flex bg-transparent bg-cover rounded-3xl lg:rounded-r-none'>
        <StaticImage src="../../static/hero.png" alt="Email example" className="m-6 max-w-xl" />
      </div>
    </section>
  );
};