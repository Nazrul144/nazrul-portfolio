import { Geist, Geist_Mono, Merriweather  } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { icons } from "antd/es/image/PreviewGroup";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  subsets: ["latin"],  // Supports Latin characters
  weight: ["300", "400", "700", "900"], // Specify font weights
  variable: "--font-merriweather", // Custom CSS variable
  display: "swap",  
});

export const metadata = {
  title:{
    default: "Nazrul's Portfolio",
    template: "%s | Portfolio"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/cover/cover1.png"/>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${merriweather.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
