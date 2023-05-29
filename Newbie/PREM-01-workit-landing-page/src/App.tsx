import Nav from "./components/Nav"
import Hero from "./components/Hero"

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <section>
          <div>
            <p>Actionable Insights</p>
            <p>Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics.</p>
          </div>
          <div>
            <p>Data-driven decisions</p>
            <p>Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data.</p>
          </div>
          <div>
            <p>Always affordable</p>
            <p>Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees.</p>
          </div>
        </section>
        <section>
          <img src="/src/assets/image-removebg-preview(363).png" alt="" />
          <div>
            <p>Be the first to test</p>
            <p>Hi, I'm Louis Graham, the founder of the company. Book a demo call with me to become a beta tester for our app and kickstart your company. Apply for access below and I'll be in touch to schedule a call.</p>
            <a href="#">Apply for access</a>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
