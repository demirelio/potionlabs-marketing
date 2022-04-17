import React from "react"
import { Link } from "gatsby";
import Helmet from "react-helmet";

export default function TopBanner() {
  return (
    <section className="px-5 py-2 md:px-14 justify-center text-center flex gap-2 md:gap-8 items-center bg-pink-700 w-full sticky top-0 z-50">
      <Helmet>
      <script async src="https://tally.so/widgets/embed.js" type="text/javascript"></script>
      </Helmet>
      <h1 className="font-jakarta600 text-white text-sm md:text-base tracking-wide max-w-[220px] md:max-w-none">
        View this website in your Email. Because we are <span className="underline">THAT GOOD!</span>
      </h1>
      <a href="https://tally.so#tally-open=3xOldm&tally-layout=modal&tally-hide-title=1&tally-emoji-text=👋&tally-emoji-animation=wave" className="font-jakarta500 bg-[#FFCA72] hover:bg-yellow-500 py-1.5 px-4 md:px-12 text-black rounded text-sm md:text-base">View in email</a>
    </section>
  )
}