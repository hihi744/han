import type { Metadata } from "next";
import { ArrowUpRight, Clock, EnvelopeSimple, Handshake, MapPin, MapTrifold, Phone, Plant } from "@phosphor-icons/react/dist/ssr";
import { ContactForm } from "@/components/contact-form";
import { Orbs } from "@/components/blocks";
import { contact, mapEmbedSrc, mapLinkHref, org, projectEmailHref } from "@/content/site";

export const metadata: Metadata = {
  title: "Liên hệ",
  description: "Liên hệ Đơm Hoa: đăng ký tư vấn vay vốn hoặc học nghề, hoặc nhận hồ sơ dự án và phương án hợp tác.",
};

export default function ContactPage() {
  const details = [
    { icon: MapPin, label: "Địa chỉ", value: org.address },
    { icon: Phone, label: "Điện thoại / Hotline", value: org.phone, href: org.phoneHref },
    { icon: EnvelopeSimple, label: "Email", value: org.email, href: `mailto:${org.email}` },
    { icon: Clock, label: "Giờ làm việc", value: org.hours.join("; ") },
  ];

  return (
    <>
      <section className="relative isolate overflow-hidden pb-2 pt-14 md:pt-20" aria-labelledby="contact-title">
        <Orbs variant="cool" />
        <div data-reveal className="container-site relative">
          <p className="text-[15px] font-semibold text-blossom-deep">Liên hệ</p>
          <h1 id="contact-title" className="mt-2 max-w-3xl text-[44px] font-bold leading-[1.08] tracking-[-0.035em] text-moss-ink md:text-[72px]">
            {contact.title}
          </h1>
        </div>
      </section>

      <section data-reveal-group="120" className="container-site mt-12 grid gap-5 md:grid-cols-2" aria-label="Hai lối liên hệ">
        <a href="#dang-ky" data-reveal className="card-lift on-dark group relative flex flex-col overflow-hidden rounded-[var(--radius-panel)] bg-moss-deep p-8 text-on-dark sm:p-10">
          <Orbs variant="dark" />
          <span className="grid size-12 place-items-center rounded-full bg-blossom text-moss-ink">
            <Plant size={24} aria-hidden="true" />
          </span>
          <h2 className="mt-8 text-[26px] text-on-dark md:text-[30px]">{contact.borrowers.title}</h2>
          <p className="mt-3 text-on-dark-muted">{contact.borrowers.body}</p>
          <span className="mt-auto pt-8 font-semibold text-blossom">{contact.borrowers.cta} ↓</span>
        </a>
        <div id="doi-tac" data-reveal className="relative flex scroll-mt-32 flex-col overflow-hidden rounded-[var(--radius-panel)] bg-petal-yellow p-8 sm:p-10">
          <span className="grid size-12 place-items-center rounded-full bg-paper text-moss">
            <Handshake size={24} aria-hidden="true" />
          </span>
          <h2 className="mt-8 text-[26px] text-moss-ink md:text-[30px]">{contact.partners.title}</h2>
          <p className="mt-3 text-moss-ink">{contact.partners.body}</p>
          <div className="mt-auto pt-8">
            <a href={projectEmailHref} className="inline-flex min-h-12 items-center gap-2 rounded-full bg-moss px-6 text-[15px] font-semibold text-on-dark hover:bg-moss-deep">
              <EnvelopeSimple size={18} aria-hidden="true" /> {contact.partners.cta}
            </a>
            <p className="mt-2 text-[14px] text-moss-ink">
              Địa chỉ email: <span className="select-all font-semibold">{org.email}</span>
            </p>
          </div>
        </div>
      </section>

      <section id="dang-ky" className="container-site mt-20 scroll-mt-32" aria-labelledby="form-title">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.5fr] lg:gap-14">
          <div data-reveal>
            <h2 id="form-title" className="text-[30px] text-moss-ink md:text-[40px]">
              Đăng ký tư vấn
            </h2>
            <p className="mt-4 text-lg text-ink-muted">{contact.borrowers.body}</p>
            <div data-map className="mt-8 overflow-hidden rounded-[var(--radius-card)] bg-sprout ring-1 ring-sprout-line">
              <iframe
                title={`Bản đồ: ${org.address}`}
                src={mapEmbedSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block aspect-[4/3] w-full border-0"
              />
              <a
                href={mapLinkHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 bg-paper px-5 py-4 text-[15px] font-semibold text-moss hover:text-blossom-deep"
              >
                <span className="flex items-center gap-2">
                  <MapTrifold size={20} aria-hidden="true" /> Mở trong Google Maps
                </span>
                <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
              </a>
            </div>
            <dl className="mt-10 space-y-6">
              {details.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-sprout text-moss">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <div>
                    <dt className="text-sm text-ink-muted">{label}</dt>
                    <dd className="mt-0.5 font-semibold text-moss-ink">
                      {href ? (
                        <a href={href} className="hover:text-blossom-deep">
                          {value}
                        </a>
                      ) : (
                        value
                      )}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
