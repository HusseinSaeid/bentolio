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
  weight: ["300"], // Light
});

export const metadata: Metadata = {
  title: "Next App with Top Navbar",
  description: "RootLayout with Navbar above a 12-column grid",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${kufam.variable}
         ${poppins.variable} antialiased max-h-screen w-full flex flex-col gap-6 p-12  font-kufam`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
