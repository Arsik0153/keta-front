'use client';
import React from 'react';
import Modal from './modal';

const Form = () => {
    const [formData, setFormData] = React.useState<{
        email: string;
        phone: string;
        photo: string;
        passport: File | null;
    }>({
        email: '',
        phone: '',
        photo: '',
        passport: null,
    });
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [showError, setShowError] = React.useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // const formData = new FormData(e.currentTarget);
        // const data = Object.fromEntries(formData.entries());
        setShowError(true);
        console.log(formData);
    };

    const handlePassportChange = (value: File) => {
        console.log(value);
        setFormData({ ...formData, passport: value });
    };

    return (
        <div className="my-20">
            <Modal
                open={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onScreenshot={handlePassportChange}
            />
            <form
                onSubmit={handleSubmit}
                className="mx-auto grid w-full max-w-[1000px] grid-cols-1 items-start gap-10 rounded-[30px] bg-[#EEEEEE] px-5 py-10 md:grid-cols-2 md:px-24 md:py-20"
            >
                <div>
                    <label htmlFor="email" className="block text-xl font-bold text-[#333333]">
                        Адрес электронной почты*
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="mt-2 w-full rounded-md border p-2"
                        placeholder="Адрес электронной почты"
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        value={formData.email}
                    />
                    {showError && formData.email === '' && (
                        <div className="mt-2 text-xs font-semibold text-red-500">
                            Поле обязательно для заполнения
                        </div>
                    )}
                </div>
                <div>
                    <label htmlFor="phone" className="block text-xl font-bold text-[#333333]">
                        Номер телефона*
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="mt-2 w-full rounded-md border p-2"
                        placeholder="Номер телефона"
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        value={formData.phone}
                    />
                    {showError && formData.phone === '' && (
                        <div className="mt-2 text-xs font-semibold text-red-500">
                            Поле обязательно для заполнения
                        </div>
                    )}
                </div>
                <div>
                    <label htmlFor="photo" className="block text-xl font-bold text-[#333333]">
                        Загрузите своё фото для визы
                    </label>
                    <div className="py-1 text-xs leading-tight">
                        Убедитесь, что ваше фото соответствует требованиям.{' '}
                        <a href="#" className="text-[#1D1DEE]">
                            Ознакомьтесь с примером здесь.
                        </a>
                    </div>
                    <input
                        type="file"
                        id="photo"
                        name="photo"
                        className="mt-2 w-full rounded-md border bg-white p-2"
                        placeholder="sdf"
                        onChange={(e) => setFormData({ ...formData, photo: e.target.value })}
                        value={formData.photo}
                    />
                    {showError && formData.photo === '' && (
                        <div className="mt-2 text-xs font-semibold text-red-500">
                            Поле обязательно для заполнения
                        </div>
                    )}
                </div>
                <div>
                    <label htmlFor="photo" className="block text-xl font-bold text-[#333333]">
                        Загрузите фотографию паспорта
                    </label>
                    <div className="py-1 text-xs leading-tight">
                        Фотография паспорта должна быть чёткой, без бликов и с полностью видимым
                        документом.{' '}
                        <a href="#" className="text-[#1D1DEE]">
                            Образец фотографии здесь.
                        </a>
                    </div>
                    {formData.passport && (
                        <div className="mt-2 flex w-full items-center justify-between gap-2 rounded-md border bg-white p-2">
                            <span>{formData.passport.name}</span>
                            <button
                                type="button"
                                className="rounded-lg px-2 py-px text-[#081c46]"
                                onClick={() => setFormData({ ...formData, passport: null })}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-7"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                    />
                                </svg>
                            </button>
                        </div>
                    )}
                    {!formData.passport && (
                        <div className="mt-2 flex flex-col items-center gap-2 md:flex-row">
                            <button
                                type="button"
                                className="w-full max-w-56 rounded-lg bg-[#55BF40] p-2 text-lg text-white md:max-w-fit"
                                onClick={() => setIsModalOpen(true)}
                            >
                                Отсканировать
                            </button>
                            или
                            <div>
                                <input
                                    type="file"
                                    id="passport"
                                    name="passport"
                                    className="w-full rounded-md border bg-white p-2"
                                    accept="image/*"
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            passport: e.target.files?.[0] || null,
                                        })
                                    }
                                />
                            </div>
                        </div>
                    )}
                    {showError && !formData.passport && (
                        <div className="mt-2 text-xs font-semibold text-red-500">
                            Поле обязательно для заполнения
                        </div>
                    )}
                </div>
                <button
                    type="submit"
                    className="ml-auto block rounded-lg bg-[#55BF40] p-2 text-lg text-white outline-none ring-[#55BF40] ring-offset-2 focus:ring-1 md:col-span-2 md:mt-5"
                >
                    Продолжить
                </button>
            </form>
        </div>
    );
};

export default Form;
