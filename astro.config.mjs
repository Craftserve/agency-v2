// @ts-check
import { defineConfig } from "astro/config";
import icon from "astro-icon";

const LIVE_URL = "https://Craftserve.github.io"

// https://astro.build/config
export default defineConfig({
    site: LIVE_URL,
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
