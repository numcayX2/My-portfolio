import Image from "next/image";
import { project } from "@/content/portfolio";

const { images } = project;

/**
 * กรอบโชว์งานใช้ร่วมกันทั้งหน้าแรกและ Case Study
 * `mode="scrub"` (หน้าแรก): ภาพ Desktop เป็นภาพหลักคู่กับภาพ Mobile ด้านข้าง
 * ส่วนหน้า Case Study (`mode="wipe"`) ใช้ภาพเต็มนำแล้วตามด้วย Desktop พร้อม clip-wipe อิสระของแต่ละภาพ
 */
export default function WorkGallery({
  className = "",
  mode = "wipe",
}: {
  className?: string;
  mode?: "wipe" | "scrub";
}) {
  // หน้าแรก (scrub): ภาพ Desktop เป็นภาพหลักคู่กับภาพ Mobile ด้านข้าง
  // เพื่อให้ความสูงฝั่งภาพใกล้เคียงฝั่งคำอธิบาย ไม่เหลือที่ว่างยาวใต้ CTA
  if (mode === "scrub") {
    return (
      <div className={`border border-ink/10 bg-surface p-4 md:p-6 ${className}`}>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-12 sm:items-start">
          <figure data-work-shot className="sm:col-span-7">
            <Image
              src={images.desktop.src}
              alt={images.desktop.alt}
              width={images.desktop.width}
              height={images.desktop.height}
              sizes="(max-width: 1023px) calc(100vw - 4.5rem), 400px"
              className="image-outline h-auto w-full object-contain"
            />
            <figcaption className="mt-3 text-sm text-muted">
              {images.desktop.caption}
            </figcaption>
          </figure>
          <figure data-work-detail className="sm:col-span-5">
            <Image
              src={images.full.src}
              alt={images.full.alt}
              width={images.full.width}
              height={images.full.height}
              sizes="280px"
              className="image-outline mx-auto h-[420px] w-auto object-contain sm:h-[440px] lg:h-[480px]"
            />
            <figcaption className="mx-auto mt-3 max-w-[240px] text-sm text-muted">
              {images.full.caption}
            </figcaption>
          </figure>
        </div>
      </div>
    );
  }

  return (
    <div className={`border border-ink/10 bg-surface p-4 md:p-6 ${className}`}>
      <figure data-wipe>
        <Image
          src={images.full.src}
          alt={images.full.alt}
          width={images.full.width}
          height={images.full.height}
          sizes="320px"
          className="image-outline mx-auto h-[420px] w-auto object-contain sm:h-[480px] lg:h-[520px]"
        />
        <figcaption className="mx-auto mt-3 max-w-[280px] text-sm text-muted">
          {images.full.caption}
        </figcaption>
      </figure>
      <figure data-wipe className="mt-6 border-t border-ink/20 pt-5">
        <Image
          src={images.desktop.src}
          alt={images.desktop.alt}
          width={images.desktop.width}
          height={images.desktop.height}
          sizes="(max-width: 1023px) calc(100vw - 4.5rem), 640px"
          className="image-outline h-auto w-full object-contain"
        />
        <figcaption className="mt-3 text-sm text-muted">
          {images.desktop.caption}
        </figcaption>
      </figure>
    </div>
  );
}
