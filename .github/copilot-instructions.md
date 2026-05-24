# Copilot / AI Agent Instructions for this Repo

Purpose: quick, actionable guide so an AI coding agent can be productive immediately.

**Big picture**
- **Monorepo**: pnpm + Turborepo workspace (see `pnpm-workspace.yaml`, `turbo.json`).
- **Apps**: `apps/docs` (Next app, port 3000) and `apps/web` (Next app, port 3001).
- **Shared packages**: `packages/ui`, `packages/tailwind-config`, `packages/eslint-config`, `packages/typescript-config`. Apps import them by package name (e.g. `@repo/ui`).

**Key workflows / commands**
- Setup: `pnpm install` from repository root.
- Dev (all apps): `pnpm run dev` (root -> runs `turbo run dev`).
- Dev (single app): `pnpm --filter web dev` or `pnpm --filter docs dev`.
- Build (all): `pnpm run build` (root -> `turbo run build`).
- Lint: `pnpm run lint` (root -> `turbo run lint`).
- Typecheck: `pnpm run check-types` (root -> `turbo run check-types`).
- Format: `pnpm run format` (uses Prettier + tailwind plugin).

**Project-specific conventions and patterns**
- Next.js App Router (app/): code uses server and client components explicitly. Follow existing use of `"use client"` and `"use server"` directives.
  - Example server action signature (see `apps/web/app/register/actions.ts`):
    ```ts
    export async function registerUser(prevState: FormState, formData: FormData): Promise<FormState>
    ```
    Note: when returning validation errors include both `errors` and `values` (the apps rely on returned `values` to re-populate the form).
- UI package: `packages/ui/src` contains reusable components (e.g. `Input`, `SubmitButton`, `Card`, `TurborepoLogo`). Import examples:
  - `import { Input } from "@repo/ui/input"`
  - `import { SubmitButton } from "@repo/ui/button"`
- Styling and Tailwind:
  - Tailwind config lives at `packages/tailwind-config/tailwind.config.ts` and sets `prefix: "ui-"`.
  - Shared tokens live at `packages/tailwind-config/shared-styles.css`.
  - Apps import the UI package stylesheet in `apps/*/app/layout.tsx` (example: `import "@repo/ui/styles.css"`).
  - Observe existing class naming in UI components (e.g. `ui:group`, `ui:rounded-lg`). When editing styles/components, mirror the current usage (do not assume default Tailwind utility names without checking existing classes).

**Integration points & dev notes**
- Package linking: workspace packages use `workspace:*` in package.json; code imports by package name (no path aliases needed).
- Node & package manager: Node >= 18, `pnpm@10.19.0` declared in root `package.json`.
- Turborepo caching: `turbo.json` declares outputs for `build` tasks (`.next/**`, `dist/**`). Be mindful when adding outputs for new packages.
- Lint/format: Prettier + `prettier-plugin-tailwindcss` is configured at repo root; run `pnpm run format` after changing class order or CSS.

**Where to look for examples / reference files**
- App forms + server actions: `apps/web/app/register/*` (server action and form interaction pattern).
- App layout & global styles import: `apps/web/app/layout.tsx`.
- UI components: `packages/ui/src/*` (Input, SubmitButton, Card).
- Tailwind tokens & config: `packages/tailwind-config/*`.
- Top-level scripts and workspace config: `package.json`, `pnpm-workspace.yaml`, `turbo.json`.

**When editing code**
- Prefer minimal, focused changes. Keep public package APIs stable.
- If adding a new workspace package, ensure it's listed in `pnpm-workspace.yaml` and has a package.json `name` that other packages import (e.g. `@repo/<name>`).
- When changing styles, run `pnpm run format` to normalize class ordering.

If any part of this is unclear or you want more examples (e.g. TypeScript path mappings or package exports), tell me which area and I will expand the file.
