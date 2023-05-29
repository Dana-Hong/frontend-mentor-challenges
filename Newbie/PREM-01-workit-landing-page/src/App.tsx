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
      </main>
    </>
  )
}

export default App
