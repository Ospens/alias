import { useState, useEffect, useRef, useCallback } from "react";

export interface IUseTimer {
  seconds: number;
  onExpire?: () => void;
}

export default function useTimer({ seconds: expiry, onExpire }: IUseTimer) {
  const [seconds, setSeconds] = useState(expiry);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<any>();

  const clearIntervalRef = () => {
    if (intervalRef.current) {
      setIsRunning(false);
      clearInterval(intervalRef.current);
      intervalRef.current = undefined;
    }
  };

  const handleExpire = useCallback(() => {
    clearIntervalRef();
    if (onExpire) {
      onExpire();
    }
  }, [onExpire]);

  const restart = useCallback(
    (newExpirySeconds: number) => {
      if (!intervalRef.current || !isRunning) {
        setIsRunning(true);
      }
      setSeconds(newExpirySeconds);
    },
    [isRunning]
  );

  const start = useCallback(() => {
    setIsRunning(true);
  }, []);

  useEffect(() => {
    if (!intervalRef.current && isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds((prevState) => {
          const nextState = prevState - 1;
          if (nextState <= 0) {
            handleExpire();
          }
          return prevState - 1;
        });
      }, 1000);
    }
  }, [isRunning, handleExpire]);

  useEffect(() => {
    return clearIntervalRef;
  }, []);

  return {
    start,
    seconds,
    restart,
    isRunning,
  };
}
