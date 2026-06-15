import type { CollectionConfig } from "payload";
import path from "path";
import { fileURLToPath } from "url";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true,
  },
  upload: {
    // Local disk storage. For production (Vercel/serverless), switch to
    // @payloadcms/storage-vercel-blob or @payloadcms/storage-s3.
    staticDir: path.resolve(dirname, "../../public/media"),
    mimeTypes: ["image/*"],
    imageSizes: [
      { name: "thumbnail", width: 400 },
      { name: "card", width: 768 },
      { name: "feature", width: 1200 },
    ],
  },
  fields: [
    {
      name: "alt",
      type: "text",
      label: "Alt text",
    },
    {
      name: "caption",
      type: "text",
    },
  ],
};
