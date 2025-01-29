import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import  Navbar  from "@/app/components/Navbar";
import {
  ThemeProvider
} from "@/components/theme-provider";
import Footer from '@/app/layouts/Footer';

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

const inter = Inter({
  weight: '400',
  variable: "--font-inter",
  subsets: ["latin"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Porfolio",
  description: "personnal porfolio for showcase projets",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${inter.variable} ${inter.variable} 
        min-h-screen 
        bg-white dark:bg-[#080808] 
        text-gray-900 dark:text-gray-100
        transition-all duration-300 ease-in-out
        antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
