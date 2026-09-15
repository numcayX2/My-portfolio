import { certificates } from "@/content/portfolio";
import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/Reveal";

export default function CertificatesSection() {
  return (
    <section
      id="certificates"
      aria-labelledby="certificates-heading"
      className="scroll-mt-24 border-b border-ink/15"
    >
      <div className="mx-auto max-w-[1280px] px-5 py-10 md:px-12 md:py-14 lg:px-16">
        <Reveal className="flex flex-wrap items-end justify-between gap-x-10 gap-y-4 border-t border-ink/15 pt-6">
          <div>
            <SectionLabel index="04" title="Certificates" />
            <h2
              id="certificates-heading"
              className="mt-4 text-[clamp(2.8rem,5.25vw,5.5rem)] font-extrabold leading-[1.15]"
            >
              ใบรับรอง.
            </h2>
          </div>
          <p className="label-latin pb-2 text-muted uppercase">
            Credentials / PDF
          </p>
        </Reveal>

        <Reveal className="mt-8">
          <ul>
            {certificates.map((certificate) => (
              <li
                key={certificate.title}
                className="grid grid-cols-1 gap-2 border-t border-ink/20 py-5 last:border-b md:grid-cols-12 md:gap-6"
              >
                <div className="md:col-span-7">
                  <h3 className="text-[clamp(1.25rem,2vw,1.75rem)] font-bold leading-snug">
                    {certificate.title}
                  </h3>
                  <p className="label-latin mt-2 text-muted uppercase">
                    {certificate.issuer}
                  </p>
                  <p className="mt-2 max-w-[36rem] text-[16px]">
                    {certificate.detail}
                  </p>
                </div>
                <div className="md:col-span-5 md:text-right">
                  <p className="font-medium">{certificate.date}</p>
                  <a
                    href={certificate.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex min-h-[44px] items-center gap-2 font-medium text-accent underline-offset-4 hover:underline"
                  >
                    เปิดดูใบรับรอง (PDF) ↗
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
