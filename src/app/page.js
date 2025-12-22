"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { certificates } from "@/data/certificates";
import { Github, Linkedin, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="relative mx-auto flex min-h-dvh w-full max-w-6xl flex-col items-center justify-center px-6 py-24 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="z-10 text-center"
      >
        <span className="inline-block rounded-full border border-white/10 bg-white/60 px-3 py-1 text-xs font-medium text-zinc-700 backdrop-blur dark:bg-white/10 dark:text-zinc-200">
          Mühendislik · JS · C++ · Python · AI · Cloud · Linux
        </span>
        <h1 className="mt-6 max-w-none bg-gradient-to-r from-teal-400 via-violet-400 to-indigo-400 bg-clip-text text-6xl font-extrabold leading-tight text-transparent sm:text-7xl md:whitespace-nowrap">
          Muhammed Batuhan Bayram
        </h1>
        <div className="mt-3 bg-gradient-to-b from-zinc-900 to-zinc-600 bg-clip-text pb-1 text-4xl font-semibold leading-tight text-transparent dark:from-zinc-100 dark:to-zinc-400 sm:text-5xl">
          Linux ve Açık Kaynak Geliştiricisi
        </div>
        <p className="mx-auto mt-5 max-w-2xl text-balance text-zinc-600 dark:text-zinc-400">
          Yazılım becerilerimi geliştirmek isteyen bir Elektrik‑Elektronik mühendisliği öğrencisiyim. Şu anda JavaScript, C++ ve Python ile çalışıyorum. Ayrıca Linux üzerinde çeşitli projeler geliştiriyorum.
        </p>

        <div className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-3">
          <motion.a
            href="https://github.com/muhammedby"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Github className="h-4 w-4" />
            GitHub
            <ArrowRight className="h-4 w-4 opacity-60 transition group-hover:translate-x-0.5" />
          </motion.a>
          <a
            href="https://www.linkedin.com/in/muhammed-batuhan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-300/60 bg-white px-5 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-50 dark:border-white/20 dark:bg-transparent dark:text-zinc-200 dark:hover:bg-white/5"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </div>
      </motion.div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[60dvh] bg-[radial-gradient(1200px_400px_at_50%_-100px,rgba(99,102,241,.25),transparent_60%)]"
      />

      {/* What I do */}
      <section
        id="what-i-do"
        className="mx-auto mt-24 w-full max-w-5xl scroll-mt-20"
      >
        <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          Ne yapıyorum?
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-zinc-600 dark:text-zinc-400">
          Modern web uygulamaları, servisler ve veri odaklı çözümler.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "JavaScript / React / Next.js",
              desc: "SSR/ISR, erişilebilir, performanslı arayüzler.",
            },
            {
              title: "C++",
              desc: "Sistem araçları ve performans odaklı modüller.",
            },
            {
              title: "Python",
              desc: "Otomasyon ve veri işleme.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-white/10 bg-white/60 p-5 backdrop-blur dark:bg-white/5"
            >
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects teaser */}
      <section id="projects" className="mx-auto mt-20 w-full max-w-5xl scroll-mt-20">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
              Öne Çıkan Projeler
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-zinc-600 dark:text-zinc-400">
              Seçili repo ve çalışmalar.
            </p>
          </div>
          <a
            href="https://github.com/muhammedby"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-zinc-700 underline underline-offset-4 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
          >
            Tümünü Gör
          </a>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "ai_frontend",
              href: "https://github.com/muhammedby/ai_frontend",
              stack: "TypeScript · React",
            },
            {
              name: "ai_backend",
              href: "https://github.com/muhammedby/ai_backend",
              stack: "JavaScript · API",
            },
            {
              name: "turboost",
              href: "https://github.com/muhammedby/turboost",
              stack: "Python",
            },
          ].map((p) => (
            <motion.a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-white/10 bg-white/60 p-5 backdrop-blur transition dark:bg-white/5"
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  {p.name}
                </h3>
                <span className="text-xs text-zinc-600 transition group-hover:text-zinc-800 dark:text-zinc-400 dark:group-hover:text-zinc-200">
                  {p.stack}
                </span>
              </div>
              <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400">
                GitHub'da incele
              </p>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Certificates */}
      <section
        id="certificates"
        className="mx-auto mt-20 w-full max-w-5xl scroll-mt-20"
      >
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
              Sertifikalar ve Başarılar
            </h2>
          </div>
        </div>

        {/* Marquee: single-row horizontal scroller that pauses on hover/touch */}
        <div className="mt-6 overflow-visible px-4">
          <div
            id="cert-marquee"
            className="marquee animate-marquee"
            onMouseEnter={(e) => e.currentTarget.classList.add("paused")}
            onMouseLeave={(e) => e.currentTarget.classList.remove("paused")}
            onTouchStart={(e) => e.currentTarget.classList.add("paused")}
            onTouchEnd={(e) => e.currentTarget.classList.remove("paused")}
          >
            {/* Render items twice for seamless loop */}
            {[...certificates, ...certificates].map((c, idx) => {
              return (
                <a
                  key={`${c.title}-${idx}`}
                  href={c.href || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-56 flex-shrink-0 rounded-lg border border-white/10 bg-white/60 p-2 text-left shadow-sm transition hover:scale-105 hover:shadow-md dark:bg-white/5"
                >
                  <div className="relative h-32 w-full overflow-hidden rounded">
                    <Image
                      src={c.image}
                      alt={c.title}
                      fill
                      sizes="224px"
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="mt-2">
                    <h3 className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 truncate">
                      {c.title}
                    </h3>
                    <p className="mt-1 text-[11px] text-zinc-600 dark:text-zinc-400 truncate">
                      {c.issuer} · {c.date}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section
        id="contact"
        className="mx-auto mt-20 w-full max-w-5xl scroll-mt-20 rounded-xl border border-white/10 bg-gradient-to-r from-zinc-100 to-white p-8 text-center dark:from-white/5 dark:to-transparent"
      >
        <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          Birlikte çalışalım
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-sm text-zinc-600 dark:text-zinc-400">
          Fikrini birlikte ürüne dönüştürelim. Mesaj bırak ya da bağlantı kuralım.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a
            href="mailto:batubayram18@gmail.com"
            className="rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
          >
            E‑posta Gönder
          </a>
          <a
            href="https://www.linkedin.com/in/muhammed-batuhan"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-300/60 bg-white px-5 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-50 dark:border-white/20 dark:bg-transparent dark:text-zinc-200 dark:hover:bg-white/5"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}
