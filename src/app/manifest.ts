import type { MetadataRoute } from "next";
import { DATA } from "@/data/resume";

// Generates /manifest.webmanifest - makes the portfolio installable (PWA) and
// gives Android/Chrome the correct name, colours and icon. Referenced from the
// root layout's `metadata.manifest`.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${DATA.name} - ${DATA.jobTitle}`,
    short_name: DATA.name,
    description: DATA.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#121212",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
