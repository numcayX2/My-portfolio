import { skillGroups } from "@/content/portfolio";
import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/Reveal";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="scroll-mt-24 border-b border-ink/15"
    >
      <div className="mx-auto max-w-[1280px] px-5 py-10 md:px-12 md:py-14 lg:px-16">
        <Reveal className="flex flex-wrap items-end justify-between gap-x-10 gap-y-4 border-t border-ink/15 pt-6">
          <div>
            <SectionLabel index="02" title="Skills" />
            <h2
              id="skills-heading"
              className="mt-4 text-[clamp(2.8rem,5.25vw,5.5rem)] font-extrabold leading-[0.84] tracking-[-0.04em]"
            >
              ทักษะ.
            </h2>
          </div>
          <p className="label-latin pb-2 text-muted uppercase">
            Roles / tools / interests
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-3">
          {skillGroups.map((group) => (
            <Reveal key={group.index} className="border-t-2 border-accent pt-4">
              <p className="label-latin text-muted">{group.index}</p>
              <h3 className="mt-2 text-[clamp(1.25rem,1.7vw,1.6rem)] font-bold leading-tight">
                {group.title}
              </h3>
              <p className="label-latin mt-1 text-accent uppercase">
                {group.scope}
              </p>
              <ul className="mt-4">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border-b border-ink/15 py-2 text-[16px]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
