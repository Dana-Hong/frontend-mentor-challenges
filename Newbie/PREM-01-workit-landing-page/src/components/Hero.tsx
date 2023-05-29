import Button from "./Button"

const Hero = () => {
    return (
        <section>
            <h1 className="font-fraunces" >Data <span className="underline decoration-eucaplyptus">tailored</span> to your needs.</h1>
            <Button>
                Learn More
            </Button>
            <img src="/src/assets/iPhone 11 [Front].svg" alt="iPhone11" />
        </section>
    )
}

export default Hero