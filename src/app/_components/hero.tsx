import Image from 'next/image';
import React from 'react';
import ButtonCircleIcon from '@/assets/icons/button-circle.svg';

const Hero = () => {
    return (
        <div className="container mx-auto flex flex-wrap-reverse items-center justify-between">
            <div className="w-full max-w-[559px]">
                <h1 className="text-4xl font-semibold md:text-[60px] md:leading-[73px]">
                    Ваше визовое путешествие начинается здесь!
                </h1>
                <p className="mt-4 text-lg font-medium md:text-2xl">
                    ИИ-консультант заполняет документы, проверяет шансы и подает заявку за вас
                </p>

                <button className="group relative mx-auto mb-10 mt-7 block rounded-full px-7 py-4 text-lg md:mx-0 md:mt-14 md:px-12 md:py-5 md:text-2xl">
                    <span className="relative z-10">Начать оформление</span>
                    <div className="md:clip-path-hidden group-hover:clip-path-visible absolute left-0 top-0 size-full rounded-full bg-gradient-to-r from-[rgba(116,197,229,0)] via-[rgba(116,197,229,0.5)] to-[#74C5E5] transition-all duration-300 ease-in-out"></div>
                    <ButtonCircleIcon className="absolute left-0 top-1/2 -translate-y-1/2 transform-gpu transition-all duration-300 ease-in-out group-hover:translate-x-[250px]" />
                </button>
            </div>
            <Image
                src="/assets/images/hero.png"
                alt="Иллюстрация визы Южной Кореи"
                width={1217}
                height={1287}
                className="-mt-16 w-full max-w-[607px] md:-mt-20"
            />
        </div>
    );
};

export default Hero;
