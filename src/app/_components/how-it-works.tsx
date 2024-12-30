import { EmblaOptionsType } from 'embla-carousel';
import Image from 'next/image';
import React from 'react';
import EmblaCarousel from './carousel/embla-carousel';

const OPTIONS: EmblaOptionsType = { align: 'start', loop: true };

const HowItWorks = () => {
    return (
        <div className="relative w-full bg-[#67C9F2] text-white">
            <Image
                src="/assets/images/how-it-works-bg.png"
                layout="fill"
                objectFit="cover"
                alt="Иллюстрация фона"
            />
            <div className="container mx-auto py-10 md:py-16">
                <h2 className="mb-8 text-xl font-medium md:mb-16">Как это работает?</h2>
                <EmblaCarousel options={OPTIONS} />
            </div>
        </div>
    );
};

export default HowItWorks;
