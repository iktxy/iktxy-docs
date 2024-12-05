import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
    base: "/iktxy-docs/",
    integrations: [
        starlight({
            title: "IKTXY docs",
            customCss: [
                // Relative path to your custom CSS file
                "./src/styles/custom.css",
            ],
            social: {
                github: "https://github.com/iktxy",
            },
            sidebar: [
                {
                    label: "Guides",
                    items: [
                        // Each item here is one entry in the navigation menu.
                        { label: "Example Guide", slug: "guides/example" },
                    ],
                },
                {
                    label: "Reference",
                    autogenerate: { directory: "reference" },
                },
                {
                    label: "Specs",
                    autogenerate: { directory: "specs" },
                },
                {
                    label: "Meeting Notes",
                    autogenerate: { directory: "meeting-notes" },
                },
            ],
        }),
    ],
});
