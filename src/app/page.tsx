"use client";

import SplashScreen from "@/components/SplashScreen";
import { useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      {isLoading ? (
        <SplashScreen finishLoading={() => setIsLoading(false)} />
      ) : (
        <div>
          salam
        </div>
      )}
    </div>
  );
}
