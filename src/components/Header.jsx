import { useState, useEffect } from "react";


const Header = () => {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, [])

    return (
        <div>
            <div className="flex justify-between items-center px-[40px] py-[40px]">
                <a href="/" className="font-main font-semibold text-text-primary text-[24px]">SA</a>
                <span className="font-main text-text-primary text-[18px]">AVAILABLE FOR FULL TIME</span>
                <span className="font-main bg-text-primary px-5 py-2 text-[#FBFBFB]">{time.toLocaleString('en-US', {hour:'2-digit',minute:'numeric'})}</span>
            </div>
        </div>
    )
}

export default Header