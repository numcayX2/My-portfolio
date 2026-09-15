import { profile } from "@/content/portfolio";

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="flex min-h-screen items-center border-b border-ink/15">
      <div className="mx-auto w-full max-w-[1280px] px-5 pb-10 md:px-12 md:pb-14 lg:px-16">
        {/* Micro-details along the top edges, not a text column standing in for the work */}
        <div className="flex items-baseline justify-between gap-4 border-b border-ink/15 py-3">
          <p className="label-latin text-muted uppercase">Portfolio / 2026</p>
          <p className="label-latin text-right text-muted uppercase">
            Open to internship · Data Science / UX·UI
          </p>
        </div>

        <div className="mt-7 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          <h1 id="hero-heading" className="lg:col-span-7 lg:row-start-1">
            <span aria-hidden="true" className="display-nam block">
              NAM.
            </span>
            <span className="mt-4 block text-[clamp(1.75rem,3.2vw,3.25rem)] font-extrabold leading-[1.15]">
              {profile.fullName}
            </span>
          </h1>

          <div className="lg:col-span-7 lg:row-start-2">
            <p className="label-latin text-accent uppercase">Intro / Profile</p>
            <p className="mt-3 max-w-[42rem] text-[clamp(1.35rem,2.25vw,2.35rem)] font-bold leading-[1.2]">
              {profile.intro}
            </p>
            <p className="mt-7 text-[17px] text-muted">{profile.studentLine}</p>
            <p className="mt-2 text-[17px] font-semibold">{profile.targetLine}</p>
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

          <div
            role="img"
            aria-label="พื้นที่สำหรับภาพโปรไฟล์"
            className="relative min-h-[420px] border border-ink/15 bg-surface sm:min-h-[480px] lg:col-span-5 lg:row-span-2 lg:row-start-1 lg:min-h-[560px]"
          >
            <span aria-hidden="true" className="label-latin absolute left-4 top-4 text-muted uppercase">
              Profile image
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
