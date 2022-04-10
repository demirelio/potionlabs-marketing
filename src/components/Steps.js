import React from "react"

export const Steps = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10 pt-0 pb-[36px] px-[24px] lg:px-[48px] mx-auto justify-center">
      <div className="bg-[#201E1E] rounded-2xl p-6 flex flex-col gap-1 max-w-lg">
        <p className="font-jakarta600 text-[#FFD23F] text-base  md:leading-relaxed">Step 1</p>
        <p className="font-jakarta800 text-[#fff] text-lg pt-2 md:leading-relaxed">Subscribe to the no-surprise-fixed-price plan</p>
        <p className="font-jakarta500 text-[#d0d0d0] text-base  md:leading-relaxed">It only takes 30 seconds to start. (60 seconds if you store your credit card info as a screenshot)</p>
      </div>

      <div className="bg-[#201E1E] rounded-2xl p-6 flex flex-col gap-1 max-w-lg">
        <p className="font-jakarta600 text-[#FFD23F] text-base  md:leading-relaxed">Step 2</p>
        <p className="font-jakarta800 text-[#fff] text-lg pt-2 md:leading-relaxed">Create your first HTML Email request</p>
        <p className="font-jakarta500 text-[#d0d0d0] text-base  md:leading-relaxed">We will send you a unique form to complete your registration and create your first task.</p>
      </div>

      <div className="bg-[#201E1E] rounded-2xl p-6 flex flex-col gap-1 max-w-lg">
        <p className="font-jakarta600 text-[#FFD23F] text-base  md:leading-relaxed">Step 3</p>
        <p className="font-jakarta800 text-[#fff] text-lg pt-2 md:leading-relaxed">We will send your personalized dashboard link</p>
        <p className="font-jakarta500 text-[#d0d0d0] text-base  md:leading-relaxed">Create unlimited tasks, invite unlimited collaborators and never lose track of your requests.</p>
      </div>
    </section>
  );
};