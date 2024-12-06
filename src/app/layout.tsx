import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
        <meta content="Octav" name="author" />
        <meta content="website" property="og:type" />
        <meta content="Octav" property="og:site_name" />
        <meta content="Octav" name="apple-mobile-web-app-title" />
        <meta content="Octav" name="application-name" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="manifest" href="/manifest.json" />

        <link rel="preload" href="/fonts/Gilroy/Gilroy-Light.ttf" as="font" />
        <link rel="preload" href="/fonts/Gilroy/Gilroy-Regular.ttf" as="font" />
        <link rel="preload" href="/fonts/Gilroy/Gilroy-Medium.ttf" as="font" />
        <link rel="preload" href="/fonts/Gilroy/Gilroy-Bold.ttf" as="font" />

        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>{children}</body>
    </html>
  );
}
