import Image from "next/image";
import { project } from "@/content/portfolio";

const { images } = project;

/** ภาพเต็มหน้าจอ My Schedule ใช้ทั้งหน้าแรกและหน้า Case Study */
export function FullScreenshot({ className = "" }: { className?: string }) {
  return (
    <Image
      src={images.full.src}
      alt={images.full.alt}
      width={images.full.width}
      height={images.full.height}
      sizes="(max-width: 1023px) calc(100vw - 4.5rem), 320px"
      className={`image-outline h-auto w-full max-w-[300px] object-contain ${className}`}
    />
  );
}

/** ภาพขยายรายละเอียด — crop จาก screenshot เดียวกัน ไม่ใช่หน้าจอคนละอัน */
export function DetailCrop({
  which,
  className = "",
}: {
  which: "cards" | "dayNav";
  className?: string;
}) {
  const image = images[which];
  return (
    <Image
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      sizes="(max-width: 1023px) calc(100vw - 4.5rem), 640px"
      className={`image-outline h-auto w-full max-w-[480px] object-contain ${className}`}
    />
  );
}

export const imageCaptions = {
  full: images.full.caption,
  cards: images.cards.caption,
  dayNav: images.dayNav.caption,
} as const;
