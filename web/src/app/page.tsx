import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { SiteHeader } from "@/components/SiteHeader";

const phone = {
  display: "0914497272",
  href: "tel:+218914497272",
} as const;

const whatsapp = {
  display: "واتساب",
  href: "https://wa.me/218914497272",
} as const;

const brands = [
  { name: "ALB", note: "مواد صحية" },
  { name: "GROHE", note: "خلاطات وأنظمة مياه" },
  { name: "REMER", note: "إكسسوارات وحنفيات" },
  { name: "ARCO", note: "صمامات وتحكم" },
  { name: "Pedrollo", note: "مضخات مياه" },
] as const;

const contactEmail = "info@majmueatalbidaya.com.ly";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="top" className="overflow-x-hidden">
        <section className="hero-light relative isolate min-h-[100svh] overflow-hidden">
          <div className="hero-glow pointer-events-none absolute inset-0" />
          <div className="hero-grid pointer-events-none absolute inset-0 opacity-[0.28] sm:opacity-[0.35]" />
          <div
            aria-hidden
            className="animate-float pointer-events-none absolute -start-16 top-12 h-52 w-52 rounded-full bg-[#2b5da3]/10 blur-3xl sm:-start-24 sm:top-16 sm:h-72 sm:w-72"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -end-16 bottom-6 h-56 w-56 rounded-full bg-[#4a84c4]/14 blur-3xl sm:-end-20 sm:bottom-10 sm:h-80 sm:w-80"
          />

          <div className="relative mx-auto flex min-h-[100svh] max-w-5xl flex-col items-center justify-center px-4 pb-14 pt-24 text-center sm:px-8 sm:pb-16 sm:pt-24">
            <div className="animate-rise relative mb-6 sm:mb-10">
              <div
                aria-hidden
                className="absolute inset-0 scale-125 rounded-full bg-[radial-gradient(circle,rgba(53,107,169,0.16),transparent_68%)] blur-2xl"
              />
              <Image
                src="/logo-icon.png"
                alt="شعار مجموعة البداية"
                width={320}
                height={285}
                className="animate-logo relative mx-auto h-auto w-[7.25rem] drop-shadow-[0_18px_40px_rgba(26,63,117,0.18)] sm:w-[12rem] lg:w-[13.5rem]"
                priority
              />
            </div>

            <p className="animate-rise-delay-1 font-latin text-[0.65rem] font-semibold tracking-[0.28em] text-brand uppercase sm:text-xs sm:tracking-[0.34em]">
              ALBIDAYA COMPANY
            </p>

            <h1 className="animate-rise-delay-1 mt-2.5 max-w-[18ch] font-display text-[2rem] leading-[1.15] font-extrabold tracking-tight text-brand-deep sm:mt-3 sm:max-w-none sm:text-5xl lg:text-[3.4rem]">
              مجموعة البداية
            </h1>

            <p className="animate-rise-delay-2 mx-auto mt-4 max-w-md text-[0.95rem] leading-7 text-muted sm:mt-5 sm:max-w-xl sm:text-lg sm:leading-8">
              لاستيراد المواد الصحية والإكسسوارات — حلول موثوقة من أرقى الماركات
              العالمية للسباكة والمياه.
            </p>

            <div className="animate-rise-delay-3 mt-7 flex w-full max-w-sm flex-col gap-2.5 sm:mt-9 sm:max-w-none sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-3">
              <a
                href={phone.href}
                className="inline-flex w-full items-center justify-center rounded-md bg-brand px-5 py-3.5 text-base font-bold text-white transition duration-300 hover:bg-brand-deep sm:w-auto sm:min-w-[10.5rem] sm:px-6 sm:hover:-translate-y-0.5"
              >
                {phone.display}
              </a>
              <a
                href={whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-md bg-brand-soft px-5 py-3.5 text-base font-bold text-brand-deep ring-1 ring-brand/20 transition duration-300 hover:bg-white hover:ring-brand/40 sm:w-auto sm:min-w-[10.5rem] sm:px-6 sm:hover:-translate-y-0.5"
              >
                واتساب
              </a>
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center rounded-md bg-white/80 px-5 py-3.5 text-base font-semibold text-brand-deep ring-1 ring-brand/20 transition duration-300 hover:bg-white hover:ring-brand/35 sm:w-auto sm:min-w-[10.5rem] sm:px-6 sm:hover:-translate-y-0.5"
              >
                راسلنا الآن
              </a>
            </div>
          </div>
        </section>

        <section id="brands" className="section-wave scroll-mt-20 py-14 sm:scroll-mt-24 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-8">
            <Reveal className="max-w-2xl">
              <h2 className="font-display text-[1.7rem] font-extrabold text-ink sm:text-4xl">
                ماركات نعمل بها
              </h2>
              <p className="mt-3 text-base leading-7 text-muted sm:mt-4 sm:text-lg sm:leading-8">
                نوفر منتجات أصلية من علامات عالمية موثوقة في المواد الصحية
                والمضخات والإكسسوارات.
              </p>
            </Reveal>

            <ul className="mt-10 grid grid-cols-2 gap-x-5 gap-y-8 border-t border-line pt-8 sm:mt-14 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-10 sm:pt-12 lg:grid-cols-5">
              {brands.map((brand, index) => (
                <Reveal key={brand.name} delay={index * 50}>
                  <li className="brand-tile group">
                    <p className="font-latin text-xl font-bold tracking-wide text-brand-deep transition duration-300 group-hover:text-brand sm:text-[1.7rem]">
                      {brand.name}
                    </p>
                    <p className="mt-1.5 text-xs leading-5 text-muted sm:mt-2 sm:text-sm sm:leading-normal">
                      {brand.note}
                    </p>
                    <span
                      aria-hidden
                      className="mt-3 block h-px w-8 bg-brand/30 transition-all duration-500 group-hover:w-14 group-hover:bg-brand sm:mt-4 sm:w-10 sm:group-hover:w-16"
                    />
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="about"
          className="scroll-mt-20 border-y border-line bg-surface py-14 sm:scroll-mt-24 sm:py-28"
        >
          <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:gap-12 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
            <Reveal>
              <h2 className="font-display text-[1.7rem] font-extrabold text-ink sm:text-4xl">
                جودة تبدأ من المصدر
              </h2>
              <p className="mt-4 text-base leading-8 text-muted sm:mt-5 sm:text-lg sm:leading-9">
                مجموعة البداية متخصصة في استيراد المواد الصحية والإكسسوارات
                للمشاريع السكنية والتجارية. نحرص على اختيار منتجات متينة
                وتصاميم عملية تلبي احتياجات السوق الليبي بمعايير عالمية.
              </p>
              <ul className="mt-6 space-y-3 text-[0.95rem] text-ink/90 sm:mt-8 sm:text-base">
                {[
                  "توريد مواد صحية وإكسسوارات أصلية",
                  "دعم فني واستشارات لاختيار المنتجات المناسبة",
                  "خدمة سريعة عبر الاتصال والبريد الإلكتروني",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={120}>
              <div className="relative overflow-hidden bg-gradient-to-br from-brand-deep via-brand to-brand-mid px-5 py-8 text-white sm:px-10 sm:py-14">
                <div className="water-lines absolute inset-0 opacity-40" />
                <div className="relative">
                  <p className="font-latin text-[0.65rem] font-semibold tracking-[0.2em] text-white/65 uppercase sm:text-xs sm:tracking-[0.28em]">
                    Plumbing · Sanitary · Accessories
                  </p>
                  <p className="mt-4 font-display text-xl leading-9 font-bold sm:mt-5 sm:text-3xl sm:leading-10">
                    للسباكة والمواد الصحية والإكسسوارات
                  </p>
                  <p className="mt-3 max-w-sm text-sm leading-7 text-white/80 sm:mt-4 sm:text-base sm:leading-8">
                    شريكك الموثوق لتجهيز الحمامات والمطابخ وأنظمة المياه بماركات
                    عالمية.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 bg-brand-mist py-14 sm:scroll-mt-24 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-8">
            <Reveal className="max-w-2xl">
              <h2 className="font-display text-[1.7rem] font-extrabold text-ink sm:text-4xl">
                تواصل معنا
              </h2>
              <p className="mt-3 text-base leading-7 text-muted sm:mt-4 sm:text-lg sm:leading-8">
                أرسل استفسارك عبر النموذج، أو تواصل مباشرة عبر الهاتف أو البريد.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-10 sm:mt-12 sm:gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
              <Reveal className="space-y-6 sm:space-y-8">
                <div className="space-y-4 sm:space-y-5">
                  <a
                    href={phone.href}
                    className="group flex items-center justify-between gap-3 border-b border-line pb-3.5 transition duration-300 hover:border-brand sm:gap-6 sm:pb-4"
                  >
                    <span className="font-latin text-xl font-semibold tracking-wide text-brand-deep sm:text-[1.85rem]">
                      {phone.display}
                    </span>
                    <span className="shrink-0 text-sm font-semibold text-brand transition duration-300 group-hover:-translate-x-1">
                      اتصال ←
                    </span>
                  </a>

                  <a
                    href={whatsapp.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-3 border-b border-line pb-3.5 transition duration-300 hover:border-brand sm:gap-6 sm:pb-4"
                  >
                    <span className="text-xl font-semibold text-brand-deep sm:text-[1.85rem]">
                      واتساب
                    </span>
                    <span className="shrink-0 text-sm font-semibold text-brand transition duration-300 group-hover:-translate-x-1">
                      محادثة ←
                    </span>
                  </a>
                </div>

                <a
                  href={`mailto:${contactEmail}`}
                  className="group flex items-start justify-between gap-3 border-b border-line pb-3.5 transition duration-300 hover:border-brand sm:items-center sm:gap-6 sm:pb-4"
                >
                  <span className="font-latin text-sm font-semibold tracking-wide break-all text-brand-deep sm:text-lg">
                    {contactEmail}
                  </span>
                  <span className="shrink-0 pt-0.5 text-sm font-semibold text-brand transition duration-300 group-hover:-translate-x-1 sm:pt-0">
                    إيميل ←
                  </span>
                </a>

                <p className="text-sm leading-7 text-muted">
                  نسعد بخدمتكم للاستفسار عن التوفر والأسعار والتوريد للمشاريع
                  والتجزئة.
                </p>
              </Reveal>

              <Reveal delay={100}>
                <div className="border-t border-line pt-8 lg:border-t-0 lg:border-s lg:pt-0 lg:ps-12">
                  <h3 className="font-display text-lg font-bold text-ink sm:text-xl">
                    أرسل رسالة
                  </h3>
                  <p className="mt-2 mb-6 text-sm leading-7 text-muted sm:mb-7">
                    املأ النموذج وسنصلك عبر البريد الإلكتروني.
                  </p>
                  <ContactForm />
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-brand-deep text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:gap-8 sm:px-8 sm:py-12 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-icon.png"
              alt=""
              width={40}
              height={36}
              className="h-8 w-auto brightness-0 invert opacity-90 sm:h-9"
            />
            <div className="min-w-0">
              <p className="font-display font-bold">مجموعة البداية</p>
              <p className="mt-0.5 text-sm text-white/65">
                استيراد المواد الصحية والإكسسوارات
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-sm text-white/80 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
            <a href={phone.href} className="font-latin transition hover:text-white">
              {phone.display}
            </a>
            <a
              href={whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              واتساب
            </a>
            <a
              href={`mailto:${contactEmail}`}
              className="font-latin break-all transition hover:text-white"
            >
              {contactEmail}
            </a>
          </div>
          <p className="text-xs text-white/45">
            © {new Date().getFullYear()} مجموعة البداية
          </p>
        </div>
      </footer>
    </>
  );
}
