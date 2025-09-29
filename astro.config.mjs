// @ts-check
import { defineConfig } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
    output: "static",
    site: "https://Craftserve.github.io",
    base: "agency-v2",
    integrations: [
        icon({
            include: {
                uil: ["*"],
                tabler: ["*"],
            },
        }),
    ],
});
