import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Muhammed Batuhan Bayram — Portfolio",
    template: "%s · Muhammed Batuhan",
  },
  description:
    "Mühendislik odaklı modern yazılım projeleri: JavaScript, Java ve Python ile çalışmalarım, case study'ler ve iletişim.",
  openGraph: {
    title: "Muhammed Batuhan Bayram — Portfolio",
    description:
      "Mühendislik odaklı modern yazılım projeleri: JavaScript, Java ve Python ile çalışmalarım, case study'ler ve iletişim.",
    url: "https://example.com",
    siteName: "Muhammed Batuhan",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammed Batuhan Bayram — Portfolio",
    description:
      "Mühendislik odaklı modern yazılım projeleri ve case study'ler.",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="relative min-h-dvh">
          <div
            aria-hidden
            className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(1000px_600px_at_50%_-100px,rgba(120,119,198,.25),transparent_60%),radial-gradient(600px_400px_at_10%_10%,rgba(45,212,191,.25),transparent_60%),radial-gradient(800px_500px_at_90%_20%,rgba(99,102,241,.2),transparent_60%)]"
          />
          <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 flex items-center justify-center">
            <svg
              className="h-[26rem] w-[26rem] opacity-[0.06] text-red-500 sm:h-[34rem] sm:w-[34rem] dark:opacity-[0.05]"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden="true"
            >
              <polygon
                points="50,92 6,8 94,8"
                fill="currentColor"
                stroke="none"
                shapeRendering="crispEdges"
              />
            </svg>
          </div>
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
