import { profile } from "@/content/portfolio";
import { DetailCrop, imageCaptions } from "@/components/ProjectVisual";

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="border-b border-ink/15">
      <div className="mx-auto max-w-[1280px] px-5 md:px-12 lg:px-16">
        {/* Micro-details along the top edges, not a text column standing in for the work */}
        <div className="flex items-baseline justify-between gap-4 border-b border-ink/15 py-3">
          <p className="label-latin text-muted uppercase">Portfolio / 2026</p>
          <p className="label-latin text-right text-muted uppercase">
            Open to internship · Data Science / UX·UI
          </p>
        </div>

        <h1 id="hero-heading" className="pt-6 lg:pt-8">
          <span aria-hidden="true" className="display-nam block">
            NAM.
          </span>
          <span className="mt-4 block text-[clamp(1.75rem,3.2vw,3.25rem)] font-extrabold leading-[0.95] tracking-[-0.025em]">
            {profile.fullName}
          </span>
        </h1>

        <div className="mt-7 grid grid-cols-1 gap-8 border-t border-ink/15 pt-7 lg:grid-cols-12 lg:gap-10 lg:pt-8">
          <div className="lg:col-span-6">
            <p className="text-[17px] text-muted">{profile.studentLine}</p>
            <p className="mt-2 text-[17px] font-semibold">{profile.targetLine}</p>
            <p className="mt-4 max-w-[36rem] text-[17px]">{profile.intro}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#work"
                className="press inline-flex min-h-[44px] items-center bg-accent px-5 font-medium text-background hover:bg-ink"
              >
                ดูผลงาน
              </a>
              <a
                href="#contact"
                className="press inline-flex min-h-[44px] items-center border border-ink/30 px-5 font-medium hover:border-ink hover:bg-surface"
              >
                ติดต่อผม
              </a>
            </div>
          </div>

          {/* งานจริงกินพื้นที่ประมาณ 40–50% ขององค์ประกอบ Hero */}
          <figure className="lg:col-span-6">
            <div className="bg-surface p-4 md:p-5">
              <div className="flex items-baseline justify-between gap-4">
                <p className="label-latin text-muted uppercase">Featured work</p>
                <p className="label-latin text-muted uppercase">01 / My Schedule</p>
              </div>
              <div className="mt-4">
                <DetailCrop which="cards" />
              </div>
            </div>
            <figcaption className="mt-3 text-sm text-muted">
              {imageCaptions.cards}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
