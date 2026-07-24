import { DATA } from "@/data/resume";

/**
 * Site-wide Schema.org structured data rendered once in the document <head>.
 *
 * It emits a single JSON-LD @graph containing three linked entities:
 *  - Person       → the primary entity (identity, skills, employer, socials)
 *  - WebSite      → enables sitelinks + declares the site's publisher
 *  - ProfilePage  → marks the home document as the canonical profile page
 *
 * Rich, accurate entity data is what lets Google (Knowledge Panel), Bing and AI
 * answer engines (ChatGPT, Perplexity, Claude, Gemini) confidently attribute
 * facts about the person and their expertise.
 */
export function JsonLd() {
  const personId = `${DATA.url}/#person`;
  const websiteId = `${DATA.url}/#website`;

  // Every social profile the person controls — `sameAs` is the strongest signal
  // for entity reconciliation across the web.
  const sameAs = Object.values(DATA.contact.social)
    .map((s) => s.url)
    .filter((url) => url.startsWith("http"));

  // Topics the person is an authority on — drives topical relevance for AI search.
  const knowsAbout = DATA.skills.map((skill) => skill.name);

  // Most recent role, used to populate `worksFor`.
  const currentRole = DATA.work[0];

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: DATA.fullName,
        alternateName: DATA.name,
        url: DATA.url,
        image: new URL(DATA.avatarUrl, DATA.url).toString(),
        jobTitle: DATA.jobTitle,
        description: DATA.description,
        email: `mailto:${DATA.contact.email}`,
        telephone: DATA.contact.tel,
        address: {
          "@type": "PostalAddress",
          addressLocality: DATA.address.locality,
          addressRegion: DATA.address.region,
          addressCountry: DATA.address.country,
        },
        worksFor: currentRole
          ? {
              "@type": "Organization",
              name: currentRole.company,
              url: currentRole.href,
            }
          : undefined,
        alumniOf: DATA.education.map((edu) => ({
          "@type": "CollegeOrUniversity",
          name: edu.school,
          url: edu.href,
        })),
        knowsAbout,
        sameAs,
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: DATA.url,
        name: `${DATA.name} — ${DATA.jobTitle}`,
        description: DATA.description,
        inLanguage: "en",
        publisher: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        url: DATA.url,
        name: `${DATA.name} — ${DATA.jobTitle}`,
        isPartOf: { "@id": websiteId },
        about: { "@id": personId },
        mainEntity: { "@id": personId },
        inLanguage: "en",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // Escaping `<` guards against JSON breaking out of the script context.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(graph).replace(/</g, "\\u003c"),
      }}
    />
  );
}
