'use client';

import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import { PrevButton, NextButton, usePrevNextButtons } from './arrow-buttons';
import useEmblaCarousel from 'embla-carousel-react';
import './carousel.css';

type PropType = {
    options?: EmblaOptionsType;
};

const SLIDES = [
    {
        title: 'Что такое \n K-ETA?',
        description:
            'K-ETA (Korea Electronic Travel Authorization) — это электронное разрешение на въезд в Южную Корею. Оно необходимо гражданам определённых стран, которые хотят посетить Южную Корею без традиционной визы.',
    },
    {
        title: 'Кто должен оформлять K-ETA?',
        description:
            'Все путешественники, въезжающие в Южную Корею без визы, включая туристов, деловых посетителей и транзитных пассажиров.',
    },
    {
        title: 'Основные преимущества',
        description:
            'Срок действия: 2 года или до истечения срока действия паспорта. Можно использовать для многократного въезда.',
    },
    {
        title: 'Что нужно для подачи заявки',
        description:
            'Действующий паспорт. Фото в цифровом формате. Платёжная карта для оплаты сбора.',
    },
];

const EmblaCarousel: React.FC<PropType> = (props) => {
    const { options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options);

    const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
        usePrevNextButtons(emblaApi);

    return (
        <section className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {SLIDES.map((slide, index) => (
                        <div className="embla__slide flex gap-3 md:gap-4" key={index}>
                            <span className="text-5xl font-medium leading-snug md:text-[70px]">
                                0{index + 1}.
                            </span>
                            <div>
                                <h3 className="whitespace-pre-wrap text-3xl font-medium leading-tight md:text-[50px]">
                                    {slide.title}
                                </h3>
                                <p className="mt-8 text-xl font-medium">{slide.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla__controls">
                <div className="embla__buttons">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>
            </div>
        </section>
    );
};

export default EmblaCarousel;
