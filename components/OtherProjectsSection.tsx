import { otherProjects } from "@/content/portfolio";
import Reveal from "@/components/Reveal";

export default function OtherProjectsSection() {
  return (
    <section aria-labelledby="other-projects-heading" className="border-b border-ink/15">
      <div className="mx-auto max-w-[1280px] px-5 py-10 md:px-12 md:py-14 lg:px-16">
        <Reveal className="flex flex-wrap items-end justify-between gap-x-10 gap-y-4 border-t border-ink/15 pt-6">
          <div>
            <p className="label-latin text-muted uppercase">More work</p>
            <h2
              id="other-projects-heading"
              className="mt-4 text-[clamp(2.8rem,5.25vw,5.5rem)] font-extrabold leading-[1.15]"
            >
              โปรเจกต์อื่น.
            </h2>
          </div>
          <p className="label-latin pb-2 text-muted uppercase">Web · Mobile · Automation</p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-x-10 md:grid-cols-3">
          {otherProjects.map((item, position) => (
            <Reveal
              key={item.name}
              delay={position * 0.08}
              className="border-t-2 border-accent py-5"
            >
              <p className="label-latin text-muted">{item.index} / {item.type}</p>
              <h3 className="mt-3 text-[clamp(1.35rem,2vw,1.9rem)] font-bold leading-tight">
                {item.name}
              </h3>
              <p className="mt-3 text-[16px] leading-relaxed">{item.summary}</p>
              <p className="label-latin mt-5 text-accent uppercase">{item.role}</p>
              <p className="mt-2 border-t border-ink/15 pt-3 text-sm text-muted">{item.tech}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
