import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Alert, Snackbar } from "@mui/material";
import copy from "../assets/copy.svg";
import instagram from "../assets/instagram.svg";
import tiktok from "../assets/tiktok.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";

const Contact = () => {
    const form = useRef();
    const [alert, setAlert] = useState({ open: false, message: '', severity: 'success' });

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_mnu7xgk",
                "template_r1pr5lg",
                form.current,
                "UMNWQNPTEXyF8G0JP"
            ).then(() => {
                setAlert({ open: true, message: 'Form Submitted Successfully', severity: 'success' });
            }, (error) => {
                setAlert({ open: true, message: 'Form Submission Failed', severity: 'error' });
                console.error("Failed to send email:", error);
            });
    };

    const copyToClipboard = () => {
        const email = "sudarmoadi89@gmail.com";
        navigator.clipboard.writeText(email).then(() => {
            alert("Copied to clipboard!");
        }).catch((err) => {
            console.error("Failed to copy!", err);
        });
    };

    const handleClose = () => {
        setAlert({ ...alert, open: false });
    };

    return (
        <div className='bg-primary-background px-4 md:px-10 py-5 flex flex-col'>
            <div className="flex-grow">
                <div className="grid grid-cols-1 md:grid-cols-11 gap-y-5 md:gap-x-5 items-end">
                    <div className="md:col-span-7">
                        <h1 className="uppercase font-black text-3xl md:text-5xl lg:text-6xl text-primary-text leading-tight md:leading-none">
                            Let&apos;s create something great together
                        </h1>
                    </div>

                    <div className="md:col-span-4">
                        <p className="text-lg md:text-xl leading-6 font-normal text-[#C2B189]">
                            Send me a message so we can start working together. Tell me your vision and goals and I will create an extraordinary
                            website for you. I&apos;m looking forward to our cooperation.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-11 gap-y-10 md:gap-x-5 mt-10 md:mt-20">
                    <div className="md:col-span-7 md:pr-16">
                        <form method="POST" ref={form} onSubmit={sendEmail} className="flex flex-col gap-12">
                            <div className="flex flex-col-reverse">
                                <input required className="h-12 md:h-14 border-b border-primary-placeholder focus:border-primary-text bg-transparent placeholder-primary-placeholder outline-none" type="text" name="from_name" placeholder="Write your name..." />
                                <label htmlFor="name" className="text-lg text-primary-text"> Your Name*</label>
                            </div>
                            <div className="flex flex-col-reverse">
                                <input required className="h-12 md:h-14 border-b border-primary-placeholder focus:border-primary-text bg-transparent placeholder-primary-placeholder outline-none" type="email" name="email" placeholder="Write your email..." />
                                <label htmlFor="email" className="text-lg text-primary-text"> Your Email*</label>
                            </div>
                            <div className="flex flex-col-reverse">
                                <textarea required className="h-48 md:h-56 pt-3 resize-none border-b border-primary-placeholder focus:border-primary-text bg-transparent placeholder-primary-placeholder outline-none" name="message" placeholder="Write your message..." />
                                <label htmlFor="message" className="text-lg text-primary-text"> Your Message*</label>
                            </div>

                            <input type="submit" className="bg-primary-text py-2 md:py-3 px-4 md:px-6 uppercase text-primary-background rounded-full cursor-pointer" value="Submit Form" />
                        </form>
                    </div>

                    <div className="md:col-span-4 flex flex-col gap-8 md:gap-16">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-lg text-[#C2B189]">Address Email</h1>
                            <div className="flex items-center cursor-pointer" onClick={copyToClipboard}>
                                <p className="text-lg text-primary-text">sudarmoadi89@gmail.com</p>
                                <img src={copy} alt="copy" className="w-5 h-5 ml-2" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1 className="text-lg text-[#C2B189]">Local Time</h1>
                            <p className="text-lg text-primary-text">UTC+7 Sidoarjo, Indonesia</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h1 className="text-lg text-[#C2B189]">Socials</h1>
                            <a href="https://www.instagram.com/venciel_" target="_blank" className="flex items-center cursor-pointer">
                                <img src={instagram} alt="instagram" className="w-6 h-6 mr-2" />
                                <p className="text-lg text-primary-text">venciel_</p>
                            </a>

                            <a href="https://www.linkedin.com/in/sudarmo-adi-872b7b247" target="_blank" className="flex items-center cursor-pointer">
                                <img src={linkedin} alt="linkedin" className="w-6 h-6 mr-2" />
                                <p className="text-lg text-primary-text">Sudarmo Adi</p>
                            </a>

                            <a href="https://github.com/Venc1el" target="_blank" className="flex items-center cursor-pointer">
                                <img src={github} alt="github" className="w-6 h-6 mr-2" />
                                <p className="text-lg text-primary-text">Venc1el</p>
                            </a>

                            <a href="https://www.tiktok.com/@venciel_" target="_blank" className="flex items-center cursor-pointer">
                                <img src={tiktok} alt="tiktok" className="w-6 h-6 mr-2" />
                                <p className="text-lg text-primary-text">@venciel_</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div id="footer" className="border-t border-primary-text flex flex-col md:flex-row justify-between items-center mt-10 md:mt-20 pt-5 pb-3 text-primary-text">
                <div className="mb-5 md:mb-0">
                    <a href="/SudarmoPorto" className="font-main font-semibold text-primary-text text-2xl">SA</a>
                </div>

                <div className="flex flex-wrap justify-center gap-5">
                    <a href="https://www.linkedin.com/in/sudarmo-adi-872b7b247" target="_blank">LINKEDIN</a>
                    <a href="https://www.instagram.com/venciel_" target="_blank">INSTAGRAM</a>
                    <a href="https://www.tiktok.com/@venciel_" target="_blank">TIKTOK</a>
                    <a href="https://github.com/Venc1el" target="_blank">GITHUB</a>
                </div>

                <div className="mt-5 md:mt-0">
                    <h1>Copyright by Sudarmo Adi 2024</h1>
                </div>
            </div>

            <Snackbar open={alert.open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={alert.severity} sx={{ width: '100%' }}>
                    {alert.message}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default Contact;
