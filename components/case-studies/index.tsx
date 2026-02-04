import React from "react";
import poppins from "@/styles";

const CaseStudies = () => {
  return (
    <section
      id="case-studies"
      className={`${poppins.className} mt-20 mx-5 sm:mx-10 md:mx-20 space-y-12`}
      aria-labelledby="case-studies-heading"
    >
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-500">
          Case Studies
        </p>
        <h2
          id="case-studies-heading"
          className="text-2xl sm:text-3xl font-bold text-black dark:text-white"
        >
          Selected product work for trading, AI, and SaaS teams
        </h2>
        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 max-w-2xl">
          A few representative projects that show how I think about frontend architecture,
          design systems, and product quality in real-world environments.
        </p>
      </header>

      {/* Upstox – UI Library & Dark Mode */}
      <article className="space-y-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0b0b0b] p-5 sm:p-6">
        <header>
          <h3 className="text-xl sm:text-2xl font-semibold text-black dark:text-white">
            Upstox – UI Library & Dark Mode
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            React Native · Trading & Investing · Design System · Dark Mode
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          <div className="space-y-3 text-sm sm:text-base text-gray-800 dark:text-gray-200">
            <p className="font-semibold text-gray-900 dark:text-gray-100">
              Problem
            </p>
            <p>
              Upstox is a high-traffic trading and investing platform where users interact with
              dense, stateful UIs for long periods of time. Consistency, readability, and dark
              mode support are not just visual preferences — they directly affect usability in
              low-light environments, reduce cognitive load, and help users trust the interface
              when making financial decisions.
            </p>

            <p className="font-semibold text-gray-900 dark:text-gray-100">
              My role
            </p>
            <p>
              As a frontend engineer on the mobile team, I contributed to the shared UI library
              and core app screens. I focused on component architecture, dark mode support,
              and performance-sensitive UI such as NPS flows, portfolio widgets, and
              reusable primitives like bottom sheets and snackbars.
            </p>

            <p className="font-semibold text-gray-900 dark:text-gray-100">
              Component architecture
            </p>
            <p>
              I treated each component as a small, predictable state machine with a clear contract.
              For example, bottom sheets and portfolio widgets were split into:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <span className="font-semibold">Pure presentational components</span> for layout,
                typography, and variants (e.g. sizes, emphasis, density).
              </li>
              <li>
                <span className="font-semibold">Container components</span> responsible for
                wiring navigation, fetching data, and mapping domain objects into display props.
              </li>
              <li>
                <span className="font-semibold">Utility hooks</span> for shared behavior such as
                animation timing, gesture handling, and error states.
              </li>
            </ul>
            <p>
              This separation made it possible to reuse the same building blocks across NPS,
              portfolio, and other product areas without duplicating logic or styles.
            </p>

            <p className="font-semibold text-gray-900 dark:text-gray-100">
              Dark mode theming strategy
            </p>
            <p>
              Rather than hard-coding colors inside components, I relied on a token-based theme
              layer. Each component mapped its semantic needs (e.g. <code>surface.elevated</code>,
              <code>accent.positive</code>, <code>text.muted</code>) to theme tokens that resolved
              differently in light and dark mode.
            </p>
            <p>
              For React Native, this meant:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Using a central color palette with light/dark variants.</li>
              <li>
                Ensuring contrast ratios stayed readable in dark mode, especially for financial
                data, alerts, and disabled states.
              </li>
              <li>
                Avoiding “inverted” themes that flipped everything — instead, selectively adjusting
                surfaces, borders, and shadows to keep the hierarchy clear.
              </li>
            </ul>

            <p className="font-semibold text-gray-900 dark:text-gray-100">
              Reusability and scalability
            </p>
            <p>
              Any new UI element that might be reused (e.g. status pills, list rows, banners,
              snackbars) was extracted into the design system rather than built inline. I added
              props for common variations (density, icon placement, emphasis, and interaction
              states) while keeping the API deliberately small so other engineers could adopt it
              quickly.
            </p>

            <p className="font-semibold text-gray-900 dark:text-gray-100">
              Challenges and how I solved them
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <span className="font-semibold">Legacy styles and ad-hoc components:</span>{" "}
                Some flows mixed old and new patterns. I incrementally migrated screens to the
                shared library, starting with highly visible components like snackbars and
                bottom sheets, while keeping behavior stable for existing users.
              </li>
              <li>
                <span className="font-semibold">Performance on complex portfolio widgets:</span>{" "}
                I minimized unnecessary re-renders by memoizing expensive subtrees, normalizing
                props, and avoiding inline object/array creation in hot paths.
              </li>
              <li>
                <span className="font-semibold">Dark mode edge cases:</span> I iterated with design
                and QA on states like errors, disabled inputs, and skeleton loaders to ensure they
                stayed legible and consistent across the app.
              </li>
            </ul>

            <p className="font-semibold text-gray-900 dark:text-gray-100">Impact</p>
            <p>
              The shared UI library and dark-mode-ready components made it easier for the team to
              ship new features without reinventing basic building blocks. It also reduced visual
              inconsistency across trading, NPS, and portfolio experiences, and made long trading
              sessions more comfortable for users who prefer dark mode.
            </p>
          </div>

          <aside className="space-y-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            <div className="rounded-lg border border-dashed border-gray-300 dark:border-gray-700 p-3">
              <p className="font-semibold text-gray-900 dark:text-gray-100">
                UI Library Screenshots (placeholder)
              </p>
              <p className="mt-1">
                This area will showcase representative screens from the Upstox UI library:
                bottom sheets, NPS flows, snackbars, and portfolio widgets in light and dark mode.
              </p>
            </div>
            <div className="rounded-lg border border-dashed border-gray-300 dark:border-gray-700 p-3">
              <p className="font-semibold text-gray-900 dark:text-gray-100">
                Notes for reviewers
              </p>
              <p className="mt-1">
                I&apos;m happy to walk through how these components are structured and how we
                integrated them into existing product flows during a technical conversation.
              </p>
            </div>
          </aside>
        </div>
      </article>

      {/* AI Voice Notes App */}
      <article className="space-y-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0b0b0b] p-5 sm:p-6">
        <header>
          <h3 className="text-xl sm:text-2xl font-semibold text-black dark:text-white">
            AI Voice Notes App – OpenAI-powered Mobile App
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            React Native / Swift · OpenAI · Local Storage · Offline-first UX
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          <div className="space-y-3 text-sm sm:text-base text-gray-800 dark:text-gray-200">
            <p className="font-semibold text-gray-900 dark:text-gray-100">
              Problem
            </p>
            <p>
              Raw voice recordings are hard to revisit and even harder to turn into actionable
              notes. The goal was to turn unstructured audio into concise insights, summaries,
              and follow-ups without forcing users to manually tag or organize everything.
            </p>

            <p className="font-semibold text-gray-900 dark:text-gray-100">
              How OpenAI was integrated
            </p>
            <p>
              I integrated OpenAI APIs to transform transcripts into structured outputs such as
              summaries, key points, and suggested tags. The mobile app handled:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Sending trimmed, user-approved transcripts to the API.</li>
              <li>
                Mapping model responses into a normalized internal format (e.g.{" "}
                <code>summary</code>, <code>action_items</code>, <code>topics</code>).
              </li>
              <li>
                Persisting results alongside the original recording so users could always fall
                back to the raw audio.
              </li>
            </ul>

            <p className="font-semibold text-gray-900 dark:text-gray-100">
              Prompt design and response validation
            </p>
            <p>
              I iterated on prompts to keep responses deterministic enough for a production UI.
              Prompts emphasized:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Returning stable JSON structures instead of free-form prose.</li>
              <li>
                Keeping outputs concise so they fit naturally into mobile layouts and cards.
              </li>
              <li>
                Handling incomplete or noisy input (short notes, background noise, partial
                thoughts) without throwing errors.
              </li>
            </ul>
            <p>
              On the client, I validated responses before updating state, with fallbacks for
              malformed or partial data so that the app never left the user in a broken state.
            </p>

            <p className="font-semibold text-gray-900 dark:text-gray-100">
              Mobile UX challenges with AI
            </p>
            <p>
              AI on mobile introduces latency, connectivity issues, and the possibility of errors
              outside the user&apos;s control. I designed around this by:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Showing optimistic UI states with skeletons and clear &quot;processing&quot;
                indicators while waiting for OpenAI.
              </li>
              <li>
                Allowing users to continue browsing older notes while a new transcription/analysis
                was in progress.
              </li>
              <li>
                Surfacing recoverable errors with helpful copy (e.g. network issues, expired keys)
                and retry actions instead of generic alerts.
              </li>
            </ul>

            <p className="font-semibold text-gray-900 dark:text-gray-100">
              State management and local storage
            </p>
            <p>
              I used local storage (SQLite on React Native, persistent storage on iOS) to keep
              recordings and AI outputs available offline. The state layer distinguished between:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <span className="font-semibold">Local-only drafts</span> that had not yet been
                sent to the API.
              </li>
              <li>
                <span className="font-semibold">Synced notes</span> with confirmed AI analysis.
              </li>
              <li>
                <span className="font-semibold">Failed or pending jobs</span> that needed retries.
              </li>
            </ul>
            <p>
              This separation kept the UI responsive even when network conditions were poor and
              made it easy to resume processing later without losing data.
            </p>

            <p className="font-semibold text-gray-900 dark:text-gray-100">
              What I learned
            </p>
            <p>
              Building AI-first mobile experiences reinforced the importance of defensive UI
              design: treating AI as a best-effort enhancement on top of a solid core product,
              not as a single point of failure. It also pushed me to think carefully about
              latency, background work, and how to communicate uncertainty to users without
              overwhelming them.
            </p>
          </div>

          <aside className="space-y-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            <div className="rounded-lg border border-dashed border-gray-300 dark:border-gray-700 p-3">
              <p className="font-semibold text-gray-900 dark:text-gray-100">
                Demo / media placeholder
              </p>
              <p className="mt-1">
                This block is reserved for a short demo video or screen recording of the AI voice
                notes flow: recording, transcription, analysis, and organizing notes.
              </p>
            </div>
            <div className="rounded-lg border border-dashed border-gray-300 dark:border-gray-700 p-3">
              <p className="font-semibold text-gray-900 dark:text-gray-100">
                Implementation notes
              </p>
              <p className="mt-1">
                Happy to dive into the exact state management patterns and retry logic used for
                OpenAI calls in a technical discussion.
              </p>
            </div>
          </aside>
        </div>
      </article>

      {/* Fintech Trading UI */}
      <article className="space-y-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0b0b0b] p-5 sm:p-6">
        <header>
          <h3 className="text-xl sm:text-2xl font-semibold text-black dark:text-white">
            Fintech Trading UI – Modular &amp; Performant Frontend
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            Next.js · TypeScript · shadcn/ui · Tailwind CSS
          </p>
        </header>

        <div className="space-y-3 text-sm sm:text-base text-gray-800 dark:text-gray-200">
          <p className="font-semibold text-gray-900 dark:text-gray-100">
            Problem
          </p>
          <p>
            Trading UIs combine complex data, live-feeling interactions, and strict expectations
            around responsiveness. For a derivatives trading web prototype, we needed a frontend
            that could handle dense tables, filters, and detail views without feeling sluggish or
            fragile as the product evolved.
          </p>

          <p className="font-semibold text-gray-900 dark:text-gray-100">
            Component modularization strategy
          </p>
          <p>
            I split the UI into small, composable pieces instead of monolithic pages. For
            example, &quot;tables&quot; were built from:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              A core table component from <code>shadcn/ui</code> for layout, keyboard focus, and
              accessibility.
            </li>
            <li>
              Row and cell renderers that received normalized data and were responsible only for
              display concerns (color, formatting, alignment).
            </li>
            <li>
              Wrapper components that composed filters, pagination, and empty/loading states
              around the core table.
            </li>
          </ul>
          <p>
            This made it trivial to reuse the same primitives across positions, orders, and
            activity views with different schemas and business rules.
          </p>

          <p className="font-semibold text-gray-900 dark:text-gray-100">
            Tailwind + shadcn usage
          </p>
          <p>
            I leaned on <code>shadcn/ui</code> for accessible, well-structured primitives and
            used Tailwind for layout, spacing, and rapid iteration. Custom variants (e.g. risk
            levels, P&amp;L states) were modeled as className helpers so that domain-specific
            styling never leaked into low-level components.
          </p>

          <p className="font-semibold text-gray-900 dark:text-gray-100">
            Performance considerations
          </p>
          <p>
            To keep the UI responsive as data sets grew, I:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Avoided unnecessary re-renders by memoizing table rows and using stable keys and
              selectors.
            </li>
            <li>
              Deferred non-critical work (like secondary formatting) away from the initial render.
            </li>
            <li>
              Paid attention to Tailwind class composition to avoid overly complex DOM structures
              that could slow layout and paint.
            </li>
          </ul>

          <p className="font-semibold text-gray-900 dark:text-gray-100">
            Trade-offs
          </p>
          <p>
            I deliberately kept the abstraction layer thin. Instead of building a &quot;table
            framework&quot; that tried to solve every future use case, I focused on a handful of
            composable primitives and patterns that solved current needs well and could be
            extended by other engineers without ceremony.
          </p>

          <p className="font-semibold text-gray-900 dark:text-gray-100">
            Why this architecture scales
          </p>
          <p>
            By keeping domain logic out of generic components and relying on a consistent design
            system, new trading screens can be assembled quickly from existing pieces. This
            architecture is easy to evolve as product requirements change and keeps the surface
            area small enough for a small team to maintain confidently.
          </p>
        </div>
      </article>
    </section>
  );
};

export default CaseStudies;

