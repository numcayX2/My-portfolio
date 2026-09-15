import Image from "next/image";
import { project } from "@/content/portfolio";

const { images } = project;

/** Mobile card detail used in the design-decision case-study evidence. */
export function DetailCrop() {
  const image = images.cards;
  return (
    <Image
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      sizes="(max-width: 1023px) calc(100vw - 4.5rem), 640px"
      className="image-outline h-auto w-full object-contain"
    />
  );
}
