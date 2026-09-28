export type HookCategory =
  | "Security"
  | "Safety & Guardrails"
  | "Code Quality"
  | "Observability"
  | "Notifications"
  | "Git"
  | "Context & Memory"
  | "Productivity"
  | "Cost & Model Routing"
  | "Collections & Learning";

export interface Hook {
  id: string;
  name: string;
  category: HookCategory;
  description: string;
  repoUrl: string;
}
