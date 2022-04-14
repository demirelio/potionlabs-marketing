import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react"

export const Nav = () => {
    return (
        <nav className="flex flex-row justify-between items-center py-[36px] px-[24px] lg:px-[48px]">
          <div className="flex gap-2 items-center">
            <StaticImage src="../../static/logo-2.png" alt="Potionlabs" className="max-w-[32px]"/>
            <p className="font-jakarta500 text-lg">potion labs</p>
          </div>
          <div className="text-sm lg:text-base font-jakarta500 flex flex-row gap-6 lg:gap-9 flex-wrap hidden">
            <Link className="hover:text-[#FFD23F] underline-offset-4 decoration-2 underline decoration-transparent hover:decoration-[#FFD23F] hover:cursor-pointer transition-all ease-in duration-100">about us</Link>
            <Link className="hidden md:flex hover:text-[#FFD23F] underline-offset-4 decoration-2 underline decoration-transparent hover:decoration-[#FFD23F] hover:cursor-pointer transition-all ease-in duration-100">features</Link>
            <Link className="hover:text-[#FFD23F] underline-offset-4 decoration-2 underline decoration-transparent hover:decoration-[#FFD23F] hover:cursor-pointer transition-all ease-in duration-100">pricing</Link>
            <Link className="hover:text-[#FFD23F] underline-offset-4 decoration-2 underline decoration-transparent hover:decoration-[#FFD23F] hover:cursor-pointer transition-all ease-in duration-100">get started</Link>
          </div>
        </nav>
    );
  };