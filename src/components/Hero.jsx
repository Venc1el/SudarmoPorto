import { useState, useEffect } from "react";
import triangle from '../assets/hero-back.svg';

const Hero = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="relative min-h-screen">
            <section className="flex justify-between items-center px-4 md:px-10 py-4 md:py-10">
                <a href="/SudarmoPorto" className="font-main font-semibold text-primary-text text-2xl md:text-3xl">SA</a>
                <span className="font-main text-primary-text text-base md:text-lg">AVAILABLE FOR FULL TIME</span>
                <span className="font-main bg-primary-text px-3 md:px-5 py-1 md:py-2 text-[#FBFBFB]">
                    {time.toLocaleString('en-US', { hour: '2-digit', minute: 'numeric' })}
                </span>
            </section>

            <section className="px-4 md:px-10">
                <img src={triangle} alt="Background Triangle" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-7xl md:text-[160px] font-black uppercase w-full text-center leading-none z-10">
                    <h1 className="text-primary-text">HI THERE -</h1>
                    <h1 className="text-primary-text">I am <span className="md:text-outline-4 md:text-fill-transparent">Darmo</span></h1>
                </div>

                <p className="fixed hidden md:block bottom-20 md:bottom-44 left-4 md:left-10 text-lg md:text-xl text-primary-text vertical-writing-lr rotate-180 uppercase">
                    Programmer
                </p>

                <p className="fixed hidden md:block top-32 md:top-64 right-4 md:right-10 text-lg md:text-xl text-primary-text vertical-writing-lr rotate-180 uppercase">
                    Web Developer
                </p>
            </section>
        </div>
    );
}

export default Hero;
