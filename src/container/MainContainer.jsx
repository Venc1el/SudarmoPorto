import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Contact from '../components/Contact';


gsap.registerPlugin(ScrollTrigger);

const MainContainer = () => {
    const sections = useRef([]);
    const sectionsSecond = useRef([]);


    const applyScrollTrigger = () => {
        sections.current.forEach((section, index) => {
            const isLast = index === sections.current.length - 1;

            const sectionTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: 'top top',
                    scrub: 1,
                    pin: true,
                    pinSpacing: false,
                },
            });

            sectionTimeline
                .to(section, {
                    ease: 'none',
                    startAt: { filter: 'brightness(100%) contrast(100%)' },
                    filter: 'brightness(50%) contrast(135%) blur(10px)',
                    scale: 0.9,
                    borderRadius: 40,
                    opacity: { from: 0, to: 1 },
                })
        });
    };

    const applySecondScrollTrigger = () => {
        sectionsSecond.current.forEach((section, index) => {

            const sectionTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: 'bottom bottom',
                    pin: true,
                    pinSpacing: false,
                    scrub: 1,
                },
            });

            sectionTimeline
                .to(section, {
                    ease: 'none',
                    startAt: { filter: 'brightness(100%) contrast(100%)' },
                    filter: 'brightness(50%) contrast(135%) blur(10px)',
                    scale: 0.9,
                    borderRadius: 40,
                    opacity: { from: 0, to: 1 },
                })
        });
    };

    useEffect(() => {
        applyScrollTrigger();
        applySecondScrollTrigger();
        return () => {
            ScrollTrigger.killAll();
        };
    }, []);

    return (
        <div className='overflow-x-hidden'>
            <div ref={(el) => (sections.current.push(el))}>
                <Hero />
            </div>
            <div ref={(el) => (sectionsSecond.current.push(el))}>
                <AboutMe />
            </div>

            <div ref={(el) => (sectionsSecond.current.push(el))}>
                <Contact />
            </div>
        </div>
    );
};

export default MainContainer;
