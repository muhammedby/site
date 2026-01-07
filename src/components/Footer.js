import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-white/50 py-10 text-sm text-zinc-600 backdrop-blur dark:bg-black/30 dark:text-zinc-400">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-6 sm:flex-row sm:px-8">
        <p>&copy; {new Date().getFullYear()} Muhammed Batuhan Bayram</p>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/muhammedby"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 dark:hover:text-white"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/muhammed-batuhan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 dark:hover:text-white"
          >
            LinkedIn
          </Link>
          <Link
            href="https://medium.com/@muhammedbatuhan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 dark:hover:text-white"
          >
            Medium
          </Link>
          <Link
            href="https://www.instagram.com/muhamrned"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 dark:hover:text-white"
          >
            Instagram
          </Link>
          <Link
            href="https://x.com/batubym"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 dark:hover:text-white"
          >
            X
          </Link>
          <Link
            href="https://www.youtube.com/@muhammedbatuhanbayram"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 dark:hover:text-white"
          >
            YouTube
          </Link>
        </div>
      </div>
    </footer>
  );
}


