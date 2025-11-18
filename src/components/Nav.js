import Link from "next/link";
import { Github, Linkedin, Instagram, PenSquare } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

export default function Nav() {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-white/10 bg-white/60 backdrop-blur dark:bg-black/40">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-6 sm:px-8">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          <span className="bg-gradient-to-r from-zinc-900 to-zinc-600 bg-clip-text text-transparent dark:from-zinc-100 dark:to-zinc-400">
            Muhammed Batuhan
          </span>
        </Link>
        <nav className="flex items-center gap-4">
          <a
            href="#projects"
            className="hidden text-sm text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white sm:inline-block"
          >
            Projeler
          </a>
          <a
            href="#contact"
            className="hidden text-sm text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white sm:inline-block"
          >
            İletişim
          </a>
          <a
            href="https://github.com/muhammedby"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-full p-2 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammed-batuhan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-full p-2 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="https://medium.com/@muhammedbatuhan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Medium"
            className="rounded-full p-2 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white"
          >
            <PenSquare className="h-4 w-4" />
          </a>
          <a
            href="https://www.instagram.com/bayramhmd/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="rounded-full p-2 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href="https://x.com/batubym"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="rounded-full p-2 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white"
          >
            <FaXTwitter className="h-4 w-4" />
          </a>
        </nav>
      </div>
    </header>
  );
}


