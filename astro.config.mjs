// @ts-check
import { defineConfig } from "astro/config";
import icon from "astro-icon";

const LIVE_URL = "https://Craftserve.github.io"

// https://astro.build/config
export default defineConfig({
    site: LIVE_URL,
    output: "static",
    integrations: [
        icon({
            include: {
                uil: ["*"],
                tabler: ["*"],
            },
        }),
    ],
});
