import { useState, useEffect, useRef, useCallback } from "react";

export interface IUseTimer {
  seconds: number;
  onExpire?: () => void;
}

export default function useTimer({ seconds: expiry, onExpire }: IUseTimer) {
  const [seconds, setSeconds] = useState(expiry);
  const [isRunning, setIsRunning] = useState(false);
  // eslint-disable-next-line no-undef
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const clearIntervalRef = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const handleExpire = useCallback(() => {
    clearIntervalRef();
    setIsRunning(false);
    if (onExpire) {
      onExpire();
    }
  }, [clearIntervalRef, onExpire]);

  const restart = useCallback((newExpirySeconds: number) => {
    setIsRunning((prevIsRunning) => {
      return !intervalRef.current || !prevIsRunning;
    });
    setSeconds(newExpirySeconds);
  }, []);

  const start = useCallback(() => {
    setIsRunning(true);
  }, []);

  const pause = useCallback(() => {
    setIsRunning(false);
  }, []);

  useEffect(() => {
    if (!intervalRef.current && isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds((prevState) => {
          const nextState = prevState - 1;
          if (nextState <= 0) {
            handleExpire();
            return 0;
          }
          return nextState;
        });
      }, 1000);
    }
    return () => {
      clearIntervalRef();
    };
  }, [isRunning, handleExpire, clearIntervalRef]);

  return {
    start,
    seconds,
    pause,
    restart,
    isRunning,
  };
}
