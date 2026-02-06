import TwitterIcon from "../components/icons/TwitterIcon";
import GithubIcon from "../components/icons/GithubIcon";
import LinkedinIcon from "../components/icons/LinkedinIcon";

export const PORTFOLIO = {
  name: "Saad Siddiqui",
  headline: "Frontend Engineer building AI & Fintech products with React and React Native",
  subheadline:
    "I design and ship performance-focused interfaces with clean architecture, reusable components, and product-first thinking from trading dashboards to AI-powered mobile apps.",
  expertise:
    "Frontend engineer focused on scalable, high-performance web and mobile experiences using React, React Native, and Next.js.",
  company: {
    role: "Software Developer",
    name: "Studio Frontier",
    link: "https://studiofrontier.com",
  },
  links: [
    {
      name: "Case Studies",
      link: "/#case-studies",
    },
    {
      name: "Writing",
      link: "/#writing",
    },
    {
      name: "Work Experience",
      link: "/experience",
    },
    {
      name: "Selected Work",
      link: "/work",
    },
  ],
  socials: [
    {
      name: "Twitter",
      link: "https://twitter.com/saadsiddiquidev",
      icon: TwitterIcon,
    },
    {
      name: "Github",
      link: "https://github.com/saadsiddiqui07",
      icon: GithubIcon,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/saad-siddiqui-0867391a3/",
      icon: LinkedinIcon,
    },
  ],
};

export const CASE_STUDIES = {
  header: {
    label: "Case Studies",
    title: "Selected product work for trading, AI, and SaaS teams",
    description:
      "A few representative projects that show how I think about frontend architecture, design systems, and product quality in real-world environments.",
  },
  studies: [
    {
      id: "upstox",
      title: "Upstox – UI Library & Dark Mode",
      tags: "React Native · Trading & Investing · Design System · Dark Mode",
      appStoreURL: "https://apps.apple.com/vn/app/upstox-demat-stock-mf-ipo/id1584953620",
      sections: [
        {
          heading: "Problem",
          content:
            "Upstox is a high-traffic trading and investing platform where users interact with dense, stateful UIs for long periods of time. Consistency, readability, and dark mode support are not just visual preferences — they directly affect usability in low-light environments, reduce cognitive load, and help users trust the interface when making financial decisions.",
        },
        {
          heading: "My role",
          content:
            "As a frontend engineer on the mobile team, I contributed to the shared UI library and core app screens. I focused on component architecture, dark mode support, and performance-sensitive UI such as NPS flows, portfolio widgets, and reusable primitives like bottom sheets and snackbars.",
        },
        {
          heading: "Component architecture",
          content:
            "I treated each component as a small, predictable state machine with a clear contract. For example, bottom sheets and portfolio widgets were split into:",
          list: [
            {
              label: "Pure presentational components",
              text: "for layout, typography, and variants (e.g. sizes, emphasis, density).",
            },
            {
              label: "Container components",
              text: "responsible for wiring navigation, fetching data, and mapping domain objects into display props.",
            },
            {
              label: "Utility hooks",
              text: "for shared behavior such as animation timing, gesture handling, and error states.",
            },
          ],
          footer:
            "This separation made it possible to reuse the same building blocks across NPS, portfolio, and other product areas without duplicating logic or styles.",
        },
        {
          heading: "Dark mode theming strategy",
          content:
            "Rather than hard-coding colors inside components, I relied on a token-based theme layer. Each component mapped its semantic needs (e.g. surface.elevated, accent.positive, text.muted) to theme tokens that resolved differently in light and dark mode.",
          subContent:
            "For React Native, this meant:",
          list: [
            {
              text: "Using a central color palette with light/dark variants.",
            },
            {
              text: "Ensuring contrast ratios stayed readable in dark mode, especially for financial data, alerts, and disabled states.",
            },
            {
              text: "Avoiding \"inverted\" themes that flipped everything — instead, selectively adjusting surfaces, borders, and shadows to keep the hierarchy clear.",
            },
          ],
        },
        {
          heading: "Reusability and scalability",
          content:
            "Any new UI element that might be reused (e.g. status pills, list rows, banners, snackbars) was extracted into the design system rather than built inline. I added props for common variations (density, icon placement, emphasis, and interaction states) while keeping the API deliberately small so other engineers could adopt it quickly.",
        },
        {
          heading: "Challenges and how I solved them",
          list: [
            {
              label: "Legacy styles and ad-hoc components:",
              text: "Some flows mixed old and new patterns. I incrementally migrated screens to the shared library, starting with highly visible components like snackbars and bottom sheets, while keeping behavior stable for existing users.",
            },
            {
              label: "Performance on complex portfolio widgets:",
              text: "I minimized unnecessary re-renders by memoizing expensive subtrees, normalizing props, and avoiding inline object/array creation in hot paths.",
            },
            {
              label: "Dark mode edge cases:",
              text: "I iterated with design and QA on states like errors, disabled inputs, and skeleton loaders to ensure they stayed legible and consistent across the app.",
            },
          ],
        },
        {
          heading: "Impact",
          content:
            "The shared UI library and dark-mode-ready components made it easier for the team to ship new features without reinventing basic building blocks. It also reduced visual inconsistency across trading, NPS, and portfolio experiences, and made long trading sessions more comfortable for users who prefer dark mode.",
        },
      ],
    },
    {
      id: "dreamlyzer-app",
      title: "Dreamlyzer App – AI-powered Dream Analysis",
      tags: "React Native · OpenAI · In-app Purchases · Offline-first UX",
      appStoreURL: "https://apps.apple.com/in/app/dreamlyzer-dream-analysis/id6474172301",
      sections: [
        {
          heading: "Problem",
          content:
            "Users want to understand their dreams, but dream interpretation is subjective and often requires a guide. The goal was to create a mobile app that uses AI to provide personalized, insightful dream analysis in a private, user-friendly interface.",
        },
        {
          heading: "How OpenAI was integrated",
          content:
            "I integrated the OpenAI API to transform user-written dream descriptions into structured, analytical content. The React Native app managed:",
          list: [
            {
              text: "Sending user-provided dream text to the API for analysis.",
            },
            {
              text: "Parsing the model's response, which included themes, emotional tone, and potential interpretations.",
            },
            {
              text: "Displaying the AI-generated analysis in a clear, readable format within the app.",
            },
            {
              text: "Storing the analysis alongside the original dream entry for future reference.",
            },
          ],
        },
        {
          heading: "Prompt design and response validation",
          content:
            "I designed and refined prompts to ensure the AI's responses were consistent, helpful, and safe for users. The prompts were engineered to:",
          list: [
            {
              text: "Return structured JSON data for easy parsing and display.",
            },
            {
              text: "Maintain a supportive and non-judgmental tone.",
            },
            {
              text: "Handle a wide range of dream content gracefully, avoiding overly speculative or alarming interpretations.",
            },
          ],
          footer:
            "The app included client-side validation to handle any unexpected API responses, ensuring a stable user experience.",
        },
        {
          heading: "Mobile UX challenges with AI",
          content:
            "The app needed to feel responsive and reliable, even with the potential for network latency and API errors. I addressed this by:",
          list: [
            {
              text: "Implementing loading states and skeleton screens to provide immediate feedback while waiting for the AI's response.",
            },
            {
              text: "Allowing users to browse their past dreams while a new analysis was in progress.",
            },
            {
              text: "Providing clear error messages and retry options for issues like network failures or API timeouts.",
            },
          ],
        },
        {
          heading: "State management and local storage",
          content:
            "I used local storage to ensure that users' dream entries and analyses were available offline. The state management system differentiated between:",
          list: [
            {
              label: "Local drafts",
              text: "that had not yet been sent for analysis.",
            },
            {
              label: "Synced dreams",
              text: "with a completed AI analysis.",
            },
            {
              label: "Pending or failed requests",
              text: "that could be retried.",
            },
          ],
          footer:
            "This offline-first approach ensured the app remained functional and responsive, regardless of network connectivity.",
        },
        {
          heading: "In-App Purchases and Monetization",
          content:
            "To support the app, I integrated a monetization model using in-app purchases. This involved:",
          list: [
            {
              text: "Implementing a credit-based system where users could purchase packs of dream analyses.",
            },
            {
              text: "Using RevenueCat to manage in-app purchases and subscriptions, simplifying the process for both iOS and Android.",
            },
            {
              text: "Creating a user-friendly paywall and purchase flow.",
            },
          ],
        },
        {
          heading: "What I learned",
          content:
            "Building an AI-powered mobile app taught me the importance of designing for uncertainty. It's crucial to treat the AI as a powerful but fallible part of the system. This project also deepened my skills in mobile UX, state management, and monetization strategies for consumer-facing apps.",
        },
      ],
    },
    {
      id: "fintech-trading-ui",
      title: "Fintech Trading UI – Modular & Performant Frontend",
      tags: "Next.js · TypeScript · shadcn/ui · Tailwind CSS",
      sections: [
        {
          heading: "Problem",
          content:
            "Trading UIs combine complex data, live-feeling interactions, and strict expectations around responsiveness. For a derivatives trading web prototype, we needed a frontend that could handle dense tables, filters, and detail views without feeling sluggish or fragile as the product evolved.",
        },
        {
          heading: "Component modularization strategy",
          content:
            "I split the UI into small, composable pieces instead of monolithic pages. For example, \"tables\" were built from:",
          list: [
            {
              text: "A core table component from shadcn/ui for layout, keyboard focus, and accessibility.",
            },
            {
              text: "Row and cell renderers that received normalized data and were responsible only for display concerns (color, formatting, alignment).",
            },
            {
              text: "Wrapper components that composed filters, pagination, and empty/loading states around the core table.",
            },
          ],
          footer:
            "This made it trivial to reuse the same primitives across positions, orders, and activity views with different schemas and business rules.",
        },
        {
          heading: "Tailwind + shadcn usage",
          content:
            "I leaned on shadcn/ui for accessible, well-structured primitives and used Tailwind for layout, spacing, and rapid iteration. Custom variants (e.g. risk levels, P&L states) were modeled as className helpers so that domain-specific styling never leaked into low-level components.",
        },
        {
          heading: "Performance considerations",
          content: "To keep the UI responsive as data sets grew, I:",
          list: [
            {
              text: "Avoided unnecessary re-renders by memoizing table rows and using stable keys and selectors.",
            },
            {
              text: "Deferred non-critical work (like secondary formatting) away from the initial render.",
            },
            {
              text: "Paid attention to Tailwind class composition to avoid overly complex DOM structures that could slow layout and paint.",
            },
          ],
        },
        {
          heading: "Trade-offs",
          content:
            "I deliberately kept the abstraction layer thin. Instead of building a \"table framework\" that tried to solve every future use case, I focused on a handful of composable primitives and patterns that solved current needs well and could be extended by other engineers without ceremony.",
        },
        {
          heading: "Why this architecture scales",
          content:
            "By keeping domain logic out of generic components and relying on a consistent design system, new trading screens can be assembled quickly from existing pieces. This architecture is easy to evolve as product requirements change and keeps the surface area small enough for a small team to maintain confidently.",
        },
      ],
    },
  ],
};