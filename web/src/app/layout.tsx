import type { Metadata, Viewport } from "next";
import { Cairo, Tajawal, Outfit } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic", "latin"],
  weight: ["500", "700", "800"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "مجموعة البداية | استيراد المواد الصحية والإكسسوارات",
  description:
    "مجموعة البداية لاستيراد المواد الصحية والإكسسوارات — وكلاء ماركات عالمية: ALB، GROHE، REMER، ARCO، Pedrollo. اتصل بنا: 0914497272",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "مجموعة البداية",
    description: "استيراد المواد الصحية والإكسسوارات — ليبيا",
    locale: "ar_LY",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#2b5da3",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} ${tajawal.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-ink">{children}</body>
    </html>
  );
}
