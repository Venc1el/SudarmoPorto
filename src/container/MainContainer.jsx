import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';


gsap.registerPlugin(ScrollTrigger);

const MainContainer = () => {
    const sections = useRef([]);

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
                    filter: isLast ? 'none' : 'brightness(50%) contrast(135%)',
                    scale: 0.9,
                    borderRadius: 40,
                    opacity: { from: 0, to: 1 },
                })
        });
    };

    useEffect(() => {
        applyScrollTrigger();
        return () => {
            ScrollTrigger.killAll(); 
        };
    }, []);

    return (
        <div>
            <div ref={(el) => (sections.current.push(el))}>
                <Hero />
            </div>
            <div ref={(el) => (sections.current.push(el))}>
                <AboutMe />
            </div>
        </div>
    );
};

export default MainContainer;
