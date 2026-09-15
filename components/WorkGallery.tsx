import Image from "next/image";
import { project } from "@/content/portfolio";

const { images } = project;

/**
 * กรอบโชว์งานใช้ร่วมกันทั้งหน้าแรกและ Case Study: ภาพเต็มเป็นจุดหลัก ภาพขยายเป็นส่วนรอง
 * `mode="scrub"` ให้หน้าแรกที่อยู่ในงาน pin เป็นเจ้าของจังหวะเอง (ScrollFx)
 * ส่วนหน้า Case Study ใช้ clip-wipe อิสระของแต่ละภาพ
 */
export default function WorkGallery({
  className = "",
  mode = "wipe",
}: {
  className?: string;
  mode?: "wipe" | "scrub";
}) {
  const fullAttrs = mode === "scrub" ? { "data-work-shot": "" } : { "data-wipe": "" };
  const detailAttrs = mode === "scrub" ? { "data-work-detail": "" } : { "data-wipe": "" };

  return (
    <div className={`border border-ink/10 bg-surface p-4 md:p-6 ${className}`}>
      <figure {...fullAttrs}>
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
      <figure {...detailAttrs} className="mt-6 border-t border-ink/20 pt-5">
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
