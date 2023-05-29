const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-between gap-16 pb-16">
            <img src="/src/assets/workit.svg" alt="Logo" />
            <div className="flex gap-7">
                <img src="/src/assets/facebook.svg" alt="facebook" />
                <img src="/src/assets/twitter.svg" alt="twitter" />
                <img src="/src/assets/instagram.svg" alt="instagram" />
            </div>
        </footer>
    )
}

export default Footer;