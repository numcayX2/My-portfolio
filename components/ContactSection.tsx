import { profile } from "@/content/portfolio";
import Reveal from "@/components/Reveal";
import SplitWords from "@/components/SplitWords";

export default function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="on-ink scroll-mt-24 bg-boundary text-background"
    >
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-0 px-5 py-10 md:px-12 md:py-14 lg:grid-cols-12 lg:px-16">
        <Reveal className="border-b border-background/25 pb-7 lg:col-span-5 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-10">
          <p className="label-latin text-surface uppercase">05 / Contact</p>
          <h2 id="contact-heading" data-split className="display-section mt-4 uppercase">
            <SplitWords text="Let's" />
            <br />
            <SplitWords text="Talk." />
          </h2>
        </Reveal>
        <Reveal className="pt-7 lg:col-span-7 lg:pl-10 lg:pt-0">
          <p className="editorial-copy max-w-[37rem]">
            สนใจรับนักศึกษาฝึกงานตำแหน่ง UX/UI Developer หรือ Data Scientist
            ติดต่อผมได้ทางอีเมล
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-7 block max-w-full break-all text-[clamp(1.6rem,3.35vw,3.5rem)] font-extrabold leading-[1.15] underline-offset-4 hover:underline"
          >
            {profile.email}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex min-h-[44px] items-center font-medium text-surface underline-offset-4 hover:underline"
          >
            GitHub / numcayX2 <span aria-hidden="true" className="nudge-r">↗</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
