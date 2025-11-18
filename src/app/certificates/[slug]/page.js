import Image from "next/image";
import Link from "next/link";
import { certificates } from "@/data/certificates";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return certificates
    .filter((c) => !!c.slug)
    .map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }) {
  const cert = certificates.find((c) => c.slug === params.slug);
  if (!cert) return {};
  return {
    title: `${cert.title} · Sertifika`,
    description: cert.summary || `${cert.title} — ${cert.issuer}`,
  };
}

export default function CertificatePage({ params }) {
  const cert = certificates.find((c) => c.slug === params.slug);
  if (!cert) return notFound();

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12 sm:px-8">
      <Link
        href="/#certificates"
        className="text-sm text-zinc-600 underline underline-offset-4 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
      >
        ← Sertifikalara dön
      </Link>
      <h1 className="mt-4 bg-gradient-to-b from-zinc-900 to-zinc-600 bg-clip-text text-3xl font-bold text-transparent dark:from-zinc-100 dark:to-zinc-400 sm:text-4xl">
        {cert.title}
      </h1>
      <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
        {cert.issuer} · {cert.date}
      </p>

      <div className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-white/60 backdrop-blur dark:bg-white/5">
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={cert.image}
            alt={cert.title}
            fill
            className="object-contain"
            unoptimized
            priority
          />
        </div>
      </div>

      {Array.isArray(cert.body) && cert.body.length > 0 ? (
        <div className="mt-6 space-y-4 text-balance text-zinc-700 dark:text-zinc-300">
          {cert.body.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      ) : cert.summary ? (
        <p className="mt-6 text-balance text-zinc-700 dark:text-zinc-300">
          {cert.summary}
        </p>
      ) : null}
    </main>
  );
}


