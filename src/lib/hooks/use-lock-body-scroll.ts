import { useLayoutEffect } from 'react';

const useLockBodyScroll = (shouldLock: boolean) => {
    useLayoutEffect(() => {
        const originalOverflow = document.body.style.overflow;

        if (shouldLock) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = originalOverflow || '';
        }

        return () => {
            document.body.style.overflow = originalOverflow || '';
        };
    }, [shouldLock]);
};

export default useLockBodyScroll;
