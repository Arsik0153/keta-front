import useLockBodyScroll from '@/lib/hooks/use-lock-body-scroll';
import React from 'react';
import Webcam from 'react-webcam';

const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: 'environment',
};

const Modal = ({
    open,
    onClose,
    onScreenshot,
}: {
    open: boolean;
    onClose: () => void;
    onScreenshot: (val: File) => void;
}) => {
    useLockBodyScroll(open);
    const webcamRef = React.useRef(null);
    const capture = React.useCallback(() => {
        // @ts-expect-error types are not correct
        const imageSrc = webcamRef?.current?.getScreenshot();
        fetch(imageSrc)
            .then((res) => res.blob())
            .then((blob) => {
                const file = new File([blob], 'file.png', { type: 'image/png' });
                onScreenshot(file);
                onClose();
            });
    }, [webcamRef, onScreenshot, onClose]);

    if (!open) return null;
    return (
        <div className="fixed left-0 top-0 z-30 flex h-screen w-screen flex-col items-center justify-center bg-white py-10">
            <h1 className="mb-10 text-xl font-semibold">Сканирование документа</h1>

            <Webcam
                audio={false}
                height={720}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={1280}
                videoConstraints={videoConstraints}
                mirrored
                style={{ maxWidth: '500px', aspectRatio: '16/9', maxHeight: '500px' }}
            />

            <button
                className="mt-10 flex size-14 items-center justify-center rounded-full bg-[#55BF40] text-white"
                onClick={() => capture()}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-8"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                    />
                </svg>
            </button>

            <button className="absolute right-5 top-5" onClick={onClose}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-10"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                </svg>
            </button>
        </div>
    );
};

export default Modal;
