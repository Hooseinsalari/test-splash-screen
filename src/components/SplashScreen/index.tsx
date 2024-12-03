"use client";

import useCheckPWAStatus from "@/hooks";
import { useEffect, useState } from "react";
import PwaLoading from "../PwaLoading";

interface SplashScreenProps {
  finishLoading: () => void;
}

const timer = () => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
};

function SplashScreen({ finishLoading }: SplashScreenProps) {
  const isPWA = useCheckPWAStatus();
  console.log(isPWA);
  
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const screenLoader = async () => {
      await timer();
      setIsMounted(true);
      finishLoading();
    };

    screenLoader();
  }, []);

  if (isMounted || !isPWA) return null;

  return (
    <>
      {/* <style>
        {isPWA &&
          `
          body {
            overflow: hidden !important;
            }
            `}
      </style> */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          width: "100%",
          height: "100%",
          background:
            "conic-gradient(from 125deg at 50% 48.93%, #FFF 70.80532908439636deg, #F4E7EB 184.21119689941406deg, #FFFDF6 255.83664894104004deg, #F4FAFF 347.24794149398804deg)",
          zIndex: 99999,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="d-flex align-center justify-center flex-column gp-5 gp-lg-16 pb-8"
          style={{
            position: "absolute",
            bottom: "10px",
          }}
        >
          <PwaLoading />
          <div
            style={{
              fontWeight: 300,
              color: "#343A3F",
              textAlign: "center",
              fontSize: "16px",
            }}
          >
            Powered by OCTAVHOMES
          </div>
        </div>
      </div>
    </>
  );
}

export default SplashScreen;
