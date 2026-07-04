
# ChurchEden

ChurchEden is a React/Vite church management interface for landing, onboarding, and dashboard workflows.

## Stack

- React 18
- Vite 6
- TypeScript
- Tailwind CSS v4
- React Router v7
- Radix UI / shadcn-style primitives

## Getting Started

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Verification

Run TypeScript checks:

```bash
npm run typecheck
```

Run ESLint:

```bash
npm run lint
```

Note: this project was migrated from a Figma Make export. Some older dashboard files may still contain pre-existing lint warnings/errors unrelated to the landing and onboarding redesign.

## App Routes

- `/` - ChurchEden landing page
- `/onboarding/welcome` - sign-up/sign-in entry
- `/onboarding/church-profile` - church profile setup
- `/onboarding/complete` - setup completion and dashboard redirect
- `/dashboard` - existing dashboard