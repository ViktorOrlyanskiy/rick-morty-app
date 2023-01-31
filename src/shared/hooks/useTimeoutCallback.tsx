import { MutableRefObject, useEffect, useRef } from "react";

type TimerId = MutableRefObject<ReturnType<typeof setTimeout>>;

export const useTimeoutCallback = (callback: () => void) => {
    const timerRef = useRef() as TimerId;

    useEffect(() => {
        return () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            clearTimeout(timerRef?.current);
        };
    }, []);
    return () => {
        timerRef.current = setTimeout(() => {
            callback();
        }, 10);
    };
};


