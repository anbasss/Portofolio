import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portofolio Anbas",
  description: "Creative Portofolio form Anbas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
          {children}
        </div>
      </body>
    </html>
  );
}
