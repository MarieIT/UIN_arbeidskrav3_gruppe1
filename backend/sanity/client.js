import { createClient } from "@sanity/client";

export const client = createClient({
    projectId: "g0rwuph6",
    dataset: "production",
    apiVersion: "v2025-03-24",
    useCdn: true,
});