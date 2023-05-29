import Button from "./Button"

const Hero = () => {
    return (
        <section className="relative -mt-16 bg-hero-background bg-no-repeat flex flex-col gap-16 items-center pt-32">
            <div className="flex flex-col gap-10 items-center">
                <h1 className="text-5xl text-white text-center font-fraunces" >Data <span className="underline decoration-eucaplyptus">tailored</span> to your needs.</h1>
                <Button>
                    Learn More
                </Button>
            </div>
            <img className="z-20" src="/src/assets/iPhone 11 [Front].svg" alt="iPhone11" />
        </section>
        // <section className="flex flex-col gap-16 items-center pt-16">
        //     <div className="flex flex-col gap-10 items-center">
        //         <h1 className="text-5xl text-white text-center font-fraunces" >Data <span className="underline decoration-eucaplyptus">tailored</span> to your needs.</h1>
        //         <Button>
        //             Learn More
        //         </Button>
        //     </div>
        //     <img className="z-20" src="/src/assets/iPhone 11 [Front].svg" alt="iPhone11" />
        // </section>
    )
}

export default Hero