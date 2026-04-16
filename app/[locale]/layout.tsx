import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const messages = await getMessages();

 return (
  <NextIntlClientProvider locale={locale} messages={messages}>
    {/* w-full ekleyerek kapsayıcının tüm ekranı kapladığından emin oluyoruz */}
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main className="grow w-full">
        {children}
      </main>
      <Footer locale={locale} />
    </div>
  </NextIntlClientProvider>
);
}