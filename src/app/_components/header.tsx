'use client';
import React, { useEffect } from 'react';
import MenuSvg from '@/assets/icons/menu.svg';
import CloseSvg from '@/assets/icons/close.svg';
import { cn } from '@/lib/helpers/cn';

const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    useEffect(() => {
        if (window.innerWidth > 768) {
            setIsOpen(true);
        }
    }, []);

    return (
        <div className="relative z-20 bg-white md:bg-transparent">
            <div className="flex h-16 w-full items-center justify-end shadow md:hidden">
                <div className="container flex justify-end px-5">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <CloseSvg className="size-6" /> : <MenuSvg className="size-6" />}
                    </button>
                </div>
            </div>
            <nav
                className={cn(
                    `container absolute mx-auto hidden flex-col gap-6 bg-white p-5 pt-0 shadow-md md:static md:flex md:flex-row md:bg-transparent md:px-0 md:py-10 md:shadow-none`,
                    {
                        hidden: !isOpen,
                        flex: isOpen,
                    },
                )}
            >
                <a
                    href="#"
                    className="w-full py-0 text-lg font-medium duration-200 md:w-auto md:p-2.5 md:text-xl md:hover:-translate-y-2"
                >
                    Главная
                </a>
                <a
                    href="#"
                    className="w-full py-0 text-lg font-medium duration-200 md:w-auto md:p-2.5 md:text-xl md:hover:-translate-y-2"
                >
                    О нас
                </a>
                <a
                    href="#"
                    className="w-full py-0 text-lg font-medium duration-200 md:w-auto md:p-2.5 md:text-xl md:hover:-translate-y-2"
                >
                    Податься сейчас
                </a>
                <a
                    href="#"
                    className="w-full py-0 text-lg font-medium duration-200 md:w-auto md:p-2.5 md:text-xl md:hover:-translate-y-2"
                >
                    Задать вопрос
                </a>
            </nav>

            {isOpen && (
                <nav className="container absolute mx-auto flex flex-col gap-6 bg-white p-5 pt-0 shadow-md md:hidden">
                    <a href="#" className="w-full py-0 text-lg font-medium">
                        Главная
                    </a>
                    <a href="#" className="w-full py-0 text-lg font-medium">
                        О нас
                    </a>
                    <a href="#" className="w-full py-0 text-lg font-medium">
                        Податься сейчас
                    </a>
                    <a href="#" className="w-full py-0 text-lg font-medium">
                        Задать вопрос
                    </a>
                </nav>
            )}
        </div>
    );
};

export default Header;
