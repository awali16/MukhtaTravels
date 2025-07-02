import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "../../Components/Header";
import WhatsAppButton from "../../Components/WhatsAppButton";
import Footer from "@/Components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mukhta Travels",
  description: "Number One Travel Agency in Kashmir",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  console.log("RootLayout params:", params)
  const { locale } =  await params;
  if (!hasLocale(routing.locales, locale)) {
    console.log(`Locale ${locale} not found, redirecting to default locale.`);
    notFound();
  }
  
  return (
    <html lang={locale? locale: "ur"} suppressHydrationWarning>
      <head></head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <NextIntlClientProvider>
          <Header />
          {children}
          <Footer />
          <WhatsAppButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
