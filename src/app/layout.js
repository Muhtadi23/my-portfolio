import { Niramit } from "next/font/google";
import "./globals.css";
import Navbar from "./comp/Navbar/Navbar";

const niramitSans = Niramit({
  variable: "--font-niramit",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
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
      <body className={`${niramitSans.variable} min-h-screen`}>
        <div className="max-w-[1440px] mx-auto">
          <Navbar />
          <main>{children}</main>
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
