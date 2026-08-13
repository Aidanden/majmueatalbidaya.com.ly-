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

const products = [
  {
    src: "/images/product-faucet.jpg",
    alt: "خلاط مياه كروم فاخر",
    title: "خلاطات صحية",
    note: "تصاميم عملية ولمسة نهائية عالية الجودة",
  },
  {
    src: "/images/product-shower.jpg",
    alt: "دش مطري وإكسسوارات حمام",
    title: "أنظمة الدش",
    note: "حلول استحمام مريحة للمنازل والمشاريع",
  },
  {
    src: "/images/product-vanity.jpg",
    alt: "مغسلة وحنفيات عصرية",
    title: "مغاسل وإكسسوارات",
    note: "تجهيزات أنيقة للحمامات العصرية",
  },
  {
    src: "/images/product-fittings.jpg",
    alt: "صمامات وتجهيزات سباكة",
    title: "صمامات وتجهيزات",
    note: "مكونات موثوقة لأنظمة المياه والسباكة",
  },
] as const;

const contactEmail = "info@majmueatalbidaya.com.ly";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="top" className="overflow-x-hidden">
        {/* Hero: full-bleed sanitary atmosphere */}
        <section className="relative isolate min-h-[100svh] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-bathroom.jpg"
              alt="مواد صحية فاخرة — حمام عصري بتشطيبات كروم"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[center_35%]"
            />
          </div>
          <div className="hero-scrim absolute inset-0" />
          <div
            aria-hidden
            className="pointer-events-none absolute -end-24 top-24 h-64 w-64 rounded-full border border-white/20 sm:h-80 sm:w-80"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -start-16 bottom-20 h-52 w-52 rounded-full bg-brand/20 blur-3xl sm:h-72 sm:w-72"
          />

          <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-14 pt-28 sm:justify-center sm:px-8 sm:pb-20 lg:pt-24">
            <div className="max-w-xl text-center sm:text-start">
              <div className="mb-5 flex justify-center sm:mb-6 sm:justify-start">
                <Image
                  src="/logo-icon.png"
                  alt=""
                  width={120}
                  height={107}
                  className="h-auto w-16 brightness-0 invert drop-shadow-md sm:w-20"
                  priority
                />
              </div>
              <p className="font-latin text-[0.65rem] font-semibold tracking-[0.28em] text-white/75 uppercase sm:text-xs sm:tracking-[0.34em]">
                ALBIDAYA COMPANY
              </p>
              <h1 className="mt-2.5 font-display text-[2.15rem] leading-[1.12] font-extrabold tracking-tight text-white sm:mt-3 sm:text-5xl lg:text-[3.45rem]">
                مجموعة البداية
              </h1>
              <p className="mx-auto mt-4 max-w-md text-[0.95rem] leading-7 text-white/88 sm:mx-0 sm:mt-5 sm:max-w-lg sm:text-lg sm:leading-8">
                لاستيراد المواد الصحية والإكسسوارات — جودة عالمية لمشاريعكم
                ومنازلهم.
              </p>
              <div className="mt-7 flex w-full max-w-sm flex-col gap-2.5 sm:mt-9 sm:max-w-none sm:w-auto sm:flex-row sm:gap-3">
                <a
                  href={phone.href}
                  className="inline-flex w-full items-center justify-center rounded-md bg-white px-5 py-3.5 text-base font-bold text-brand-deep transition duration-300 hover:bg-brand-soft sm:w-auto sm:px-6"
                >
                  {phone.display}
                </a>
                <a
                  href={whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-md bg-white/12 px-5 py-3.5 text-base font-bold text-white ring-1 ring-white/35 backdrop-blur-sm transition duration-300 hover:bg-white/20 sm:w-auto sm:px-6"
                >
                  واتساب
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Products gallery */}
        <section id="products" className="relative scroll-mt-20 bg-surface py-14 sm:scroll-mt-24 sm:py-28">
          <div className="shape-arc pointer-events-none absolute start-0 top-0 h-40 w-40 text-brand/10 sm:h-56 sm:w-56" aria-hidden />
          <div className="mx-auto max-w-6xl px-4 sm:px-8">
            <Reveal className="max-w-2xl">
              <h2 className="font-display text-[1.7rem] font-extrabold text-ink sm:text-4xl">
                مواد صحية بإطلالة فاخرة
              </h2>
              <p className="mt-3 text-base leading-7 text-muted sm:mt-4 sm:text-lg sm:leading-8">
                خلاطات، دش، مغاسل، وصمامات — منتجات منتقاة بعناية لتجهيز
                الحمامات وأنظمة المياه.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-6 sm:mt-14 sm:gap-8 md:grid-cols-2">
              {products.map((item, index) => (
                <Reveal key={item.src} delay={index * 80}>
                  <article className="group">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition duration-[1.1s] ease-out group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/35 via-transparent to-transparent opacity-80" />
                    </div>
                    <div className="pt-4 sm:pt-5">
                      <h3 className="font-display text-xl font-bold text-brand-deep sm:text-2xl">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-6 text-muted sm:text-base sm:leading-7">
                        {item.note}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Brands */}
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

        {/* About */}
        <section
          id="about"
          className="scroll-mt-20 border-y border-line bg-surface py-14 sm:scroll-mt-24 sm:py-28"
        >
          <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:gap-12 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/6]">
                <Image
                  src="/images/product-vanity.jpg"
                  alt="تجهيزات حمام عصرية من مجموعة البداية"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-deep/80 to-transparent p-5 sm:p-7">
                  <p className="font-display text-lg font-bold text-white sm:text-xl">
                    للسباكة والمواد الصحية والإكسسوارات
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
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
                  "خدمة سريعة عبر الاتصال وواتساب والبريد",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#products"
                className="mt-8 inline-flex items-center gap-2 text-base font-bold text-brand transition hover:text-brand-deep"
              >
                استعرض المنتجات
                <span aria-hidden>←</span>
              </a>
            </Reveal>
          </div>
        </section>

        {/* Visual band */}
        <section className="relative h-[42vw] min-h-52 max-h-80 overflow-hidden sm:min-h-72 sm:max-h-[28rem]">
          <Image
            src="/images/product-shower.jpg"
            alt="أنظمة دش ومواد صحية"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-brand-deep/45" />
          <div className="relative flex h-full items-center justify-center px-4 text-center">
            <p className="max-w-2xl font-display text-2xl font-bold text-white sm:text-4xl">
              شريككم الموثوق لتجهيز الحمامات وأنظمة المياه
            </p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20 bg-brand-mist py-14 sm:scroll-mt-24 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-8">
            <Reveal className="max-w-2xl">
              <h2 className="font-display text-[1.7rem] font-extrabold text-ink sm:text-4xl">
                تواصل معنا
              </h2>
              <p className="mt-3 text-base leading-7 text-muted sm:mt-4 sm:text-lg sm:leading-8">
                أرسل استفسارك عبر النموذج، أو تواصل مباشرة عبر الهاتف أو واتساب.
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
