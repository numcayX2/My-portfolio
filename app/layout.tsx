import type { Metadata } from "next";
import { Archivo, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Cursor from "@/components/Cursor";
import ScrollFx from "@/components/ScrollFx";
import IntroLoader from "@/components/IntroLoader";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-thai",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nam · สุธารชัย ประดิษฐกูล — พอร์ตโฟลิโอฝึกงาน Data Science / UX·UI",
  description:
    "พอร์ตโฟลิโอของสุธารชัย ประดิษฐกูล (น้ำ) นักศึกษาวิทยาการคอมพิวเตอร์ ปี 3 มหาวิทยาลัยแม่โจ้ มองหาโอกาสฝึกงานด้าน Data Science และ UX/UI Development ผลงานเด่น: My Schedule",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="th"
      className={`${archivo.variable} ${notoSansThai.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a href="#main" id="top" className="skip-link">
          ข้ามไปยังเนื้อหาหลัก
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <Cursor />
        <ScrollFx />
        <IntroLoader />
      </body>
    </html>
  );
}
