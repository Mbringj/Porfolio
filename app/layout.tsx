import type { Metadata } from "next";
import "./globals.css";
import  Navbar  from "@/app/components/Navbar";
import {
  ThemeProvider
} from "@/components/theme-provider";
import Footer from '@/app/layouts/Footer';

import { inter } from "@/app/font";


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
      <body className={`${inter.className} ${inter.className} 
        min-h-screen 
        bg-white dark:bg-[#080808] 
        text-gray-900 dark:text-gray-100
        transition-all duration-300 ease-in-out
        antialiased bg-gradient-to-r from-white via-blue-50 to-white dark:bg-gradient-to-r dark:from-black dark:via-[#002] dark:to-black`}
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
