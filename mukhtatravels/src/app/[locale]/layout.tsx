import { NextIntlClientProvider, } from "next-intl";
// import { notFound } from "next/navigation";
import "../globals.css";
import Header from "../../Components/Header";
import WhatsAppButton from "../../Components/WhatsAppButton";
import Footer from "@/Components/Footer";


export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const isRTL = ["ar", "fa", "ur", "he"].includes(locale);
  const dir = isRTL ? "rtl" : "ltr";
  return (
    <NextIntlClientProvider>
      <div lang={locale} dir={dir}>
        <Header dir={dir} />
        {children}
        <Footer />
        <WhatsAppButton />
      </div>
    </NextIntlClientProvider>
  );
}
