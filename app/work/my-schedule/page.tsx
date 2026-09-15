import type { Metadata } from "next";
import Link from "next/link";
import { caseStudy, project } from "@/content/portfolio";
import WorkGallery from "@/components/WorkGallery";
import { DetailCrop } from "@/components/ProjectVisual";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "My Schedule — Case Study | Nam",
  description:
    "Case study ของ My Schedule เว็บตารางเรียนบนมือถือ: ปัญหา การตัดสินใจออกแบบ บทบาท การใช้ AI ช่วยพัฒนา และการตรวจสอบการใช้งานจริง",
};

/** เลขลำดับขนาดใหญ่ยึดแกนขวา — ทำหน้าที่เป็นจังหวะของหน้า ไม่ใช่ข้อความที่ต้องอ่าน */
function CaseSection({
  index,
  id,
  en,
  th,
  children,
}: {
  index: string;
  id: string;
  en: string;
  th: string;
  children: React.ReactNode;
}) {
  return (
    <section aria-labelledby={id} className="border-t border-ink/15 py-7 md:py-9">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-9">
          <p className="label-latin text-muted uppercase">
            {index} / {en}
          </p>
          <h2
            id={id}
            className="mt-3 text-[clamp(1.9rem,3.4vw,3.5rem)] font-extrabold leading-[1.15]"
          >
            {th}
          </h2>
          <div className="mt-5 max-w-[44rem]">{children}</div>
        </div>
        <p
          aria-hidden="true"
          className="hidden text-right text-[clamp(3rem,7vw,6rem)] font-extrabold leading-none tracking-[-0.05em] text-ink/20 lg:col-span-3 lg:block"
        >
          {index}
        </p>
      </div>
    </section>
  );
}

export default function CaseStudyPage() {
  return (
    <article className="mx-auto max-w-[1280px] px-5 pb-14 md:px-12 md:pb-16 lg:px-16">
      <Reveal>
        <header className="pb-8 pt-4 md:pb-9 md:pt-6">
          <nav aria-label="กลับ">
            <Link
              href="/#work"
              className="inline-flex min-h-[44px] items-center font-medium text-accent underline-offset-4 hover:underline"
            >
              <span aria-hidden="true" className="nudge-l">←</span> กลับไปหน้าผลงาน
            </Link>
          </nav>

          <div className="mt-4 flex items-baseline justify-between gap-4 border-b border-ink/15 py-3">
            <p className="label-latin text-muted uppercase">Case study</p>
            <p className="label-latin text-right text-muted uppercase">
              {project.role}
            </p>
          </div>

          <h1 data-drift className="display-case mt-6">
            <span className="block">{caseStudy.title.split(" ")[0]}</span>
            <span className="block">
              {caseStudy.title.split(" ").slice(1).join(" ")}
            </span>
          </h1>

          <div className="mt-6 grid grid-cols-1 gap-6 border-t border-ink/15 pt-6 lg:grid-cols-12 lg:gap-10">
            <p className="text-[clamp(1.4rem,2.4vw,2.4rem)] font-bold leading-[1.2] lg:col-span-8">
              {caseStudy.subtitle}
            </p>
            <div className="lg:col-span-4">
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                {project.tags.map((tag) => (
                  <p key={tag} className="label-latin text-accent uppercase">
                    {tag}
                  </p>
                ))}
              </div>
              <p className="mt-3 text-sm font-medium text-muted">
                {project.tech.join(" · ")}
              </p>
            </div>
          </div>
        </header>
      </Reveal>

      <Reveal>
        <figure className="grid grid-cols-1 lg:grid-cols-12">
          <WorkGallery className="lg:col-span-7" />

          <div className="py-6 lg:col-span-5 lg:pl-8 lg:pt-2">
            <h2 className="label-latin text-muted uppercase">Overview</h2>
            <p className="editorial-copy mt-4 max-w-[34rem]">
              {caseStudy.overview}
            </p>
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
          </div>
        </figure>
      </Reveal>

      <Reveal>
        <CaseSection index="01" id="problem" en="Problem" th="ปัญหา">
          <ul className="list-disc space-y-2.5 pl-6 text-[17px]">
            {caseStudy.problems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </CaseSection>
      </Reveal>

      <Reveal>
        <CaseSection
          index="02"
          id="decisions"
          en="Design Decisions"
          th="การตัดสินใจออกแบบ"
        >
          <ol className="space-y-5">
            {caseStudy.decisions.map((decision, position) => (
              <li key={decision.title} className="border-b border-ink/15 pb-5">
                <h3 className="text-[clamp(1.2rem,1.9vw,1.7rem)] font-bold leading-tight">
                  <span className="label-latin mr-3 text-muted">
                    {position + 1}
                  </span>
                  {decision.title}
                </h3>
                <p className="mt-2 text-[17px]">{decision.body}</p>
              </li>
            ))}
          </ol>
          <figure data-wipe className="mt-6 border border-ink/10 bg-surface p-4 md:p-5">
            <div className="max-w-[480px]">
              <DetailCrop />
            </div>
            <figcaption className="mt-3 text-sm text-muted">
              {project.images.cards.caption}
            </figcaption>
          </figure>
        </CaseSection>
      </Reveal>

      <Reveal>
        <CaseSection index="03" id="role-ai" en="Role & AI" th="บทบาทและ AI">
          <ul className="list-disc space-y-2.5 pl-6 text-[17px]">
            {caseStudy.roleAndAi.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </CaseSection>
      </Reveal>

      <Reveal>
        <CaseSection
          index="04"
          id="verification"
          en="Verification"
          th="การตรวจสอบ"
        >
          <ul className="list-disc space-y-2.5 pl-6 text-[17px]">
            {caseStudy.verification.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </CaseSection>
      </Reveal>

      <Reveal>
        <CaseSection
          index="05"
          id="next-steps"
          en="Next Steps"
          th="ขั้นตอนต่อไป (ยังไม่ได้ทำ)"
        >
          <ul className="list-disc space-y-2.5 pl-6 text-[17px]">
            {caseStudy.nextSteps.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </CaseSection>
      </Reveal>

      <Reveal>
        <nav
          aria-label="ไปต่อ"
          className="flex flex-wrap gap-3 border-t border-ink/15 pt-7"
        >
          <Link
            href="/#work"
            className="press inline-flex min-h-[44px] items-center bg-ink px-6 font-medium text-background hover:bg-accent"
          >
            <span aria-hidden="true" className="nudge-l">←</span> กลับไปหน้าผลงาน
          </Link>
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="press inline-flex min-h-[44px] items-center border border-ink/30 px-6 font-medium hover:border-ink hover:bg-surface"
          >
            ดูซอร์สโค้ดบน GitHub
          </a>
        </nav>
      </Reveal>
    </article>
  );
}
