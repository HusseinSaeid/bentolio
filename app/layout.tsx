import type { Metadata } from "next";
import { Geist, Geist_Mono, Kufam, Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import ThemeProvider from "../theme/ThemeProvider";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const kufam = Kufam({ variable: "--font-Kufam", subsets: ["latin"] });
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://husseinsaeid.vercel.app"),
  title: "Hussein Saeid — Front-End Developer",
  description:
    "Portfolio of Hussein Saeid, a Front-End Developer skilled in React, Next.js, and modern UI/UX design.",
  openGraph: {
    title: "Hussein Saeid — Front-End Developer",
    description:
      "Explore my modern, responsive web portfolio built with Next.js and Tailwind CSS.",
    url: "https://husseinsaeid.vercel.app",
    images: ["/personal.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hussein Saeid — Front-End Developer",
    description:
      "Modern portfolio showcasing clean code, responsive design, and creative web experiences.",
    images: ["/personal.jpg"],
  },
  robots: "index, follow",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* fallback manual meta description — ensures it always exists */}
        <meta
          name="description"
          content="Portfolio of Hussein Saeid, a Front-End Developer skilled in React, Next.js, and modern UI/UX design."
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${kufam.variable} ${poppins.variable}
        antialiased max-h-full w-full flex flex-col gap-6 p-6 lg:px-16  font-kufam`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
