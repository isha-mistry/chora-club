import { Poppins } from "next/font/google";
import localFonts from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const quanty = localFonts({
  src: [
    {
      path: "../fonts/quanty.ttf",
    },
  ],
  variable: "--font-quanty",
});

export const metadata = {
  title: "Chora Club",
  description: "Discover. Learn. Engage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${quanty.variable} ${poppins.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
