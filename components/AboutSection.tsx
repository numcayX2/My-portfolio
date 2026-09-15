import { profile } from "@/content/portfolio";
import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/Reveal";

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-24 border-b border-ink/15"
    >
      <div className="mx-auto max-w-[1280px] px-5 py-10 md:px-12 md:py-14 lg:px-16">
        <Reveal className="grid grid-cols-1 gap-6 border-t border-ink/15 pt-6 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <SectionLabel index="01" title="About" />
            <h2
              id="about-heading"
              className="mt-4 text-[clamp(2.8rem,5.25vw,5.5rem)] font-extrabold leading-[0.84] tracking-[-0.04em]"
            >
              เกี่ยวกับ
              <br />
              ผม.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-2">
            <p className="editorial-copy max-w-[34rem]">{profile.about}</p>
          </div>
        </Reveal>

        <Reveal className="mt-9 border-t border-ink/15 pt-5">
          <h3 className="label-latin text-muted uppercase">Education</h3>
          <ul className="mt-4 grid grid-cols-1 gap-x-10 md:grid-cols-3">
            {profile.education.map((line) => (
              <li key={line} className="border-t border-ink/15 py-3 text-[17px]">
                {line}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
