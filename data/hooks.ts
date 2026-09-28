import type { Hook } from "@/types/hook";

export const hooks: Hook[] = [
  {
    id: "prompt-injection-defender",
    name: "Prompt Injection Defender",
    category: "Security",
    description:
      "Scans tool outputs for injected malicious instructions and warns Claude about suspicious content.",
    repoUrl: "https://github.com/lasso-security/claude-hooks",
  },
  {
    id: "claude-guardrails-dwarvesf",
    name: "Claude Guardrails",
    category: "Security",
    description:
      "Hardened security config combining deny rules, shell hooks, a secret scanner, and prompt-injection defense.",
    repoUrl: "https://github.com/dwarvesf/claude-guardrails",
  },
  {
    id: "claude-code-guardrails-wangbooth",
    name: "Claude Code Guardrails",
    category: "Safety & Guardrails",
    description:
      "Prevents code loss by blocking writes to protected branches, detecting uncommitted changes, and auto-committing checkpoints.",
    repoUrl: "https://github.com/wangbooth/Claude-Code-Guardrails",
  },
  {
    id: "claude-code-hooks-marketplace",
    name: "Claude Code Hooks Marketplace",
    category: "Safety & Guardrails",
    description:
      "Installable plugin marketplace of ready-to-use hooks for safety, cost control, notifications, and productivity.",
    repoUrl: "https://github.com/karanb192/claude-code-hooks",
  },
  {
    id: "multi-agent-observability",
    name: "Multi-Agent Observability",
    category: "Observability",
    description:
      "Real-time dashboard that tracks hook events across concurrent Claude Code agents and sessions.",
    repoUrl: "https://github.com/disler/claude-code-hooks-multi-agent-observability",
  },
  {
    id: "claude-organizer",
    name: "Claude Organizer",
    category: "Productivity",
    description:
      "Automatically sorts files Claude creates into categorized directories using AI categorization.",
    repoUrl: "https://github.com/ramakay/claude-organizer",
  },
  {
    id: "post-compact-reminder",
    name: "Post-Compact Reminder",
    category: "Context & Memory",
    description:
      "Detects context compaction and reminds Claude to re-read AGENTS.md so project rules aren't lost.",
    repoUrl: "https://github.com/Dicklesworthstone/post_compact_reminder",
  },
  {
    id: "model-router-hook",
    name: "Model Router Hook",
    category: "Cost & Model Routing",
    description:
      "Classifies prompts by complexity and recommends or switches to the right Claude model tier.",
    repoUrl: "https://github.com/tzachbon/claude-model-router-hook",
  },
  {
    id: "claude-code-hooks-mastery",
    name: "Claude Code Hooks Mastery",
    category: "Collections & Learning",
    description:
      "Reference implementation of every hook event with example payloads, validation, and security filtering.",
    repoUrl: "https://github.com/disler/claude-code-hooks-mastery",
  },
];
