import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export const EmailClientList  = () => {
  const clients = [
    {
      name: "Apple Mail 13",
      client: "macOS 10.15",
    },
    {
      name: "Outlook 2010",
      client: "Windows 10",
    },
    {
      name: "Outlook.com",
      client: "Firefox",
    },
    {
      name: "Outlook 2016",
      client: "macOS 10.12.6",
    },
    {
      name: "Outlook 2016",
      client: "Windows 10",
    },
    {
      name: "Yahoo! Mail",
      client: "Explorer",
    },
    {
      name: "Outlook Office 365",
      client: "Windows 10",
    },
    {
      name: "Gmail",
      client: "Chrome",
    },
    {
      name: "iPhone 11 Pro",
      client: "iOS 13.1",
    },
    {
      name: "Pixel Gmail",
      client: "Android 8",
    },
    {
      name: "iPad Pro",
      client: "12.9inch",
    },
  ]

  return (
    <section className="flex flex-col gap-2 pt-0 pb-[36px] px-[24px] lg:px-[48px] mx-auto justify-center">
      <div className="flex flex-wrap gap-4 justify-center">
      {clients.map(client =>{
        return(
      <div className="bg-[#201E1E] rounded-[50px] py-4 px-8 gap-4 max-w-xs flex justify-center items-center">
        {/* <StaticImage src={client.icon} alt="Infinity" className="w-[24px]" /> */}
        <p className="font-jakarta800 text-[#fff] text-base md:leading-relaxed">{client.name} <span className="text-[#d0d0d0] font-jakarta200">&nbsp;&nbsp;{client.client}</span></p>
       </div>
        )
      })}
      </div>
      <p className="text-[#FFD23F] self-center pt-2 font-jakarta500">And 30+ more clients</p>
    </section>

  );
};