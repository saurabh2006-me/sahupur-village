import type { Metadata, Viewport } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-merriweather",
  weight: ["300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Sahupur Village | साहूपुर — हमारी मिट्टी, हमारी पहचान",
    template: "%s | Sahupur Village",
  },
  description: "Discover Sahupur, a beautiful village in Ratanpura Block, Mau District, Uttar Pradesh. Explore village life, culture, education, facilities, and local information.",
  keywords: [
    "Sahupur",
    "साहूपुर",
    "Ratanpura",
    "Mau",
    "Uttar Pradesh",
    "village",
    "rural India",
    "community",
    "tourism",
    "census",
  ],
  authors: [{ name: "Sahupur Village Community" }],
  creator: "Sahupur Village Community",
  publisher: "Sahupur Village",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://sahupur.in"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sahupur.in",
    siteName: "Sahupur Village",
    title: "Sahupur Village | साहूपुर — हमारी मिट्टी, हमारी पहचान",
    description: "Discover Sahupur, a beautiful village in Ratanpura Block, Mau District, Uttar Pradesh. Explore village life, culture, education, facilities, and local information.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sahupur Village - Rural Uttar Pradesh Landscape",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahupur Village | साहूपुर",
    description: "Discover Sahupur, a beautiful village in Ratanpura Block, Mau District, Uttar Pradesh.",
    images: ["/images/og-image.jpg"],
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
  verification: {
    google: "google-site-verification-code",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fefdfb" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0a09" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className="antialiased bg-white text-sahupur-900 dark:bg-sahupur-950 dark:text-sahupur-100">
        {children}
      </body>
    </html>
  );
}