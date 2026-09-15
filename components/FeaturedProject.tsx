import { project } from "@/content/portfolio";
import SectionLabel from "@/components/SectionLabel";
import WorkGallery from "@/components/WorkGallery";
import SplitWords from "@/components/SplitWords";

/** Pin targets are plain elements — the ScrollFx timeline owns their motion, so no Reveal wraps them. */
export default function FeaturedProject() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="scroll-mt-24 border-b border-ink/15"
    >
      <div
        data-work-stage
        className="relative z-0 mx-auto max-w-[1280px] px-5 py-10 md:px-12 md:py-16 lg:px-16"
      >
        {/* Heading sits tight against the work so they read as one group */}
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-3 border-t border-ink/15 pt-6">
          <div>
            <SectionLabel index="01" title="Selected Work" />
            <h2
              id="work-heading"
              data-split
              data-split-pinned
              className="display-section mt-3 uppercase"
            >
              <SplitWords text="Selected" />
              <br />
              <SplitWords text="Work." />
            </h2>
          </div>
          <p className="label-latin pb-3 text-muted uppercase">
            01 / {project.name}
          </p>
        </div>


        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          <a
            href={project.caseStudyHref}
            className="project-card group block lg:col-span-7"
            aria-label={`อ่าน Case Study: ${project.name}`}
          >
            <WorkGallery mode="scrub" />
            <span className="project-card-caption label-latin mt-3 flex items-center justify-between uppercase">
              View Case Study
              <span aria-hidden="true">→</span>
            </span>
          </a>

          <div data-work-info className="lg:col-span-5">
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              {project.tags.map((tag) => (
                <p key={tag} className="label-latin text-accent uppercase">
                  {tag}
                </p>
              ))}
            </div>
            <h3 id="project-title" className="display-project mt-3">
              <span className="block">{project.name.split(" ")[0]}</span>
              <span className="block">
                {project.name.split(" ").slice(1).join(" ")}
              </span>
            </h3>
            <p className="editorial-copy mt-4 max-w-[34rem]">{project.summary}</p>
            <dl className="mt-6 max-w-[34rem]">
              <div className="grid grid-cols-[6.5rem_1fr] gap-4 border-t border-ink/20 py-3">
                <dt className="text-sm font-semibold text-muted">บทบาท</dt>
                <dd className="font-medium">{project.role}</dd>
              </div>
              <div className="grid grid-cols-[6.5rem_1fr] gap-4 border-t border-ink/20 py-3">
                <dt className="text-sm font-semibold text-muted">เทคโนโลยี</dt>
                <dd className="font-medium">{project.tech.join(" · ")}</dd>
              </div>
              <div className="grid grid-cols-[6.5rem_1fr] gap-4 border-t border-ink/20 py-3">
                <dt className="text-sm font-semibold text-muted">เว็บไซต์</dt>
                <dd>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="break-all font-medium text-accent underline-offset-4 hover:underline"
                  >
                    my-schedule-eosin.vercel.app
                  </a>
                </dd>
              </div>
              <div className="grid grid-cols-[6.5rem_1fr] gap-4 border-y border-ink/20 py-3">
                <dt className="text-sm font-semibold text-muted">ซอร์สโค้ด</dt>
                <dd>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="break-all font-medium text-accent underline-offset-4 hover:underline"
                  >
                    github.com/numcayX2/my-schedule
                  </a>
                </dd>
              </div>
            </dl>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={project.caseStudyHref}
                className="press inline-flex min-h-[44px] items-center bg-ink px-5 font-medium text-background hover:bg-accent"
              >
                อ่าน Case Study{" "}
                <span aria-hidden="true" className="nudge-r">
                  →
                </span>
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="press inline-flex min-h-[44px] items-center border border-ink/30 px-5 font-medium hover:border-ink hover:bg-surface"
              >
                เปิดเว็บไซต์ <span aria-hidden="true" className="nudge-r">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
