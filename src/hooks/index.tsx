import { useEffect, useState } from "react";

const useCheckPWAStatus = (): boolean => {
  const [isPWA, setIsPWA] = useState(false);

  useEffect(() => {
    // Detect if the app is running as a PWA
    const checkIfPWA = (): boolean => {
      // iOS standalone mode
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const isPWAiOS = (window.navigator as any).standalone === true;

      // Modern browsers (Android, Windows, etc.)
      const isPWAModern = window.matchMedia(
        "(display-mode: standalone)"
      ).matches;

      return isPWAiOS || isPWAModern;
    };

    setIsPWA(checkIfPWA());
  }, []);

  return isPWA;
};

export default useCheckPWAStatus;
