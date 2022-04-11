import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import { Link } from "gatsby";

const data = {
  rows: [
      {
          title: "Who is designing/building our emails?",
          content: `In Potion Labs we don't have account managers. The person whom you will be in contact creates your emails. That makes things even faster, because we will be in active collaboration with you.`,
      },
      {
          title: "Why you work on a subscription instead of a project based pricing?",
          content: `Project-based pricing is not beneficial for both our clients and us. Each project cycle requires a new set of agreements on pricing, project scope, terms and conditions, and how we collaborate. When you subscribe, all those mundane tasks are eliminated. We deliver faster, and you never miss deadlines with your clients. Plus, no more paying extra because your client changed their minds.`,
      },
      {
          title: "Is it really unlimited requests?",
          content: `Yes! Once subscribed, you're able to add as many HTML Email requests to your queue as you'd like, and they will delivered one by one.`,
      },
      {
          title: "How fast will I receive my emails?",
          content:
              "On average, most requests are completed in just couple days or less. However, more complex requests can take longer.",
      },
      {
          title: "Do you offer discounted annual plans?",
          content: `We currently do not offer discounted annual plans but we can always work on it. Just reach out to us and we'll work a solution.`,
      },
      {
          title: "How do I request an email?",
          content: `Potion Labs creates a highly flexible Notion Dashbaord for you. Our clients usually create their tasks in feed the Notion task with Google Docs, PDF files, or other design files like Photoshop and Illustrator. They also provide text briefs along with source files. Simply, if you can put it on Notion, we can do it.`,
      },
      {
          title: "Are there any contracts to use your service?",
          content: `There are no contracts or commitments to use Potion Labs. You can cancel your subscription at any time you wish.`,
      },
      {
          title: "Do you work under NDAs?",
          content: `We value your privacy and respect your business. We can sign you a NDA if you'd like.`,
      },
      {
          title: "What email clients do you support?",
          content: `We support all major email clients. We will work hard to make sure that your designs works in all major email clients as intended.`,
      },
      {
          title: "Who owns the finished email code or design?",
          content: `You own the finished email code or design. We will not sell or rent your designs to anyone. Once the task is completed, you can access all source files in the task.`,
      },
      {
          title: "Do you work on the weekends?",
          content: `We as a team need to recharge our batteries after a long week of work. We are not working on the weekends.`,
      },
  ],
};

const styles = {
  bgColor: 'transparent',
  titleTextColor: "white",
  rowTitleColor: "white",
  rowContentColor: '#d0d0d0',
  arrowColor: "white",

};
const config = {
  animate: true,
  arrowIcon: "⋁",
  tabFocus: true
};

export default function FAQs() {
  return (
    <section className="max-w-5xl py-[36px] px-[24px] lg:px-[48px] lg:pt-20 lg:mx-auto grid gap-8 lg:min-w-[1024px]">
      <h2 className="font-jakarta800 text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-wide lg:leading-tight xl:leading-tight">
        Frequently Asked Questions
      </h2>
      <div className='font-jakarta500'>
        <Faq
          className='font-jakarta500'
          data={data}
          styles={styles}
          config={config}
        />
      </div>
    </section>
  )
}