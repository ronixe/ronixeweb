import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

/**
 * Crawler policy.
 *
 * AI crawlers split into two jobs, and they are separate user agents:
 *
 *   Retrieval  fetches a page so it can be cited in an answer.
 *              OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User,
 *              PerplexityBot, Perplexity-User.
 *   Training   collects pages that feed model weights.
 *              GPTBot, ClaudeBot, Google-Extended, CCBot, Applebot-Extended,
 *              Meta-ExternalAgent, Bytespider, Amazonbot.
 *
 * Both groups are allowed deliberately. Ronixe is an unknown brand, so being
 * present in training data is an asset: a model may then know who Ronixe is
 * without needing to search at all. Blocking training while allowing retrieval
 * is the publisher's trade-off, not ours.
 *
 * These are listed explicitly rather than relying on the wildcard so the
 * intent is recorded in the codebase and survives future edits.
 */

const RETRIEVAL_AGENTS = [
  "OAI-SearchBot",
  "ChatGPT-User",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
];

const TRAINING_AGENTS = [
  "GPTBot",
  "ClaudeBot",
  "Google-Extended",
  "CCBot",
  "Applebot-Extended",
  "Meta-ExternalAgent",
  "Amazonbot",
  "Bytespider",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: RETRIEVAL_AGENTS, allow: "/" },
      { userAgent: TRAINING_AGENTS, allow: "/" },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
