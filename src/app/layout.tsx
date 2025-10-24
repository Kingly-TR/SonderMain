import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Sonder | Online AI services that feel like magic",
  description: "From smart playlists to university matching, explore what we build on the web. AI-native services that are fast, privacy-minded, and delightful.",
  keywords: ["AI", "services", "automation", "music", "education", "technology"],
  authors: [{ name: "Sonder" }],
  creator: "Sonder",
  publisher: "Sonder",
  openGraph: {
    title: "Sonder | Online AI services that feel like magic",
    description: "From smart playlists to university matching, explore what we build on the web.",
    url: "https://sonder.com",
    siteName: "Sonder",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sonder | Online AI services that feel like magic",
    description: "From smart playlists to university matching, explore what we build on the web.",
    creator: "@sonder",
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
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
