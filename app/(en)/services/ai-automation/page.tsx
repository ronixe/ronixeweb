import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { metadataForRoute } from "@/lib/routes";
import { PageShell, DocCta, RelatedLinks } from "@/components/page-shell";
import { Faq, ServiceJsonLd } from "@/components/faq";

const PATH = "/services/ai-automation";

export const metadata: Metadata = metadataForRoute(PATH);

export default function AiAutomationPage() {
  return (
    <PageShell
      path={PATH}
      title="AI Automation"
      lede={`${SITE.name} builds AI agents, workflow automation and AI features into websites, apps and the internal tools a business already runs, so the software handles the repetitive part and your team handles the judgment.`}
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
      ]}
    >
      <ServiceJsonLd
        name="AI Automation"
        description="AI agents, chatbots, workflow automation and AI features built into websites, apps and internal tools for West African businesses."
        path={PATH}
      />

      <section>
        <h2>What we build</h2>
        <ul>
          <li>
            <strong>AI agents and chatbots.</strong> On WhatsApp, a website or
            an internal tool, answering the questions that repeat and handing
            off to a person for the ones that need one.
          </li>
          <li>
            <strong>Workflow automation.</strong> Connecting the systems you
            already use so a task that takes five manual steps takes one, or
            none.
          </li>
          <li>
            <strong>AI features inside your product.</strong> Search that
            understands intent rather than exact keywords, content
            generation, recommendations and similar capabilities built into
            the web or mobile app itself, not bolted on afterwards.
          </li>
          <li>
            <strong>Internal tools.</strong> Dashboards, reporting and small
            utilities that replace the manual, repeated work happening inside
            the business today.
          </li>
        </ul>
      </section>

      <section>
        <h2>Where automation earns its cost, and where it doesn&apos;t</h2>
        <p>
          Not everything should be automated. Some tasks need a human&apos;s
          judgment, and an agent that guesses instead of asking causes more
          damage than the manual process it replaced. We will tell you
          plainly when that is the case, and we usually recommend automating
          one well-defined process properly before touching a second one,
          rather than automating everything at once.
        </p>
        <p>
          Automation is also only as good as the process underneath it. If
          the current process is inconsistent, automating it just makes the
          inconsistency happen faster. Sometimes the real first step is
          fixing the process, not writing the automation.
        </p>
      </section>

      <section>
        <h2>Built to keep working, not just to demo well</h2>
        <p>
          An agent that does not know an answer should say so, and hand off
          to a person, rather than invent one that sounds plausible. We build
          for that failure mode from the start, because it is the normal case
          for anything answering real customer questions, not an edge case.
        </p>
        <p>
          AI usage also has a running cost that can grow unmonitored, and it
          touches customer data that has to be handled properly. We design
          with both in view: usage that is monitored and capped rather than
          open-ended, and customer data kept only where it needs to be.
        </p>
      </section>

      <Faq
        items={[
          {
            question: "How much does AI automation cost?",
            answer:
              "It depends on how many systems the automation has to connect to and how much judgment the task requires. We scope the specific process before quoting a fixed figure, rather than selling a generic package that may not fit what you actually need automated.",
          },
          {
            question: "Do I need my own AI model?",
            answer:
              "No. We build on existing AI providers rather than training models from scratch, which is unnecessary cost for almost every business case we see. The engineering work is in connecting the model correctly to your data and systems, and in handling the cases where it should not answer.",
          },
          {
            question: "Will a chatbot just make things up?",
            answer:
              "Not if it is built correctly. We constrain what the agent can answer from, and it hands off to a person rather than guessing when a question falls outside that. An agent that invents confident, wrong answers is a design failure, and we treat it as one to catch before launch, not after.",
          },
          {
            question: "Can automation be added to a system I already have?",
            answer:
              "Usually yes. If we can reach the system through an API or a database, an automation can be built around it without a rebuild. Closed systems with no way in are the exception, and we will tell you if that is your situation before you spend anything.",
          },
          {
            question: "Is my data safe?",
            answer:
              "We design automations to use only the data a task actually needs, and we tell you plainly where data goes, including to which AI provider. If a use case requires customer data to stay off third-party AI services entirely, we will scope the automation around that constraint rather than around convenience.",
          },
        ]}
      />

      <DocCta
        heading="Start an automation project"
        body="Tell us which task takes the most repeated manual effort. We will tell you honestly whether automating it is worth it, and what it would take."
        email={SITE.email}
        whatsapp={SITE.whatsapp}
      />

      <RelatedLinks
        items={[
          {
            href: "/services/web-development",
            label: "Web development",
            note: "The product an agent or automation usually lives inside.",
          },
          {
            href: "/services/mobile-apps",
            label: "Mobile apps",
            note: "AI features and automation built into an app, not just a site.",
          },
          {
            href: "/services/api-integration",
            label: "API integration",
            note: "The connections an automation depends on to reach your other systems.",
          },
        ]}
      />
    </PageShell>
  );
}
