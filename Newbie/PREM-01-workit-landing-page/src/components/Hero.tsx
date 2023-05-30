import Button from "./Button"

const Hero = ({ screenSize }: { screenSize: number }) => {
    const renderSpirals = (screenSize: number, spiral: 'left' | 'right') => {
        if (screenSize < 540) return;
        if (screenSize < 1280) {
            return spiral === 'left' 
                ?
                <img className="absolute left-0" src="/left-bg-spiral.svg" alt="" /> 
                :
                <img className="absolute right-0 top-1/3" src="/right-bg-spiral.svg" alt="" /> 
        }

        return spiral === 'left'
            ?
            <img className='absolute left-0' src="/desktop-left-spiral.svg" alt="" />
            :
            <img className='absolute right-0 top-1/2' src="/desktop-right-spiral.svg" alt="" />
    }

    const renderIphone = (screenSize: number) => {
        if (screenSize < 376) {
            return "/mobile-iPhone.svg";
        } else if (screenSize < 767) {
            return "/tablet-iPhone.svg";
        }
        return "/desktop-iPhone.svg";
    }
    
    return (
        <section className="relative -mt-16 min-[376px]-mt-0 bg-hero-background md:bg-desktop-hero-background min-[376px]:bg-tablet-hero-background min-[376px]:bg-center md:bg-bottom bg:cover bg-no-repeat flex flex-col gap-16 items-center pt-32 min-[376px]:pt-16 lg:max-w-[1440px] lg:mx-auto">
            <div className="flex flex-col gap-10 items-center min-[376px]:pt-14">
                <h1 className="text-5xl text-white text-center font-fraunces max-w-md" >Data <span className="underline decoration-eucaplyptus underline-offset-8">tailored</span> to your needs.</h1>
                <Button>
                    Learn More
                </Button>
                {renderSpirals(screenSize, 'left')}
                {renderSpirals(screenSize, 'right')}
            </div>
            
            <img className="z-20" src={renderIphone(screenSize)} alt="" />
        </section>
    )
}

export default Hero;