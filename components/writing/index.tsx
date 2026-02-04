import React from "react";
import poppins from "@/styles";

const WritingSection = () => {
  return (
    <section
      id="writing"
      className={`${poppins.className} mt-20 mx-5 sm:mx-10 md:mx-20 space-y-10`}
      aria-labelledby="writing-heading"
    >
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-500">
          Writing
        </p>
        <h2
          id="writing-heading"
          className="text-2xl sm:text-3xl font-bold text-black dark:text-white"
        >
          Technical writing and thinking
        </h2>
        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 max-w-2xl">
          Drafts of longer-form posts that capture how I think about AI features, mobile UX,
          and reusable UI systems for fintech products.
        </p>
      </header>

      {/* Blog draft 1 */}
      <article className="space-y-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0b0b0b] p-5 sm:p-6">
        <header>
          <h3 className="text-xl sm:text-2xl font-semibold text-black dark:text-white">
            What I Learned Building AI Features in Mobile Apps
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            Draft · React Native · OpenAI · Offline-first UX
          </p>
        </header>

        <div className="space-y-3 text-sm sm:text-base text-gray-800 dark:text-gray-200">
          <p>
            Building AI-powered mobile features looks simple in demos: send a prompt, get a
            response, show it in the UI. In practice, especially on real devices with flaky
            networks and tight performance budgets, you quickly learn that AI is just one small
            piece of the product. The hard part is everything around it: latency, failure modes,
            expectations, and how you shape the experience so users actually trust the output.
          </p>

          <p className="font-semibold text-gray-900 dark:text-gray-100">
            1. Treat AI as an enhancement, not a requirement
          </p>
          <p>
            In my AI voice-notes work, the core value was &quot;capture an idea quickly and find
            it later&quot;. AI summaries and insights made that much better, but the app still had
            to be useful if the model call failed. That influenced the architecture:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Always store the original recording and transcript locally before calling OpenAI.
            </li>
            <li>
              Model outputs as optional enhancements on top of that core data, not the only
              source of truth.
            </li>
            <li>
              Design screens so they degrade gracefully when AI is unavailable (for example,
              showing the transcript with a clear &quot;analysis not available&quot; state).
            </li>
          </ul>

          <p className="font-semibold text-gray-900 dark:text-gray-100">
            2. Latency shapes the user experience
          </p>
          <p>
            On mobile, a few extra seconds feels much worse than on desktop. Instead of blocking
            the user behind a spinner, I learned to:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Use optimistic UI and skeleton states so the user sees immediate feedback for their
              action.
            </li>
            <li>
              Let users continue interacting with older notes while new analyses are running in
              the background.
            </li>
            <li>
              Communicate progress with simple, honest copy (&quot;Analyzing your note…&quot;
              with a clear option to navigate away) instead of trying to hide delays.
            </li>
          </ul>

          <p className="font-semibold text-gray-900 dark:text-gray-100">
            3. Stable data contracts matter more than clever prompts
          </p>
          <p>
            Prompt engineering gets a lot of attention, but for shipping apps, the critical part
            is the data contract between your client and the model. I started with free-form
            responses and quickly moved to &quot;return JSON with these keys&quot; patterns so the
            UI could rely on a predictable shape.
          </p>
          <p>
            Once that contract was in place, prompts could evolve without rewriting the
            front-end. I also built simple validation on the client side so that if the response
            was malformed, the app fell back to safe defaults instead of crashing.
          </p>

          <p className="font-semibold text-gray-900 dark:text-gray-100">
            4. Handle failure as a first-class state
          </p>
          <p>
            AI APIs can fail for many reasons: rate limits, network issues, or input that the
            model struggles with. Instead of hiding this behind generic &quot;Something went
            wrong&quot; messages, I implemented:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Specific error messages for network vs. API vs. validation issues.</li>
            <li>Retry buttons that preserved the user&apos;s context.</li>
            <li>
              Lightweight logging hooks so we could understand how often errors happened and in
              which flows.
            </li>
          </ul>

          <p className="font-semibold text-gray-900 dark:text-gray-100">
            5. Design for privacy and user control
          </p>
          <p>
            With voice and personal content, users are sharing sensitive information. Even when
            using managed APIs, I made sure users knew what was stored locally vs. sent to
            external services, and gave them clear ways to delete data. That trust is essential
            if you want people to use AI features regularly, not just once as a novelty.
          </p>

          <p>
            Overall, building AI features in mobile apps taught me to be realistic about what the
            model can and cannot guarantee, and to design the product so that AI makes the
            experience meaningfully better without becoming a single point of failure.
          </p>
        </div>
      </article>

      {/* Blog draft 2 */}
      <article className="space-y-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0b0b0b] p-5 sm:p-6">
        <header>
          <h3 className="text-xl sm:text-2xl font-semibold text-black dark:text-white">
            Designing Reusable UI Systems for Fintech Applications
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            Draft · Design Systems · Trading UIs · React / React Native
          </p>
        </header>

        <div className="space-y-3 text-sm sm:text-base text-gray-800 dark:text-gray-200">
          <p>
            Fintech products sit at an intersection of complexity and trust. Users expect clear,
            legible information density, fast interactions, and predictable behavior — especially
            when money is involved. In my work on trading UIs and investment products, the most
            durable wins came from treating UI as a reusable system rather than a collection of
            one-off screens.
          </p>

          <p className="font-semibold text-gray-900 dark:text-gray-100">
            1. Start from domain concepts, not from pixels
          </p>
          <p>
            Before naming components, I map out the domain language with product and design:
            orders, positions, instruments, risk levels, notifications, and so on. These concepts
            inform the primitives we actually need:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Rows that represent a single financial entity.</li>
            <li>Badges and pills for status and risk.</li>
            <li>Layouts for detail views, drill-downs, and side panels.</li>
          </ul>
          <p>
            This domain-first approach keeps the design system grounded in real product needs and
            avoids a library full of components that look nice but don&apos;t map to actual
            workflows.
          </p>

          <p className="font-semibold text-gray-900 dark:text-gray-100">
            2. Prefer composition over configuration
          </p>
          <p>
            It&apos;s tempting to create a single &quot;super component&quot; with dozens of
            props. In practice, that becomes hard to reason about and even harder for new
            engineers to adopt. I try to keep components small and composable:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Use base primitives from systems like shadcn/ui.</li>
            <li>Compose them into opinionated fintech-specific patterns (e.g. position rows).</li>
            <li>
              Extract shared behaviors (like loading, empty, and error states) into wrappers that
              can be reused across pages.
            </li>
          </ul>

          <p className="font-semibold text-gray-900 dark:text-gray-100">
            3. Model visual semantics as tokens
          </p>
          <p>
            Fintech UIs rely heavily on color and typography to communicate meaning: gains vs.
            losses, risk, priorities, and more. Instead of scattering color choices across the
            codebase, I prefer a token-based approach:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Define tokens like <code>semantic.profit</code> or <code>semantic.loss</code>.</li>
            <li>
              Map those tokens to Tailwind classes or theme values for light/dark mode.
            </li>
            <li>
              Use these tokens consistently in both web (Next.js) and mobile (React Native)
              implementations.
            </li>
          </ul>
          <p>
            This makes it much easier to evolve branding or improve accessibility without hunting
            through JSX files for specific hex codes.
          </p>

          <p className="font-semibold text-gray-900 dark:text-gray-100">
            4. Don&apos;t ignore performance at the component level
          </p>
          <p>
            When you have tables with many rows and frequent updates, small mistakes add up.
            I pay attention to:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Memoizing expensive subtrees and cell renderers.</li>
            <li>
              Avoiding anonymous functions and object literals in hot paths where they cause
              unnecessary re-renders.
            </li>
            <li>
              Being deliberate about what goes into global state vs. local component state.
            </li>
          </ul>

          <p className="font-semibold text-gray-900 dark:text-gray-100">
            5. Make the system easy to adopt
          </p>
          <p>
            A design system is only successful if other engineers actually use it. I try to make
            components discoverable (clear names, simple props) and provide example usage for key
            patterns: tables, detail views, filters, and forms. When reviewing PRs, I actively
            suggest where existing primitives can replace one-off implementations.
          </p>

          <p>
            Over time, this approach leads to trading and fintech UIs that feel cohesive, are
            easier to maintain, and can support new products or regions without constant rewrites.
          </p>
        </div>
      </article>
    </section>
  );
};

export default WritingSection;

