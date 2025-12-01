import { useEffect, useState } from "react";

export function useCountdown(initialSeconds: number = 60) {
    const [countdown, setCountdown] = useState(initialSeconds);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const reset = () => setCountdown(initialSeconds);

    return { countdown, reset };
}
