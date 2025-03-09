import { Audiowide } from "next/font/google";
import "./globals.css";
import Navbar from "./comp/Navbar/Navbar";

const audiowideFont = Audiowide({
  variable: "--font-audiowide",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Miran Muhtadi",
  description: "Showcasing the works and projects of Miran Muhtadi.",
  keywords: "Miran Muhtadi, portfolio, web development, projects",
  author: "Miran Muhtadi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${audiowideFont.variable} min-h-screen`}>
        <div className="">
          <Navbar />
          <main>{children}</main>
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
