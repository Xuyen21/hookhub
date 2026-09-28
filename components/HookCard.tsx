import type { Hook } from "@/types/hook";

function repoLabel(repoUrl: string) {
  return repoUrl.replace(/^https:\/\/github\.com\//, "").replace(/\/$/, "");
}

export default function HookCard({ hook }: { hook: Hook }) {
  return (
    <div className="flex h-full flex-col gap-3 rounded-xl border border-black/[.08] bg-white p-5 transition-colors hover:border-black/[.16] dark:border-white/[.12] dark:bg-[#111] dark:hover:border-white/[.24]">
      <span className="w-fit rounded-full bg-black/[.06] px-2.5 py-1 text-xs font-medium text-zinc-700 dark:bg-white/[.08] dark:text-zinc-300">
        {hook.category}
      </span>
      <h2 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
        {hook.name}
      </h2>
      <p className="line-clamp-3 flex-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        {hook.description}
      </p>
      <a
        href={hook.repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-medium text-zinc-950 underline-offset-4 hover:underline focus-visible:underline dark:text-zinc-50"
      >
        {repoLabel(hook.repoUrl)} ↗
      </a>
    </div>
  );
}
