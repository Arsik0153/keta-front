import React from 'react';

const Header = () => {
    return (
        <nav className="container mx-auto flex gap-6 py-10">
            <a href="#" className="p-2.5 text-xl font-medium">
                Главная
            </a>
            <a href="#" className="p-2.5 text-xl font-medium">
                О нас
            </a>
            <a href="#" className="p-2.5 text-xl font-medium">
                Податься сейчас
            </a>
            <a href="#" className="p-2.5 text-xl font-medium">
                Задать вопрос
            </a>
        </nav>
    );
};

export default Header;
