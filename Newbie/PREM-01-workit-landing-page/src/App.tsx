import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Footer from "./components/Footer"

import Button from "./components/Button"

function App() {
  return (
    <div>
      <Nav />
      <main>
        <Hero />
        <section className="relative -z-10 bg-main-background bg-bottom bg-no-repeat -translate-y-24 flex flex-col gap-10 pt-44 pb-16 px-4">
          <div className="flex flex-col items-center gap-6">
            <div>
              <img src="/src/assets/num1.svg" alt="" />
            </div>
            <div className="flex flex-col gap-4 text-center">
              <p className="font-fraunces text-dark-purple text-3xl">Actionable Insights</p>
              <p className="text-davys-gray leading-7">Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics.</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-6">
            <div>
              <img src="/src/assets/num2.svg" alt="" />
            </div>
            <div className="flex flex-col gap-4 text-center">
              <p className="font-fraunces text-dark-purple text-3xl">Data-driven decisions</p>
              <p className="text-davys-gray leading-7">Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data.</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-6">
            <div>
              <img src="/src/assets/num3.svg" alt="" />
            </div>
            <div className="flex flex-col gap-4 text-center">
              <p className="font-fraunces text-dark-purple text-3xl">Always affordable</p>
              <p className="text-davys-gray leading-7">Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees.</p>
            </div>
          </div>
        </section>
        <section>
          <img className="mx-auto" src="/src/assets/image-removebg-preview(363).png" alt="" />
          <div className="mx-4 -translate-y-14 bg-dark-purple text-white p-8">
            <p className="text-center font-fraunces text-[2rem] leading-[3rem]">Be the first to test</p>
            <p className="pt-4 pb-6 text-center leading-7">Hi, I'm Louis Graham, the founder of the company. Book a demo call with me to become a beta tester for our app and kickstart your company. Apply for access below and I'll be in touch to schedule a call.</p>
            <Button className="mx-auto" >
              Apply for access
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
