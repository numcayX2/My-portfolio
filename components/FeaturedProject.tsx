import { project } from "@/content/portfolio";
import SectionLabel from "@/components/SectionLabel";
import { DetailCrop, FullScreenshot, imageCaptions } from "@/components/ProjectVisual";
import Reveal from "@/components/Reveal";

export default function FeaturedProject() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="scroll-mt-24 border-b border-ink/15"
    >
      <div className="mx-auto max-w-[1280px] px-5 py-10 md:px-12 md:py-16 lg:px-16">
        {/* Heading sits tight against the work so they read as one group */}
        <Reveal className="flex flex-wrap items-end justify-between gap-x-10 gap-y-3 border-t border-ink/15 pt-6">
          <div>
            <SectionLabel index="03" title="Selected Work" />
            <h2 id="work-heading" className="display-section mt-3 uppercase">
              Selected
              <br />
              Work.
            </h2>
          </div>
          <p className="label-latin pb-3 text-muted uppercase">
            01 / {project.name} — {project.tags[1]}
          </p>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {/* พื้น sage เป็นพื้นที่แสดงภาพขนาดใหญ่: ภาพเต็มหนึ่งภาพคู่กับภาพขยาย */}
          <Reveal className="border border-ink/10 bg-surface p-4 md:p-6 lg:col-span-7">
            <figure className="grid grid-cols-1 gap-6 sm:grid-cols-[minmax(0,42%)_1fr]">
              <div>
                <FullScreenshot />
                <figcaption className="mt-3 text-sm text-muted">
                  {imageCaptions.full}
                </figcaption>
              </div>
              <div>
                <DetailCrop which="dayNav" />
                <p className="mt-3 text-sm text-muted">{imageCaptions.dayNav}</p>
                <p className="mt-4 border-t border-ink/20 pt-3 text-sm text-muted">
                  ภาพขยายทั้งสองเป็น crop จากหน้าจอเดียวกัน ไม่ใช่หน้าจอคนละอัน
                </p>
              </div>
            </figure>
          </Reveal>

          <Reveal className="lg:col-span-5">
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
            <div className="mt-6">
              <a
                href={project.caseStudyHref}
                className="press inline-flex min-h-[44px] items-center bg-ink px-5 font-medium text-background hover:bg-accent"
              >
                อ่าน Case Study →
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
