# 🚀 Cursor Engineering Agents
*A collection of specialized Cursor agents for engineering teams building modern digital products.*

This package provides a curated set of AI agents designed to work inside **Cursor**.
Each agent focuses on a specific engineering responsibility — from maintaining JSDoc comments, to enforcing frontend architecture, to validating code quality and consistency.

These agents help teams scale their development workflow while keeping quality high, code consistent, and architecture aligned.

---

## 📦 What's Included

### 📝 Documentation & Code Quality

#### ✅ Comment & JSDoc Maintainer (`commenter.json`)
**Trigger:** `@commenter` | **Auto-run:** Yes

An agent dedicated to adding, updating, and maintaining high‑quality documentation within TypeScript codebases.

**Responsibilities:**
- Generate complete JSDoc for functions, classes, utilities, and modules
- Keep documentation always up‑to‑date with the code
- Add internal comments explaining logic and important decision points
- Add top‑level file summaries
- Never modify the functional behavior of the code

Perfect for teams that want clean, well‑documented code without slowing down development.

---

#### ✅ Code Cleaner (`cleaner.json`)
**Trigger:** `@clean`

Automatically removes unused imports, unused variables, redundant React imports, dead code, and unused exports.

**Responsibilities:**
- Remove unused imports and variables
- Remove unused functions, constants, and exports
- Remove React import when using JSX transform (React 17+)
- Eliminate dead code branches
- Merge duplicate imports

Ensures the codebase remains clean, lean, and compliant with project standards.

---

### 🏗️ Architecture & Patterns

#### ✅ Architecture Reviewer (`architecture-reviewer.json`)
**Trigger:** `@architecture-reviewer`

Validates repository structure and code against Clean Architecture, SOLID principles, and the Container–Presenter pattern.

**Responsibilities:**
- Validate folder structure under `src/`
- Enforce Container/Presenter pattern separation
- Enforce SOLID principles (SRP, OCP, LSP, ISP, DIP)
- Detect DRY/KISS violations
- Validate naming and file conventions
- Detect business logic in presenters
- Identify hardcoded mock data

Produces actionable findings, suggested fixes, and optional patch snippets without changing functionality.

---

#### ✅ State Management Reviewer (`state-management-reviewer.json`)

Validates state management patterns, ensuring alignment with Clean Architecture, SOLID, and Container/Presenter pattern.

**Responsibilities:**
- Enforce presenter state isolation
- Validate Redux Toolkit slice structure
- Check selector memoization
- Validate Zustand store patterns
- Detect unnecessary global state
- Ensure containers handle side effects
- Detect duplicate state sources
- Flag over-rendering issues
- Enforce immutable state

Supports Redux Toolkit, Zustand, and React state usage.

---

#### ✅ Naming Convention Enforcer (`naming-convention-enforcer.json`)

Enforces strict naming conventions aligned with Clean Architecture, SOLID, and Container/Presenter pattern.

**Responsibilities:**
- Enforce Presenter/Container naming (`*Presenter.tsx`, `*Container.tsx`)
- Validate hook naming (`use*.ts`)
- Enforce service suffix (`.service.ts`)
- Validate data-access suffix (`.da.ts`)
- Enforce model suffix (`.model.ts`)
- Validate utils naming (`.utils.ts`)
- Check Redux slice naming (`*Slice.ts`)
- Enforce file name case styles
- Prevent generic file names

---

### ⚡ Performance & Optimization

#### ✅ Performance Reviewer (`performance-reviewer.json`)

Reviews and enforces frontend performance best practices across React, React Native, and Next.js projects.

**Responsibilities:**
- Identify unnecessary re-renders and ensure proper memoization
- Validate component splitting strategies
- Check list virtualization (FlashList, FlatList, react-window)
- Review React Context usage
- Validate lazy loading and code splitting
- Check API caching strategies (SWR, React Query)
- Review image optimization (Next/Image, WebP/AVIF)
- Ensure animations use hardware acceleration
- Review bundle size and tree-shaking
- Validate ISR/SSG/SSR usage in Next.js

Focuses on rendering efficiency, asset optimization, bundle size control, caching strategy, memory use, and runtime performance.

---

#### ✅ Dependency Reviewer (`dependency-reviewer.json`)
**Trigger:** `@dep-review`

Deep dependency auditor for frontend projects (React / Next.js / React Native).

**Responsibilities:**
- Detect heavy or redundant dependencies
- Identify full-package imports preventing tree-shaking
- Detect duplicate packages or versions
- Find unused dependencies
- Flag insecure or outdated versions
- Suggest subpath imports and dynamic imports
- Estimate bundle impact
- Provide migration paths

**Flags:** `--audit`, `--estimate`, `--fix-suggestions`, `--exclude-dev`

---

### ♿ Accessibility & UX

#### ✅ Accessibility Reviewer (`accessibility-reviewer.json`)
**Trigger:** `@a11y`

Deep accessibility auditor for React / Next.js / React Native projects following WCAG fundamentals.

**Responsibilities:**
- Validate semantic HTML and landmarks
- Check accessible names and roles
- Validate keyboard navigation and focus management
- Calculate color contrast ratios (AA & AAA)
- Validate form labeling and validation
- Check images and SVG accessibility
- Validate dynamic content announcements (aria-live)
- Check touch target sizing for mobile
- Validate React Native accessible props

Produces concrete, prioritized findings with remediation snippets, automated-test recipes, and CI integration guidance.

**Flags:** `--analyze`, `--axe`, `--simulate-mobile`, `--ci`

---

#### ✅ Mobile-First Reviewer (`mobile-first-reviewer.json`)

Ensures strict mobile-first architecture in React/Next.js/Tailwind projects.

**Responsibilities:**
- Enforce mobile-first breakpoint order (base → sm → md → lg → xl)
- Detect desktop-first layout violations
- Validate touch target sizes (min 44px)
- Detect horizontal scroll issues
- Validate responsive image usage
- Check fluid typography scaling
- Flag spacing issues on mobile
- Suggest container queries

Enforces responsive best practices, correct breakpoint usage, and mobile-first layout flows.

---

### 🎨 Styling & Design

#### ✅ Styling Architecture Reviewer (`styling-architecture-reviewer.json`)

Analyzes and enforces styling architecture best practices across React, React Native, and Next.js projects.

**Responsibilities:**
- Verify consistent use of design tokens (colors, typography, spacing, radii)
- Ensure no hardcoded values
- Validate styling hierarchy (foundation → components → pages)
- Check utility class consistency (Tailwind, StyleSheet)
- Validate centralized theming (dark/light mode)
- Ensure no business logic in styling layers
- Validate React Native StyleSheet usage
- Check component boundaries (presenter layer)
- Validate global styles and resets

---

#### ✅ Styling Reviewer (`styling-reviewer.json`)

Additional styling validation and best practices enforcement.

---

### 🌍 Internationalization

#### ✅ i18n Reviewer (`i18n-reviewer.json`)
**Trigger:** `@i18n`

Comprehensive i18n consistency and correctness auditor for Next.js / React / React Native projects using next-intl or similar setups.

**Responsibilities:**
- Detect hardcoded strings that should be localized
- Validate translation key existence across locales
- Detect interpolation mismatches
- Validate ICU MessageFormat syntax
- Check pluralization coverage
- Validate namespace and file structure
- Detect fallback behavior issues
- Identify redundant translations
- Flag dynamic key usage
- Suggest TypeScript typing for messages

**Flags:** `--scan`, `--verify-locales`, `--fix-suggest`, `--ci`, `--extract`

---

### 🔒 Security & Type Safety

#### ✅ Security Checker (`security-checker.json`)

Performs deep security analysis on frontend codebases following OWASP Frontend Security best practices.

**Responsibilities:**
- Detect `dangerouslySetInnerHTML` usage
- Validate token storage safety (no localStorage for tokens)
- Detect `eval` or `Function` constructor usage
- Validate input sanitization
- Detect hardcoded secrets
- Check CSRF protection patterns
- Validate third-party script safety
- Detect CORS misuse
- Check secure navigation (rel attributes)
- Validate API error handling

---

#### ✅ TypeScript Strictness Agent (`typescript-strictness-agent.json`)

Evaluates TypeScript code under the strictest rules: `strict: true`, `noImplicitAny`, `strictNullChecks`, etc.

**Responsibilities:**
- Detect implicit `any` types
- Validate null safety and undefined checks
- Flag broad types (`any`, `unknown`, `{}`)
- Detect missing type narrowing
- Validate generics usage
- Check enum misuse (should be union types)
- Validate Promise handling
- Check index signature safety
- Validate function overloads
- Detect readonly violations
- Find unused types

---

### 🎯 Orchestrator

#### ✅ Frontend Engineer Agent (`frontend-engineer.json`)
**Trigger:** `@front-end-engineer`

Orchestrator agent that runs composed mini-agents and returns a consolidated report.

**Responsibilities:**
- Sequentially run configured mini-agents (styling, performance, accessibility, i18n, architecture, TypeScript strictness, cleaner)
- Aggregate results into a single JSON report
- Provide prioritized recommendations
- Generate aggregate severity assessment
- Produce final action plan

Perfect for comprehensive code reviews that need multiple perspectives in one pass.

---

## 📁 Project Structure

```
@galomegg/frontend-agent/
│
├── agents/
│   ├── accessibility-reviewer.json
│   ├── architecture-reviewer.json
│   ├── cleaner.json
│   ├── commenter.json
│   ├── dependency-reviewer.json
│   ├── frontend-engineer.json
│   ├── i18n-reviewer.json
│   ├── mobile-first-reviewer.json
│   ├── naming-convention-enforcer.json
│   ├── performance-reviewer.json
│   ├── security-checker.json
│   ├── state-management-reviewer.json
│   ├── styling-architecture-reviewer.json
│   ├── styling-reviewer.json
│   └── typescript-strictness-agent.json
│
├── scripts/
│   └── sync-agents.js
│
├── package.json
└── README.md
```

- **agents/** → Contains all agent definition files
- **scripts/sync-agents.js** → Automatically copies agents into the consumer repo's `.cursor/agents/`
- `postinstall` ensures agents are always up‑to‑date whenever this package is installed

---

## ⚙️ Installation

Inside any project that uses Cursor:

```bash
npm install @galomegg/frontend-agent
```

The package will automatically sync the agent files into:

```
.cursor/agents/
```

Manual sync:

```bash
npm run sync
```

---

## 🧠 Usage Inside Cursor

1. Open Cursor
2. Press **⌘K** or **Ctrl+K**
3. Trigger an agent by typing one of the following:

### Documentation & Code Quality
- `@commenter` - Add/update JSDoc and comments (auto-runs)
- `@clean` - Remove unused imports and dead code

### Architecture & Patterns
- `@architecture-reviewer` - Review Clean Architecture and SOLID compliance
- `@naming-convention-enforcer` - Enforce naming conventions

### Performance & Optimization
- `@dep-review` - Audit dependencies and bundle size
- `@performance-reviewer` - Review performance best practices

### Accessibility & UX
- `@a11y` - Accessibility audit (WCAG compliance)
- `@mobile-first-reviewer` - Mobile-first responsive design review

### Internationalization
- `@i18n` - i18n consistency and correctness audit

### Orchestrator
- `@front-end-engineer` - Run all reviewers and get consolidated report

### Examples:

```
@commenter
```

```
@architecture-reviewer Analyze src/components/
```

```
@a11y --ci
```

```
@dep-review --audit --estimate
```

```
@i18n --scan --verify-locales
```

---

## 🛠️ Local Development

```bash
npm link
```

Then inside a target project:

```bash
npm link @galomegg/frontend-agent
```

To resync after editing agents:

```bash
npm run sync
```

---

## 🚀 Publishing

### Bump version:
```bash
npm version patch
```

### Publish:
```bash
npm publish --access public
```

Or private:
```bash
npm publish --access restricted
```

---

## 🧩 Adding New Agents

Add new agent definition files under:

```
agents/*.json
```

They sync automatically through the postinstall script.

### Agent Structure

Each agent JSON file should follow this structure:

```json
{
  "name": "agent-name",
  "description": "Brief description of what the agent does",
  "trigger": "@trigger-name",
  "auto_run": false,
  "instructions": ["..."]
}
```

### Suggested Naming Conventions

- Use kebab-case for file names: `my-agent.json`
- Use descriptive names that indicate purpose: `test-coverage-agent.json`, `api-validator.json`
- For reviewers, use `-reviewer` suffix: `security-reviewer.json`
- For enforcers, use `-enforcer` suffix: `linting-enforcer.json`

---

## 📜 License

MIT License — free to use and modify.

---

## 🙌 Contributions

PRs and improvements are welcome.

---

## 💬 Need help?

Simply ask Cursor:

```
@cursor help
```
# front-end-engineer
