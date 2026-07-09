import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Bantayan Island Travel Guide | Cebu, Philippines",
    template: "%s | Bantayan Island Travel Guide",
  },
  description:
    "Your complete guide to Bantayan Island, Cebu. Discover pristine beaches, island hopping, local food, hotels, and everything you need to plan the perfect trip to this hidden paradise in the Philippines.",
  keywords: [
    "Bantayan Island",
    "Bantayan Island travel guide",
    "Bantayan Island beaches",
    "Santa Fe Cebu",
    "Philippines island travel",
    "Cebu tourist spots",
    "Virgin Island Bantayan",
    "Kota Beach",
    "island hopping Bantayan",
    "Bantayan hotels",
    "Philippines travel",
  ],
  authors: [{ name: "Bantayan Island Travel Guide" }],
  creator: "Bantayan Island Travel Guide",
  publisher: "Bantayan Island Travel Guide",
  metadataBase: new URL("https://bantayan-island-guide.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bantayan-island-guide.vercel.app",
    title: "Bantayan Island Travel Guide | Cebu, Philippines",
    description:
      "Discover Bantayan Island — pristine beaches, crystal waters, and authentic Filipino island life. Your complete travel guide to one of Cebu's most beautiful island destinations.",
    siteName: "Bantayan Island Travel Guide",
    images: [
      {
        url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Bantayan Island Beach",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bantayan Island Travel Guide | Cebu, Philippines",
    description:
      "Discover Bantayan Island — pristine beaches, crystal waters, and authentic Filipino island life.",
    images: ["https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://bantayan-island-guide.vercel.app",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0f14" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange={false}>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <BackToTop />
          <Toaster
            position="bottom-center"
            toastOptions={{
              duration: 3000,
              style: {
                borderRadius: "12px",
                padding: "12px 16px",
                fontSize: "14px",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
