import { useState, useEffect } from "react"
import triangle from '../assets/hero-back.svg'

const Hero = () => {

    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, [])

    return (
        <div className="relative min-h-screen">
            <section className="flex justify-between items-center px-[40px] py-[40px]">
                <a href="/SudarmoPorto" className="font-main font-semibold text-primary-text text-[24px]">SA</a>
                <span className="font-main text-primary-text text-[18px]">AVAILABLE FOR FULL TIME</span>
                <span className="font-main bg-primary-text px-5 py-2 text-[#FBFBFB]">{time.toLocaleString('en-US', {hour:'2-digit',minute:'numeric'})}</span>
            </section>
            

            <section className="px-[40px]">
                <img src={triangle} alt="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%]" />

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[160px] font-black uppercase w-[1069px] h-[416px] leading-none z-10">
                    <h1 className="text-left text-primary-text">HI THERE -</h1>
                    <h1 className="text-primary-text text-right">iam <span className="text-outline-4 text-fill-transparent">darmo</span></h1>
                </div>

                <p className="absolute bottom-[175px] left-[40px] text-[22px] text-primary-text
                    vertical-writing-lr rotate-180 uppercase">
                        Programmer
                </p>

                <p className="absolute top-[266px] right-[40px] text-[22px] text-primary-text
                    vertical-writing-lr rotate-180 uppercase">
                        web developer
                </p>

            </section>
        </div>
    )
}

export default Hero