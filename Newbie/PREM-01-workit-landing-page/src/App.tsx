import { useState, useEffect } from 'react';

import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Footer from "./components/Footer"

import Button from "./components/Button"

function App() {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
      console.log(screenSize);
    } 

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }

  }, [screenSize]);

  return (
    <div>
      <Nav />
      <main>
        <Hero screenSize={screenSize} />
        <section className="relative -z-10 bg-main-background md:bg-desktop-main-background min-[376px]:bg-tablet-main-background bg-bottom bg-no-repeat -translate-y-24 flex flex-col lg:max-w-[1440px] lg:justify-evenly lg:mx-auto lg:flex-row gap-10 sm:gap-12 pt-44 pb-16 lg:pb-44 px-4">
          <div className="flex flex-col sm:flex-row lg:flex-col sm:justify-center items-center gap-6 sm:gap-8">
            <div>
              <img src="/num1.svg" alt="" />
            </div>
            <div className="flex flex-col gap-4 text-center sm:text-left sm:max-w-lg">
              <p className="font-fraunces text-dark-purple text-3xl lg:text-center">Actionable Insights</p>
              <p className="text-davys-gray leading-7 lg:max-w-sm">Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics.</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col sm:justify-center items-center gap-6 sm:gap-8">
            <div>
              <img src="/num2.svg" alt="" />
            </div>
            <div className="flex flex-col gap-4 text-center sm:text-left sm:max-w-lg">
              <p className="font-fraunces text-dark-purple text-3xl lg:text-center">Data-driven decisions</p>
              <p className="text-davys-gray leading-7 lg:max-w-sm">Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data.</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col sm:justify-center items-center gap-6 sm:gap-8">
            <div>
              <img src="/num3.svg" alt="" />
            </div>
            <div className="flex flex-col gap-4 text-center sm:text-left sm:max-w-lg">
              <p className="font-fraunces text-dark-purple text-3xl lg:text-center">Always affordable</p>
              <p className="text-davys-gray leading-7 lg:max-w-sm">Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees.</p>
            </div>
          </div>
        </section>
        <section className="mx-auto flex flex-col items-center sm:items-end sm:max-w-2xl lg:max-w-6xl">
          {screenSize < 1023 
            ? 
            <img className="sm:self-start" src="/image-removebg-preview(363).png" alt="founder" />
            :
            <img className="self-start lg:translate-x-20 lg:translate-y-32" src="/desktop-founder-headshot.png" alt="founder" />

          }
          <div className="relative mx-4 min-[376px]:max-w-lg -translate-y-14 sm:-translate-y-32 sm:translate-x-4 bg-dark-purple text-white p-8 sm:px-14 sm:pt-12 sm:pb-14 text-center sm:text-left lg:max-w-3xl">
            <p className="font-fraunces text-[2rem] sm:text-[3rem] leading-[3rem] sm:leading-[3.5rem]">Be the first to test</p>
            <p className="pt-4 sm:pt-6 pb-6 leading-7 lg:max-w-xl">Hi, I'm Louis Graham, the founder of the company. Book a demo call with me to become a beta tester for our app and kickstart your company. Apply for access below and I'll be in touch to schedule a call.</p>
            <Button className="mx-auto sm:mx-0" >
              Apply for access
            </Button>
            {screenSize >= 768 &&
              <img className="absolute right-0 lg:right-10 -bottom-28 lg:-bottom-20" src="/founder-bg-spiral.svg" alt="" />
            }
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
