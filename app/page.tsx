import HookCard from "@/components/HookCard";
import { hooks } from "@/data/hooks";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-zinc-50 dark:bg-black">
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-10 px-6 py-16 sm:px-10">
        <header className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
            HookHub
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Discover open-source hooks for Claude Code.
          </p>
          <p className="text-sm text-zinc-500 dark:text-zinc-500">
            {hooks.length} hook{hooks.length === 1 ? "" : "s"}
          </p>
        </header>

        {hooks.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {hooks.map((hook) => (
              <HookCard key={hook.id} hook={hook} />
            ))}
          </div>
        ) : (
          <p className="text-zinc-500 dark:text-zinc-500">
            No hooks yet — check back soon.
          </p>
        )}
      </main>
    </div>
  );
}
